# TEMPLATES — 成果物テンプレート

<!-- 媒体別の「完成形の器」。生成したコンテンツをこの形に流し込んで管理・保存する -->

生成コンテンツの完成形テンプレートです。**PROMPTS が「作り方」なら、TEMPLATES は「納品形式」**。
生成結果をこの形に流し込むことで、メタ情報(状態・担当・数字)込みで一元管理できます。

## テンプレート一覧

| ファイル | 媒体 | 用途 |
|---------|------|------|
| [note.md](note.md) | note | 体験記事・ノウハウ記事 |
| [Threads.md](Threads.md) | Threads | 単発・連投 |
| [Instagram.md](Instagram.md) | Instagram | カルーセル・リール・フィード |
| [X.md](X.md) | X | 単発・スレッド・図解ポスト |
| [Blog.md](Blog.md) | ブログ | SEO記事 |
| [LP.md](LP.md) | LP | セールスコピー一式(実装は `03_WEB_STUDIO/LP_TEMPLATE`) |

## 共通メタ情報(全テンプレート冒頭に付く)

```yaml
テーマID: T-YYYYMMDD-01     # theme_brief と紐づく
媒体: (note / X / ...)
状態: draft → review → approved → published
生成: (担当AI名)
検品: (検品したAI名)
承認: オーナー(YYYY-MM-DD)
公開: (URL / 公開日時)
```

## 使い方

1. テンプレートをコピーして `OUTPUTS/テーマID/` 配下に保存する
2. 生成結果を流し込み、メタ情報を更新しながら工程を進める
3. 状態が `published` になったら、公開後の数字も追記する

## ルール

- 状態遷移を飛ばさない(`draft` からいきなり `published` にしない=検品スキップ禁止)
- テンプレート自体の改善は、使用中のコピーではなくこのフォルダの原本に対して行う
