class myFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
            <p>Copyright © 2021 - Marvell Meal's</p>
        </footer>
      `;
  }
}

customElements.define('my-footer', myFooter);
