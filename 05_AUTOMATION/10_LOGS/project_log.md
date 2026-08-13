# Project Log — 案件ログ

<!-- 全案件の状態変更を時系列で記録。新しい行を上に追記 -->

形式:`日付 | 案件 | 状態変更 | メモ`

| 日付 | 案件 | 状態変更 | メモ |
|------|------|---------|------|
| 2026-08-07(推定) | tnf-own/lp-v1 | delivery → closed(公開実行完了) | オーナーがWordPress(trigger0307.com/lp/)に公開実行。ドメインのタイプミス(trgger0307.com→trigger0307.com)修正・HTTPS化とあわせて実施。正確な公開完了時刻の記録が漏れていたため、ドメイン修正コミット(992a933)の日付を暫定の記録日とする。**振り返り(KPT)は未実施**、Day29以降で実施予定 |
| 2026-08-02 | tnf-own/lp-v1 | review → delivery(★オーナー実行待ちのまま停滞) | DAY22時点でPM_AIが遡って記録。2026-07-29(portfolio.md記載時点)には検品・承認が完了しdeliveryへ移行できる状態だったが、公開(deploy)実行が18日間止まっている。master_flow.mdの★印(delivery=人が納品実行)のため停滞自体は想定内だが、PM_AIとして本日のブリーフィングでエスカレーション対象にした |
| 2026-07-29 | tnf-own/lp-v1 | review(完了) | portfolio.md(DAY18)に「社内検品・承認まで完了。公開作業は準備中」と記載。検品ゲートは通過済み |
| 2026-07-15 | tnf-own/lp-v1 | review(継続) | wordpress.mdの公開ブロッカーを解消(コミット0d0d621) |
| 2026-07-12 | tnf-own/lp-v1 | review(継続) | 検品チェックリストの保留4件(OGP画像・favicon・canonical URL・アクセス解析)を解消(コミット31df993、checklist_review.md参照) |
| 2026-07-11 | tnf-own/lp-v1 | production → review | LP実装完了(lp.html→index.htmlにリネーム、連絡先プレースホルダ埋め)。「自社LP v1完成(実装・検品済み・公開可能状態)」としてコミット(e3e9a76)、08_HTML Checklist等の検品を開始 |
| 2026-07-09 | tnf-own/lp-v1 | (起票) → production | 自社ドッグフーディング案件のため intake/proposal/won は非該当(社内起案・営業プロセスを経ない)。LP Builder Modules 01〜10を実行し、persona/USP/構成/コピー/HTML/CSS/WordPress一式を制作 |
