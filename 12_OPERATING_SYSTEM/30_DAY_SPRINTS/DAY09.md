# DAY09 — 軸コンテンツ:note記事(構成→本文)

Week2:Content Factory実運用|所要目安:3時間

## 今日のSprint名
Sprint 2-2「軸コンテンツの執筆」

## 今日の目的
テーマ1号の軸コンテンツ(note記事)を、構成→承認→本文の2段階で完成させる。

## 完成条件
- note記事(2,000〜3,000字)が draft 完成
- 構成承認を経ている(いきなり本文を書いていない)
- 03_TEMPLATES/note.md 形式で保存(メタ情報記入済み)

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md 確認後:
1. 05_OUTPUTS/ai_company/T-…-01_lp-builder/_input.md を読み込む
2. 02_CONTENT_FACTORY/02_PROMPTS/note.md の Prompt 1(体験記事)を使い、
   まず構成案(タイトル3案+見出し構成)だけ出して停止 → 私の承認を待つ
3. 承認後、本文を執筆。02_CONTENT_FACTORY/00_RULES/writing_rules.md を厳守
4. 03_TEMPLATES/note.md の形式で同フォルダに note.md として保存
   (状態:draft、生成:Copywriter_AI と記入)
```

## テスト方法
冒頭3行だけ読んで「続きを読みたいか」を自問。数字が冒頭にあるか確認。

## レビュー方法
REVIEW_TEMPLATE で別セッション検品(チェックリスト:07_CHECKLIST/master.md+writing.md)。状態を draft→review に更新。

## GitHub保存方法
note.md をコミット→push→CHANGELOG追記。

## 推奨コミットメッセージ
```
Day09: テーマ1号の軸コンテンツ(note記事)draft完成
```

## 実案件での使い方
「構成→承認→本文」の2段階が、記事制作代行での標準工程(構成段階でクライアント確認を挟む)。

## 完了チェックリスト
- [ ] 構成承認→本文の順で作った
- [ ] 検品済み(状態:review)
- [ ] コミット&push+CHANGELOG+日報
