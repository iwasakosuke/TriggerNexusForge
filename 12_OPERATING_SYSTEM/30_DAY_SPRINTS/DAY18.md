# DAY18 — ポートフォリオ整備

Week3:Proposal Builder / 営業資料|所要目安:3時間

## 今日のSprint名
Sprint 3-4「実績の見せ方を作る」

## 今日の目的
Week1〜2の成果物(自社LP・公開コンテンツ・ツール)を「実績」として見せられる形に整える。

## 完成条件
- ポートフォリオ文書が完成(実績3点以上:自社LP/公開記事/LP Builder+Core Engine)
- 各実績に「何を・どう作ったか・数字」が付いている(事実のみ)
- 提案書から参照できる形(_sales_kit/portfolio.md)になっている

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md 確認後:
1. 以下を材料にポートフォリオ文書を作成して:
   - 07_CLIENTS/tnf-own/lp-v1/(自社LP)
   - 02_CONTENT_FACTORY/05_OUTPUTS/ai_company/(公開コンテンツ+数字)
   - 06_PRODUCTS/00_CORE_ENGINE・01_LP_BUILDER(自社開発ツール)
2. 各実績:制作物の概要/工夫した点/制作時間・公開後の数字(事実のみ)
3. 「実績が少ない時期の見せ方」として、過程の公開(30日チャレンジ)への
   リンクも組み込むこと
4. 保存先:07_CLIENTS/_sales_kit/portfolio.md
```

## テスト方法
見込み客の目テスト:「この実績を見て、20万円を払う不安が減るか」。数字のない実績には数字を足す(なければ制作時間でも可)。

## レビュー方法
Brand チェック(07_CHECKLIST/brand.md):誇張ゼロ・トーン適合を確認。

## GitHub保存方法
portfolio.md をコミット→push→CHANGELOG追記。

## 推奨コミットメッセージ
```
Day18: ポートフォリオ整備(実績3点+数字)
```

## 実案件での使い方
提案書の「実績」セクションと商談での画面共有資料。案件完了ごとに1実績追加していく。

## 完了チェックリスト
- [ ] 実績3点以上(数字つき)
- [ ] Brandチェック通過
- [ ] コミット&push+CHANGELOG+日報
