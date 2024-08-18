class LeaveDetails extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      
        `
    }

}

customElements.define('leave-details-component', LeaveDetails);