# 02_CONTENT_FACTORY — コンテンツ工場

<!-- コンテンツ制作の生産ライン。「1つのテーマから複数媒体のコンテンツを量産する」仕組みの全体設計 -->

**1つのテーマを投入すると、note・Threads・Instagram・X・ブログ・LPの各媒体向けコンテンツが生産される工場**です。

## 設計思想

> **「1テーマ = 1回の思考」で、6媒体分のアウトプットを得る。**

- テーマ(一次体験・ノウハウ)は最も高価な原材料。1媒体で使い捨てにしない
- 生成はAI(並行)、レビューは人間(直列)— AI First, Human Final
- 工程・品質基準・保存場所をすべて型化し、「今日は何をどう作るか」で迷わない

## 生産ラインの全体像

```
[入力]           [生成]              [レビュー]        [出力]
テーマブリーフ → 媒体別プロンプト → チェックリスト → OUTPUTSに保存
(1テーマ)      (PROMPTS/)         (KNOWLEDGE/     → 各媒体へ公開
   │            ├─ note            + 各AI Rules)     │
   │            ├─ Blog                              │
   │            ├─ X(単発/スレッド/図解)              │
   │            ├─ Threads                           │
   │            ├─ Instagram                         │
   │            └─ LP(商品がある場合)                 │
   └────────── 詳細は WORKFLOWS/content_pipeline.md ──┘
```

## フォルダ構成と役割

| フォルダ | 役割 | 中身 |
|---------|------|------|
| [PROMPTS/](PROMPTS/) | **生成エンジン** | 媒体別の生成プロンプト(コピペで使う指示書) |
| [TEMPLATES/](TEMPLATES/) | **成果物の型** | 媒体別の完成形テンプレート(メタ情報+構造の雛形) |
| [WORKFLOWS/](WORKFLOWS/) | **生産工程** | 入力→生成→レビュー→出力の手順書・テーマブリーフ |
| [OUTPUTS/](OUTPUTS/) | **倉庫** | 制作物の保存場所(テーマ別・状態管理付き) |
| [KNOWLEDGE/](KNOWLEDGE/) | **品質基準書** | 文章ルール・SEO・コピーライティング・ブランドトーン |

## PROMPTS / TEMPLATES / KNOWLEDGE の使い分け

- **PROMPTS** = AIへの「作り方の指示」(これを貼って生成する)
- **TEMPLATES** = 成果物の「完成形の器」(生成結果をこの形に流し込んで管理する)
- **KNOWLEDGE** = 判断の「基準書」(生成物が正しいかをこれで検品する)

## AI社員との連携マップ

各工程は `01_AI_EMPLOYEES/` の社員が担当する。各社員の `Prompt.md` を起動し、このフォルダの資材を渡す。

| 工程 | 担当AI | 使う資材 |
|------|--------|---------|
| テーマ企画・ネタ選定 | SNS_AI + オーナー | `WORKFLOWS/theme_brief.md` |
| 長文生成(note・Blog・LP) | Copywriter_AI | `PROMPTS/note.md` `Blog.md` `LP.md` |
| 短文生成(X・Threads) | SNS_AI | `PROMPTS/X.md` `Threads.md` |
| 図解・画像(Instagram・X図解) | Designer_AI | `PROMPTS/Instagram.md` + 図解ブリーフ |
| 品質検品 | Copywriter_AI(言葉)+ 各AI Rules | `KNOWLEDGE/` 全ファイル |
| 進行管理・締切 | PM_AI | `WORKFLOWS/content_pipeline.md` |
| 最終承認・公開 | **オーナー(人間)** | 公開ボタンは常に人間が押す |

## 運用ルール

1. **テーマブリーフなしで生成を始めない** — 入力が曖昧なまま生成すると全媒体分が無駄になる
2. **公開物は必ずKNOWLEDGEの基準を通す** — NGワード・トーン・事実確認の検品なしに公開しない
3. **完成品はOUTPUTSに保存してから公開する** — リポジトリが正、各プラットフォームはコピー
4. **良かった出力はPROMPTSに還元する** — 各プロンプトの「出力例ストック」を育てる
