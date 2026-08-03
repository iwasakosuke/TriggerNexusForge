# scripts — 自動化スクリプト

<!-- 09_KNOWLEDGE_HUB/13_AUTOMATION/Knowledge.md の「自動化の階段」段階2(テンプレ化)〜
     段階3(半自動化)にあたるスクリプト置き場。手順書(手動でも同じ結果になる手順)を必ず併記する -->

| スクリプト | 用途 |
|-----------|------|
| [init_project.sh](init_project.sh) | 案件初期化。案件フォルダ+受付シート・案件シート+作業フォルダを一括作成 |

## init_project.sh

### 実行方法

```bash
./05_AUTOMATION/scripts/init_project.sh <案件名>
# 例
./05_AUTOMATION/scripts/init_project.sh sample-seitai
```

- リポジトリのルートから実行する
- 案件名は英数字・ハイフン・アンダースコアのみ
- `07_CLIENTS/<案件名>/` が既に存在する場合は、既存データを保護するため何もせずエラー終了する

### 何が作られるか

```
07_CLIENTS/<案件名>/
├── intake.md   … 01_CLIENT_INTAKE/intake_sheet.md のテンプレート本体をコピー
├── project.md  … 02_PROJECT_MANAGEMENT/project_sheet.md のテンプレート本体をコピー
├── images/     … 作業用フォルダ(.gitkeepのみ)
└── assets/     … 作業用フォルダ(.gitkeepのみ)
```

## 手動手順(スクリプトを使わない場合・同じ結果になる5ステップ)

スクリプトが動かせない環境でも、以下を手作業で行えば同じ状態を再現できる(自動化の「手動の逃げ道」)。

1. `07_CLIENTS/(案件名)/` フォルダを作成する
2. `05_AUTOMATION/01_CLIENT_INTAKE/intake_sheet.md` を開き、` ```markdown `〜` ``` ` で囲まれた本体だけをコピーして `07_CLIENTS/(案件名)/intake.md` として保存する(見出しの「(クライアント名 / 仮名可)」は案件名に書き換える)
3. `05_AUTOMATION/02_PROJECT_MANAGEMENT/project_sheet.md` も同様に、本体をコピーして `07_CLIENTS/(案件名)/project.md` として保存する(見出しの「(案件名)」を書き換える)
4. `07_CLIENTS/(案件名)/images/` と `07_CLIENTS/(案件名)/assets/` の作業フォルダを作成する(空フォルダはGit管理外になるため、コミットに含めたい場合は `.gitkeep` を置く)
5. `intake.md` を開き、ヒアリング内容の記入を始める(`project.md` は受注確定後に記入)
