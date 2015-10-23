$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("my_components", "my_components");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "my_components";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp3 = new PgComponentType('comp3', 'Spotlight');
        comp_comp3.code = '<section class="spotlight1" id="spotlight" wp-cz-section="spotlight" wp-cz-section-title="Spotlight" wp-cz-control="kategori" wp-cz-control-label="Kategori" wp-cz-control-type="custom" wp-cz-control-type-custom="WP_Customize_Category_Control" wp-cz-control-section="spotlight">\
    <div class="row" wp-loop="spotlight" wp-loop-show-empty-text="false" wp-loop-post-status="publish" wp-loop-show-items="3" wp-loop-nopaging="true" wp-loop-order="ASC" wp-loop-orderby="date" wp-loop-category="get_theme_mod(\'kategori\')">\
        <div class="columns small-12 medium-4" wp-loop-item>\
            <div class="service">\
                <div class="service-icon-box">\
                    <img width="300" height="300" src="http://localhost/wordpress/wp-content/uploads/2015/09/cropped-IMG_20140412_194727-300x300.jpg" class="service-icon wp-post-image" alt="cropped-IMG_20140412_194727.jpg" wp-the-post-thumbnail="medium" wp-the-post-thumbnail-if="true"\
                    />\
                </div>\
                <h4 class="service-heading" wp-the-title>Tjeneste 1</h4> \
                <div class="service-description" wp-the-content wp-the-content-strip-teaser="true" wp-the-content-set="content">\
                    <p>Dette er en eksempelside. Den er forskjellig fra et blogginnlegg fordi den blir på ett sted og vil vises\
                        <br />\
                        <hr />\
                        <p> <a class="more-link button tiny" href="http://localhost/wordpress/tjeneste-1/">LES MER</a> \
                        </p>\
                </div>\
            </div>\
        </div>\
        <div class="columns small-12 medium-4" wp-loop-skip>\
            <div class="service">\
                <div class="service-icon-box">\
                    <img width="300" height="300" src="http://localhost/wordpress/wp-content/uploads/2015/09/cropped-IMG_20140412_194727-300x300.jpg" class="service-icon wp-post-image" alt="cropped-IMG_20140412_194727.jpg" wp-the-post-thumbnail="medium" wp-the-post-thumbnail-if="true"\
                    />\
                </div>\
                <h4 class="service-heading" wp-the-title>Tjeneste 1</h4> \
                <div class="service-description" wp-the-content wp-the-content-strip-teaser="true" wp-the-content-set="content">\
                    <p>Dette er en eksempelside. Den er forskjellig fra et blogginnlegg fordi den blir på ett sted og vil vises\
                        <br />\
                        <hr />\
                        <p> <a class="more-link button tiny" href="http://localhost/wordpress/tjeneste-1/">LES MER</a> \
                        </p>\
                </div>\
            </div>\
        </div>\
        <div class="columns small-12 medium-4" wp-loop-skip>\
            <div class="service">\
                <div class="service-icon-box">\
                    <img width="300" height="300" src="http://localhost/wordpress/wp-content/uploads/2015/09/cropped-IMG_20140412_194727-300x300.jpg" class="service-icon wp-post-image" alt="cropped-IMG_20140412_194727.jpg" wp-the-post-thumbnail="medium" wp-the-post-thumbnail-if="true"\
                    />\
                </div>\
                <h4 class="service-heading" wp-the-title>Tjeneste 1</h4> \
                <div class="service-description" wp-the-content wp-the-content-strip-teaser="true" wp-the-content-set="content">\
                    <p>Dette er en eksempelside. Den er forskjellig fra et blogginnlegg fordi den blir på ett sted og vil vises\
                        <br />\
                        <hr />\
                        <p> <a class="more-link button tiny" href="http://localhost/wordpress/tjeneste-1/">LES MER</a> \
                        </p>\
                </div>\
            </div>\
        </div>\
    </div>\
</section>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);
        
        var comp_comp1 = new PgComponentType('comp1', 'Content loop');
        comp_comp1.code = '<div id="content" wp-site-content class="contentbox" data-pg-collapsed>\
    <div id="inner-content" class="row">\
        <div id="main" class="columns medium-12 large-12" role="main" wp-loop>\
            <article wp-loop-item>\
                <header class="article-header">\
                    <h1 class="page-title" wp-the-title>Hovedside</h1> \
                </header>\
                <img width="1024" height="768" src="http://localhost/abramedia/wp-content/uploads/2015/06/utv12-1024x768.jpg" class="th wp-post-image" alt="Søkemotoroptimalisering" wp-the-post-thumbnail="large" wp-the-post-thumbnail-if="true" wp-the-post-thumbnail-attr-class="th"\
                />\
                <section class="entry-content" itemprop="articleBody" wp-the-content wp-the-content-set="content">\
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis\
                        nisl ut aliquip ex ea commodo consequat.</p>\
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue\
                        duis dolore te feugait nulla facilisi.</p>\
                    <blockquote>\
                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes\
                            demonstraverunt lectores legere me lius quod ii legunt saepius.</p>\
                    </blockquote>\
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta\
                        decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue\
                        duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui\
                        facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica,\
                        quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>\
                </section>\
                <footer class="article-footer"></footer>\
            </article>\
        </div>\
    </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp6 = new PgComponentType('comp6', 'Prosjekter modal');
        comp_comp6.code = '<section class="prosjekter" id="prosjekter" wp-post-type="Prosjekter" wp-post-type-name="Prosjekter" wp-post-type-name-singular="Prosjekt" wp-post-type-public="true" wp-post-type-hierarchical="true" wp-post-type-supports="title,editor,author,thumbnail,excerpt,trackbacks,custom-fields,comments,revisions,page-attributes,post-formats"\
wp-post-type-has-archive="true" wp-post-type-show-in-menu="true" wp-post-type-menu-position="4" wp-post-type-taxonomies="category">\
    <div class="row" wp-loop="prosjekter" wp-loop-post-type-custom="prosjekter" wp-loop-order="DESC" wp-loop-orderby="date" wp-loop-posts-per-page="8" wp-loop-nopaging="true">\
        <h2 class="page-title">Prosjekter & Eiendommer</h2> \
        <div class="columns medium-3" wp-loop-item>\
            <a href="#" data-reveal-id="prosjekt" wp-call-function="echo \'prosjekt-\'.get_the_ID()" wp-call-function-set="attr" wp-call-function-set-attr="data-reveal-id">\
                <img src="http://127.0.0.1:40000/file:///C:/Program%20Files%20(x86)/Pinegrow%20Web%20Designer/placeholders/img3.jpg" wp-the-post-thumbnail="medium" wp-the-post-thumbnail-if="true" class="th" />\
                <h6 wp-the-title class="prosjekt-tittel">Heading 4</h6> \
            </a>\
            <p class="prosjekt-kategori" wp-call-function="foreach((get_the_category()) as $category) {     echo $category->cat_name . \' \'; }" wp-call-function-set="content">Paragraph</p>\
            <div class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" wp-the-id="prosjekt">\
                <h2 id="modalTitle" wp-the-title class="modalTitle">Awesome. I have it.</h2> \
                <p wp-the-content>I\'m a cool paragraph that lives inside of an even cooler modal. Wins!</p> <a class="close-reveal-modal" aria-label="Close">&#215;</a> \
            </div>\
        </div>\
    </div>\
    <!-- .large-12 -->\
</section>';
        comp_comp6.parent_selector = null;
        f.addComponentType(comp_comp6);
        
        var comp_comp2 = new PgComponentType('comp2', 'Dropdown menu');
        comp_comp2.code = '<div class="sticky contain-to-grid" id="menudropdown" data-pg-collapsed>\
    <nav class="top-bar" data-topbar>\
        <ul class="title-area">\
            <!-- Title Area -->\
            <li class="name">\
                <h1> <a href="<?php echo home_url(); ?>" rel="nofollow" wp-href="url"> \
                        <img width="220" height="52" src="http://localhost/abramedia/wp-content/uploads/2015/04/logo.png" class="logo" alt="logo" wp-cz-control="logobilde" wp-cz-control-label="Velg logo" wp-cz-control-type="media" wp-cz-control-mime-type="image" wp-cz-control-section="logo" wp-attachment-image wp-attachment-image-theme-mod="logobilde" wp-attachment-image-size="medium" /> \
                    </a></h1> \
            </li>\
            <li class="toggle-topbar menu-icon">\
                <a href="#"><span>Meny</span></a> \
            </li>\
        </ul>\
        <section class="top-bar-section" wp-call-function="pgf_top_nav();" wp-call-function-set="content">\
            <ul id="menu-hovedmeny-2" class="top-bar-menu right">\
                <li class="divider"></li>\
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-75">\
                    <a href="http://localhost/abramedia/side/">Static page</a>\
                    <ul class="sub-menu dropdown">\
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-199">\
                            <a href="http://localhost/abramedia/side/196-2/">Under side</a>\
                        </li>\
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14">\
                            <a href="http://localhost/abramedia/kitchen-sink/">Kitchen sink</a>\
                        </li>\
                    </ul>\
                </li>\
                <li class="divider"></li>\
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95">\
                    <a href="http://localhost/abramedia/blogg-page/">Blogg home page</a>\
                </li>\
                <li class="divider"></li>\
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children has-dropdown menu-item-6">\
                    <a href="http://localhost/abramedia/category/blogg/">Hoved kategori</a>\
                    <ul class="sub-menu dropdown">\
                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-has-children has-dropdown menu-item-16">\
                            <a href="http://localhost/abramedia/hei-verden/">Entry1</a>\
                            <ul class="sub-menu dropdown">\
                                <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-37">\
                                    <a href="http://localhost/abramedia/entry-2/">Entry 2</a>\
                                </li>\
                            </ul>\
                        </li>\
                    </ul>\
                </li>\
                <li class="divider"></li>\
                <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-96">\
                    <a href="http://localhost/abramedia/entry3/">Entry3</a>\
                </li>\
                <li class="divider"></li>\
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">\
                    <a href="http://localhost/abramedia/gallery/">Gallery</a>\
                </li>\
                <li class="divider"></li>\
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-127">\
                    <a href="http://localhost/abramedia/kontakt/">Kontakt</a>\
                </li>\
            </ul>\
        </section>\
    </nav>\
</div>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("my_components_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp3, comp_comp1, comp_comp6, comp_comp2]);

        f.addLibSection(section);
   });
});