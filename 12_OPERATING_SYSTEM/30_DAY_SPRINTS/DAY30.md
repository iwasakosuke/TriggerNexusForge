# DAY30 — 総括と次の30日

Week4:Automation / GitHub運用 / 初案件化|所要目安:3時間

## 今日のSprint名
Sprint 4-9「月次総括とSprint 2(次の30日)設計」

## 今日の目的
30日間を数字で総括し、次の30日(Sprint 2)の計画を作って、止まらない状態でこのスプリントを終える。

## 完成条件
- 月次総括レポートが完成(ダッシュボードの数字+Roadmap 2026目標との差分+KPT)
- 次の30日計画(SPRINT2_PLAN.md)が完成(週テーマ+最初の7日分のDAY概要)
- Roadmap.md のチェックボックスが現状に更新されている

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md 確認後:
1. CEO_AIとして月次総括レポートを作成(材料:dashboard.md・weekly4本・CASE_STUDY)
   保存先:08_DOCUMENTS/monthly/2026-XX.md
2. 00_COMPANY/Roadmap.md の2026年チェックリストを実績で更新
   (発信開始✓・ポートフォリオ✓ など。未達は正直に未達のまま)
3. 12_OPERATING_SYSTEM/30_DAY_SPRINTS/SPRINT2_PLAN.md を作成:
   - 次の30日の週テーマ案(例:W1初案件獲得/W2案件遂行/W3プロダクトv0.9/W4販売準備)
   - 実績と詰まりを踏まえて私と対話しながら調整すること
4. 最後に、この30日で最も価値があった成果物TOP3を選んで理由を添えて
```

## テスト方法
SPRINT2_PLANのDay31(次の初日)を読んで、「明日の朝10時に迷わず始められるか」を確認。

## レビュー方法
総括の数字がダッシュボードと一致しているか照合。KPTのTryがSprint 2に組み込まれているか確認。

## GitHub保存方法
総括+計画+Roadmap更新をコミット→push→CHANGELOG追記→**タグ `sprint1-complete` を作成**。

## 推奨コミットメッセージ
```
Day30: 30日スプリント完走(月次総括・Sprint 2計画・Roadmap更新)
```

## 実案件での使い方
この「30日で会社を立ち上げた記録」自体が、最強の営業コンテンツであり将来の商品の原型。

## 完了チェックリスト
- [ ] 月次総括(数字・KPT)完成
- [ ] SPRINT2_PLAN完成(明日迷わない状態)
- [ ] Roadmap更新・タグ作成
- [ ] コミット&push+CHANGELOG+日報
- [ ] 🎉 自分を労う(30日完走は仕組みの勝利)
