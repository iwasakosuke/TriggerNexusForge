# 00_RULES — 制作ルール

<!-- Content Factory の法律。すべての生成物はここのルールに従う。KNOWLEDGEが「教科書」なら、RULESは「法規」 -->

コンテンツ制作の**規範(守るべきルール)**を定義します。
`06_KNOWLEDGE/`(なぜそうするかの知識)と対で機能し、迷ったらルールが優先されます。

## ファイル一覧

| ファイル | 内容 |
|---------|------|
| [writing_rules.md](writing_rules.md) | 文章ルール — 文体・表記・推敲の規則 |
| [brand_rules.md](brand_rules.md) | ブランドルール — ボイス・NGワード・媒体別トーン |
| [seo_rules.md](seo_rules.md) | SEOルール — Blog記事が守るべき規則 |
| [copywriting_rules.md](copywriting_rules.md) | コピーライティングルール — 売る文章の規則 |
| [prohibitions.md](prohibitions.md) | 禁止事項 — 全媒体共通の絶対NG集 |
| [quality_standards.md](quality_standards.md) | 品質基準 — 「公開してよい」の定義 |

## 優先順位

```
00_COMPANY/Brand.md(憲法)
   > 00_RULES(法律)
      > 06_KNOWLEDGE(教科書)
         > 各プロンプトの個別指示
```

上位と矛盾したら上位が勝つ。ルールを変えたいときは、上位文書との整合を確認してから変更する。

## 運用

- 検品(`07_CHECKLIST/`)はこのルール群を根拠にする
- 繰り返し違反が出る項目は、`02_PROMPTS/` 側に禁止指示として先回りで組み込む
- ルールの変更履歴は `09_ARCHIVE/update_log.md` に記録する
