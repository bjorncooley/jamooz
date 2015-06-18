				<div id="sidebar1" class="sidebar m-all t-1of3 d-2of7 last-col cf" role="complementary">

					<?php $cat_args = array(
						'orderby' => 'ID',
					); ?>
					<?php $categories = get_categories($cat_args); ?>
					<?php foreach( $categories as $category ) {

						$post_args = array(

							'category' => $category->cat_ID,
							'orderby' => 'ID',
							'order' => 'ASC',
						);

						$posts_array = get_posts($post_args); ?>

						<div class="category">
							
							<a href="<?php echo get_category_link($category->cat_ID); ?>">
								<h4><?php echo $category->name; ?></h4>
							</a>

							<div class="category-posts">

								<?php foreach ( $posts_array as $post ) : setup_postdata( $post ); ?>
									<h5>
										<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
									</h5>
								<?php endforeach; ?>
							</div>

						</div>
					<?php } ?>

				</div>
