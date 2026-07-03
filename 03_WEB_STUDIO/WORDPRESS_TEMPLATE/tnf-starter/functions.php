<?php
/**
 * TNF Starter テーマ機能
 *
 * 構成:
 * 1. テーマ基本設定(サポート機能・メニュー)
 * 2. CSS・フォントの読み込み
 * 3. セキュリティ・軽量化の初期設定
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // 直接アクセス禁止
}

/* --------------------------------------------------------------------------
 * 1. テーマ基本設定
 * ----------------------------------------------------------------------- */

function tnf_setup() {
	// タイトルタグをWPに任せる(header.phpに<title>を書かない)
	add_theme_support( 'title-tag' );

	// アイキャッチ画像
	add_theme_support( 'post-thumbnails' );

	// HTML5マークアップ
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );

	// メニュー登録
	register_nav_menus( array(
		'global' => 'グローバルナビゲーション',
		'footer' => 'フッターナビゲーション',
	) );
}
add_action( 'after_setup_theme', 'tnf_setup' );

/* --------------------------------------------------------------------------
 * 2. CSS・フォントの読み込み
 *    読み込み順:tokens → reset → components → style.css(テーマ固有)
 * ----------------------------------------------------------------------- */

function tnf_enqueue_assets() {
	$ver = wp_get_theme()->get( 'Version' );

	// Google Fonts(Brand.md 指定:Noto Sans JP / Montserrat / Inter)
	wp_enqueue_style(
		'tnf-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700;800&family=Noto+Sans+JP:wght@400;500;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'tnf-tokens', get_template_directory_uri() . '/css/tokens.css', array(), $ver );
	wp_enqueue_style( 'tnf-reset', get_template_directory_uri() . '/css/reset.css', array( 'tnf-tokens' ), $ver );
	wp_enqueue_style( 'tnf-components', get_template_directory_uri() . '/css/components.css', array( 'tnf-reset' ), $ver );
	wp_enqueue_style( 'tnf-style', get_stylesheet_uri(), array( 'tnf-components' ), $ver );
}
add_action( 'wp_enqueue_scripts', 'tnf_enqueue_assets' );

/* --------------------------------------------------------------------------
 * 3. セキュリティ・軽量化の初期設定
 * ----------------------------------------------------------------------- */

// WPバージョン情報の出力を止める(セキュリティ)
remove_action( 'wp_head', 'wp_generator' );

// 絵文字用スクリプトを止める(軽量化。必要なら削除)
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
