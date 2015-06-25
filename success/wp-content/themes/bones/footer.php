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
                        <img src="<?php bloginfo('template_directory'); ?>/library/images/large_jamooz_logo.png" alt="">
                        <p class="small">&copy; Copyright <?php echo date('Y'); ?></p>
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
                    
                    <div class="medium-blue-background white half">
                        <a href="<?php echo get_site_url(); ?>/../index.php" 
                        class="inline-block">
                            <img src="<?php bloginfo('template_directory'); ?>/library/images/white_left_arrow.png" alt="">
                            <div class="block">
                                <p class="small">previous</p>
                                <p>Jamooz Home</p>
                            </div>
                        </a>
                    </div>
                    
                    
                    <div class="text-right orange-background white inline-block half">
                        <a href="<?php echo get_site_url(); ?>/../get-started.php"
                        class="inline-block">
                            <div class="block">
                                <p class="small">next</p>
                                <p>Getting Started</p>
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
