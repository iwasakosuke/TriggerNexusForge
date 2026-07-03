<?php
/**
 * フォールバックテンプレート(記事一覧)
 * 専用テンプレートがない場合はすべてここに落ちる。
 */
get_header();
?>

<main class="section">
	<div class="container container--narrow">

		<?php if ( have_posts() ) : ?>
			<div class="post-list">
				<?php while ( have_posts() ) : the_post(); ?>
					<article <?php post_class( 'card' ); ?>>
						<h2 class="card__title">
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						</h2>
						<p class="entry-meta"><?php echo get_the_date(); ?></p>
						<p><?php the_excerpt(); ?></p>
					</article>
				<?php endwhile; ?>
			</div>

			<div class="mt-4">
				<?php the_posts_pagination(); ?>
			</div>
		<?php else : ?>
			<p>記事が見つかりませんでした。</p>
		<?php endif; ?>

	</div>
</main>

<?php get_footer(); ?>
