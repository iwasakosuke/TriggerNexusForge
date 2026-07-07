# DAY08 — 発信工場の起動:入力シート作成

Week2:Content Factory実運用|所要目安:2時間

## 今日のSprint名
Sprint 2-1「テーマ1号の入力シート」

## 今日の目的
Content Factoryに最初のテーマを投入する。テーマは「LP Builderを自作して自社LPを作った話」(Week1の一次体験=最高の原材料)。

## 完成条件
- 入力シートが完成(一次体験・数字・ターゲット・目的・媒体・CTA)
- 保存場所:`02_CONTENT_FACTORY/05_OUTPUTS/ai_company/T-(日付)-01_lp-builder/_input.md`
- 競合分析メモ(差別化3行)ができている

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md 確認後:
1. 02_CONTENT_FACTORY/01_INPUT/input_template.md をコピーして
   05_OUTPUTS/ai_company/T-(今日の日付)-01_lp-builder/_input.md を作成
2. 私にヒアリングしながら埋めて。一次体験はWeek1の実績
   (自社LP完成・所要時間の実測・詰まりと解決)を使う
3. 目的は「認知」、媒体は note(軸)+X(派生)にチェック
4. 04_WORKFLOWS/content_pipeline.md の STEP 2(競合分析)の
   観点で、同テーマの発信との差別化メモを3行で作って
```

## テスト方法
入力シートの「一次体験」欄を読んで、数字が2つ以上入っているか確認(なければWeek1の記録から拾う)。

## レビュー方法
「悩みは本人の言葉か」チェック:ターゲットの悩みが抽象語(効率化・課題)になっていたら書き直し。

## GitHub保存方法
入力シートをコミット→push→CHANGELOG追記。

## 推奨コミットメッセージ
```
Day08: Content Factory始動(テーマ1号の入力シート完成)
```

## 実案件での使い方
コンテンツ制作代行の案件では、この入力シートがクライアントへのヒアリングシートになる。

## 完了チェックリスト
- [ ] 入力シート完成(数字2つ以上)
- [ ] 差別化メモ3行
- [ ] コミット&push+CHANGELOG+日報
