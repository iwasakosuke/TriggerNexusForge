# CSS Knowledge

## TNFのCSS設計(3層構造)

```
tokens.css(デザイントークン=CSS変数)← Brand.md と同期。ここだけ差し替え可
  ↓
reset.css(ブラウザ差異のリセット+ベース)
  ↓
components.css(汎用部品)+ style.css(案件固有)
```

- **色・サイズ・余白は必ず var() 経由**。HEX・pxの直書きは原則禁止
- クライアント案件のブランド対応は tokens.css の値の差し替えのみで行う

## 命名規則:BEM

```css
.price-card {}                /* Block */
.price-card__price {}         /* Element(__) */
.price-card--featured {}      /* Modifier(--) */
```

- ネストを深くしない(セレクタは2階層まで)。詳細度の戦争を起こさない
- ユーティリティ(.text-center 等)は少数精鋭。ユーティリティだらけにしない

## レイアウトの基礎

- 基本は Flexbox(1方向)と Grid(2方向)。float は使わない
- カード列は `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`
- 幅は max-width+padding-inline。高さは固定しない(内容に任せる)
- レスポンシブはモバイルファースト+ブレークポイント最小限(768pxを基本)

## 単位の使い分け

- 文字:rem / 余白:remベースのトークン / 線:px / レイアウト:% と fr
- 44px(タップ領域)等のアクセシビリティ数値は死守
