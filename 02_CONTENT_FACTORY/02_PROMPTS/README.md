# 02_PROMPTS — 生成エンジン(媒体別プロンプト集)

<!-- 各媒体向けコンテンツをAIで生成するためのプロンプト集。コピペ→変数を埋める→実行で使う -->

Content Factory の**生成エンジン**。媒体別のプロンプトを管理します。

## プロンプト一覧(10媒体)

| ファイル | 媒体 | 生成できるもの | 主担当AI |
|---------|------|--------------|---------|
| [note.md](note.md) | note | 体験記事・ノウハウ記事・有料note | Copywriter_AI |
| [Threads.md](Threads.md) | Threads | 単発・連投・共感系ポスト | SNS_AI |
| [Instagram.md](Instagram.md) | Instagram | カルーセル・リール台本・フィード | SNS_AI + Designer_AI |
| [X.md](X.md) | X | 単発・スレッド・図解・多展開 | SNS_AI |
| [Blog.md](Blog.md) | ブログ | SEO記事の構成・本文・リライト | Copywriter_AI |
| [LP.md](LP.md) | LP | 全体構成・セクション別コピー・改善 | Copywriter_AI |
| [LINE.md](LINE.md) | LINE | 通常配信・セールス配信・ステップ配信 | Copywriter_AI |
| [Mailmagazine.md](Mailmagazine.md) | メルマガ | 通常号・セールス号・記事変換 | Copywriter_AI |
| [ImagePrompt.md](ImagePrompt.md) | 画像生成 | アイキャッチ・LP画像・図解パーツの生成プロンプト | Designer_AI |
| [VideoScript.md](VideoScript.md) | 動画 | ショート台本・YouTube長尺台本 | Copywriter_AI |

## 使い方

1. `01_INPUT/input_template.md` の入力シートを完成させる
2. 展開する媒体のプロンプトを開き、`{変数}` に入力シートの内容を流し込む
3. 担当AI社員(`01_AI_EMPLOYEES/◯◯/Prompt.md`)を起動してから実行する
4. 出力を `03_TEMPLATES/` の形式に流し込み、`07_CHECKLIST/` で検品する

## 共通変数

```text
{テーマ}     = 入力シートの「1. テーマ」
{ターゲット} = 入力シートの「2. ターゲット」+「3. 悩み」
{ゴール}     = 入力シートの「4. 目的」+「6. CTA」
{素材}       = 入力シートの「一次体験」+「数字・事実」
```

## 全プロンプト共通ルール

- `00_RULES/` のすべてのルール(文章・ブランド・禁止事項)が生成物に適用される
- 事実でない体験・数字の捏造は禁止。生成物は必ず人間がレビューしてから公開する

## 運用ルール

- プロンプト改善はこのフォルダの原本を直接更新してコミットする
- 成果が良かった出力は各ファイル末尾の「出力例ストック」に追記し、`08_EXAMPLES/` にも記録する
- 新媒体の追加手順は工場ルートの `README.md`「将来の拡張方法」を参照
