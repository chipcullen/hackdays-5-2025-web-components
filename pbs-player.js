import getCSVideo from "./getCSVideo.js";
import playerHTML from "./player-html.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
  .player { border: 1px solid black; padding: 20px; margin-block: 20px;}
      video {
      aspect-ratio: 16 / 9;
      border: 10px solid var(--border-color, orange);
      width: calc(100% - 20px);
      }
</style>
<div class="player"><div class="player-inner"></div></div>`;

class PBSPlayer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.playerOuter = shadow.querySelector(".player");
    this.playerInner = shadow.querySelector(".player-inner");
    document.addEventListener("slugChanged", this);
  }

  handleEvent(e) {
    if (e.type === "slugChanged") {
      const slug = e.detail.slug;
      this.setAttribute("slug", slug);
    }
  }

  static get observedAttributes() {
    return ["slug", "color"];
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "slug":
        const video = await getCSVideo(newValue);
        this.playerInner.innerHTML = playerHTML(video);
        break;
      case "color":
        this.updateColor(newValue);
        break;
      default:
        break;
    }
  }

  updateColor(color) {
    if (color !== null) {
      this.playerOuter.insertAdjacentHTML(
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
