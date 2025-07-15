const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      window.location.href = "home.html";
    }
  });
}
if (window.location.pathname.includes("home.html") && !localStorage.getItem("user")) {
  window.location.href = "index.html";
}