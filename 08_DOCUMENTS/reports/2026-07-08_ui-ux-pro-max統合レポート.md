# ui-ux-pro-max 統合レポート

<!-- npmパッケージ(外部ツール)として導入したui-ux-pro-maxスキルを、TNFの資産として再構築した記録 -->

日付:2026-07-08
実施者:Claude(セッション作業)
背景:`npm install -g uipro-cli` で `.claude/skills/ui-ux-pro-max/` に導入した外部スキルを、
コピーのままにせず、Trigger Nexus Forgeの資産(Knowledge Hub + Design Engine)として再構築する依頼。

## 1. 何が問題だったか

`.claude/skills/ui-ux-pro-max/` はnpmパッケージ `uipro-cli` がインストールしたファイル一式であり:

- 会社の一次資産ではなく**外部ツールへの依存**(uipro-cliが将来使えなくなれば消える)
- データがCSV+Python CLIという形式で、Knowledge Hubの他ドメインと構成が異なる(単一情報源の原則に反する)
- 将来AI社員全員(Copywriter_AI・PM_AI等)が参照する経路がなかった(Designer_AIさえ未接続)

## 2. やったこと

### 2-1. Knowledge Hubへの再構築(Markdown化)

`.claude/skills/ui-ux-pro-max/data/*.csv`(CSV+Pythonスクリプト形式)を、TNF Knowledge Hubの
`REFERENCE/` サブフォルダへMarkdownとして再構築した。単なるコピーではなく:

- 各ファイルに「何のためのファイルか」「いつ参照するか」の導入文を追加
- 22列あった `styles.csv` はテーブル形式が破綻するため、スタイルごとのセクション形式に再構成
- 既存ドメイン(01_DESIGN / 02_UI_UX / 06_WEB)の役割分担に沿って配置先を振り分け

