const template = document.createElement("template");

template.innerHTML = `
  <style>
    h2 {
      color: #666;
      font-family: sans-serif;
      font-size: 36px;
      margin: 0;
      }
      </style>
  <h2><slot></slot></h2>
`;

class SimpleHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    const h2 = shadow.querySelector("h2");
  }

  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "color") {
      this.updateColor(newValue);
    }
  }

  updateColor(color) {
    if (color !== null) {
      this.shadowRoot.querySelector("h2").style.color = color;
    }
  }
}

customElements.define("simple-header", SimpleHeader);
