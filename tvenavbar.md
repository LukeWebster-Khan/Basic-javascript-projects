<nav class="navbar navbar-expand-lg navbar-light global-header justify-content-between">
    <div class="navbar-brand my-auto text-lg-left">
        <div class="header-logo ml-lg-0 mt-2">
            <a href="<?php echo site_url(); ?>" class="navbar-brand">
                <img class="img-fluid lazyload w-75" data-src="<?php
                                                                if (get_theme_mod('company_logo')) {
                                                                    echo get_theme_mod('company_logo');
                                                                } else {
                                                                    echo get_theme_file_uri('images/tv-edwards-white-logo.png');
                                                                }
                                                                ?>" alt="<?php echo bloginfo('name'); ?> Logo"
                    width="954" height="253">
            </a>
        </div>
    </div>


    <div class="d-flex">

        <button class="btn text-white js-search-open navbar-toggler" type="button"><i class="bi bi-search"
                style="font-size:1rem;"></i></button>

        <div class="d-flex align-items-center">
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" style="font-size:1rem;"></span>
        </button> -->
            <!-- new burger -->
            <button class="navbar-toggler-b collapsed d-flex d-lg-none flex-column justify-content-around bg-blue"
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon top-bar"></span>
                <span class="toggler-icon middle-bar"></span>
                <span class="toggler-icon bottom-bar"></span>
            </button>
        </div>
    </div>
    <!-- new burger -->
    <div class="d-flex flex-column text-white collapse navbar-collapse" data-toggle="collapse">
        <h4 class="text-white mb-0 ml-auto collapse navbar-collapse">Call us on:&nbsp;<a class=" fancy-link px-0"
                href="tel:<?php echo get_theme_mod('company_contact_number', '01234 56789'); ?>"><?php echo get_theme_mod('company_contact_number', '
020 3440 8000'); ?></a>
        </h4>


    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <?php
        wp_nav_menu(array(
            'container' => NULL,
            'theme_location' => 'mainMenu',
            'fallback_cb' => FALSE,
            'depth' => 3,
            'menu_class' => 'navbar-nav',
            'walker' => new Main_Walker_Nav_Menu
        ));
        ?>
        <button class="btn text-white js-search-open" type="button"><i class="bi bi-search"></i></button>
        <button class=" btn btn-secondary text-white my-2 my-sm-0" type="submit">Contact&nbsp;Us</button>
    </div>


</nav>