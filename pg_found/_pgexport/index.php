<?php
get_header(); ?>
                         
<div id="inner-content" class="row"> 
    <?php if ( have_posts() ) : ?>
        <div id="main" class="columns medium-12 large-12" role="main"> 
            <?php while ( have_posts() ) : the_post(); ?>
                <article> 
                    <header class="article-header"> 
                        <h1 class="page-title"><?php the_title(); ?></h1> 
                    </header>                                             
                    <?php 
                        if ( has_post_thumbnail() ) {
                            the_post_thumbnail( 'large', array(
                            'class' => 'th'
                        ) );
                        }
                         ?>                                             
                    <section class="entry-content" itemprop="articleBody">
                        <?php the_content(); ?>
                    </section>                                             
                </article>
            <?php endwhile; ?>                                     
        </div>
    <?php else : ?>
        <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
    <?php endif; ?>                             
</div>                                                 

<?php get_footer(); ?>