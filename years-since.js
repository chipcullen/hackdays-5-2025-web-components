class YearsSince extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const date = new Date(this.getAttribute("date"));
    const now = new Date();
    const years = now.getFullYear() - date.getFullYear();
    const months = now.getMonth() - date.getMonth();
    const days = now.getDate() - date.getDate();
    console.log({ years, months, days });

    let result = years;

    switch (true) {
      case months < 0 || (months === 0 && days < 0):
        result--;
        break;
    }

    this.shadowRoot.innerHTML = `<span>${result} years</span>`;
  }
}

customElements.define("years-since", YearsSince);
