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
        
        var comp_comp1 = new PgComponentType('comp1', 'menu dropdown style');
        comp_comp1.code = '<div class="sticky contain-to-grid" wp-cz-section="logo" wp-cz-section-title="Logo" wp-cz-section-priority="2">\
    <nav class="top-bar" data-topbar>\
        <ul class="title-area">\
            <!-- Title Area -->\
            <li class="name">\
                <h1> <a href="<?php echo home_url(); ?>" rel="nofollow" wp-href="url">                        <img width="91" height="21" src="http://localhost/wordpress/wp-content/uploads/2015/09/abra.png" class="logo" alt="" wp-cz-control="logobilde" wp-cz-control-label="Velg logo" wp-cz-control-type="media" wp-cz-control-mime-type="image" wp-cz-control-section="logo" wp-attachment-image wp-attachment-image-theme-mod="logobilde" wp-attachment-image-size="medium" />                    </a></h1> \
            </li>\
            <li class="toggle-topbar menu-icon"> <a href="#"><span>Meny</span></a> \
            </li>\
        </ul>\
        <section class="top-bar-section">\
            <ul id="menu-hovedmeny" class="top-bar-menu right" wp-call-function="pgf_top_nav();">\
                <li class="divider"></li>\
                <li id="menu-item-12" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children active has-dropdown menu-item-12"> <a href="http://localhost/wordpress/">Hovedside</a> \
                    <ul class="sub-menu dropdown">\
                        <li id="menu-item-13" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children active has-dropdown menu-item-13"> <a href="http://localhost/wordpress/">Under1</a> \
                            <ul class="sub-menu dropdown">\
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2 current_page_item active menu-item-14"> <a href="http://localhost/wordpress/">Under2</a> \
                                </li>\
                            </ul>\
                        </li>\
                    </ul>\
                </li>\
                <li class="divider"></li>\
                <li id="menu-item-16" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-16"> <a href="http://localhost/wordpress/hei-verden/">Hei, verden2!</a> \
                </li>\
                <li class="divider"></li>\
                <li id="menu-item-17" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-17"> <a href="http://localhost/wordpress/category/ukategorisert/">Ukategorisert</a> \
                </li>\
                <li class="divider"></li>\
                <li id="menu-item-48" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48"> <a href="http://localhost/wordpress/gallery/">Gallery</a> \
                </li>\
            </ul>\
        </section>\
    </nav>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("my_components_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp3, comp_comp1]);

        f.addLibSection(section);
   });
});