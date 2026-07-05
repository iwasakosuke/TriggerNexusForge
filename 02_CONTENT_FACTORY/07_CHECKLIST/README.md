# 07_CHECKLIST — 検品所

<!-- 公開前の品質確認リスト。ここを通らないコンテンツは公開されない -->

公開前の**品質確認(検品)**を行う場所です。パイプラインのSTEP 6(レビュー)で使用します。

## チェックリスト一覧

| ファイル | 確認対象 | 適用 |
|---------|---------|------|
| [master.md](master.md) | **総合(これだけで最低限完結)** | 全コンテンツ必須 |
| [seo.md](seo.md) | SEO | Blog記事 |
| [writing.md](writing.md) | 文章(文体・表記) | 全文章 |
| [cta.md](cta.md) | CTA(行動導線) | CTAを持つ全コンテンツ |
| [readability.md](readability.md) | 可読性(構造・見た目) | 全コンテンツ |
| [proofreading.md](proofreading.md) | 誤字脱字・事実確認 | 全コンテンツ |
| [brand.md](brand.md) | ブランド適合 | 全公開物 |
| [tone.md](tone.md) | トーン(声・温度感) | 全公開物 |

## 使い方

1. まず `master.md`(総合)を通す — 短時間ならこれだけでも可
2. コンテンツの種類に応じて個別リストを追加で通す(Blog→`seo.md`、LP→`cta.md` 重点)
3. 検品者は**生成した本人以外のAI**(または翌日の自分)
4. 結果は `03_TEMPLATES` のメタ情報に記録(検品: ◯◯_AI/状態: review→approved)

## 判定ルール

- 全項目✓で `approved`
- 1つでも✗なら差し戻し(STEP 7: 改善へ)。✗項目と修正指示をセットで返す
- 判定に迷う項目は `00_RULES/quality_standards.md` の3条件(価値・誠実・らしさ)に立ち返る

## 運用

- 検品で繰り返し✗になる項目は、`02_PROMPTS/` に禁止指示として先回りで組み込む(検品の上流化)
- チェック項目の追加・削除は `09_ARCHIVE/update_log.md` に記録する
