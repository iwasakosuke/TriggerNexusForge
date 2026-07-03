# WORDPRESS_TEMPLATE — WordPressスターターテーマ

<!-- WordPress案件の出発点になる自作スターターテーマ。最小構成+ブランドトークン組み込み済み -->

WordPress案件用のスターターテーマ「TNF Starter」です。
最小構成のクラシックテーマで、`CSS_TEMPLATE` のデザイントークンを組み込み済み。案件ごとにコピーしてカスタマイズします。

## ファイル構成

```
tnf-starter/
├── style.css        # テーマ情報ヘッダー+テーマ固有スタイル
├── functions.php    # CSS/フォント読み込み・テーマ機能・メニュー登録
├── header.php       # <head>とサイトヘッダー
├── footer.php       # サイトフッター
├── index.php        # フォールバックテンプレート(記事一覧)
├── front-page.php   # トップページ
├── page.php         # 固定ページ
├── single.php       # 投稿詳細
└── css/             # CSS_TEMPLATE の3ファイルをここにコピーする
    ├── tokens.css
    ├── reset.css
    └── components.css
```

## 導入手順

1. `tnf-starter/` を案件名にリネームしてコピーする(例:`client-abc/`)
2. `style.css` のテーマヘッダー(Theme Name等)を案件用に書き換える
3. `../CSS_TEMPLATE/` の3ファイルを `css/` にコピーする
4. クライアントのブランドカラーに合わせて `css/tokens.css` の変数を差し替える
5. テーマフォルダを `wp-content/themes/` にアップロードして有効化する

## カスタマイズの原則

- 色・フォントの変更は `css/tokens.css` の変数だけで行う(PHPやコンポーネントCSSは触らない)
- 案件固有のスタイルは `style.css` に追記する
- プラグイン依存は最小限に(推奨:SEO系1つ・フォーム系1つ・バックアップ系1つまで)
- 本番反映前に必ずステージング(またはローカル)で動作確認する

## 納品前チェックリスト

- [ ] パーマリンク設定を確認した
- [ ] サンプルページ・Hello world記事を削除した
- [ ] ファビコン・OGPデフォルト画像を設定した
- [ ] お問い合わせフォームの送信テストをした
- [ ] 管理者以外の編集用ユーザーを発行した(クライアント納品時)
- [ ] バックアップ体制を設定した
