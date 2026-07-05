# Assignment Matrix — 分配マトリクス

<!-- 作業種別ごとの担当AI早見表+発注テンプレート -->

## 分配マトリクス(作業種別 → 担当)

| 作業 | 主担当 | 検品担当 | 使う資材 |
|------|--------|---------|---------|
| 提案書・見積・顧客連絡文 | Sales_AI | オーナー | Sales_AI/Workflow.md |
| 記事・note・台本の執筆 | Copywriter_AI | SNS_AI or 翌日の自分 | 02_CONTENT_FACTORY |
| LP・セールスコピー | Copywriter_AI | Designer_AI(構成面) | 02_PROMPTS/LP.md |
| SNS投稿・多展開 | SNS_AI | Copywriter_AI | 02_PROMPTS/SNS系 |
| デザイン設計・図解指示・画像プロンプト | Designer_AI | オーナー | 01_DESIGN / Brand.md |
| Web実装(HTML/CSS/WP) | オーナー(+将来Engineer_AI) | Designer_AI(見た目) | 03_WEB_STUDIO |
| LINE・メルマガ | Copywriter_AI | Sales_AI(オファー面) | 02_PROMPTS/LINE・Mailmagazine |
| スケジュール・進捗・振り返り | PM_AI | CEO_AI(週次) | 05_AUTOMATION |
| 経営判断・採否 | CEO_AI | オーナー | 00_COMPANY |

## 発注テンプレート(PM_AI → 各AI)

```text
【発注】(タスク名)
【案件】(案件名 / テーマID)
【完了定義】(何がどうなったら完了か)
【素材】(入力シート・確定コピー・参照ファイルのパス)
【形式】(出力テンプレート:◯◯のフォーマットで)
【期限】(YYYY-MM-DD HH:MM)
【検品】(誰が・どのチェックリストで)
```

## 並行発注の組み方(例:LP案件)

```
同時に走らせる:
├─ Copywriter_AI: LP構成案(→承認後、本文)
├─ Designer_AI : 業種トーン確認+FVビジュアル方針
└─ Sales_AI    : 中間報告文ドラフト
直列で処理する(オーナー):
構成承認 → コピー承認 → デザイン承認(1つずつ)
```
