import getPopularVideos from "./getPopularVideos.js";

const template = document.createElement("template");
template.innerHTML = `
<style></style>
<div class="popular-videos-selector">
  <h2>Popular Videos</h2>
  <select></select>
</div>
`;

class PopularVideosSelector extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.select = shadow.querySelector("select");
  }

  async connectedCallback() {
    const videos = await getPopularVideos();

    videos.forEach((video, index) => {
      const { parent, slug } = video;
      const option = document.createElement("option");
      option.value = slug;
      const showTitle =
        parent.season?.show?.title ||
        parent.show?.title ||
        parent?.title ||
        null;
      option.textContent = `
        ${index + 1}:
        ${showTitle ? `${showTitle}: ` : ""}
        ${video.title}
      `;
      this.select.appendChild(option);
    });

    this.select.addEventListener("change", (e) => {
      const selectedSlug = e.target.value;
      const slugEvent = new CustomEvent("slugChanged", {
        detail: { slug: selectedSlug },
        bubbles: true,
        cancelable: true,
      });

      this.dispatchEvent(slugEvent);
    });
  }
}

customElements.define("popular-videos-selector", PopularVideosSelector);
