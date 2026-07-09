# lp-v1 — TNF LP制作サービス紹介LP

<!-- LP Builder(06_PRODUCTS/01_LP_BUILDER)のモード実行で、TNF自社のLP制作サービスLPを作る案件 -->

対象:Trigger Nexus ForgeのLP制作サービス(小規模事業者向け)
モード:モードB(モジュール実行)。`06_PRODUCTS/01_LP_BUILDER/Modules/` を01→10の順に進める。

## 進行状況

| Module | 内容 | 状態 |
|--------|------|------|
| 01 入力フォーム | `input.md` | ✅ 完了 |
| 02 ペルソナ | `persona.md` | ✅ 完了(採用:鈴木美穂/美容室オーナー) |
| 03 USP | `usp.md` | ✅ 完了 |
| 04 構成(★承認ゲート) | `structure.md` | ✅ オーナー承認済み(2026-07-08) |
| 05 セクションコピー(★キャッチ選定) | `section_copy.md` | ✅ 完了(採用:候補3「一度、外注で失敗した経営者の方へ。」) |
| 06 CTA | `cta.md` | ✅ 完了 |
| 07 FAQ | `faq.md` | ✅ 完了 |
| 08 HTML | `html.md` + `lp.html` | ✅ 完了(Playwright動作確認済み・JSエラー0件) |
| 09 CSS | `css.md` + `style.css` | ✅ 完了 |
| 10 WordPress | `wordpress.md` | ✅ 完了 |

**全10モジュール完了。次は`Workflow.md`の公開前チェックリスト**(【要記入】埋め・実績の事実確認・特商法表記・スマホ確認)。

## ファイル構成

| ファイル | 役割 |
|---------|------|
| `input.md` | Module 01の出力(project.input) |
| `persona.md` | Module 02の出力(project.persona) |
| `usp.md` | Module 03の出力(project.usp) |
| `structure.md` | Module 04の出力(project.structure)✅承認済み |
| `section_copy.md` | Module 05の出力(project.copy) |
| `cta.md` | Module 06の出力(project.cta) |
| `faq.md` | Module 07の出力(project.faq) |
| `html.md` | Module 08のプレースホルダ対応表・残作業リスト |
| `lp.html` | 完成HTML(実データ) |
| `css.md` | Module 09のカラー選定理由 |
| `style.css` | 完成CSS(実データ。primary色をAA適合に調整済み) |
| `wordpress.md` | Module 10のWordPress貼り付けキット |

## 公開前の残作業(html.md の詳細版)

- [ ] お客様の声×2・実績数字(掲載許可を得た実物)
- [ ] 料金プラン・具体的な納期日数の確定
- [ ] 問い合わせフォームURL・電話番号(任意)・会社概要URLの差し込み
- [ ] OGP画像URLの差し込み
- [ ] スマホ実機での表示確認
- [ ] 特定商取引法に基づく表記(または会社概要)へのリンク確認

以降、Moduleを進めるたびにこの表と進行状況表を更新する。
