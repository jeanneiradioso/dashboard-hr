class CircularProgress extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="progress-radial progress-85"><b></b></div>
        `
    }

}

customElements.define('circular-progress-component', CircularProgress);