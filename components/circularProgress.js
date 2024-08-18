class CircularProgress extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <svg class="circular-progress">
            <text x="34" y="56" fill="white">75%</text>
            <circle class="bg"></circle>
            <circle class="fg"></circle>
        </svg>
        `
    }

}

customElements.define('circular-progress-component', CircularProgress);