| 配置先 | ファイル | 元データ | 件数 |
|--------|---------|---------|------|
| `09_KNOWLEDGE_HUB/01_DESIGN/REFERENCE/` | ColorPalettes.md | colors.csv | 96 |
| 〃 | StyleCatalog.md | styles.csv | 67 |
| 〃 | FontPairings.md | typography.csv | 57 |
| `09_KNOWLEDGE_HUB/02_UI_UX/REFERENCE/` | UXRules.md | ux-guidelines.csv | 99 |
| 〃 | WebInterfaceGuidelines.md | web-interface.csv | 30 |
| 〃 | DataViz.md | charts.csv | 25 |
| 〃 | LandingPageStructures.md | landing.csv | 30 |
| 〃 | ProductPatterns.md | products.csv | 95 |
| 〃 | DesignReasoningRules.md | ui-reasoning.csv | 100 |
| 〃 | IconSets.md | icons.csv | 100 |
| `09_KNOWLEDGE_HUB/06_WEB/REFERENCE/` | StackGuidelines.md | stacks/*.csv(13スタック) | 約650 |
| 〃 | ReactPerformance.md | react-performance.csv | 44 |

既存の `README.md`(各ドメイン)を更新し、REFERENCE配下のファイルを一覧化・導線を追加した。
`02_UI_UX/BestPractice.md`・`Checklist.md` には、スキル由来で既存知識に無かった実務ルール
(絵文字アイコン禁止・cursor:pointer・ボタンの二重送信防止)を追記した。

### 2-2. Design Engineへの反映

Knowledge Hubは「学習用」、Design Engineは「AI・製品が実行時に参照する判断ロジック」という
既存の役割分担(README.md記載)に従い、**データの丸ごと転記はせず**、判断ロジック・デフォルト値への
影響がある箇所だけを修正した。

| ファイル | 反映内容 |
|---------|---------|
| `01_color_engine.md` | 共通デフォルトの `muted` 色 `#6B7280`(白背景比4.44:1・AA未達)を `#5B6472`(5.5:1以上)に修正。`border-strong` トークンを追加(機能的境界線用・3:1基準)。コントラスト検証は数値計算で行う旨・ブランド色が濃いほど不足しやすい旨を明記 |
| `02_typography_engine.md` | 標準ペアリング(Montserrat×Inter)以外が必要な場合の参照先(FontPairings.md)を追記 |
| `06_icon_engine.md` | 「絵文字禁止」を明記(既存はセット統一のみでこの規定が抜けていた)。IconSets.mdへの参照を追記 |
| `09_accessibility.md` | WCAG相対輝度式によるコントラスト検証方法を追記(計算式+実例)。UXRules.md/WebInterfaceGuidelines.mdへの参照を追記 |
| `README.md`(Design Engine) | 外部知見の取り込み実績表を新設。今後も「ツール依存を残さずKnowledge Hubへ再構築してから反映する」という運用原則を明記 |

**実例**:この`muted`色・ボタン文字色の問題は、本日実施した TNF Core Engine(`06_PRODUCTS/00_CORE_ENGINE`)の
UI/UX Pro Maxスキルによる再設計作業で、実際にコントラスト比を計算して発見した実バグ。
Design Engineのデフォルト値も同じ値を使っていたため、修正しないと今後生成する全製品に同じ不具合が
再発する状態だった。今回の反映で、この会社の「デフォルト」自体を是正できた。

### 2-3. AI社員からの参照経路

`01_AI_EMPLOYEES/Designer_AI/Knowledge.md` の参照ドキュメント表に、Design Engineおよび
Knowledge Hub(01_DESIGN・02_UI_UX、REFERENCE含む)へのリンクを追加。従来この表は
`04_DESIGN_SYSTEM/`(素材・テンプレート)止まりで、Knowledge HubやDesign Engineへの導線が
なかった(Knowledge Hub側は「各AIのKnowledge.mdがハブを参照する」設計だったが、
Designer_AI側からの接続が未実装だった)。

## 3. `.claude/skills/ui-ux-pro-max/`(npmパッケージ由来)の扱い

削除はしていない。位置づけを整理すると:

- **Knowledge Hub(今回追加分)** = 会社の一次資産。ツールが無くても永続する「読む知識」
- **`.claude/skills/ui-ux-pro-max/`** = `python3 scripts/search.py` で動く生成ツール。
  「業種+スタイル+キーワード」から設計案を対話的に組み立てたい時に使う実行環境として残す

今後 `uipro-cli` の再インストール・アップデートで内容が変わっても、Knowledge Hub側の
Markdownは独立して存在し続ける(依存を切り離す、という今回の目的を達成)。

## 4. 制限事項・今後の課題

- `StackGuidelines.md`(799行)・`StyleCatalog.md`(2,890行)は網羅性を優先したため長大。
  人間が読む前提ではなく、AI社員がgrep/検索して該当箇所だけを引く「辞書」としての運用を想定
- CSVの機械的なMarkdown変換であり、TNF固有の文脈(業種プリセット・ブランドとの整合)による
  取捨選択はしていない。実際の案件で使う際は、必ずDesign Engine/Brand.mdとの整合を優先する
- Copywriter_AI・PM_AI等、Designer_AI以外のAI社員からの参照経路は今回追加していない
  (UI/UX領域の主担当がDesigner_AIのため。他AI社員が必要とする場面が出たら追加する)

## 5. 変更ファイル一覧(git差分)

**新規**:
- `09_KNOWLEDGE_HUB/01_DESIGN/REFERENCE/`(ColorPalettes.md / StyleCatalog.md / FontPairings.md)
- `09_KNOWLEDGE_HUB/02_UI_UX/REFERENCE/`(UXRules.md / WebInterfaceGuidelines.md / DataViz.md / LandingPageStructures.md / ProductPatterns.md / DesignReasoningRules.md / IconSets.md)
- `09_KNOWLEDGE_HUB/06_WEB/REFERENCE/`(StackGuidelines.md / ReactPerformance.md)
- 本レポート

**変更**:
- `04_DESIGN_SYSTEM/DESIGN_ENGINE/{01_color_engine,02_typography_engine,06_icon_engine,09_accessibility,README}.md`
- `09_KNOWLEDGE_HUB/01_DESIGN/README.md` / `02_UI_UX/{README,BestPractice,Checklist}.md` / `06_WEB/README.md`
- `01_AI_EMPLOYEES/Designer_AI/Knowledge.md`
