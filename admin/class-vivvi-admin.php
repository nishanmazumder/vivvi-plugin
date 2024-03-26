<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://www.bdsoftcr.com/
 * @since      1.0.0
 *
 * @package    ViVVi
 * @subpackage ViVVi/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    ViVVi
 * @subpackage ViVVi/admin
 * @author     nishanmazumder<arosh019@gmail.com>
 */
class ViVVi_Admin {

	/**
	 * The ID of this plugin.
	 * Used on slug of plugin menu.
	 * Used on Root Div ID for React too.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * @var array
	 */
	public $response = array(
		'success' => true,
		'message' => '',
	);

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of this plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	/**
	 * Add Admin Page Menu page.
	 *
	 * @since    1.0.0
	 */
	public function add_admin_menu() {

		add_menu_page(
			esc_html__( 'ViVVi', 'vivvi_text_domain' ),
			esc_html__( 'ViVVi', 'vivvi_text_domain' ),
			'manage_options',
			$this->plugin_name,
			array( $this, 'add_setting_root_div' )
		);
	}

	/**
	 * Add Root Div For React.
	 *
	 * @since    1.0.0
	 */
	public function add_setting_root_div() {
		echo '<div id="' . esc_html( $this->plugin_name ) . '"></div>';
	}

	/**
	 * Register the CSS/JavaScript Resources for the admin area.
	 *
	 * Use Condition to Load it Only When it is Necessary
	 *
	 * @since    1.0.0
	 */
	public function enqueue_resources() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in ViVVi_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The ViVVi_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		$screen              = get_current_screen();
		$admin_scripts_bases = array( 'toplevel_page_' . $this->plugin_name );
		if ( ! ( isset( $screen->base ) && in_array( $screen->base, $admin_scripts_bases ) ) ) {
			return;
		}

		/*Scripts dependency files*/
		$deps_file = ViVVi_PATH . 'build/admin/settings.asset.php';

		/*Fallback dependency array*/
		$dependency = array();
		$version    = $this->version;

		/*Set dependency and version*/
		if ( file_exists( $deps_file ) ) {
			$deps_file  = require $deps_file;
			$dependency = $deps_file['dependencies'];
			$version    = $deps_file['version'];
		}

		wp_enqueue_script( $this->plugin_name, ViVVi_URL . 'build/admin/settings.js', $dependency, $version, true );

		wp_enqueue_style( $this->plugin_name, ViVVi_URL . 'build/admin/style-settings.css', array( 'wp-components' ), $version );
		
		// tailwind // npx tailwindcss build src/index.css -o admin-style.css --watch
		wp_enqueue_style( $this->plugin_name . '_tailwind', ViVVi_URL . 'build/admin-style.css', array( 'wp-components' ), $version );

		$localize = array(
			'version' => $this->version,
			'root_id' => $this->plugin_name,
		);
		wp_set_script_translations( $this->plugin_name, $this->plugin_name );
		wp_localize_script( $this->plugin_name, 'vivviBuild', $localize );

		wp_localize_script( $this->plugin_name, 'vivviSettings', $this->get_localize_vars( true ) );
	}

	public function get_localize_vars( $is_array = '' ) {

		$vars = apply_filters(
			'vivvi_local_vars',
			array(
				'ajaxUrl'  => esc_url_raw( admin_url( 'admin-ajax.php' ) ),
				'nonce'    => wp_create_nonce( 'vivviSettings' ),
				'actions'  => array(
					'settings' => 'vivvi_settings_update',
				),
				'settings' => self::get_settings(),
				'version'  => $this->version,
			)
		);

		if ( $is_array ) {
			return $vars;
		}

		wp_send_json( $vars );
	}

	public static function get_setting_keys() {
		return apply_filters(
			'vivvi_setting_keys',
			array(
				'vivvi_brand_data',
			)
		);
	}

	protected static function get_settings() {
		$settings = array();
		foreach ( self::get_setting_keys() as $setting_key ) {
			$settings[ $setting_key ] = get_option( $setting_key );
		}

		return $settings;
	}

	public function send_ajax_response() {
		if ( $this->response['success'] ) {
			wp_send_json_success( $this->response );
		}
		wp_send_json_error( $this->response );
	}

	public function handle_settings_update() {
		$keys      = self::get_setting_keys();
		$post_data = self::get_paylod_data( 'settings' );

		foreach ( $post_data as $data ) {
			if ( ! in_array( $data->id, $keys ) ) {
				continue;
			}
			update_option( $data->id, $data->value );
		}

		$this->response['message'] = __( 'Settings value updated', 'vivvi_text_domain' );
		
		// update_option( $keys[0], $post_data );
		// $this->response['message'] = json_encode($keys);
		// $this->response['message'] = $post_data;


		$this->send_ajax_response();
	}

	public static function get_paylod_data( $decode_key = '' ) {
		if ( ! check_ajax_referer( 'vivviSettings' ) ) {
			return false;
		}
		$post_data = array_map( 'wp_unslash', $_POST );

		if ( empty( $decode_key ) ) {
			return $post_data;
		}

		return json_decode( $post_data[ $decode_key ] );
	}


	// REMOVE

	/**
	 * Register settings.
	 * Common callback function of rest_api_init and admin_init
	 * Schema: http://json-schema.org/draft-04/schema#
	 *
	 * Add your own settings fields here
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function register_settings() {

		$defaults = vivvi_default_options();
		register_setting(
			'vivvi_settings_group',
			'vivvi_options',
			array(
				'type'         => 'object',
				'default'      => $defaults,
				'show_in_rest' => array(
					'schema' => array(
						'type'       => 'object',
						'properties' => array(
							/*Settings -> General*/
							'setting_1' => array(
								'type'    => 'string',
								'default' => $defaults['setting_1'],
							),
							'setting_2' => array(
								'type'    => 'string',
								'default' => $defaults['setting_2'],
							),
							/*Settings -> Advanced*/
							'setting_3' => array(
								'type'    => 'boolean',
								'default' => $defaults['setting_3'],
							),
							'setting_4' => array(
								'type'    => 'boolean',
								'default' => $defaults['setting_4'],
							),
							'setting_5' => array(
								'type'              => 'string',
								'default'           => $defaults['setting_5'],
								'sanitize_callback' => 'sanitize_key',
							),
						),
					),
				),
			)
		);
	}
}
