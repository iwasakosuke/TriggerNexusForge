# CSS BestPractice

## ✅ Do

- CSS_TEMPLATE の3ファイルから始める(ゼロから書かない)
- 新しい値が必要になったら、直書きせずトークンに追加してから使う
- 状態(:hover / :focus-visible / :active)をセットで書く
- transition は 150〜300ms / ease-out(→ Brand.md モーション規定)
- 繰り返し使った部品は components.css へ昇格させる

## ❌ Don't

- !important(詳細度設計の敗北宣言。リセット目的以外禁止)
- マジックナンバー(margin-top: 37px のような根拠のない値)
- id セレクタでのスタイリング
- position: absolute の多用によるレイアウト(まずFlex/Grid)
- コンポーネントの中で他コンポーネントの見た目を上書きする
