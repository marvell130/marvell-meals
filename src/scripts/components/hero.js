class contentHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div tabindex="0" class="textHero">
          <h1 class="titleHero">Welcome to Marvell Meal's</h1>
  
          <p class="subtitleHero">
          Kuy buruan pesan sebelum kehabisan !
          </p>
  
          <a href="#content-main" class="btn">Read More</a>
        </div>
      `;
  }
}

customElements.define('content-hero', contentHero);
