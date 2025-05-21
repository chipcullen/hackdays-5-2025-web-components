import "./popular-videos-selector.js";
import "./pbs-player.js";
import "./simple-header.js";
import "./years-since.js";
import "./input-listener.js";

document.body.classList.toggle(
  "supports-custom-select",
  CSS.supports("appearance: base-select")
);
