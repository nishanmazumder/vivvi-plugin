<?php

/**
 * The ViVVi plugin init
 *
 *
 * @link              https://www.bdsoftcr.com/
 * @since             1.0.0
 * @package           ViVVi
 *
 * @wordpress-plugin
 * Plugin Name:       ViVVi
 * Plugin URI:        https://www.bdsoftcr.com/
 * Description:       ViVVi Management.
 * Version:           1.0.0
 * Author:            nishanmazumder
 * Author URI:         https://www.bdsoftcr.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       vivvi_text_domain
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

define( 'ViVVi_PATH', plugin_dir_path( __FILE__ ) );
define( 'ViVVi_URL', plugin_dir_url( __FILE__ ) );
define( 'ViVVI_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp-react-plugin-boilerplate-activator.php
 */
function activate_vivvi_plugin() {
	require_once ViVVi_PATH . 'includes/class-vivvi-plugin-activator.php';
	ViVVi_Plugin_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp-react-plugin-boilerplate-deactivator.php
 */
function deactivate_vivvi_plugin() {
	require_once ViVVi_PATH . 'includes/class-vivvi-plugin-deactivator.php';
	ViVVi_Plugin_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_vivvi_plugin');
register_deactivation_hook( __FILE__, 'deactivate_vivvi_plugin' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require ViVVi_PATH . 'includes/class-vivvi-plugin.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_vivvi_plugin() {

	$plugin = new ViVVi_Plugin();
	$plugin->run();

}
run_vivvi_plugin();
