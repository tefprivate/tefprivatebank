// assets/js/app.js

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // 🔐 Credenziali di esempio
      const validUser = "tefprivate";
      const validPass = "Topi2020.@";

      if (username === validUser && password === validPass) {
        alert("✅ Login riuscito! Benvenuto " + username);
        window.location.href = "/dashboard.html"; // dopo login ti porta alla dashboard
      } else {
        alert("❌ Credenziali errate, riprova.");
      }
    });
  }
});
