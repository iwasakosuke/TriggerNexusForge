# TNF Design Engine

<!-- 全デザイン系AIプロダクトが共通利用するデザインエンジン。「デザインの判断」を10のエンジンに分解した中枢 -->

> **デザインの判断を、製品ごとに再発明しない。**
> TNF Design Engine は、色・文字・レイアウト・コンポーネント等の「デザイン判断ロジック」を
> 10のエンジンに分解した共通基盤です。すべてのデザイン系プロダクトはここを参照して動きます。

## アーキテクチャ

```
                    ┌─────────── TNF Design Engine ───────────┐
                    │ 01 Color   02 Typography  03 Layout      │
入力                │ 04 Grid    05 Component   06 Icon        │        出力
(業種・ペルソナ・  →│ 07 Motion  08 Responsive  09 A11y        │→  Theme(テーマ定義)
 媒体・ブランド)    │ 10 Export Rules                           │   +各種スペック
                    └───────────────────────────────────────────┘
                                        ↓ 利用
        ┌──────────────┬───────────────┬──────────────────┬──────────────┐
   LP Builder     Banner Builder   Corporate Builder   Content Factory
  (LP一式生成)  (バナー生成:将来) (企業サイト:将来)  (図解・サムネ)
```

- **エンジン** = 判断ロジック(入力→ルール適用→出力)。データ(具体値)はテーマに置く
- **テーマ** = エンジン群が出力する設計値の束(下記スキーマ)。TNF標準テーマ=`Brand.md` 準拠
- 製品は「エンジンに聞く」だけ。デザインルールを製品側にコピーしない(単一情報源)

## エンジン一覧

| # | エンジン | 決めること |
|---|---------|-----------|
| [01_color_engine.md](01_color_engine.md) | カラー | 役割ベースのパレット生成・比率・コントラスト検証 |
| [02_typography_engine.md](02_typography_engine.md) | タイポグラフィ | 書体・タイプスケール・行間・和文組版 |
| [03_layout_engine.md](03_layout_engine.md) | レイアウト | 視覚階層・余白リズム・視線設計 |
| [04_grid_engine.md](04_grid_engine.md) | グリッド | 8pxグリッド・カラム・キャンバス(バナー)設計 |
| [05_component_engine.md](05_component_engine.md) | コンポーネント | UI部品の規格・状態・命名 |
| [06_icon_engine.md](06_icon_engine.md) | アイコン | スタイル統一・サイズ・使用ルール |
| [07_motion_engine.md](07_motion_engine.md) | モーション | 時間・イージング・許可パターン |
| [08_responsive_engine.md](08_responsive_engine.md) | レスポンシブ | ブレークポイント・可変タイポ・媒体別制約 |
| [09_accessibility.md](09_accessibility.md) | アクセシビリティ | 非交渉の品質基準(全エンジンを横断検証) |
| [10_export_rules.md](10_export_rules.md) | 書き出し | 製品別の出力形式・命名・品質ゲート |

## テーマスキーマ(エンジン群の出力=製品への入力)

```yaml
theme:
  meta: { name: , client: , base: tnf-default }
  color:      # ← 01 Color Engine が出力
    primary: / secondary: / base: / text: / muted: / border:
    semantic: { success: , error: }
  typography: # ← 02 Typography Engine
    heading: / body: / mono:
    scale: [44, 32, 24, 18, 16, 14, 12]
    leading: { heading: 1.3, body: 1.8 }
  space:      # ← 03 Layout / 04 Grid
    unit: 8
    section: 96
    container: { default: 1080, narrow: 720 }
  radius: { pill: 9999, card: 12, small: 6 }   # ← 05 Component
  motion: { duration: 200, easing: ease-out }   # ← 07 Motion
```

- **TNF標準テーマ**の値は `00_COMPANY/Brand.md` が正典(実装は `03_WEB_STUDIO/CSS_TEMPLATE/tokens.css`)
- クライアント案件・製品購入者は、このスキーマの値を差し替えた**カスタムテーマ**を作る

## 製品からの利用方法

| 製品 | 利用するエンジン | 利用例 |
|------|-----------------|--------|
| **LP Builder** | 01, 02, 03, 05, 08, 09, 10 | Module 09(CSS)が Color Engine の生成ロジックで3色決定 |
| **Banner Builder**(将来) | 01, 02, 04, 06, 09, 10 | キャンバスグリッド+書き出し仕様(サイズ・容量) |
| **Corporate Builder**(将来) | 全エンジン | 複数ページのテーマ一貫性を Theme で担保 |
| **Content Factory** | 01, 02, 04, 06, 09, 10 | 図解・サムネイル(3色以内・表紙13字)の設計基準 |

**利用の作法**: 製品のプロンプトには「デザイン判断は Design Engine ◯◯に従う」と参照を書き、
ルール本文はコピーしない。エンジンを更新すれば全製品に反映される。

## 上位文書との関係

```
00_COMPANY/Brand.md(TNFブランドの憲法=TNF標準テーマの値の出所)
   > DESIGN_ENGINE(判断ロジック。ブランド非依存の普遍ルール+テーマ差し替え)
      > 各製品のデザイン処理(エンジンを参照するだけ)
```

`09_KNOWLEDGE_HUB/01_DESIGN` `02_UI_UX` は人間向けの学習用。エンジンは**AI・製品向けの実行用**。
各エンジンの詳細カタログ(色・スタイル・タイポ・UXルール等)は `09_KNOWLEDGE_HUB` の `REFERENCE/` にある。
エンジンは「判断ロジック+デフォルト値」、REFERENCEは「選択肢を広げたい時に引く辞書」という役割分担。

## 外部知見の取り込み実績

| 日付 | 取り込み元 | 内容 | 反映先 |
|------|-----------|------|--------|
| 2026-07-08 | `ui-ux-pro-max` スキル(npm: uipro-cli) | 色・スタイル・タイポ・UXルール・実装スタック等 | `09_KNOWLEDGE_HUB` 各REFERENCE + 01/06/09エンジンの修正(詳細:`08_DOCUMENTS/reports/2026-07-08_ui-ux-pro-max統合レポート.md`) |

外部ツール・スキルを導入した場合、**そのツールへの依存を残さず**、知見をKnowledge Hubへ再構築してから
エンジン/製品に反映する(ツールが使えなくなっても会社の知識が失われない設計)。

## 運用ルール

1. デザイン判断のルールを製品側に書きたくなったら、それはエンジンに追記すべきサイン
2. エンジンの変更は全製品に波及する。変更時は利用製品の影響確認+`06_PRODUCTS/07_RELEASES` に記録
3. 09(アクセシビリティ)は他のすべてのエンジンに優先する(非交渉)
