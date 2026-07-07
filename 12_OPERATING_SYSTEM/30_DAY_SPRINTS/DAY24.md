# DAY24 — GitHub運用固め(main統合・タグ)

Week4:Automation / GitHub運用 / 初案件化|所要目安:2時間

## 今日のSprint名
Sprint 4-3「リポジトリの大掃除とv1.0タグ」

## 今日の目的
30日間の成果をmainに統合し、会社OS v1.0としてタグを打つ。GITHUB_RULESの完全運用を確認する。

## 完成条件
- 作業ブランチの内容がmainに統合されている(または統合計画が確定)
- タグ `os-v1.0` が打たれている
- ルートREADMEが現状と一致している(フォルダ構成・製品の版)

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md 確認後:
1. git status / git log --oneline で現在のブランチ状況を整理して報告して
2. ルートREADME.md と実際のフォルダ構成のズレを検出し、修正案を提示して
   (承認後に修正)
3. main統合の手順を提示して(私が確認しながら実行する):
   マージ→タグ os-v1.0 作成→push
※コンフリクトが出たら、中身を説明してから解消案を出すこと
```

## テスト方法
統合後、`git log --oneline -5` と `git tag` でmainとタグを確認。GitHub上でも表示確認。

## レビュー方法
10_TNF_PLAYBOOK/03_git.md・04_github.md のルールと今日の作業が一致しているか照合(ルールと実態のズレは即修正)。

## GitHub保存方法
今日の作業自体がGitHub運用。マージ・タグ・push→CHANGELOG追記。

## 推奨コミットメッセージ
```
Day24: mainへ統合しos-v1.0タグを作成(README同期済み)
```

## 実案件での使い方
納品物のバージョン管理も同じ型(納品時にタグ)。クライアントへの「いつの版か」が常に明確になる。

## 完了チェックリスト
- [ ] main統合(または計画確定)
- [ ] os-v1.0タグ
- [ ] README同期
- [ ] CHANGELOG+日報
