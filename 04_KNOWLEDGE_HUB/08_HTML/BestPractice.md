# HTML BestPractice

## ✅ Do

- HTML_TEMPLATE から始める(メタ情報の抜け漏れ防止)
- 見出し階層だけでアウトラインが読める構造にする
- 日付・数値・略語は適切な要素(time, abbr)を検討する
- 画像に width / height を書く(CLS防止)
- FAQ・アコーディオンは details/summary(JS不要)を第一候補に

## ❌ Don't

- div / span だけのマークアップ(意味のある要素を探す)
- h2の次にh4(階層飛ばし)、装飾目的の見出しタグ
- a要素に href なし・「こちら」だけのリンクテキスト
- インラインstyle の多用(CSSへ)
- alt の書き忘れ・全部同じ alt
