# CSS_TEMPLATE — 共通CSSテンプレート

<!-- 全Web制作物の土台になるCSSセット。Brand.md のデザイントークンをコードに落としたもの -->

Trigger Nexus Forge のWeb制作で共通利用するCSSテンプレートです。
`Brand.md` のカラー・フォント規定を CSS変数(デザイントークン)として実装しています。

## ファイル構成

| ファイル | 役割 | 読み込み順 |
|---------|------|:---:|
| `tokens.css` | デザイントークン(色・フォント・余白・角丸などのCSS変数) | 1 |
| `reset.css` | ブラウザ差異のリセット+ベーススタイル | 2 |
| `components.css` | 汎用コンポーネント(ボタン・カード・セクション等) | 3 |

## 使い方

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/style.css"> <!-- 案件固有のスタイル -->
```

## ルール

- 色・フォントは直接値を書かず、必ず `var(--color-primary)` などトークン経由で使う
- クライアント案件でブランドカラーが異なる場合は、`tokens.css` の変数値だけを差し替える(コンポーネントは共通のまま使える)
- 新しい汎用コンポーネントを作ったら `components.css` に還元する
