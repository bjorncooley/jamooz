				<div id="sidebar1" class="sidebar m-all t-1of3 d-2of7 last-col cf" role="complementary">

					<?php $categories = get_categories(); ?>
					<?php foreach( $categories as $category ) {

						$post_args = array(

							'category' => $category->cat_ID,
						);

						$posts_array = get_posts($post_args);

						echo '<div class="category">';
						
						echo '<h2>' . $category->name . '</h2>';

						foreach ( $posts_array as $post ) : setup_postdata( $post ); ?>
							<h5>
								<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
							</h5>
						<?php endforeach; 

						echo '</div>';
					} ?>

				</div>
