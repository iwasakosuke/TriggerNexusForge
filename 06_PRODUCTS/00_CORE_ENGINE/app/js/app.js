/* ==========================================================================
   TNF Core Engine — app.js(UI制御)
   フォーム → TNFEngine.generate() → タブ表示・コピー・ダウンロード・プレビュー
   ========================================================================== */

(() => {
  const $ = (sel) => document.querySelector(sel);
  let result = null;

  function escHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  }

  // --- 結果レンダリング ---

  function renderUsp(r) {
    $("#tab-usp").innerHTML = `
      <div class="result-block">
        <h3>USP(選ばれる理由)</h3>
        <p class="usp-main">${escHtml(r.usp.main)}</p>
      </div>
      <div class="result-block">
        <h3>サポートポイント(FVの安心要素・ベネフィットの種)</h3>
        <ul>${r.usp.support.map(s => `<li>${escHtml(s)}</li>`).join("")}</ul>
      </div>
      <div class="result-block">
        <h3>参考:競合が共通して言っていること(=差別化にならない要素)</h3>
        <ul>${r.usp.commonClaims.map(s => `<li>${escHtml(s)}</li>`).join("")}</ul>
      </div>
      <div class="result-block">
        <h3>生成情報</h3>
        <ul>
          <li>適用プリセット:${escHtml(r.meta.matchedPreset)}</li>
          <li>ターゲット:${escHtml(r.meta.target)}</li>
          <li>⚠️ 規制メモ:${escHtml(r.meta.regulation)}</li>
        </ul>
      </div>`;
  }

  function renderCatch(r) {
    $("#tab-catch").innerHTML = `
      <div class="result-block">
        <h3>キャッチコピー(3案)</h3>
        ${r.catches.map(c => `
          <div class="catch-item">
            <span class="type">${escHtml(c.type)}</span>
            <span class="main">${escHtml(c.main)}</span>
            <span class="sub">${escHtml(c.sub)}</span>
          </div>`).join("")}
        <p class="hint">1案目がFV採用案としてHTMLに反映されています。差し替えはHTML内の h1 を編集してください。</p>
      </div>`;
  }

  function renderStructure(r) {
    $("#tab-structure").innerHTML = `
      <div class="result-block">
        <h3>LP構成(8セクション)</h3>
        <table>
          <thead><tr><th>#</th><th>セクション</th><th>目的</th><th>読者の心理</th><th>掲載要素</th></tr></thead>
          <tbody>
            ${r.structure.map((s, i) => `
              <tr><td>${i + 1}</td><td>${escHtml(s.name)}</td><td>${escHtml(s.purpose)}</td>
              <td>${escHtml(s.psych)}</td><td>${escHtml(s.elements)}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>`;
  }

  function renderCode(r) {
    $("#code-html").textContent = r.lpHtml;
    $("#code-css").textContent = r.lpCss;
    const doc = r.lpHtml.replace(
      '<link rel="stylesheet" href="style.css">',
      `<style>${r.lpCss}</style>`
    );
    $("#preview-frame").setAttribute("srcdoc", doc);
  }

  // --- タブ切り替え ---

  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-body").forEach(b => b.classList.add("hidden"));
      tab.classList.add("active");
      $(`#tab-${tab.dataset.tab}`).classList.remove("hidden");
    });
  });

  // --- コピー & ダウンロード ---

  function download(filename, text) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      if (!result) return;
      const text = btn.dataset.copy === "html" ? result.lpHtml : result.lpCss;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "コピーしました ✓";
        setTimeout(() => (btn.textContent = "コピー"), 1500);
      } catch {
        btn.textContent = "コピー失敗(手動で選択してください)";
      }
    });
  });

  document.querySelectorAll("[data-download]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!result) return;
      if (btn.dataset.download === "html") download("index.html", result.lpHtml);
      else download("style.css", result.lpCss);
    });
  });

  // --- Generate ---

  $("#generate").addEventListener("click", () => {
    const status = $("#status");
    status.classList.remove("error");
    const input = {
      industry: $("#industry").value,
      target: $("#target").value,
      goal: $("#goal").value
    };
    try {
      status.textContent = "生成中…";
      result = TNFEngine.generate(input);
      renderUsp(result);
      renderCatch(result);
      renderStructure(result);
      renderCode(result);
      $("#result-panel").classList.remove("hidden");
      status.textContent = `生成完了(${result.meta.matchedPreset})`;
      $("#result-panel").scrollIntoView({ behavior: "smooth" });
    } catch (e) {
      status.textContent = e.message;
      status.classList.add("error");
    }
  });
})();
