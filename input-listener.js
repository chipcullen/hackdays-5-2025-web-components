document.querySelector("input").addEventListener("input", (e) => {
  document.querySelector("pbs-player").setAttribute("slug", e.target.value);
});
