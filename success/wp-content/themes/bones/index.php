<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<?php get_sidebar(); ?>

						<main id="home" class="m-all t-2of3 d-5of7 cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

							<div class="text">
								<h1>Welcome to the Success Center</h1>
								<p>From getting a solid foundation of the basics
								to mastering the advanced capabilities of 
								Jamooz products, we’re here to help</p>
								<button class="red-orange-background white">
									Get Started
								</button>
							</div>
							
							<div id="search-section">
								<?php include(TEMPLATEPATH . '/searchform.php'); ?>
							</div>
						</main>
						

				</div>

			</div>


<?php get_footer(); ?>
