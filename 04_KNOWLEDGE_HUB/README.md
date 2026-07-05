# 04_KNOWLEDGE_HUB — 全社知識ベース

<!-- Trigger Nexus Forge の全AI社員が共通利用する知識ハブ。「会社の脳」にあたる -->

> **すべてのAI社員が、同じ知識で判断する。**
> Knowledge Hub は TNF の全AI社員・全業務が参照する共通知識ベースです。
> 知識を1箇所に集約し、重複と矛盾をなくし、更新を1回で全社に行き渡らせます。

## 設計原則(Single Source of Truth)

1. **1つの知識は1箇所にだけ書く** — 同じ知識を複数の場所に書かない。他の場所からは参照する
2. **正典が別にある知識は、ハブが「案内板」になる** — 例:ブランドの正典は `00_COMPANY/Brand.md`。ハブは要点+参照で繋ぐ
3. **知識には出所を付ける** — 一次体験(検証済み)か、外部知識(未検証)かを区別する
4. **使われない知識は知識ではない** — 各ドメインは必ず Checklist(実務に落ちる形)を持つ

## フォルダ構成(20ドメイン)

| # | ドメイン | 内容 | 主な利用者 |
|---|---------|------|-----------|
| [00_CORE](00_CORE/) | 会社の中核知識(理念・OS構成・判断基準) | 全AI社員 |
| [01_DESIGN](01_DESIGN/) | デザイン原則(色・タイポ・余白) | Designer_AI |
| [02_UI_UX](02_UI_UX/) | UI/UX(ユーザビリティ・アクセシビリティ) | Designer_AI |
| [03_COPYWRITING](03_COPYWRITING/) | コピーライティング | Copywriter_AI |
| [04_MARKETING](04_MARKETING/) | マーケティング | Sales_AI / SNS_AI |
| [05_SEO](05_SEO/) | SEO | Copywriter_AI |
| [06_WEB](06_WEB/) | Web制作全般(性能・公開・運用) | 実装担当 |
| [07_WORDPRESS](07_WORDPRESS/) | WordPress | 実装担当 |
| [08_HTML](08_HTML/) | HTML(セマンティクス・メタ情報) | 実装担当 |
| [09_CSS](09_CSS/) | CSS(トークン・BEM・レスポンシブ) | 実装担当 |
| [10_AI](10_AI/) | AI活用一般(プロンプト・限界・レビュー) | 全AI社員+オーナー |
| [11_CLAUDE](11_CLAUDE/) | Claude活用(この会社の使い方) | オーナー |
| [12_GITHUB](12_GITHUB/) | Git / GitHub(運用ルール) | オーナー |
| [13_AUTOMATION](13_AUTOMATION/) | 自動化(判断基準・設計) | PM_AI |
| [14_SNS](14_SNS/) | SNS運用 | SNS_AI |
| [15_NOTE](15_NOTE/) | note運用 | Copywriter_AI / SNS_AI |
| [16_SALES](16_SALES/) | 営業(提案・価格・交渉) | Sales_AI |
| [17_BRANDING](17_BRANDING/) | ブランディング | 全AI社員 |
| [18_CASE_STUDY](18_CASE_STUDY/) | 事例研究(自社・案件の学び) | 全AI社員 |
| [19_GLOSSARY](19_GLOSSARY/) | 用語集(社内共通言語) | 全AI社員 |

## 各ドメインのファイル構成(共通)

| ファイル | 役割 | 書き方 |
|---------|------|--------|
| `README.md` | ドメインの案内板(範囲・利用者・正典への参照) | 5分で全体像が掴める長さ |
| `Knowledge.md` | 体系知識(なぜ・何を) | 原則→構造→詳細の順 |
| `BestPractice.md` | 実践知(どうやるか。✅Do / ❌Don't) | 具体例ベース |
| `Checklist.md` | 実務チェックリスト(作業時に通す) | チェックボックス形式 |

## 他フォルダとの関係

```
04_KNOWLEDGE_HUB(全社共通の知識)← ここ
├─ 00_COMPANY/          … 経営の正典(Vision/Mission/Brand/Roadmap)。ハブより上位
├─ 01_AI_EMPLOYEES/     … 各AIの Knowledge.md はハブの該当ドメインを参照する
├─ 02_CONTENT_FACTORY/06_KNOWLEDGE/ … コンテンツ制作に特化した実務知識(ハブより現場寄り)
└─ 08_DOCUMENTS/        … 個別の記録・議事録(知識に昇格したらハブへ)
```

- **優先順位**: `00_COMPANY`(憲法) > 各所のRULES > Knowledge Hub > 個別メモ
- 知識の昇格ルート: 日々の記録(`08_DOCUMENTS`)→ 検証 → Knowledge Hub → ルール化が必要なら各RULESへ

## 知識のライフサイクル

```
収集(気づき・外部情報)→ 検証(自分で試す)→ 記録(該当ドメインへ)
→ 活用(Checklist経由で実務に)→ 更新(月次で棚卸し)→ 廃棄(古い知識は削除)
```

- 追記時は「一次体験(検証済み)」か「外部知識(未検証)」かを明記する
- 四半期に1回、各ドメインの陳腐化チェックを行う(特に 10_AI / 14_SNS は変化が速い)

## 使い方(AI社員の起動時)

AI社員に仕事を依頼するとき、該当ドメインのファイルをコンテキストとして渡す:

```text
(例)Designer_AI にLPデザインを依頼する場合
→ 01_DESIGN/Knowledge.md + 02_UI_UX/Checklist.md を添付して起動
```
