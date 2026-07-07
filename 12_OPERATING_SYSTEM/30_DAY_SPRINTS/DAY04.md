# DAY04 — 自社LP③:実装(HTML/CSS)+検品→v1完成

Week1:TNF LP Builder MVP|所要目安:3〜4時間

## 今日のSprint名
Sprint 1-4「TNF自社LP v1 完成」

## 今日の目的
確定コピーをHTML/CSSに実装し、公開可能な状態のLP v1を完成させる。Week1の山場。

## 完成条件
- ブラウザで表示できる完成LP(index.html+style.css)が存在する
- スマホ幅(375px)で崩れがない
- 公開前チェックリスト(06_WEB)を完走している

## Claude Codeに貼る指示
```text
00_COMPANY/CLAUDE.md 確認後、以下を実行してください。
1. 07_CLIENTS/tnf-own/lp-v1/ の copy.md を読み込む
2. 06_PRODUCTS/01_LP_BUILDER/Modules/08_html.md の手順で、
   Templates/lp.html をベースに完成HTMLを生成(同フォルダに index.html)
3. Modules/09_css.md の手順で色を決定し、Templates/style.css を
   コピーして :root の3変数を差し替え(同フォルダに style.css)
4. プレースホルダ({{ }}・【要記入】)の残数を報告すること
```

## テスト方法
index.html をブラウザで開く→PC/スマホ幅(開発者ツール375px)で全セクション確認→リンク(CTA)をクリックして遷移確認。

## レビュー方法
`09_KNOWLEDGE_HUB/06_WEB/Checklist.md`+`08_HTML/Checklist.md` を1項目ずつ通す。✗はその場で修正。

## GitHub保存方法
lp-v1 一式をコミット→push→CHANGELOG追記。**v1完成の記念コミット。**

## 推奨コミットメッセージ
```
Day04: 自社LP v1完成(実装・検品済み・公開可能状態)
```

## 実案件での使い方
このLP自体が営業ツール(制作実績第1号)。「私たちのLPもこのツールで作っています」が最強の証明になる。

## 完了チェックリスト
- [ ] ブラウザで完成LPが表示される
- [ ] スマホ幅で崩れなし・プレースホルダ残ゼロ
- [ ] Webチェックリスト完走
- [ ] コミット&push+CHANGELOG+日報
