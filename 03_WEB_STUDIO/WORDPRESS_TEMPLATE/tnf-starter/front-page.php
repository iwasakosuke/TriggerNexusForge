<?php
/**
 * トップページテンプレート
 * 「設定 > 表示設定」で固定ページをフロントに指定した場合に使われる。
 * LP的なトップにする場合は LP_TEMPLATE のセクション構成をここに移植する。
 */
get_header();
?>

<main>

	<!-- FVセクション(案件に合わせて書き換える) -->
	<section class="section">
		<div class="container text-center">
			<h1><?php bloginfo( 'name' ); ?></h1>
			<p class="mt-2"><?php bloginfo( 'description' ); ?></p>
			<div class="mt-4">
				<a href="#contact" class="btn btn--primary btn--lg">お問い合わせ</a>
			</div>
		</div>
	</section>

	<!-- 固定ページ本文(WPエディタで編集可能な領域) -->
	<section class="section">
		<div class="container container--narrow">
			<?php
			while ( have_posts() ) : the_post();
				the_content();
			endwhile;
			?>
		</div>
	</section>

</main>

<?php get_footer(); ?>
