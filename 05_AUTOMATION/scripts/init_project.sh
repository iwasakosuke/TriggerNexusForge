#!/bin/bash
#
# init_project.sh — 案件初期化スクリプト
#
# 用途:
#   新規クライアント案件のフォルダと管理シート(受付シート・案件シート)を
#   一括で用意する。05_AUTOMATION/01_CLIENT_INTAKE・02_PROJECT_MANAGEMENT の
#   シートテンプレートをコピーし、images/・assets/ 等の作業フォルダも作成する。
#   09_KNOWLEDGE_HUB/13_AUTOMATION/Knowledge.md の「自動化の階段」でいう
#   段階2(テンプレ化)に相当する。シートの中身(ヒアリング内容等)を書くのは
#   引き続き人・Sales_AI・PM_AIの仕事(段階3の半自動化はまだ先)。
#
# 実行方法:
#   リポジトリのルートから実行する。
#     ./05_AUTOMATION/scripts/init_project.sh <案件名>
#   例:
#     ./05_AUTOMATION/scripts/init_project.sh sample-seitai
#
#   案件名は英数字・ハイフン・アンダースコアのみ(フォルダ名にそのまま使うため)。
#   07_CLIENTS/<案件名>/ が既に存在する場合、既存の案件データを保護するため
#   何も変更せずエラー終了する(上書きしない)。
#
set -euo pipefail

PROJECT_NAME="${1:-}"

if [ -z "$PROJECT_NAME" ]; then
  echo "使い方: $0 <案件名>" >&2
  echo "例:   $0 sample-seitai" >&2
  exit 1
fi

if ! [[ "$PROJECT_NAME" =~ ^[A-Za-z0-9_-]+$ ]]; then
  echo "エラー: 案件名は英数字・ハイフン・アンダースコアのみで指定してください(例: sample-seitai)" >&2
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
CLIENT_DIR="$REPO_ROOT/07_CLIENTS/$PROJECT_NAME"
INTAKE_TEMPLATE="$REPO_ROOT/05_AUTOMATION/01_CLIENT_INTAKE/intake_sheet.md"
PROJECT_TEMPLATE="$REPO_ROOT/05_AUTOMATION/02_PROJECT_MANAGEMENT/project_sheet.md"

if [ -d "$CLIENT_DIR" ]; then
  echo "エラー: $CLIENT_DIR は既に存在します。既存の案件データを保護するため、このスクリプトは上書きしません。" >&2
  exit 1
fi

if [ ! -f "$INTAKE_TEMPLATE" ] || [ ! -f "$PROJECT_TEMPLATE" ]; then
  echo "エラー: テンプレートが見つかりません($INTAKE_TEMPLATE / $PROJECT_TEMPLATE)。リポジトリのルートから実行しているか確認してください。" >&2
  exit 1
fi

# シートテンプレート本体(```markdown 〜 ``` フェンスの中身)だけを抽出する
extract_template_body() {
  awk '/^```markdown$/ { f=1; next } /^```$/ { if (f) exit } f' "$1"
}

mkdir -p "$CLIENT_DIR/images" "$CLIENT_DIR/assets"
# 空フォルダはGit管理外になるため .gitkeep を置く
touch "$CLIENT_DIR/images/.gitkeep" "$CLIENT_DIR/assets/.gitkeep"

extract_template_body "$INTAKE_TEMPLATE" \
  | sed "s/(クライアント名 \/ 仮名可)/${PROJECT_NAME}/" \
  > "$CLIENT_DIR/intake.md"

extract_template_body "$PROJECT_TEMPLATE" \
  | sed "s/(案件名)/${PROJECT_NAME}/" \
  > "$CLIENT_DIR/project.md"

echo "案件フォルダを初期化しました: $CLIENT_DIR"
echo "  - intake.md   (受付シート。ヒアリング内容を記入する)"
echo "  - project.md  (案件シート。受注確定後にWBS等を記入する)"
echo "  - images/     (作業用フォルダ)"
echo "  - assets/     (作業用フォルダ)"
echo ""
echo "次のステップ: intake.md にヒアリング内容を記入 → Sales_AI/PM_AIに引き継ぐ"
