(() => {
  const ACCESS_KEY = "site_access_granted";
  const PASS_TOKEN = "QVM1MjgwMTA="; //

  if (sessionStorage.getItem(ACCESS_KEY) === "true") {
    return;
  }

  document.documentElement.style.visibility = "hidden";

  const i18nTexts = {
    de: {
      tag: "Interner Entwicklungsmodus",
      title: "Geschützter Vorabzugang & Testumgebung",
      desc: "Diese Plattform befindet sich derzeit in der geschlossenen Entwicklungs- und Testphase. Ein Zugriff ist ausschließlich autorisierten Testpersonen mit gültigem Zugangsschlüssel gestattet.",
      inputPlaceholder: "Zugangsschlüssel eingeben",
      btn: "Zugang freischalten",
      err: "Ungültiger Zugangsschlüssel.",
      disclaimerTitle: "Rechtlicher Hinweis & Haftungsausschluss (Strikter Testbetrieb)",
      disclaimerBody: "Dies ist keine öffentlich zugängliche Website und stellt kein verbindliches Angebot, keine geschäftliche Handlung im Sinne des UWG und keine Rechtsberatung dar. Sämtliche Systeme, Buchungsmasken und Zahlungsfunktionen sind vollständig inaktiv und dienen ausschließlich internen Darstellungs- und Testzwecken. Ein unbefugter Zugriff, das Umgehen technischer Schutzmaßnahmen oder eine Verwertung der Inhalte ist untersagt. Es wird ausdrücklich keine Haftung für Richtigkeit, Vollständigkeit oder Aktualität übernommen (§ 206 BRAO / BGB)."
    },
    tr: {
      tag: "Dahili Geliştirme Modu",
      title: "Özel Önizleme & Test Ortamı",
      desc: "Bu platform kapalı devre geliştirme ve teknik test aşamasındadır. Erişim yalnızca yetkilendirilmiş erişim koduna sahip test kullanıcılarına açıktır.",
      inputPlaceholder: "Erişim Kodunu Giriniz",
      btn: "Giriş Yap",
      err: "Geçersiz erişim kodu.",
      disclaimerTitle: "Yasal Bilgilendirme & Sorumluluk Reddi (Kapalı Test Süreci)",
      disclaimerBody: "Bu web sitesi kamuya açık bir ticari yayın teşkil etmez; bağlayıcı bir hukuki hizmet teklifi niteliğinde değildir. Ödeme ve danışmanlık sistemleri tamamen devre dışı olup yalnızca yazılım testleri amaçlanmaktadır. Yetkisiz giriş yapılması veya teknik engellerin aşılması yasaktır. Platform üzerinden fiili avukatlık ve hukuki danışmanlık hizmeti sunulmamakta olup hiçbir sorumluluk kabul edilmemektedir."
    },
    en: {
      tag: "Internal Development Mode",
      title: "Restricted Preview & Staging Environment",
      desc: "This platform is currently in a closed development and testing phase. Access is strictly limited to authorized personnel with a valid access key.",
      inputPlaceholder: "Enter Access Key",
      btn: "Unlock Access",
      err: "Invalid access key.",
      disclaimerTitle: "Legal Notice & Disclaimer (Strict Testing Environment)",
      disclaimerBody: "This is not a public commercial service or binding offer. All appointment, booking, and payment mechanisms are simulated and completely inactive. Unauthorized access, reverse engineering, or reliance on any test content is strictly prohibited. No legal advice is provided, and no liability is accepted."
    }
  };

  let currentLang = "de";

  function verifyCode(val) {
    if (!val) return false;
    try {
      return btoa(val.trim().split("").reverse().join("")) === PASS_TOKEN;
    } catch (e) {
      return false;
    }
  }

  function updateGateLang(lang) {
    currentLang = lang;
    const t = i18nTexts[lang];
    document.getElementById("gate-tag").textContent = t.tag;
    document.getElementById("gate-title").textContent = t.title;
    document.getElementById("gate-desc").textContent = t.desc;
    document.getElementById("preview-access-code").placeholder = t.inputPlaceholder;
    document.getElementById("gate-submit-btn").textContent = t.btn;
    document.getElementById("gate-disc-title").textContent = t.disclaimerTitle;
    document.getElementById("gate-disc-body").textContent = t.disclaimerBody;

    document.querySelectorAll(".gate-lang-btn").forEach((btn) => {
      btn.style.opacity = btn.dataset.lang === lang ? "1" : "0.45";
      btn.style.border = btn.dataset.lang === lang ? "1px solid #d97706" : "1px solid transparent";
    });
  }

  function initGate() {
    if (sessionStorage.getItem(ACCESS_KEY) === "true") {
      document.documentElement.style.visibility = "";
      if (document.body) document.body.style.display = "";
      return;
    }

    if (document.body) document.body.style.display = "none";

    const oldGate = document.getElementById("preview-gate-wrapper");
    if (oldGate) oldGate.remove();

    const gate = document.createElement("main");
    gate.id = "preview-gate-wrapper";
    gate.style.cssText = "min-height:100vh;background:#0d1117;color:#e6edf3;display:flex;align-items:center;justify-content:center;padding:24px 16px;box-sizing:border-box;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;";

    gate.innerHTML = `
      <section style="max-width: 580px; width: 100%; background: #161b22; border: 1px solid #30363d; border-radius: 14px; padding: 36px 28px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); box-sizing: border-box; text-align: center;">
        
        <!-- Dil Seçici -->
        <div style="display: flex; justify-content: flex-end; gap: 8px; margin-bottom: 20px;">
          <button type="button" class="gate-lang-btn" data-lang="de" style="background:#21262d; border-radius:6px; padding:4px 10px; cursor:pointer; font-size:13px; color:#fff; transition:0.2s;">🇩🇪 DE</button>
          <button type="button" class="gate-lang-btn" data-lang="tr" style="background:#21262d; border-radius:6px; padding:4px 10px; cursor:pointer; font-size:13px; color:#fff; transition:0.2s;">🇹🇷 TR</button>
          <button type="button" class="gate-lang-btn" data-lang="en" style="background:#21262d; border-radius:6px; padding:4px 10px; cursor:pointer; font-size:13px; color:#fff; transition:0.2s;">🇬🇧 EN</button>
        </div>

        <div style="width: 52px; height: 52px; margin: 0 auto 16px; background: rgba(217,119,6,0.12); border: 1px solid rgba(217,119,6,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">🔒</div>
        
        <span id="gate-tag" style="display:inline-block; font-size:11px; font-weight:700; letter-spacing:1px; color:#d97706; text-transform:uppercase; margin-bottom:8px;"></span>
        <h1 id="gate-title" style="font-size: 22px; font-weight: 700; margin: 0 0 12px; color: #fff;"></h1>
        <p id="gate-desc" style="font-size: 13.5px; color: #8b949e; line-height: 1.55; margin: 0 0 24px;"></p>

        <!-- Giriş Formu -->
        <form id="gate-auth-form" style="max-width: 380px; margin: 0 auto;">
          <input id="preview-access-code" type="password" required autofocus style="width: 100%; padding: 12px 14px; border-radius: 8px; border: 1px solid #30363d; background: #0d1117; color: #fff; font-size: 15px; box-sizing: border-box; margin-bottom: 12px; outline: none; text-align: center; letter-spacing: 2px;">
          <button id="gate-submit-btn" type="submit" style="width: 100%; padding: 12px; border-radius: 8px; border: none; background: #d97706; color: #fff; font-size: 14.5px; font-weight: 700; cursor: pointer; transition: background 0.2s;"></button>
          <p id="gate-auth-error" style="color: #f85149; font-size: 13px; margin: 10px 0 0; display: none;"></p>
        </form>

        <!-- Alman Hukuku Uyumlu Yasal Sorumluluk Reddi (Rechtlicher Hinweis) -->
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #21262d; text-align: left;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
            <span style="font-size: 12px;">⚖️</span>
            <span id="gate-disc-title" style="font-size: 11.5px; font-weight: 700; color: #c9d1d9; text-transform: uppercase; letter-spacing: 0.5px;"></span>
          </div>
          <p id="gate-disc-body" style="font-size: 11px; color: #6e7681; line-height: 1.5; margin: 0;"></p>
        </div>

      </section>
    `;

    document.body.after(gate);
    document.documentElement.style.visibility = "";

    // Başlangıç dilini Almanca yap
    updateGateLang("de");

    // Dil butonları dinleyicisi
    gate.querySelectorAll(".gate-lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => updateGateLang(btn.dataset.lang));
    });

    // Form doğrulama
    const form = document.getElementById("gate-auth-form");
    const input = document.getElementById("preview-access-code");
    const error = document.getElementById("gate-auth-error");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!verifyCode(input.value)) {
        error.textContent = i18nTexts[currentLang].err;
        error.style.display = "block";
        input.select();
        input.focus();
        return;
      }

      sessionStorage.setItem(ACCESS_KEY, "true");
      gate.remove();
      if (document.body) document.body.style.display = "";
      document.documentElement.style.visibility = "";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGate);
  } else {
    initGate();
  }
})();