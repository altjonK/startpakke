<!doctype html> 
<html class="no-js" <?php language_attributes(); ?>> 
    <head> 
        <meta charset="<?php bloginfo( 'charset' ); ?>" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />                            
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <?php wp_head(); ?>
    </head>     
    <body class="<?php echo implode(' ', get_body_class()); ?>"> 
        <div class="off-canvas-wrap" data-offcanvas> 
            <div class="inner-wrap"> 
                <div id="container"> 
                    <header class="header" role="banner"> 
                        <div class="sticky show-for-medium-up contain-to-grid" id="desktopmenu"> 
                            <!-- If you want to use the more traditional "fixed" navigation.
	 simply replace "sticky" with "fixed" -->                             
                            <nav class="top-bar" data-topbar> 
                                <ul class="title-area"> 
                                    <!-- Title Area -->                                     
                                    <li class="name"> 
                                        <h1> <a href="<?php echo esc_url( home_url() ); ?>" rel="nofollow"> 
                                                <?php echo wp_get_attachment_image( get_theme_mod( 'logobilde' ), 'medium', null, array(
                                                        'class' => 'logo'
                                                    ) ) ?>                                                 
                                            </a></h1> 
                                    </li>                                     
                                    <li class="toggle-topbar menu-icon"> 
                                        <a href="#"><span><?php _e( 'Menu', 'pgf' ); ?></span></a> 
                                    </li>                                     
                                </ul>                                 
                                <section class="top-bar-section">
                                    <?php pgf_top_nav(); ?>
                                </section>                                 
                            </nav>                             
                        </div>                         
                        <div class="show-for-small-only" id="mobilemenu"> 
                            <nav class="tab-bar"> 
                                <section class="middle tab-bar-section"> 
                                    <h1> <a href="<?php echo esc_url( home_url() ); ?>" rel="nofollow"> 
                                            <?php echo wp_get_attachment_image( get_theme_mod( 'logobilde' ), 'medium', null, array(
                                                    'class' => 'logo'
                                                ) ) ?>                                             
                                        </a></h1> 
                                </section>                                 
                                <section class="left-small"> 
                                    <a href="#" class="left-off-canvas-toggle menu-icon"><span></span></a> 
                                </section>                                 
                                <section class="right-small">
                                    <a href="#" class="right-off-canvas-toggle menu-icon"><span></span></a> 
                                </section>                                 
                            </nav>                             
                        </div>                         
                        <aside class="left-off-canvas-menu show-for-small-only" id="offcanvasleft"> 
                            <ul class="off-canvas-list"> 
                                <li> 
                                    <label>
                                        <?php _e( 'Meny', 'pgf' ); ?>
                                    </label>                                     
                                </li>                                 
                                <?php pgf_off_canvas(); ?>                                 
                            </ul>                             
                        </aside>                         
                        <aside class="right-off-canvas-menu show-for-small-only" id="offcanvasright"> 
                            <ul class="off-canvas-list"> 
                                <li> 
                                    <label>
                                        <?php _e( 'Ekstra info', 'pgf' ); ?>
                                    </label>                                     
                                </li>                                 
                                <?php if ( is_active_sidebar( 'offcanvas' ) ) : ?>
                                    <div class="">
                                        <?php dynamic_sidebar( 'offcanvas' ); ?>
                                    </div>
                                <?php endif; ?>                                 
                            </ul>                             
                        </aside>                         
                        <a class="exit-off-canvas" id="closeleft"></a> 
                        <a class="exit-off-canvas" id="closeright"></a>
                        <div class="sticky contain-to-grid" id="menudropdown"> 
                            <nav class="top-bar" data-topbar> 
                                <ul class="title-area"> 
                                    <!-- Title Area -->                                     
                                    <li class="name"> 
                                        <h1> <a href="<?php echo esc_url( home_url() ); ?>" rel="nofollow"> 
                                                <?php echo wp_get_attachment_image( get_theme_mod( 'logobilde' ), 'medium', null, array(
                                                        'class' => 'logo'
                                                    ) ) ?>                                                 
                                            </a></h1> 
                                    </li>                                     
                                    <li class="toggle-topbar menu-icon"> 
                                        <a href="#"><span><?php _e( 'Meny', 'pgf' ); ?></span></a> 
                                    </li>                                     
                                </ul>
                                <section class="top-bar-section">
                                    <?php pgf_top_nav(); ?>
                                </section>                                                                  
                            </nav>
                        </div>                         
                    </header>
                    <div id="hero" tyle="background-image:url('http://localhost/nordic/wp-content/uploads/2015/09/s01.jpg')" class="heroholder"> 
</div>
                    <div id="content" class="contentbox">