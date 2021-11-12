class Navibar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
          <div class="hpMenu">
            <div>
              <a href="/" class="logo-font"> Marvell Meal's </a>
            </div>
  
            <div class="container-main">
              <button
                class="menu"
                aria-label="button menu dropdown on mobile"
                type="button"
              >
                <span class="fa fa-bars"></span>
              </button>
            </div>
          </div>
  
          <ul class="navbar-list">
            <li class="navbar-item"><a href="/">Home</a></li>
            <li class="navbar-item"><a href="#/favorit">Favorit</a></li>
            <li class="navbar-item">
              <a
                href="https://www.linkedin.com/in/marvell-antonius-0561aa1a0/"
                target="_blank"
                rel="noopener noreferrer"
                >About</a
              >
            </li>
          </ul>
        </nav>
      `;
  }
}

customElements.define('navi-bar', Navibar);
