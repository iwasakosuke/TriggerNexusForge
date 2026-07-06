/* ==========================================================================
   TNF Core Engine — engine.js(生成エンジン)
   インターフェース: TNFEngine.generate(input) -> result
   input:  { industry, target, goal }
   result: { meta, usp, catches, structure, lpHtml, lpCss }

   このインターフェースを維持したまま、将来は中身をLLM API(Claude)呼び出しに
   差し替える(アダプタ設計)。現在はルールベース(data.jsのナレッジ)で動作する。
   ========================================================================== */

const TNFEngine = (() => {

  // --- ユーティリティ ---

  function esc(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function matchIndustry(text) {
    const t = (text || "").trim();
    for (const ind of TNF_DATA.industries) {
      if (ind.match.some(kw => t.includes(kw))) return ind;
    }
    return null;
  }

  // --- 汎用生成(未対応業種のフォールバック) ---

  function buildGeneric(industryText, target) {
    const g = TNF_DATA.generic;
    const label = industryText;
    return {
      key: "generic",
      label,
      defaultTarget: g.defaultTarget,
      commonClaims: g.commonClaims,
      usp: {
        main: `「${label}ならどこも同じ」を覆す、${target || "お客様"}の悩み起点のサービス設計`,
        support: [
          "【要記入:あなたの強み1(事実で。例:◯◯専門/◯年の実績)】",
          "【要記入:あなたの強み2】",
          "【要記入:あなたの強み3】"
        ]
      },
      catches: [
        { type: "お悩み代弁", main: `${label}選びで、失敗したくないあなたへ。`, sub: "【要記入:一言の約束(事実ベースで)】" },
        { type: "問いかけ", main: `その悩み、${label}で解決できると知っていますか?`, sub: "まずは気軽にご相談ください" },
        { type: "ベネフィット直球", main: "【要記入:導入後の変化を15〜25字で】", sub: "【要記入:補足40字以内】" }
      ],
      pains: [
        `【要記入:${target || "ターゲット"}の悩み1(本人の言葉で)】`,
        "【要記入:悩み2】",
        "【要記入:悩み3】"
      ],
      solution: `【要記入:${label}として、何を・どうやって提供するか】`,
      benefits: [
        { title: "【要記入:変化1の見出し】", ba: "【要記入:Before → After】" },
        { title: "【要記入:変化2の見出し】", ba: "【要記入:Before → After】" },
        { title: "【要記入:変化3の見出し】", ba: "【要記入:Before → After】" }
      ],
      faq: [
        { q: "料金はいくらですか?", a: "【要記入:料金の目安】" },
        { q: "初めてでも大丈夫ですか?", a: "【要記入:初回対応の流れ】" },
        { q: "支払い方法は選べますか?", a: "【要記入:対応する支払い方法】" },
        { q: "キャンセルはできますか?", a: "【要記入:キャンセルポリシー】" }
      ],
      colors: g.colors,
      offer: "【要記入:オファー(初回特典・無料相談など)】",
      regulation: g.regulation
    };
  }

  // --- LP構成の生成 ---

  function buildStructure(ind, target, goal) {
    return [
      { name: "FV(ファーストビュー)", purpose: `「${target}のためのページだ」と3秒で伝える`, psych: "自分に関係ある?", elements: "キャッチ+安心要素3点+CTA" },
      { name: "課題共感", purpose: "悩みを本人の言葉で言語化する", psych: "そうそう、それで困ってる", elements: "悩み3つ+解決へのブリッジ" },
      { name: "解決策", purpose: "「ここは何が違うか」を提示する", psych: "他と何が違うの?", elements: "USP+提供内容の説明" },
      { name: "ベネフィット", purpose: "導入後の変化を見せる", psych: "良さそうだけど自分に合う?", elements: "Before→After ×3+中間CTA" },
      { name: "実績・お客様の声", purpose: "同じ悩みの人の証拠を見せる", psych: "本当かな?", elements: "実際の声(事実のみ)【要記入】" },
      { name: "料金・オファー", purpose: "透明性と最初の一歩の軽さを示す", psych: "いくらかかるの?", elements: `${ind.offer || "オファー"}+注記` },
      { name: "FAQ", purpose: "残った不安を先回りで消す", psych: "あと一歩が不安", elements: "不安の大きい順に4〜6問" },
      { name: "最終CTA", purpose: "背中を押す", psych: "今度でいいか…→今見たなら今", elements: `CTA(${goal})+不安解消の一言` }
    ];
  }

  // --- LP HTML の生成 ---

  function buildLpHtml(ind, target, goal, cta) {
    const c = ind.catches[0];
    const points = ind.usp.support.map(s => `      <li>${esc(s)}</li>`).join("\n");
    const pains = ind.pains.map(p => `        <li>${esc(p)}</li>`).join("\n");
    const benefits = ind.benefits.map(b =>
      `        <div class="card"><h3>${esc(b.title)}</h3><p>${esc(b.ba)}</p></div>`).join("\n");
    const faqs = ind.faq.map(f =>
      `      <details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("\n");

    return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(c.main)}|【要記入:店名・社名】</title>
  <meta name="description" content="${esc(c.sub)}|${esc(ind.label)}">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- 1. FV -->
  <header class="fv">
    <div class="container">
      <p class="fv__badge">${esc(target)}へ</p>
      <h1 class="fv__title">${esc(c.main)}</h1>
      <p class="fv__sub">${esc(c.sub)}</p>
      <ul class="fv__points">
${points}
      </ul>
      <a href="#cta" class="btn">${esc(cta.button)}</a>
      <p class="micro">${esc(cta.micro)}</p>
    </div>
  </header>

  <!-- 2. 課題共感 -->
  <section class="section">
    <div class="container">
      <h2>こんな心当たり、ありませんか?</h2>
      <ul class="problems">
${pains}
      </ul>
      <p class="bridge">その悩みに、こう向き合います。</p>
    </div>
  </section>

  <!-- 3. 解決策 -->
  <section class="section section--dark">
    <div class="container">
      <h2>${esc(ind.label)}としての、私たちの答え</h2>
      <p>${esc(ind.solution)}</p>
    </div>
  </section>

  <!-- 4. ベネフィット -->
  <section class="section">
    <div class="container">
      <h2>ご利用後、こう変わります</h2>
      <div class="cards">
${benefits}
      </div>
      <p class="center"><a href="#cta" class="btn">${esc(cta.button)}</a></p>
    </div>
  </section>

  <!-- 5. 実績・お客様の声 -->
  <section class="section">
    <div class="container">
      <h2>ご利用いただいた方の声</h2>
      <div class="cards">
        <div class="card"><p>「【要記入:お客様の声1(掲載許可を得た実際の声)】」</p><p class="muted">【要記入:属性】</p></div>
        <div class="card"><p>「【要記入:お客様の声2】」</p><p class="muted">【要記入:属性】</p></div>
      </div>
    </div>
  </section>

  <!-- 6. 料金・オファー -->
  <section class="section">
    <div class="container center">
      <h2>料金</h2>
      <div class="offer-box">
        <p class="offer">${esc(ind.offer || "【要記入:オファー】")}</p>
        <p class="muted">【要記入:通常料金・追加費用の条件】</p>
      </div>
    </div>
  </section>

  <!-- 7. FAQ -->
  <section class="section">
    <div class="container narrow">
      <h2>よくあるご質問</h2>
${faqs}
    </div>
  </section>

  <!-- 8. 最終CTA -->
  <section class="section section--dark" id="cta">
    <div class="container center">
      <h2>まずは、最初の一歩から</h2>
      <p>迷っている時間も、悩みは続きます。${esc(cta.verb)}ところから始めませんか。</p>
      <p><a href="【要記入:フォーム/予約URL】" class="btn btn--lg">${esc(cta.button)}</a></p>
      <p class="micro">${esc(cta.micro)}</p>
    </div>
  </section>

  <footer class="footer">
    <div class="container center muted">
      <p>【要記入:特定商取引法に基づく表記/会社概要 へのリンク】</p>
      <p>&copy; 2026 【要記入:店名・社名】</p>
    </div>
  </footer>

</body>
</html>`;
  }

  // --- LP CSS の生成 ---

  function buildLpCss(ind) {
    const col = ind.colors;
    return `/* =====================================================
   Generated by TNF Core Engine
   業種: ${ind.label} / 配色: ${col.note}
   カスタマイズは :root の3変数だけ差し替えてください
   ===================================================== */

:root {
  --primary: ${col.primary};   /* CTA・アクセント */
  --secondary: ${col.secondary}; /* 見出し・ダーク背景 */
  --base: ${col.base};      /* ページ背景 */
  --text: #26282B;
  --muted: #6B7280;
  --border: #E5E1DB;
  --white: #FFFFFF;
  --radius: 12px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: "Hiragino Sans", "Noto Sans JP", sans-serif;
  font-size: 1rem; line-height: 1.8;
  color: var(--text); background: var(--base);
}
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
h1, h2, h3 { line-height: 1.3; color: var(--secondary); }
h2 { font-size: 1.75rem; text-align: center; margin-bottom: 2.5rem; }
h3 { font-size: 1.15rem; margin-bottom: 0.6rem; }
:focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; }

.container { max-width: 1000px; margin-inline: auto; padding-inline: 1.25rem; }
.narrow { max-width: 720px; }
.section { padding-block: 5rem; }
.section--dark { background: var(--secondary); color: var(--white); }
.section--dark h2 { color: var(--white); }
.center { text-align: center; }
.muted { color: var(--muted); font-size: 0.875rem; }
.section--dark .muted { color: rgb(255 255 255 / 0.7); }

.fv { padding-block: 5rem 4rem; text-align: center; }
.fv__badge {
  display: inline-block; background: var(--secondary); color: var(--white);
  font-size: 0.875rem; padding: 0.3em 1.2em; border-radius: 999px; margin-bottom: 1.25rem;
}
.fv__title { font-size: clamp(1.75rem, 5vw, 2.75rem); margin-bottom: 1rem; }
.fv__sub { font-size: 1.125rem; margin-bottom: 1.5rem; }
.fv__points { display: table; margin: 0 auto 2rem; text-align: left; }
.fv__points li { padding-left: 1.6em; position: relative; font-weight: 500; }
.fv__points li::before { content: "✓"; position: absolute; left: 0; color: var(--primary); font-weight: 700; }

.btn {
  display: inline-block; background: var(--primary); color: var(--white);
  font-weight: 700; padding: 1em 2.75em; border-radius: 999px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.18);
  transition: transform 0.2s ease, filter 0.2s ease;
}
.btn:hover { transform: translateY(-2px); filter: brightness(0.94); }
.btn--lg { font-size: 1.125rem; padding: 1.2em 3.5em; }
.micro { font-size: 0.8125rem; color: var(--muted); margin-top: 0.75rem; }
.section--dark .micro { color: rgb(255 255 255 / 0.75); }

.problems { max-width: 640px; margin: 0 auto 2rem; }
.problems li {
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1rem 1.25rem 1rem 3rem;
  margin-bottom: 0.75rem; position: relative;
}
.problems li::before { content: "・"; position: absolute; left: 1.25rem; color: var(--primary); font-weight: 700; }
.bridge { text-align: center; font-weight: 700; font-size: 1.125rem; }

.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; }
.card {
  background: var(--white); border-radius: var(--radius); padding: 1.75rem;
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.06);
}

.offer-box {
  display: inline-block; background: var(--white); border: 2px solid var(--primary);
  border-radius: var(--radius); padding: 1.75rem 2.5rem;
}
.offer { font-size: 1.3rem; font-weight: 700; color: var(--secondary); }

details {
  background: var(--white); border: 1px solid var(--border);
  border-radius: 8px; margin-bottom: 0.75rem;
}
summary { font-weight: 700; padding: 1rem 1.25rem; cursor: pointer; list-style: none; }
summary::before { content: "Q. "; color: var(--primary); }
details p { padding: 0 1.25rem 1rem; color: var(--muted); }

.footer { padding-block: 2.5rem; border-top: 1px solid var(--border); }

@media (max-width: 600px) {
  .section { padding-block: 3.5rem; }
  h2 { font-size: 1.4rem; }
}

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; }
}`;
  }

  // --- 公開インターフェース ---

  function generate(input) {
    const industryText = (input.industry || "").trim();
    const goal = input.goal || "問い合わせ";
    if (!industryText) throw new Error("業種を入力してください");

    const matched = matchIndustry(industryText);
    const ind = matched || buildGeneric(industryText, input.target);
    const target = (input.target || "").trim() || ind.defaultTarget;
    const cta = TNF_DATA.goals[goal] || TNF_DATA.goals["問い合わせ"];

    return {
      meta: {
        industryLabel: matched ? ind.label : industryText,
        matchedPreset: matched ? ind.label : "汎用テンプレート(業種プリセット外)",
        target, goal,
        regulation: ind.regulation,
        colorsNote: ind.colors.note
      },
      usp: {
        main: ind.usp.main,
        support: ind.usp.support,
        commonClaims: ind.commonClaims
      },
      catches: ind.catches,
      structure: buildStructure(ind, target, goal),
      lpHtml: buildLpHtml(ind, target, goal, cta),
      lpCss: buildLpCss(ind)
    };
  }

  return { generate };
})();
