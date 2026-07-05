# TNF LP Builder

<!-- TNF初の商品。業種を入力するだけで、成果の出るLPを制作できるAIシステム(MVP v0.1) -->

> **業種を入力する。LPができる。**
> TNF LP Builder は、業種名ひとつから USP・キャッチコピー・LP構成・全文章・
> HTML/CSS・WordPress用テキストまでを生成するAIシステムです。

![Version](https://img.shields.io/badge/version-0.2_MVP-F25C05) ![Type](https://img.shields.io/badge/type-prompt_system-1B2A41) ![Arch](https://img.shields.io/badge/architecture-modular-success)

## これは何か

| 項目 | 内容 |
|------|------|
| 一言 | 業種を入力するだけで、公開可能なLP一式が手に入るAIシステム |
| 形態 | プロンプトエンジン(1本)+HTML/CSSテンプレート+WP出力形式(Markdown中心) |
| 必要環境 | AIチャット(Claude推奨)+テキストエディタ。コーディング知識は不要 |
| 解決する課題 | 「LPを作りたいが、構成もコピーも実装も分からない」を1系統で解決 |

## 10の機能(v0.2:モジュール実装+サンプル入出力つき)

各機能は独立モジュール(`Modules/`)として実装。**すべてのモジュールにサンプル入力とサンプル出力**が付属し、題材(パーソナルジム)が全モジュールを貫通しているので入→出が追跡できます。

| # | 機能 | モジュール |
|---|------|-----------|
| 1 | 入力フォーム(業種・ターゲット・目的・強み) | [Modules/01_input_form.md](Modules/01_input_form.md) |
| 2 | ペルソナ生成(3案→推奨1人+検討度判定) | [Modules/02_persona.md](Modules/02_persona.md) |
| 3 | USP生成(競合の共通項を除外して設計) | [Modules/03_usp.md](Modules/03_usp.md) |
| 4 | LP構成生成(★承認ゲート・不安処理マップ付き) | [Modules/04_structure.md](Modules/04_structure.md) |
| 5 | セクションコピー生成(キャッチ10案込み) | [Modules/05_section_copy.md](Modules/05_section_copy.md) |
| 6 | CTA生成(文言5案・配置・導線判定) | [Modules/06_cta.md](Modules/06_cta.md) |
| 7 | FAQ生成(不安の大きい順5〜7問) | [Modules/07_faq.md](Modules/07_faq.md) |
| 8 | HTMLテンプレート生成 | [Modules/08_html.md](Modules/08_html.md) + `Templates/lp.html` |
| 9 | CSSテンプレート生成(3変数指定式) | [Modules/09_css.md](Modules/09_css.md) + `Templates/style.css` |
| 10 | WordPress向けコンテンツ生成 | [Modules/10_wordpress.md](Modules/10_wordpress.md) + `Templates/wordpress.md` |

**実行モードは2つ**:急ぐなら `Prompt.md`(マスタープロンプト1本)、実案件なら `Modules/` を順に実行(やり直し・差し替え自由)。モジュール間の受け渡しは `project.yaml`(→ `Modules/README.md` のスキーマ)。

## クイックスタート(3ステップ)

```
1. Prompt.md のマスタープロンプトをAIに貼り、業種を入力する
2. STAGE 3(構成)で内容を確認し「承認」と返す
3. 出力されたHTMLを Templates/style.css と同じフォルダに置き、
   【要記入】を自分の事実で埋めて公開する
```

初回の所要時間目安:**60〜90分**(うちAI生成は20分、残りは確認と事実の記入)

## ファイル構成

| ファイル/フォルダ | 内容 |
|------------------|------|
| [Modules/](Modules/) | **10機能のモジュール実装**(入出力契約+プロンプト+サンプル入出力。Webアプリ化対応設計) |
| [Prompt.md](Prompt.md) | クイック実行用マスタープロンプト(1本で連続実行) |
| [Templates/](Templates/) | HTML・CSS・WordPress出力形式(自己完結) |
| [Examples/](Examples/) | 実行例(整体院=最小入力/パーソナルジム=Modules内を貫通) |
| [Requirements.md](Requirements.md) | 要件定義(10機能の受け入れ基準) |
| [Workflow.md](Workflow.md) | 使用手順(クイック/モジュールの2モード) |
| [Roadmap.md](Roadmap.md) | 製品ロードマップ(v0.2 MVP完成→v1.0販売) |

**Webアプリ化しやすさ(設計済み)**: 各モジュール=将来の1 API呼び出し。入力フォーム定義(検証ルール込み)・状態スキーマ(project.yaml)・承認ゲートのUI要件まで `Modules/README.md` に定義してあるため、フロントを付けるだけで移行できる。

## 設計思想

1. **入力は最小、出力は完結** — 必須入力は業種1つ。足りない情報はAIが提案し、事実だけを人に求める
2. **事実はユーザーのもの** — 実績・声・数字は絶対に生成しない。【要記入】枠で正直に空ける
3. **選択肢を減らす** — CSSの差し替えは3変数だけ。決めることが少ないほど完成率が上がる
4. **止まるべき所で止まる** — 構成(STAGE 3)に承認ゲート。全自動より「確認できる半自動」
5. **壊れる部品を持たない** — JS不要・外部依存はフォントのみ・標準ブロックだけのWP出力

## 制約(MVPの割り切り)

- 画像は生成しない(挿入位置と代替テキストの指定まで)
- サーバー・ドメイン・フォーム設置の代行はスコープ外(手順の案内のみ)
- 成果(CVR・売上)の保証はしない — 実績数字は今後のドッグフーディングで蓄積する
