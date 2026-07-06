# 04_DESIGN_SYSTEM — デザインシステム

<!-- デザインの統一基準。デザイン資産(素材・テンプレート)と Design Engine(判断ロジック)の本籍地 -->

制作物全体のデザインを統一するための資産と、全デザイン系プロダクトが共通利用する **TNF Design Engine** を管理します。

## フォルダ構成

| フォルダ | 内容 |
|---------|------|
| [DESIGN_ENGINE/](DESIGN_ENGINE/) | **TNF Design Engine** — 10エンジン(色・文字・レイアウト・グリッド・コンポーネント・アイコン・モーション・レスポンシブ・A11y・書き出し)の判断ロジック |
| `ASSETS/`(必要時に作成) | ロゴ・画像素材・アイコンセット |
| `TEMPLATES/`(必要時に作成) | サムネイル・バナーのデザインテンプレート |

## 関係図(デザインの三層構造)

```
00_COMPANY/Brand.md(憲法:TNFブランドの値と世界観)
   ↓ 値を供給
DESIGN_ENGINE(判断ロジック:ブランド非依存の普遍ルール+テーマ差し替え)
   ↓ 参照
利用者:LP Builder / Banner Builder / Corporate Builder / Content Factory /
        03_WEB_STUDIO(CSS_TEMPLATE = TNF標準テーマの実装)
```

- **TNF標準テーマの実装**は `03_WEB_STUDIO/CSS_TEMPLATE/tokens.css`(Brand.md と同期)
- クライアント・製品購入者向けには、Design Engine のテーマスキーマで**カスタムテーマ**を作る

## 運用ルール

- デザイン判断のルールは Design Engine に集約する(製品・案件側にコピーしない)
- 素材(ロゴ・画像)は権利情報(出所・ライセンス)とセットで保存する
- エンジンの変更は利用製品への影響を確認してから行う(→ `DESIGN_ENGINE/README.md`)
