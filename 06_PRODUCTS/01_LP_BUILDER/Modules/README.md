# Modules — LP Builder モジュールアーキテクチャ(v0.2)

<!-- 10機能を独立モジュールに分割。1モジュール=将来のWebアプリの1関数(APIコール)になる設計 -->

## アーキテクチャ

各モジュールは「**入力(前工程の成果物)→ プロンプト実行 → 出力(次工程への成果物)**」の
純粋な変換器として設計されている。モジュール間の受け渡しは `project.yaml`(案件データ)で行う。

```
[01 入力フォーム] → project.yaml(入力部)
      ↓
[02 ペルソナ] → [03 USP] → [04 LP構成]★承認 → [05 セクションコピー]
      ↓                                              ↓
[06 CTA] ← ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
[07 FAQ] ← ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘
      ↓
[08 HTML] + [09 CSS] + [10 WordPress](3つは並行実行可)
```

## モジュール一覧

| # | モジュール | 入力 | 出力 |
|---|-----------|------|------|
| [01_input_form](01_input_form.md) | ユーザー記入(業種・ターゲット・目的・強み) | `project.input` |
| [02_persona](02_persona.md) | `project.input` | `project.persona` |
| [03_usp](03_usp.md) | `input` + `persona` | `project.usp` |
| [04_structure](04_structure.md) | `input` + `persona` + `usp` | `project.structure` ★承認ゲート |
| [05_section_copy](05_section_copy.md) | 上記すべて | `project.copy` |
| [06_cta](06_cta.md) | `persona` + `copy` | `project.cta` |
| [07_faq](07_faq.md) | `persona` + `input` | `project.faq` |
| [08_html](08_html.md) | `copy` + `cta` + `faq` | 完成HTML(`Templates/lp.html` 準拠) |
| [09_css](09_css.md) | `input.industry` | CSS変数指定(`Templates/style.css` 用) |
| [10_wordpress](10_wordpress.md) | `copy` + `cta` + `faq` | WP貼り付け用テキスト(`Templates/wordpress.md` 準拠) |

## 案件データ(project.yaml)スキーマ

全モジュールが読み書きする「状態」。Webアプリ化時はこれがそのままDBレコード/JSONになる。

```yaml
project:
  meta:
    id: LP-YYYYMMDD-01
    status: input / persona / usp / structure_approved / copy / build / done
  input:        # ← Module 01 が書く
    industry:   # 業種(必須)
    target:     # ターゲット(任意)
    goal:       # 目的:体験申込 / 問い合わせ / 購入 / 資料請求 / 予約
    strengths:  # 強み(箇条書き・事実のみ)
    offer:      # オファー(任意)
    facts:      # 実績・お客様の声(任意・事実のみ)
  persona:      # ← Module 02
  usp:          # ← Module 03
  structure:    # ← Module 04(承認済みフラグ付き)
  copy:         # ← Module 05
  cta:          # ← Module 06
  faq:          # ← Module 07
```

## 実行モード(2通り)

| モード | 方法 | 向いている人 |
|--------|------|-------------|
| **クイック実行** | `../Prompt.md` のマスタープロンプト1本で全モジュールを連続実行 | まず1本作りたい人 |
| **モジュール実行** | 各モジュールのプロンプトを個別に実行(やり直し・差し替えが自由) | 実案件・品質を追い込む人 |

モジュール実行では、前モジュールの出力(サンプル出力と同じ形式)を次のプロンプトの入力欄に貼る。

## Webアプリ化への対応(設計済みの逃げ道)

| 現在(Markdown運用) | 将来(Webアプリ) |
|--------------------|-----------------|
| 01 入力フォーム(Markdown記入欄) | HTMLフォーム(項目・必須/任意・検証ルールは 01 に定義済み) |
| 各モジュールのプロンプト | プロンプトテンプレート(変数注入してLLM API呼び出し) |
| project.yaml(手動受け渡し) | セッションDB(スキーマは上記のまま) |
| 承認ゲート(人が「承認」と返す) | 承認UI(構成表の編集+確定ボタン) |
| Templates/lp.html への流し込み | サーバーサイドでのテンプレートレンダリング |

**モジュールの入出力契約を変えなければ、中身(プロンプト改善)はいつでも差し替え可能。**

## 共通ルール(全モジュールに適用)

- 事実の捏造禁止(未入力は【要記入】枠)/ 誇大表現禁止 / 業種規制に【規制注意】
- 出力は必ず「出力契約」のYAML/表形式に従う(次モジュールが機械的に受け取れる形)
- サンプルは全モジュール共通の題材「パーソナルジム」で通してある(入→出の追跡ができる)
