# Module 09 出力 — カラー変数(project.css)

<!-- 06_PRODUCTS/01_LP_BUILDER/Modules/09_css.md の手順で input.industry + persona から生成 -->

## カラー方向の判断

このLPはTNF自身のサービスLPのため、TNFブランドカラー(`00_COMPANY/Brand.md`)をそのまま採用する
(業種の定石表を参照する対象ではなく、自社ブランドが正典)。

ただし `Templates/style.css` の `.btn` は `--color-primary` を背景に白文字を載せる構造のため、
TNFのブランドオレンジ `#F25C05` をそのまま使うと**白文字コントラストが3.33:1でAA未達**になる
(Core Engine v0.1のUI再設計時に発覚したのと同じ問題。→ `04_DESIGN_SYSTEM/DESIGN_ENGINE/01_color_engine.md`)。
そのため `--color-primary` はTNFの `primary-dark` 相当(`#C94A02`)を採用する。

persona(鈴木美穂・美容室オーナー)は「圧の強い訴求への警戒」は特に無いため、彩度・トーンの補正は不要。

## 確定3変数

```css
:root {
  --color-primary: #C94A02;   /* TNF primary-dark。白文字コントラスト4.70:1でAA適合 */
  --color-secondary: #1B2A41; /* TNFスチールネイビー。白文字コントラスト14.44:1 */
  --color-base: #F7F5F2;      /* TNFオフホワイト */
}
```

**選定理由**: 自社ブランドLPのため色の方向自体は固定(Brand.md準拠)。唯一の調整は、テンプレートの
ボタン構造(白文字オンprimary)に対してAA基準を満たす濃度に補正したこと。彩度・色相はTNFの
「静かな熱」(鋼×炉)の世界観をそのまま踏襲する。

**代替案**: `--color-primary: #F25C05`(TNF標準オレンジそのまま)— ロゴ・名刺等の色と完全一致させたい場合。
ただしボタンの白文字コントラストがAA未達になるため、採用する場合は `.btn` の文字色を `var(--color-secondary)` に
変更するなど、テンプレート側の追加調整が必要(今回は不採用)。

→ `Templates/style.css` の `:root` 冒頭3行を差し替えて `08_html.md` と組み合わせて配置する
