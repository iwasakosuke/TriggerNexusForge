# DAY22 — Automation Hub開通

Week4:Automation / GitHub運用 / 初案件化|所要目安:2〜3時間

## 今日のSprint名
Sprint 4-1「案件フローの実運用開始」

## 今日の目的
Automation Hub(05_AUTOMATION)を「文書」から「動いている仕組み」に変える。日次ブリーフィング運用を開始する。

## 完成条件
- PM_AIの日次ブリーフィングを今朝から開始した(今日が1回目)
- 案件ログ(10_LOGS/project_log.md)に自社案件(tnf-own)が記録されている
- 明日以降の朝ルーティンにブリーフィングが組み込まれた

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md 確認後:
1. 01_AI_EMPLOYEES/PM_AI/Prompt.md でPM_AIとして動作して
2. 現在の状況(30日スプリント進行中・自社LP完成・発信2テーマ・営業キット完成)から
   今日の日次ブリーフィング(最優先3つ・案件状況・判断待ち)を作成して
3. 05_AUTOMATION/10_LOGS/project_log.md に tnf-own 案件のこれまでの
   状態遷移を遡って記録して
4. 12_OPERATING_SYSTEM/DAILY_ROUTINE.md の朝ルーティンに
   「PM_AIブリーフィング」の具体的な起動手順を1行追記して
```

## テスト方法
ブリーフィングの「最優先3つ」が今日のDAY22の完成条件と一致しているか確認(ズレていたら入力情報が足りない)。

## レビュー方法
master_flow.md の状態定義と project_log の記録が整合しているか照合。

## GitHub保存方法
ログ+ルーティン更新をコミット→push→CHANGELOG追記。

## 推奨コミットメッセージ
```
Day22: Automation Hub実運用開始(日次ブリーフィング・案件ログ)
```

## 実案件での使い方
実案件が来た瞬間、同じログ・同じブリーフィングに載せるだけ(仕組みが先にあるから慌てない)。

## 完了チェックリスト
- [ ] 日次ブリーフィング1回目実施
- [ ] project_log記録
- [ ] 朝ルーティン更新
- [ ] コミット&push+CHANGELOG+日報
