# 03_WEB_STUDIO — Web制作

<!-- Web制作スタジオ。LP・サイト・Webアプリの開発案件を管理するフォルダ -->

LP(ランディングページ)・Webサイト・Webアプリの制作を行います。

## このフォルダで管理するもの

- LP・Webサイトのプロジェクト一式
- HTML/CSS/JavaScript などのソースコード
- サイト構成案・ワイヤーフレーム
- 再利用可能なコードスニペット・テンプレート

## テンプレート一覧

| フォルダ | 内容 |
|---------|------|
| [CSS_TEMPLATE/](CSS_TEMPLATE/) | 共通CSS(デザイントークン・リセット・コンポーネント)。全制作物の土台 |
| [HTML_TEMPLATE/](HTML_TEMPLATE/) | HTMLボイラープレート(SEO・OGP・フォント設定済み) |
| [LP_TEMPLATE/](LP_TEMPLATE/) | LP一式(王道8セクション構成のHTML+CSS) |
| [WORDPRESS_TEMPLATE/](WORDPRESS_TEMPLATE/) | WordPressスターターテーマ「TNF Starter」 |
| [INDUSTRY_TEMPLATES/](INDUSTRY_TEMPLATES/) | 業種別の設計テンプレート(飲食・美容・士業・ジム・講座) |

## 制作フロー

1. **設計**: `INDUSTRY_TEMPLATES/` で業種の勝ちパターンを確認
2. **コピー**: `02_CONTENT_FACTORY/PROMPTS/LP.md` で構成・コピーを生成
3. **実装**: `LP_TEMPLATE/`(1ページ物)or `WORDPRESS_TEMPLATE/`(CMS案件)をコピーして着手
4. **調整**: クライアントのブランドに合わせて `tokens.css` の変数だけ差し替え
5. **納品**: `HTML_TEMPLATE/README.md` のチェックリストで最終確認

案件フォルダは `07_CLIENTS/クライアント名/` に作成し、テンプレートはコピーして使う(テンプレート本体は直接編集しない)。
