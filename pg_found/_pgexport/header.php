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
                    </header>                     
                    <section class="hero animated fadeIn" id="hero"> 
                        <div class="row intro"> 
                            <div class="small-centered medium-uncentered columns medium-7 large-6 small-12"> 
                                <div class="row"> 
                                    <div class="columns small-12"> 
                                        <div class="animated fadeInLeft"> 
                                            <h1><?php _e( 'Truth? What truth?', 'pgf' ); ?></h1> 
                                            <p><?php _e( 'Don\'t you want to take a leap of faith? Or become an old man, filled with regret, waiting to die alone!', 'pgf' ); ?></p> 
                                        </div>                                         
                                    </div>                                     
                                </div>                                 
                                <div class="row"> 
                                    <div class="columns small-6 medium-6 button1 animated fadeInUp large-8"> 
                                        <a href="#" class="button secondary large">
                                            <?php _e( 'Button', 'pgf' ); ?>
                                        </a>                                         
                                    </div>                                     
                                    <div class="columns small-6 medium-6 animated fadeInUp button2 large-4"> 
                                        <a href="#" class="button warning large">
                                            <?php _e( 'Button', 'pgf' ); ?>
                                        </a>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                            <div class="small-centered medium-uncentered columns  medium-5 large-5 small-12"> 
                                <div class="tech-img animated slideInRight"></div>                                 
                            </div>                             
                        </div>                         
                    </section>                     
                    <div id="content" class="contentbox">