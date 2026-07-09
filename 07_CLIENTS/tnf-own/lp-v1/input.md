# Module 01 出力 — 入力(project.input)

<!-- 06_PRODUCTS/01_LP_BUILDER/Modules/01_input_form.md の入力フォームをコピーし、
     TNF自社LP制作サービス用に記入したもの -->

対象:`06_PRODUCTS/01_LP_BUILDER/Modules/01_input_form.md`

## フォーム定義(参照用)

| 項目 | キー | 必須 | 形式 |
|------|-----|:---:|------|
| 業種 | `industry` | ✅ | 短文 |
| ターゲット | `target` | — | 自由記述 |
| 目的 | `goal` | ✅ | 体験申込 / 問い合わせ / 購入 / 資料請求 / 予約 |
| 強み | `strengths` | ✅ | 箇条書き(事実のみ) |
| オファー | `offer` | — | 短文 |
| 実績・お客様の声 | `facts` | — | 箇条書き(事実のみ) |

## 記入結果(project.input)

```yaml
project:
  meta: { id: LP-tnf-own-v1, status: input }
  input:
    industry: "Web制作代行(LP制作サービス)"
    target: "小規模事業者(個人事業主・中小企業のオーナー)"   # 詳細ペルソナは Module 02 で確定
    goal: "問い合わせ"   # オーナー確認済み(2026-07-08):価格帯・案件内容が事前に分からない見込み客向けに、まず相談してもらう導線
    strengths:
      - "AI活用による短納期"
      - "業種別の勝ちパターン(整体・美容・ジム・士業・講座・飲食など複数業種で実績のある型を保有)"
      - "誠実な価格(不透明な追加費用なし)"
    offer: ""     # 未確定 → 出力に【要記入】枠
    facts:
      - ""        # 未確定 → 出力に【要記入】枠
```

→ 次:`persona.md`(Module 02の出力)
