<div align="center">

# 🔥 Trigger Nexus Forge

**一人で10人分の仕事ができる、AI制作会社OS**

*個人の創造力を、企業の生産力へ。*

![Status](https://img.shields.io/badge/status-active-success)
![Roadmap](https://img.shields.io/badge/roadmap-2026%20%2F%205--year%20plan-F25C05)
![Docs](https://img.shields.io/badge/docs-Japanese-1B2A41)

</div>

---

## 📖 会社概要

**Trigger Nexus Forge(トリガー・ネクサス・フォージ)** は、AIエージェントを「社員」として組織化し、オーナー1名で運営するAI制作会社です。

このリポジトリは、その会社全体を管理する **「会社OS」** です。経営文書・AI社員の定義・制作テンプレート・プロンプト集・自動化の仕組みまで、会社を動かすすべてをコードとMarkdownで管理しています。

| 項目 | 内容 |
|------|------|
| 事業内容 | コンテンツ制作(記事・SNS・動画台本)/ Web制作(LP・サイト)/ 業務自動化 / 自社プロダクト販売 |
| 体制 | オーナー1名 + AI社員6名(経営参謀・営業・デザイナー・コピーライター・SNS・PM) |
| 運営方針 | AI First, Human Final — 作業はAI、判断と責任は人間 |

### 社名の由来

| 要素 | 意味 |
|------|------|
| **Trigger** | 行動と変化の「引き金」。クライアントと自身の成長のきっかけになる |
| **Nexus** | 人・AI・仕組みの「結節点」。バラバラの力をつなぎ、一つの成果に束ねる |
| **Forge** | 「鍛造所」。素材(アイデア)を鍛え、価値ある制作物へと打ち上げる |

## 🎯 ビジョン

> **「個人の創造力を、企業の生産力へ。」**
>
> AIと人間が織りなす新しい働き方によって、一人のクリエイターが制作会社一社分の価値を生み出せる世界をつくる。

- **「一人 = 一社」が当たり前になる世界** — 組織の規模ではなく、仕組みの質が競争力になる
- **制作の民主化** — 高品質な制作物が、規模や予算に関係なく手に届く
- **創造性への回帰** — 繰り返し作業はAIに任せ、人間は「何を・なぜ作るか」に集中する

詳細は [`00_COMPANY/Vision.md`](00_COMPANY/Vision.md) / [`00_COMPANY/Mission.md`](00_COMPANY/Mission.md) を参照してください。

## 📂 プロジェクト構成

```
TriggerNexusForge/
├── 00_COMPANY/          # 🏢 会社運営 — 経営文書(Vision/Mission/Brand/Roadmap/CLAUDE.md)
├── 01_AI_EMPLOYEES/     # 🤖 AI社員 — 6名のエージェント定義(役割・口調・出力テンプレート)
├── 02_CONTENT_FACTORY/  # ✍️ コンテンツ制作 — 媒体別プロンプト集(note/Threads/Instagram/X/Blog/LP)
├── 03_WEB_STUDIO/       # 💻 Web制作 — LP/HTML/CSS/WordPress/業種別テンプレート
├── 04_DESIGN_SYSTEM/    # 🎨 デザインシステム — ブランド資産・デザイントークン
├── 05_AUTOMATION/       # ⚙️ 自動化 — スクリプト・ワークフロー・定期実行タスク
├── 06_PRODUCTS/         # 📦 自社プロダクト — 販売する商品・テンプレート・教材
├── 07_CLIENTS/          # 🤝 クライアントワーク — 受注案件・提案書・納品物
├── 08_DOCUMENTS/        # 📚 ドキュメント — マニュアル・ナレッジ・議事録
└── README.md            # このファイル
```

## 🗂 各フォルダの役割

| フォルダ | 役割 | 主なコンテンツ |
|---------|------|--------------|
| [`00_COMPANY`](00_COMPANY/) | 会社の中枢。すべての判断の拠り所 | Vision / Mission / Brand / Roadmap / CLAUDE.md(AIへの指示書) |
| [`01_AI_EMPLOYEES`](01_AI_EMPLOYEES/) | AI社員の人事部 | CEO_AI・Sales_AI・Designer_AI・Copywriter_AI・SNS_AI・PM_AI(各5ファイル構成)の定義 |
| [`02_CONTENT_FACTORY`](02_CONTENT_FACTORY/) | コンテンツの量産工場 | 6媒体×20本の生成プロンプト集、原稿、コンテンツカレンダー |
| [`03_WEB_STUDIO`](03_WEB_STUDIO/) | Web制作スタジオ | LPテンプレート、WordPressスターターテーマ、業種別の設計プレイブック |
| [`04_DESIGN_SYSTEM`](04_DESIGN_SYSTEM/) | デザインの統一基準 | ブランドカラー・フォント・UIコンポーネント・サムネイルテンプレート |
| [`05_AUTOMATION`](05_AUTOMATION/) | 生産性のエンジン | 自動化スクリプト、ワークフロー定義、定期実行タスク |
| [`06_PRODUCTS`](06_PRODUCTS/) | 自社プロダクトの倉庫 | デジタルプロダクト、企画書、価格戦略、リリースノート |
| [`07_CLIENTS`](07_CLIENTS/) | クライアント案件の管理 | 案件フォルダ(クライアント別)、提案書、納品物アーカイブ |
| [`08_DOCUMENTS`](08_DOCUMENTS/) | 全社共有のナレッジベース | 業務マニュアル、議事録、調査資料、振り返り記録 |

各フォルダの詳細ルールは、フォルダ内の `README.md` に記載しています。

## 🛠 開発ルール

### 基本原則

1. **AI First, Human Final** — ドラフト・作業はAIが行い、公開・納品の最終判断は必ず人間が行う
2. **Systemize Everything** — 2回やった作業は仕組み化する。ノウハウはすべてこのリポジトリに文書化する
3. **Compound Assets** — 制作物・テンプレート・プロンプトは再利用可能な資産として蓄積する
4. **テンプレートは直接編集しない** — 案件で使うときは必ずコピーしてから使う(テンプレート本体は改善時のみ更新)

### ワークフロー

- 作業は機能単位のブランチで行い、`main` へマージする
- コミットメッセージは「何を・なぜ」が分かる形で書く(例:`Add LP template for beauty salon projects`)
- 経営文書(`00_COMPANY`)の変更は、変更履歴セクションがあるファイルでは履歴も更新する

### 禁止事項

- ❌ クライアントの機密情報・個人情報・APIキー等の認証情報のコミット
- ❌ 誇大表現の使用(「絶対」「100%」「誰でも簡単に」「業界No.1」)→ [`Brand.md`](00_COMPANY/Brand.md) 参照
- ❌ オーナー確認なしの外部公開(SNS投稿・デプロイ・メール送信)
- ❌ 事実確認できない数字・実績・体験談の使用

### AIと協働するときは

このリポジトリで作業するAIは [`00_COMPANY/CLAUDE.md`](00_COMPANY/CLAUDE.md) を必ず参照してください。会社の前提知識・フォルダ別ルール・品質基準を定義しています。

## 📐 命名規則

| 対象 | 規則 | 例 |
|------|------|-----|
| トップレベルフォルダ | `番号_大文字スネークケース` | `02_CONTENT_FACTORY` |
| テンプレートフォルダ | `大文字スネークケース` | `LP_TEMPLATE`, `INDUSTRY_TEMPLATES` |
| AI社員定義 | `役職_AI/` フォルダ+5ファイル(Identity/Knowledge/Workflow/Prompt/Rules) | `PM_AI/Identity.md` |
| 経営文書 | パスカルケース | `Vision.md`, `Roadmap.md` |
| 業種・汎用ドキュメント | 小文字スネークケース | `beauty_salon.md`, `online_school.md` |
| コード(CSS/JS/PHP) | 小文字ケバブケース+英語 | `tokens.css`, `front-page.php` |
| CSSクラス | BEM(Block__Element--Modifier) | `.price-card--featured` |
| クライアント案件フォルダ | `07_CLIENTS/クライアント名/` | `07_CLIENTS/abc-company/` |
| ブランド表記 | 正式:`Trigger Nexus Forge` / 略称:`TNF` / 技術表記:`TriggerNexusForge` | — |

## 🗺 今後のロードマップ

```
2026        2027         2028         2029         2030
基盤構築 → 受託の     →  プロダクト → モデル確立 → 「一人AI会社」の
+初受注    安定運営      化           +利用者輩出   ロールモデルへ
🔄 進行中   ⏳            ⏳            ⏳            ⏳
```

| 年 | テーマ | 売上目標 | AI社員数 | 収益構成(受託:プロダクト) |
|:---:|--------|---:|:---:|:---:|
| **2026** | 会社OSを完成させ、最初の売上を立てる | 300万円 | 6名 | 10 : 0 |
| **2027** | 受託で食える状態+運営データの公開 | 1,000万円 | 9名 | 9 : 1 |
| **2028** | 会社OSの商品化(労働と売上の分離開始) | 1,500万円 | 12名 | 7 : 3 |
| **2029** | プロダクト利用者から一人AI会社を輩出 | 2,000万円 | 15名 | 6 : 4 |
| **2030** | 複線経営の完成とロールモデルの地位 | 3,000万円 | 20名 | 5 : 5 |

年次の詳細目標・開発サービス・チェックリストは [`00_COMPANY/Roadmap.md`](00_COMPANY/Roadmap.md) で管理しています(四半期ごとに見直し)。

---

<div align="center">

**Trigger Nexus Forge** — *個人の創造力を、企業の生産力へ。*

Built with 🔥 by one owner and a team of AI employees.

</div>
