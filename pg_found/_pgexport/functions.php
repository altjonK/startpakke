<?php
if ( ! function_exists( 'pgf_setup' ) ) :

function pgf_setup() {

    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    load_theme_textdomain( 'pgf', get_template_directory() . '/languages' );

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     */
    add_theme_support( 'title-tag' );
    
    /*
     * Enable support for Post Thumbnails on posts and pages.
     */
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 825, 510, true );

    // Add menus.
    register_nav_menus( array(
        'primary' => __( 'Primary Menu',      'pgf' ),
        'social'  => __( 'Social Links Menu', 'pgf' ),
    ) );

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ) );

    /*
     * Enable support for Post Formats.
     */
    add_theme_support( 'post-formats', array(
        'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
    ) );
}
endif; // pgf_setup

add_action( 'after_setup_theme', 'pgf_setup' );


if ( ! function_exists( 'pgf_init' ) ) :

function pgf_init() {

    
    // Use categories and tags with attachments
    register_taxonomy_for_object_type( 'category', 'attachment' );
    register_taxonomy_for_object_type( 'post_tag', 'attachment' );

    /*
     * Register custom post types. You can also move this code to a plugin.
     */
    /* Pinegrow generated Custom Post Types Begin*/
    /* This code will be replaced by register_post_type calls. */
    /* Pinegrow generated Custom Post Types End */
    
    /*
     * Register custom taxonomies. You can also move this code to a plugin.
     */
    /* Pinegrow generated Taxonomies Begin*/
    /* This code will be replaced by register_taxonomy calls. */
    /* Pinegrow generated Taxonomies End */

}
endif; // pgf_setup

add_action( 'init', 'pgf_init' );


if ( ! function_exists( 'pgf_widgets_init' ) ) :

function pgf_widgets_init() {

    /*
     * Register widget areas.
     */
    /* Pinegrow generated Register Sidebars Begin*/
    /* This code will be replaced by register_sidebar calls. */
    /* Pinegrow generated Register Sidebars End */
}
add_action( 'widgets_init', 'pgf_widgets_init' );
endif;// pgf_widgets_init



if ( ! function_exists( 'pgf_customize_register' ) ) :

function pgf_customize_register( $wp_customize ) {
    // Do stuff with $wp_customize, the WP_Customize_Manager object.

    /* Pinegrow generated Customizer Controls Begin */
    /* Pinegrow generated Customizer Controls End */

}
add_action( 'customize_register', 'pgf_customize_register' );
endif;// pgf_customize_register


if ( ! function_exists( 'pgf_enqueue_scripts' ) ) :
    function pgf_enqueue_scripts() {

        /* Pinegrow generated Enqueue Scripts Begin */
        /* Pinegrow generated Enqueue Scripts End */

        /* Pinegrow generated Enqueue Styles Begin */
        /* Pinegrow generated Enqueue Styles End */

    }
    add_action( 'wp_enqueue_scripts', 'pgf_enqueue_scripts' );
endif;

/*
 * Resource files included by Pinegrow.
 */
/* Pinegrow generated Include Resources Begin*/
/* Pinegrow generated Include Resources End */
?>