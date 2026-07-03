<?php
/**
 * 投稿詳細テンプレート
 */
get_header();
?>

<main class="section">
	<div class="container container--narrow">
		<?php while ( have_posts() ) : the_post(); ?>
			<article <?php post_class(); ?>>
				<header>
					<h1><?php the_title(); ?></h1>
					<p class="entry-meta mt-2">
						公開日:<?php echo get_the_date(); ?>
						<?php if ( get_the_modified_date() !== get_the_date() ) : ?>
							/ 更新日:<?php echo get_the_modified_date(); ?>
						<?php endif; ?>
					</p>
				</header>

				<?php if ( has_post_thumbnail() ) : ?>
					<div class="mt-4"><?php the_post_thumbnail( 'large' ); ?></div>
				<?php endif; ?>

				<div class="entry-content mt-4">
					<?php the_content(); ?>
				</div>
			</article>

			<nav class="mt-4" aria-label="前後の記事">
				<?php the_post_navigation(); ?>
			</nav>
		<?php endwhile; ?>
	</div>
</main>

<?php get_footer(); ?>
