<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title><?php wp_title(''); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
            <meta name="theme-color" content="#121212">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>

	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">

		<div id="container">

			<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">

				<div id="inner-header" class="cf group">

                    <div class="main-header">
                        <div id="mobile-menu">
                            <div class="container clearfix">
                                <img src="<?php bloginfo('template_directory'); ?>/library/images/mobile-menu.png" alt="" class="left" id="menu-toggle">
                                <div class="right inline-block">
                                    <img src="<?php bloginfo('template_directory'); ?>/library/images/jamooz_logo_mobile.jpg" alt="Jamooz Logo">
                                    <img src="<?php bloginfo('template_directory'); ?>/library/images/mobile_previous.png" alt="Arrow for previous page">
                                    <img src="<?php bloginfo('template_directory'); ?>/library/images/mobile_next.png" alt="Arrow for next page">
                                </div>
                            </div>
                            
                        </div>
                        <div id="header-search" <?php if (is_home()) { echo "class=hidden"; } ?>>
                            <?php include (TEMPLATEPATH . '/searchform.php'); ?>
                        </div>

                        <?php $url = get_site_url(); ?>
                        <?php $link = $url . '/../index.php#trial' ?>
                        <button class="radius large-3 columns medium-dark-gray-border no-background medium-dark-gray small-centered uppercase login-button">Login</button>
                        <a href="<?php echo $link ?>">
                            <button class="radius large-3 columns small-centered orange no-background red-orange-border uppercase">Sign Up</button>
                        </a>
                    </div>
				</div>

			</header>
