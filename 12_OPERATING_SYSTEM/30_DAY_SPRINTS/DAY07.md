# DAY07 — Week1締め:週次レビュー+リリース

Week1:TNF LP Builder MVP|所要目安:2時間

## 今日のSprint名
Sprint 1-7「週次レビューとLP Builder v0.3リリース」

## 今日の目的
Week1の成果を数字で振り返り、LP Builderをv0.3としてリリース記録する。

## 完成条件
- 週次レビュー(CEO_AI形式)が書けている(進捗・数字・学び・来週の最優先3つ)
- release_log.md に LP Builder v0.3 が記録されている
- Week2の初日(DAY08)を眺めて、発信テーマの候補を1つ決めた

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md 確認後:
1. 01_AI_EMPLOYEES/CEO_AI/Workflow.md の週次レビュー形式で、
   今週のCHANGELOG・日報・コミットログ(git log --oneline)から
   週次レビューのドラフトを作成して(保存先:08_DOCUMENTS/weekly/)
2. 06_PRODUCTS/07_RELEASES/release_log.md に LP Builder v0.3
   (ドッグフーディング完了・改善反映)のエントリを追記して
3. 06_PRODUCTS/01_LP_BUILDER/Roadmap.md の v0.3 の状態を更新して
```

## テスト方法
週次レビューの「数字」欄が空でないこと(所要時間計測・コミット数など、今週の実数が入っているか)。

## レビュー方法
来週の最優先3つが「動詞+完了条件」になっているか確認(「頑張る」系は書き直し)。

## GitHub保存方法
週次レビュー+リリース記録をコミット→push→CHANGELOG追記→`git log --oneline` で1週間を眺める。

## 推奨コミットメッセージ
```
Day07: Week1完了(週次レビュー・LP Builder v0.3リリース記録)
```

## 実案件での使い方
この週次レビューの型が、クライアントへの月次報告書の原型になる。

## 完了チェックリスト
- [ ] 週次レビュー作成(数字入り)
- [ ] v0.3リリース記録
- [ ] Week2のテーマ候補を1つ決めた
- [ ] コミット&push+CHANGELOG+日報
