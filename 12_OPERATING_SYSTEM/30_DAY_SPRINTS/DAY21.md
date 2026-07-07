# DAY21 — Week3締め:営業キット総点検

Week3:Proposal Builder / 営業資料|所要目安:2時間

## 今日のSprint名
Sprint 3-7「週次レビューと営業キットv1.0」

## 今日の目的
営業一式(_sales_kit)を総点検し、「明日問い合わせが来ても対応できる」状態を確認する。

## 完成条件
- _sales_kit の6点セットが揃っている(メニュー/提案書テンプレ/標準条件/
  ポートフォリオ/営業文/商談キット)
- 週次レビュー完成+Proposal Builder v0.2 がリリース記録されている
- 通しテスト(下記)を完走した

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md 確認後:
1. 07_CLIENTS/_sales_kit/ に README.md を作成(6点の一覧と使う順番)
2. CEO_AI形式で週次レビューをドラフト(材料:今週のCHANGELOG・日報)
3. 06_PRODUCTS/07_RELEASES/release_log.md に Proposal Builder v0.2
   (実戦テスト済み・営業キット統合)を記録し、Roadmapも更新
```

## テスト方法
通しシミュレーション:「問い合わせメール受信」を起点に、一次返信→ヒアリング準備→提案書ドラフトまでを教材どおりに30分で通せるか。

## レビュー方法
詰まった箇所=キットの穴。その場で補修してからWeek3を閉じる。

## GitHub保存方法
_sales_kit一式+レビューをコミット→push→CHANGELOG追記。

## 推奨コミットメッセージ
```
Day21: Week3完了(営業キットv1.0・Proposal Builder v0.2)
```

## 実案件での使い方
このキットがそのまま「営業部門」。Week4で入口(導線)をつなげば営業が回り始める。

## 完了チェックリスト
- [ ] 6点セット+README
- [ ] 通しテスト30分完走
- [ ] 週次レビュー+リリース記録
- [ ] コミット&push+CHANGELOG+日報
