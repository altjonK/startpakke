<?php
// The Top Menu
function pgf_top_nav() {
	 wp_nav_menu(array(
        'container' => false,                           // Remove nav container
        'container_class' => '',                        // Class of container
        'menu' => 'Primary Menu', 'pgf',                // Menu name
        'menu_class' => 'top-bar-menu right',            // Adding custom nav class
        'theme_location' => 'primary',                // Where it's located in the theme
        'before' => '',                                 // Before each link <a>
        'after' => '',                                  // After each link </a>
        'link_before' => '',                            // Before each link text
        'link_after' => '',                             // After each link text
        'depth' => 5,                                   // Limit the depth of the nav
        'fallback_cb' => false,                         // Fallback function (see below)
        'walker' => new Top_Bar_Walker(),
    ));
} /* End Top Menu */

function pgf_off_canvas() {
	    wp_nav_menu(array(
	        'container' => false,                           // Remove nav container
	        'container_class' => '',                        // Class of container
	        'menu' => '',                                   // Menu name
	        'menu_class' => 'off-canvas-list',              // Adding custom nav class
	        'theme_location' => 'primary',        // Where it's located in the theme
	        'before' => '',                                 // Before each link <a>
	        'after' => '',                                  // After each link </a>
	        'link_before' => '',                            // Before each link text
	        'link_after' => '',                             // After each link text
	        'depth' => 5,                                   // Limit the depth of the nav
	        'fallback_cb' => false,                         // Fallback function (see below)
	        'walker' => new Offcanvas_Walker(),
	    ));
	}


// Header Fallback Menu
function pgf_main_nav_fallback() {
	wp_page_menu( array(
		'show_home' => true,
    	'menu_class' => '',      // Adding custom nav class
		'include'     => '',
		'exclude'     => '',
		'echo'        => true,
        'link_before' => '',                            // Before each link
        'link_after' => ''                             // After each link
	) );
}
?>
