# KNOWLEDGE — 品質基準書

<!-- コンテンツの品質を判定する基準書。生成物はすべてここの基準で検品してから公開する -->

コンテンツ工場の「検品基準」です。生成(PROMPTS)と対になる、品質判定のよりどころ。

## ファイル一覧

| ファイル | 内容 | 主な使用者 |
|---------|------|-----------|
| [writing_rules.md](writing_rules.md) | 文章ルール(文体・表記・推敲) | Copywriter_AI(全文章の検品) |
| [seo.md](seo.md) | SEOの基準(検索意図・構成・メタ情報) | Copywriter_AI(Blog記事) |
| [copywriting.md](copywriting.md) | コピーライティングの型と原則 | Copywriter_AI / Sales_AI |
| [brand_tone.md](brand_tone.md) | ブランドトーン(ボイス・NGワード・媒体別調整) | 全AI社員 |

## 位置づけ

- **`00_COMPANY/Brand.md` が憲法、ここは実務マニュアル** — 矛盾したら Brand.md が勝つ
- PROMPTS の生成ルールはこの基準から作られている(基準を変えたらプロンプトも更新する)
- AI社員の `Knowledge.md` からもここを参照する(知識の重複記述を避け、ここに集約)

## 運用

- 検品で繰り返し引っかかる項目が出たら、PROMPTS 側に禁止ルールとして先回りで組み込む
- 新しい判断事例(これはOK/これはNG)が出たら、該当ファイルに追記して前例にする
