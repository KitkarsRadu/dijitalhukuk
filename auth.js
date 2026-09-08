(() => {
  const ACCESS_KEY = "site_access_granted";
  // "010825SA" şifresinin ters çevrilmiş Base64 imzası (kodda doğrudan okunmaz):
  const PASS_TOKEN = "QVM1MjgwMTA=";

  if (sessionStorage.getItem(ACCESS_KEY) === "true") {
    return;
  }

  // İlk yüklemede içeriğin parlamasını engelle
  document.documentElement.style.visibility = "hidden";

  function verifyCode(inputVal) {
    if (!inputVal) return false;
    try {
      // Girilen şifreyi ters çevirip base64 al ve token ile kıyasla
      const token = btoa(inputVal.trim().split("").reverse().join(""));
      return token === PASS_TOKEN;
    } catch (e) {
      return false;
    }
  }

  function initGate() {
    if (sessionStorage.getItem(ACCESS_KEY) === "true") {
      document.documentElement.style.visibility = "";
      if (document.body) document.body.style.display = "";
      return;
    }

    if (document.body) {
      document.body.style.display = "none";
    }

    // Varsa eski kilit ekranını temizle
    const oldGate = document.getElementById("preview-gate-wrapper");
    if (oldGate) oldGate.remove();

    const gate = document.createElement("main");
    gate.id = "preview-gate-wrapper";
    gate.innerHTML = `
      <section style="max-width: 420px; margin: 80px auto; padding: 36px 28px; background: #181B20; color: #fff; border-radius: 12px; text-align: center; font-family: system-ui, -apple-system, sans-serif; box-shadow: 0 20px 40px rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.08);">
        <div style="font-size: 42px; margin-bottom: 12px;">🔒</div>
        <p style="font-size: 12px; letter-spacing: 1.5px; color: #f59e0b; text-transform: uppercase; font-weight: 700; margin: 0 0 8px 0;">Dijital Hukuk Masası</p>
        <h1 style="font-size: 20px; margin: 0 0 10px 0; font-weight: 700;">Özel Önizleme / Geliştirme Aşaması</h1>
        <p style="font-size: 13.5px; color: #94a3b8; margin: 0 0 24px 0; line-height: 1.5;">Bu platform henüz test ve hazırlık aşamasındadır. Yalnızca yetkili erişim koduna sahip kullanıcılar görüntüleyebilir.</p>
        <form id="gate-auth-form">
          <input id="preview-access-code" type="password" placeholder="Erişim Kodu" required autofocus style="width: 100%; padding: 12px 14px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: #fff; box-sizing: border-box; font-size: 15px; margin-bottom: 14px; outline: none; transition: border-color 0.2s;">
          <button type="submit" style="width: 100%; padding: 12px; border-radius: 8px; border: none; background: #d97706; color: #fff; font-size: 15px; font-weight: 700; cursor: pointer; transition: background 0.2s;">Giriş Yap</button>
          <p id="gate-auth-error" style="color: #ef4444; font-size: 13px; margin: 12px 0 0 0; min-height: 18px; display: none;"></p>
        </form>
      </section>
    `;

    document.body.after(gate);
    document.documentElement.style.visibility = "";

    const form = document.getElementById("gate-auth-form");
    const input = document.getElementById("preview-access-code");
    const error = document.getElementById("gate-auth-error");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const isCorrect = verifyCode(input.value);

      if (!isCorrect) {
        error.textContent = "Geçersiz erişim kodu";
        error.style.display = "block";
        input.select();
        input.focus();
        return;
      }

      sessionStorage.setItem(ACCESS_KEY, "true");
      gate.remove();
      if (document.body) {
        document.body.style.display = "";
      }
      document.documentElement.style.visibility = "";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGate);
  } else {
    initGate();
  }
})();