# 05 Component Engine — コンポーネントエンジン

<!-- UI部品の規格。同じ役割は同じ見た目・同じ名前・同じ状態設計を全製品で保証する -->

## 入出力契約

| 方向 | 内容 |
|------|------|
| 入力 | 必要なUI(役割ベース:「行動させたい」「選ばせたい」「不安を消したい」) |
| 出力 | コンポーネント仕様(構造・状態・命名)。実装は `03_WEB_STUDIO/CSS_TEMPLATE/components.css` が正 |

## 標準コンポーネント一覧(役割→部品)

| 役割 | コンポーネント | 規格の要点 |
|------|---------------|-----------|
| 行動させる | Button(Primary/Ghost/Text) | Primaryは1画面1つ。ピル型・動詞ラベル・44px以上 |
| まとめて見せる | Card | 角丸12px・影は最小・1カード1メッセージ |
| 選ばせる | Price Card | 3枚構成・おすすめ1枚だけ差別化(枠線+バッジ) |
| 不安を消す | FAQ(details/summary) | JS不要・Q.マーク自動付与・1答100字以内 |
| 目立たせる | Badge | 補足色(support)使用・多用禁止(1画面3個まで) |
| 入力させる | Form Field | ラベル上置き・エラーは直下に「直し方」つき |
| 信頼させる | Voice Card | 実在の声のみ・属性併記・写真は許可済みのみ |

## 状態設計(全インタラクティブ部品に必須)

| 状態 | 規格 |
|------|------|
| Default | 基準の見た目 |
| Hover | 「2px浮く」or「色が深まる」のどちらか1つ(両方はやらない) |
| Focus | フォーカスリング必須(:focus-visible。キーボード利用者対応) |
| Active/Selected | Primaryで明示 |
| Disabled | 原則作らない(押せる状態に設計し直す方を優先) |

## 命名規則(BEM)

```
.price-card / .price-card__price / .price-card--featured
```

- Block__Element--Modifier。ネスト2階層まで
- 名前は役割で付ける(.red-box ではなく .alert)

## 新規コンポーネントの追加ロジック

```
1. 既存部品の組み合わせ・Modifier追加で表現できないか?(できるなら作らない)
2. 3回以上使う見込みがあるか?(1回きりは案件固有CSSに置く)
3. 追加する場合:状態4種+BEM命名+components.css へ還元+この一覧に1行追記
```

## 出力形式

```yaml
component:
  name: / bem: / role:
  states: { hover: , focus: , active: }
  source: components.css の既存 / 新規追加(理由)
```
