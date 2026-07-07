# DAY01 — キックオフ:武器の点検

Week1:TNF LP Builder MVP|所要目安:2〜3時間

## 今日のSprint名
Sprint 1-1「環境確認と全体把握」

## 今日の目的
30日間で使う道具(LP Builder・Core Engine・運営OS)を実際に触り、「何がどこにあるか」を体に入れる。

## 完成条件
- Core Engine(Webアプリ)がブラウザで動き、1回生成を実行した
- LP Builder の README と Modules/README を読み、2モードの違いを説明できる
- CHANGELOG.md に最初の1行を書いた

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md を確認してから、以下を実行してください。
1. 06_PRODUCTS/00_CORE_ENGINE/README.md の起動方法を教えて
2. 06_PRODUCTS/01_LP_BUILDER/ の構成(モードA/Bの違い、Modulesの流れ)を
   初見の私に3分で説明できる形に要約して
3. 12_OPERATING_SYSTEM/START_HERE.md の30日地図を表示して
```

## テスト方法
`06_PRODUCTS/00_CORE_ENGINE/app/index.html` をダブルクリック→業種「整体院」でGenerate→6タブすべてに出力が表示されればOK。

## レビュー方法
自分に説明テスト:「LP BuilderのモードAとBの使い分け」を口頭で30秒で言えるか。言えなければ該当READMEを再読。

## GitHub保存方法
今日はファイル変更が少ない想定。CHANGELOG追記をコミット→push(手順:`../GITHUB_RULES.md`)。

## 推奨コミットメッセージ
```
Day01: 30日スプリント開始(環境確認・Core Engine動作確認)
```

## 実案件での使い方
案件が来たら今日の作業がそのまま「デモ」になる:Core Engineを見込み客の業種で動かして見せる=営業ツール。

## 完了チェックリスト
- [ ] Core Engineで1回生成した
- [ ] LP Builderの2モードを説明できる
- [ ] CHANGELOG.md に1行書いた
- [ ] コミット&pushした
- [ ] 日報を書いた(TEMPLATES/DAILY_REPORT_TEMPLATE.md)
