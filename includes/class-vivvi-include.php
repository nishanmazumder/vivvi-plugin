<?php

/**
 * Both admin and public-facing functionality of the plugin.
 *
 * @link       https://www.bdsoftcr.com/
 * @since      1.0.0
 *
 * @package    ViVVi
 * @subpackage ViVVi/include
 */

/**
 * Both admin and public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and hooks for both admin and public-facing
 *
 * @package    ViVVi
 * @subpackage ViVVi/include
 * @author     nishanmazumder<arosh019@gmail.com>
 */
class ViVVi_Include {

	/**
	 * The ID of this plugin.
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
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of the plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

	}

    /**
     * Init something related to both admin and public-facing areas functionality.
     * Callback function of init
     * Example remove it if not needed
     *
     * @since    1.0.0
     */
    public function init_something() {


    }
}
