# HTML Knowledge

## セマンティクスの基礎(要素は「意味」で選ぶ)

| 要素 | 使いどころ |
|------|-----------|
| header / footer / main / nav | ページの大構造(main は1ページ1つ) |
| section | 見出しを持つまとまり |
| article | 単体で成立するコンテンツ(記事・カード) |
| h1〜h6 | 見出し階層。h1は1つ、階層を飛ばさない |
| button / a | 動作は button、遷移は a(divにonclickは禁止) |
| ul / ol / dl | 並列・順序・定義。リストらしきものはリスト要素で |

## メタ情報の必須セット(HTML_TEMPLATE に実装済み)

- title(ページ固有)/ description / canonical
- OGP(og:title / og:description / og:image 1200×630 / twitter:card)
- viewport / charset / favicon / apple-touch-icon

## アクセシビリティ属性の基礎

- 画像:意味のある alt(装飾は alt="")
- フォーム:label と input を for/id で紐付ける
- ランドマーク:nav に aria-label(複数ある場合は必須)
- アイコンだけのボタン:aria-label で名前を付ける
- 独自UIを作る前に、ネイティブ要素(details, dialog等)で済まないか確認する
