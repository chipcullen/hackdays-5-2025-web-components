import "./popular-videos-selector/popular-videos-selector.js";
import "./pbs-player/pbs-player.js";
import "./simple-header/simple-header.js";
import "./years-since/years-since.js";

document.body.classList.toggle(
  "supports-custom-select",
  CSS.supports("appearance: base-select")
);

document.querySelector("input").addEventListener("input", (e) => {
  document.querySelector("pbs-player").setAttribute("slug", e.target.value);
});
