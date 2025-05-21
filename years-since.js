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

    let result = years;
    let resultString = `${result} years`;

    switch (true) {
      case (months < 0 && months > -3) || (months === 0 && days < 0):
        resultString = `almost ${result} years`;
        break;
      case months <= -3 && months > -7:
        result--;
        resultString = `${result} and a half years`;
        break;
      case months >= 5 && months < 9:
        resultString = `${result} and a half years`;
        break;
      case months >= 9 && months <= 12:
        result++;
        resultString = `almost ${result} years`;
        break;
    }

    this.shadowRoot.innerHTML = `<span>${resultString}</span>`;
  }
}

customElements.define("years-since", YearsSince);
