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
| 04 構成(★承認ゲート) | `structure.md` | ✅ オーナー承認済み(2026-07-09) |
| 05 セクションコピー(★キャッチ選定) | `section_copy.md` / `copy.md`(DAY03統合版) | ✅ 完了(採用:候補3「一度、外注で失敗した経営者の方へ。」10案中TOP3を理由付きで記録) |
| 06 CTA | `cta.md` / `copy.md` | ✅ 完了 |
| 07 FAQ | `faq.md` / `copy.md` | ✅ 完了(7問。実績非開示への不安に答える1問を追加) |
| 08 HTML | `html.md` + `index.html` | ✅ 完了(Playwright動作確認済み・JSエラー0件。DAY04でWeb標準命名の`index.html`に改名) |
| 09 CSS | `css.md` + `style.css` | ✅ 完了 |
| 10 WordPress | `wordpress.md` | ✅ 完了 |

**全10モジュール完了。DAY04で`06_WEB`/`08_HTML`チェックリストの検品も完了**(詳細:`checklist_review.md`)。

## 検品記録

**DAY02(USP検品)**:別セッション(サブエージェント)で`TEMPLATES/REVIEW_TEMPLATE.md`の手順に沿って検品(2026-07-09)。
重点確認事項(競合の共通項と被っていないか)はクリア。禁止事項(捏造・NGワード・機密情報・未処理プレースホルダ)も該当なし。

**総合判定:条件付き承認** → 条件(「テンプレ感のないLP」と「業種別プリセット」の論理矛盾リスクの解消)を反映済み。
`usp.md`のサポートポイントと`section_copy.md`/`index.html`の「対応業種と勝ちパターン」セクション両方に
「プリセットは出発点であり店舗ごとにカスタマイズする」旨の一文を追加した。

**DAY03(copy.md検品+音読テスト)**:別セッションで`copy.md`を検品(2026-07-10)。禁止事項該当なし・
【要記入】0件・音読テスト全項目パス(FVキャッチ・3安心要素・最終CTA見出し・ボタン文言、つかえる箇所なし)。

**総合判定:条件付き承認** → 条件2点を反映済み:
1. 「実績パターン」という語が、proofセクションの「実績はまだない」という開示と矛盾して見えるリスク
   → 全ファイルで「勝ちパターン」に統一(業種プリセットを指す語と、クライアント実績を指す「実績」を分離)
2. FAQ見出しの「6問」表記が実数(7問)とズレていた誤記 → 「7問」に修正

**DAY04(06_WEB/08_HTML Checklist検品)**:2026-07-11実施。Playwrightによる機械チェック+目視レビュー。
`<main>`ランドマークの欠落を発見・修正。OGP画像・favicon・canonical URL・アクセス解析は実アセット/実URL待ちのため保留
(捏造せず【要記入】または未着手のまま記録)。詳細:`checklist_review.md`。

## ファイル構成

| ファイル | 役割 |
|---------|------|
| `input.md` | Module 01の出力(project.input) |
| `persona.md` | Module 02の出力(project.persona) |
| `usp.md` | Module 03の出力(project.usp) |
| `structure.md` | Module 04の出力(project.structure)✅承認済み |
| `section_copy.md` | Module 05の出力(project.copy) |
| `cta.md` | Module 06の出力(project.cta) |
| `faq.md` | Module 07の出力(project.faq)。7問 |
| `copy.md` | DAY03統合版:Module 05→06→07を1ファイルに(10案キャッチ+TOP3理由付き) |
| `html.md` | Module 08のプレースホルダ対応表・残作業リスト |
| `index.html` | 完成HTML(実データ) |
| `css.md` | Module 09のカラー選定理由 |
| `style.css` | 完成CSS(実データ。primary色をAA適合に調整済み) |
| `wordpress.md` | Module 10のWordPress貼り付けキット |
| `checklist_review.md` | DAY04:06_WEB/08_HTML Checklist検品記録 |

## 公開前の残作業(html.md の詳細版)

- [x] お客様の声・実績数字(オーナー方針決定・2026-07-10):「実績、募集中です」と正直に開示する構成に変更
- [x] 料金プラン・納期(オーナー確定・2026-07-09):5,000円(実績作りのための特別価格)/ 最短3日〜
- [x] 問い合わせ先(オーナー確定・2026-07-11):mailto:0903wimper@gmail.com / tel:08084145945 / 会社概要 http://trgger0307.com/
- [x] `<main>`ランドマークの欠落を修正(2026-07-11、08_HTML Checklist検品で発見)
- [ ] OGP画像URLの差し込み(未確定。1200×630の画像素材が必要)
- [ ] favicon の設定(素材未作成)
- [ ] canonical URLの設定(このLPの公開先パスが未確定)
- [ ] アクセス解析(GA等)の設置
- [ ] スマホ実機での表示確認(375px幅はPlaywrightで横スクロールなしを確認済み。実機確認は別途)
- [ ] 特定商取引法に基づく表記(会社概要URLは確定。表記内容自体の確認は別途)

以降、Moduleを進めるたびにこの表と進行状況表を更新する。
