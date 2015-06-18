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
                                <h4>Master the Basics</h4>
                            </a>
                            <a href="<?php echo get_site_url() ?>/category/do-more/">
                                <h4>Get More Done</h4>
                            </a>
                            <a href="<?php echo get_site_url() ?>/category/troubleshooting/">
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
