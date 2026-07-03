<?php
/**
 * フッターテンプレート
 * サイト共通フッター。各テンプレートの末尾で get_footer() から呼ばれる。
 */
?>
<footer class="site-footer section--dark">
	<div class="container text-center">
		<nav aria-label="フッターナビゲーション">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'footer',
				'container'      => false,
				'fallback_cb'    => false,
			) );
			?>
		</nav>
		<p class="mt-2">&copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?></p>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
