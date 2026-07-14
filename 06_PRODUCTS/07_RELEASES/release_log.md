# Release Log — リリースログ

<!-- 全製品の変更記録。新しい行を上に追記 -->

形式:`日付 | 製品 | 版 | 内容`

| 日付 | 製品 | 版 | 内容 |
|------|------|-----|------|
| 2026-07-13 | TNF LP Builder | **v0.3** | ドッグフーディング完了。自社LP(tnf-own/lp-v1)を公開可能状態まで実装(mailto/tel/canonical/OGP/favicon)し、プリセット外業種(Webデザイナー個人)でもマスタープロンプト一気通貫実行を確認(所要49分)。Day02〜05の違和感メモ7件を改善反映:「実績なし案件」の設計パターンを`Modules/05b_no_track_record.md`として新規モジュール化(USP・構成順・キャッチコピーの判断を明文化)、別セッション検品・用語衝突チェックを正式ステップ化。再実行テストで詰まり解消を確認済み。次:実案件投入(v0.5) |
| 2026-07-06 | TNF Core Engine | **v0.1 MVP** | 初の「ブラウザで動く」プロダクト。業種・ターゲット・目的→USP/キャッチ/LP構成/HTML/CSS生成のWebアプリ(依存ゼロ・Vanilla JS)。Playwright自動テストで全機能の動作検証済み。次:Claude API接続(v0.2) |
| 2026-07-06 | TNF Design Engine(共通基盤) | v1.0 | 全デザイン系製品共通の10エンジン(Color/Typography/Layout/Grid/Component/Icon/Motion/Responsive/A11y/Export)+テーマスキーマを構築(`04_DESIGN_SYSTEM/DESIGN_ENGINE/`) |
| 2026-07-05 | TNF LP Builder | **v0.2** | モジュール化リリース。10機能を独立モジュール(入出力契約+プロンプト+サンプル入出力)に分割。ペルソナ生成・FAQ生成を追加、project.yaml状態スキーマでWebアプリ化に対応。次:ドッグフーディング(v0.3) |
| 2026-07-05 | TNF LP Builder | v0.1 MVP | 初のMVPリリース。10機能(業種入力〜WP出力)のエンジン+HTML/CSSテンプレート+実行例(整体院) |
| 2026-07-05 | 全製品 | v0.1着手 | Product Factory 初期構築(5製品の定義・要件・中核プロンプト・手順を策定) |
