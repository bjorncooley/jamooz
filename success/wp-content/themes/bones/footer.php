			<div id="login-overlay">
                <div id="login-modal" class="relative">
                    <img src="<?php bloginfo('template_directory'); ?>/library/images/close_icon_black.png" alt="" class="absolute" id="login-close">
                    <div id="login-title" class="text-center padding-top-30 padding-bottom-30">
                        <img src="<?php bloginfo('template_directory'); ?>/library/images/jamooz_small_logo.png" alt="">
                    </div>
                    <form action="" id="login-form" class="padding-top-30 padding-bottom-30">
                        <h4 class="uppercase text-center padding-top-30">Login</h4>
                        <input type="text" placeholder="Email address">
                        <input type="password" placeholder="Password">
                        <p class="small right"><a href="#">Forgot password?</a></p>
                        <button class="white uppercase light-blue-background" type="submit">Login</button>
                        <p class="small text-center">Don't have an account? <a href="#">Sign Up</a>.</p>
                    </form>
                </div>
            </div>

            <footer class="footer clearfix" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

				<div id="footer-left" class="text-center">
                    <div class="content">
                        <a href="<?php echo get_site_url() . '/../index.php'; ?>">
                            <img src="<?php bloginfo('template_directory'); ?>/library/images/large_jamooz_logo.png" alt="">
                            <p class="small">&copy; Copyright <?php echo date('Y'); ?></p>
                        </a>
                    </div>      
                </div>
                <div id="footer-right" class="clearfix">
                    <?php if (is_home()) { ?>

                        <div class="inline-block text-center max-960">
                            <a href="<?php echo get_site_url() ?>/category/setup-basics/">
                                <img src="<?php bloginfo('template_directory'); ?>/library/images/master_basics.png" alt="">
                                <h4>Master the Basics</h4>
                            </a>
                            <a href="<?php echo get_site_url() ?>/category/do-more/">
                                <img src="<?php bloginfo('template_directory'); ?>/library/images/get_more_done.png" alt="">
                                <h4>Get More Done</h4>
                            </a>
                            <a href="<?php echo get_site_url() ?>/category/troubleshooting/">
                                <img src="<?php bloginfo('template_directory'); ?>/library/images/troubleshooting.png" alt="">
                                <h4>Troubleshooting</h4>
                            </a>
                        </div>
                    <?php } ?>

                    <?php 

                        // Bit of logic to figure out where we are on the site,
                        // dynamically update these links accordingly

                        if ( is_home()) {

                            $previous_title = 'Jamooz Home';
                            $previous_url = get_site_url() . '/../index.php';

                            $next_title = 'Getting Started';
                            $next_url = get_site_url() . '/../get-started.php';
                        } else {

                            // Otherwise, a category page. Figure out which
                            // category we're in, get previous and next.
                            // This uses the Wordpress $cat variable, which
                            // gives the ID of the current category page

                            $cat_args = array(
                                'orderby' => 'ID',
                            );

                            $categories = get_categories($cat_args);
                            $index = 0;

                            foreach( $categories as $category ) {

                                if ( $category->cat_ID == $cat ) {

                                    if ( isset($categories[$index - 1]) ) {

                                        $previous_cat = $categories[$index - 1];
                                        $previous_title = $previous_cat->name;
                                        $previous_url = get_category_link($previous_cat->cat_ID);
                                    } else {

                                        $previous_title = 'Success Center';
                                        $previous_url = get_site_url();
                                    }

                                    if ( isset($categories[$index + 1]) ) {

                                        $next_cat = $categories[$index + 1];
                                        $next_title = $next_cat->name;
                                        $next_url = get_category_link($next_cat->cat_ID);
                                    } else {

                                        $next_title = 'Get Started';
                                        $next_url = get_site_url() . '/../get-started.php';
                                    }                                    
                                }

                                $index += 1;
                            }                            
                        }
                    ?>
                    
                    <div class="medium-blue-background white half">
                        <a href="<?php echo $previous_url ?>" 
                        class="inline-block">
                            <img src="<?php bloginfo('template_directory'); ?>/library/images/white_left_arrow.png" alt="">
                            <div class="block">
                                <p class="small">previous</p>
                                <p><?php echo $previous_title ?></p>
                            </div>
                        </a>
                    </div>
                    
                    
                    <div class="text-right orange-background white inline-block half">
                        <a href="<?php echo $next_url; ?>"
                        class="inline-block">
                            <div class="block">
                                <p class="small">next</p>
                                <p><?php echo $next_title ?></p>
                            </div>
                            <img src="<?php bloginfo('template_directory'); ?>/library/images/white_right_arrow.png" alt="">
                        </a>
                    </div>
				</div>

			</footer>

		</div>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

	</body>

</html> <!-- end of site. what a ride! -->
