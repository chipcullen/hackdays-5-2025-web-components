import getCSVideo from "./getCSVideo.js";
import playerHTML from "./player-html.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
  .player { border: 1px solid black; padding: 20px; margin: 20px;}
      video {
      aspect-ratio: 16 / 9;
      border: 10px solid var(--border-color, orange);
      width: clamp(400px, 50vw, 900px);
      }
</style>
<div class="player"><div class="player-inner"></div></div>`;

class PBSPlayer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["slug", "color"];
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "slug":
        const video = await getCSVideo(newValue);
        this.shadowRoot.querySelector(".player-inner").innerHTML =
          playerHTML(video);
        break;
      case "color":
        this.updateColor(newValue);
        break;
      default:
        break;
    }
  }
  connectedCallback() {
    // console.log("pbs-player mounted");
  }
  updateColor(color) {
    console.log({ color });
    if (color !== null) {
      this.shadowRoot.querySelector(".player").insertAdjacentHTML(
        "beforebegin",
        `<style>
        .player {
          --border-color: ${color};
        }
        </style>`
      );
    }
  }
}

customElements.define("pbs-player", PBSPlayer);
