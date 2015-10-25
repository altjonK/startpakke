
                    </div>
                    <section class="prosjekter" id="prosjekter" p-post-type-has-archive="true"> 
                        <?php
                            $prosjekter_args = array(
                                'post_type' => 'prosjekter',
                                'nopaging' => true,
                                'posts_per_page' => '8',
                                'order' => 'DESC',
                                'orderby' => 'date'
                            )
                            ?>
                        <?php $prosjekter = new WP_Query( $prosjekter_args ); ?>
                        <?php if ( $prosjekter->have_posts() ) : ?>
                            <div class="row"> 
                                <h2 class="page-title"><?php _e( 'Prosjekter', 'pgf' ); ?></h2> 
                                <?php while ( $prosjekter->have_posts() ) : $prosjekter->the_post(); ?>
                                    <div class="columns medium-3"> 
                                        <a href="#" data-reveal-id="<?php echo 'prosjekt-'.get_the_ID() ?>"> 
                                            <?php 
                                                if ( has_post_thumbnail() ) {
                                                    the_post_thumbnail( 'medium', array(
                                                    'class' => 'th'
                                                ) );
                                                }
                                                 ?>                                             
                                            <h6 class="prosjekt-tittel"><?php the_title(); ?></h6> 
                                        </a>                                         
                                        <p class="prosjekt-kategori"><?php foreach((get_the_category()) as $category) {     echo $category->cat_name . ' '; } ?></p> 
                                        <div class="reveal-modal" data-reveal="" aria-labelledby="modalTitle" aria-hidden="true" role="dialog" id="prosjekt-<?php the_ID(); ?>"> 
                                            <h2 id="modalTitle" class="modalTitle"><?php the_title(); ?></h2> 
                                            <?php the_content(); ?>                                             
                                            <a class="close-reveal-modal" aria-label="Close">
                                                <?php _e( '×', 'pgf' ); ?>
                                            </a>                                             
                                        </div>                                         
                                    </div>
                                <?php endwhile; ?>
                                <?php wp_reset_postdata(); ?>                                 
                            </div>
                        <?php else : ?>
                            <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
                        <?php endif; ?>                         
                        <!-- .large-12 -->
                    </section>                     
                    <section class="spotlight1" id="spotlight"> 
                        <?php
                            $spotlight_args = array(
                                'cat' => get_theme_mod('kategori'),
                                'post_status' => 'publish',
                                'nopaging' => true,
                                'order' => 'ASC',
                                'orderby' => 'date'
                            )
                            ?>
                        <?php $spotlight = new WP_Query( $spotlight_args ); ?>
                        <?php if ( $spotlight->have_posts() ) : ?>
                            <div class="row"> 
                                <?php $spotlight_item_number = 0; ?>
                                <?php while ( $spotlight->have_posts() && $spotlight_item_number++ < 3 ) : $spotlight->the_post(); ?>
                                    <div class="columns small-12 medium-4"> 
                                        <div class="service"> 
                                            <div class="service-icon-box"> 
                                                <?php 
                                                    if ( has_post_thumbnail() ) {
                                                        the_post_thumbnail( 'medium', array(
                                                        'class' => 'service-icon wp-post-image wp-post-image wp-post-image'
                                                    ) );
                                                    }
                                                     ?>                                                 
                                            </div>                                             
                                            <h4 class="service-heading"><?php the_title(); ?></h4> 
                                            <div class="service-description">
                                                <?php the_content( null, true ); ?>
                                            </div>                                             
                                        </div>                                         
                                    </div>
                                <?php endwhile; ?>
                                <?php wp_reset_postdata(); ?>                                 
                            </div>
                        <?php endif; ?>                         
                    </section>                     
                    <div class="testimonial-wrap" id="testimonials">
                        <div class="row">
                            <div class="large-12 columns centered-text">
                                <h2><?php _e( 'What these awesome people have to say!', 'pgf' ); ?></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="large-6 columns testimonial">
                                <div class="quote">
                                    <p><?php _e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices, elit sed faucibus pharetra, diam mauris bibendum orci, sit amet ullamcorper purus dui sit amet augue. Donec aliquet diam ut neque mattis, eu tristique sem rutrum.', 'pgf' ); ?></p>
                                </div>
                                <div class="student">
                                    <div class="photo"> </div>
                                    <p><?php _e( 'John Doe', 'pgf' ); ?></p>
                                    <p><?php _e( 'Important person, some Company', 'pgf' ); ?></p>
                                </div>
                            </div>
                            <div class="large-6 columns testimonial">
                                <div class="quote">
                                    <p><?php _e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices, elit sed faucibus pharetra, diam mauris bibendum orci, sit amet ullamcorper purus dui sit amet augue. Donec aliquet diam ut neque mattis, eu tristique sem rutrum.', 'pgf' ); ?> </p>
                                </div>
                                <div class="student">
                                    <div class="photo"> </div>
                                    <p><?php _e( 'John Doe', 'pgf' ); ?></p>
                                    <p><?php _e( 'Important person, some Company', 'pgf' ); ?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row wow fadeInRight">
                        <div class="small-9 columns small-centered">
                            <article class="event">
                                <div class="event-date">
                                    <p class="event-month"><?php _e( 'Sept', 'pgf' ); ?></p>
                                    <p class="event-day"><?php _e( '18', 'pgf' ); ?></p>
                                </div>
                                <div class="event-desc">
                                    <h4 class="event-desc-header"><?php _e( 'Day in the Life of Foundation for Apps', 'pgf' ); ?></h4>
                                    <p class="event-desc-detail"><span class="event-desc-time"></span><?php _e( 'BDConf - Altlanta', 'pgf' ); ?></p>
                                    <a href="http://bdconf.com/speakers/brandon-arnold/" class="rsvp button">
                                        <?php _e( 'RSVP &amp; Details', 'pgf' ); ?>
                                    </a>
                                </div>
                            </article>
                            <hr>
                            <article class="event">
                                <div class="event-date">
                                    <p class="event-month"><?php _e( 'Oct', 'pgf' ); ?></p>
                                    <p class="event-day"><?php _e( '21', 'pgf' ); ?></p>
                                </div>
                                <div class="event-desc">
                                    <h4 class="event-desc-header"><?php _e( 'Day in the Life of Foundation for Apps', 'pgf' ); ?></h4>
                                    <p class="event-desc-detail"><span class="event-desc-time"></span><?php _e( 'BDConf - Washington, DC', 'pgf' ); ?></p>
                                    <a href="http://bdconf.com/speakers/brandon-arnold/" class="rsvp button">
                                        <?php _e( 'RSVP &amp; Details', 'pgf' ); ?>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="row">
                        <div class="columns small-12 medium-4">
                            <div class="image-wrapper overlay-fade-in">
                                <img src="https://tourneau.scene7.com/is/image/tourneau/DEV9900004?hei=450&wid=300&fmt=png-alpha&resMode=bicub&op_sharpen=1" />
                                <div class="image-overlay-content">
                                    <h2><?php _e( '.overlay-fade-in', 'pgf' ); ?></h2>
                                    <p class="price"><?php _e( '$99.99', 'pgf' ); ?></p>
                                    <a href="#" class="button">
                                        <?php _e( 'Get it', 'pgf' ); ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="columns small-12 medium-4">
                            <div class="image-wrapper overlay-slide-in-left">
                                <img src="https://tourneau.scene7.com/is/image/tourneau/ZEN0101011?hei=450&wid=300&fmt=png-alpha&resMode=bicub&op_sharpen=1" />
                                <div class="image-overlay-content">
                                    <h2><?php _e( '.overlay-slide-in-left', 'pgf' ); ?></h2>
                                    <p class="price"><?php _e( '$2319.99', 'pgf' ); ?></p>
                                    <a href="#" class="button">
                                        <?php _e( 'Buy Me', 'pgf' ); ?>
                                    </a>
                                </div>
                            </div>
                        </div>                         
                        <div class="columns small-12 medium-4">
                            <div class="image-wrapper overlay-fade-in-new-background">
                                <img src="https://tourneau.scene7.com/is/image/tourneau/FRK0100001?hei=450&wid=300&fmt=png-alpha&resMode=bicub&op_sharpen=1" />
                                <div class="image-overlay-content">
                                    <h2><?php _e( '.overlay-fade-in-new-background', 'pgf' ); ?></h2>
                                    <p class="price"><?php _e( '$189,000', 'pgf' ); ?></p>
                                    <a href="#" class="button">
                                        <?php _e( 'Want!', 'pgf' ); ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row features">
                        <div class="medium-4 columns">
                            <div class="round-icon">
                                <span class="fi-widget"></span>
                            </div>
                            <h3><?php _e( 'Adipiscing Elit', 'pgf' ); ?></h3>
                            <hr>
                            <p><?php _e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, lacus id interdum ultrices, elit metus semper tellus.', 'pgf' ); ?></p>
                        </div>
                        <div class="medium-4 columns">
                            <div class="round-icon">
                                <span class="fi-graph-bar"></span>
                            </div>
                            <h3><?php _e( 'Adipiscing Elit', 'pgf' ); ?></h3>
                            <hr>
                            <p><?php _e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, lacus id interdum ultrices, elit metus semper tellus.', 'pgf' ); ?></p>
                        </div>
                        <div class="medium-4 columns">
                            <div class="round-icon">
                                <span class="fi-download"></span>
                            </div>
                            <h3><?php _e( 'Adipiscing Elit', 'pgf' ); ?></h3>
                            <hr>
                            <p><?php _e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, lacus id interdum ultrices, elit metus semper tellus.', 'pgf' ); ?></p>
                        </div>                         
                    </div>                     
                    <footer class="footer" role="contentinfo" id="footer"> 
                        <div id="inner-footer" class="row"> 
                            <div class="large-12 medium-12 columns wow slideInLeft" data-wow-duration="1s" data-wow-delay="0s"> 
                                <p> &copy; <?php echo date('Y');  ?> <?php _e( '-', 'pgf' ); ?> <?php bloginfo( 'name' ); ?></p> 
                            </div>                             
                        </div>                         
                    </footer>                     
                    <div id="backtotop" class="hvr-fade" style="display: block;">
                        <span class="fi-arrow-up"></span>
                    </div>                     
                </div>                 
            </div>             
        </div>                                    
        <?php wp_footer(); ?>
    </body>     
</html>
