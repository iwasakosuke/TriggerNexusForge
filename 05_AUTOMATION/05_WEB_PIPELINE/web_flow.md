# Web Flow — Web案件の標準工程

<!-- LP・サイト案件が通る7ステップ。各ステップの完了条件つき -->

## 工程(7ステップ)

| # | ステップ | 担当 | 完了条件 |
|---|---------|------|---------|
| 1 | 要件確定 | PM_AI+Sales_AI | 完了定義・スコープ・素材リストが案件シートに記載済み |
| 2 | 設計 | Designer_AI+Copywriter_AI | 業種テンプレ確認・構成案・コピーがオーナー承認済み |
| 3 | 実装準備 | オーナー | 03_WEB_STUDIO からテンプレコピー・tokens.css 調整済み |
| 4 | 実装 | オーナー(+AI補助) | 全セクション実装・プレースホルダ残ゼロ |
| 5 | 検品 | Designer_AI+チェックリスト | 06_WEB/Checklist + HTML/CSS チェック完走 |
| 6 | クライアント確認 | ★人 | ステージングURLで先方確認・修正合意(回数内) |
| 7 | 公開・納品 | ★人 | 本番公開・07_DELIVERY の納品チェック完走 |

## ステップ別の使う資材

- 設計:`03_WEB_STUDIO/INDUSTRY_TEMPLATES/`(業種の勝ちパターン)+ `02_CONTENT_FACTORY/02_PROMPTS/LP.md`(コピー生成)
- 実装:`03_WEB_STUDIO/LP_TEMPLATE/` or `WORDPRESS_TEMPLATE/`(コピーして使う。原本は編集しない)
- 検品:`09_KNOWLEDGE_HUB/06_WEB` `08_HTML` `09_CSS` の各チェックリスト
- WordPress案件:`07_WORDPRESS/Checklist.md`(納品前)を追加で通す

## 差し戻し・修正のルール

- 修正依頼は案件シートの修正回数の枠内で処理(超過は Sales_AI が差分見積)
- 「ついで修正」もすべて変更履歴に記録する(スコープクリープの検知)
