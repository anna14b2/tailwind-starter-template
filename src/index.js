const btn = document.querySelector("#darkbtn");

btn.addEventListener("click", mode);

function mode() {
  document.documentElement.classList.toggle("dark");
}
