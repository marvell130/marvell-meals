import instalDrawer from '../utils/instal-drawer';
import parseUrl from '../routes/url-parse';
import route from '../routes/routes';

class App {
  constructor({ tombol, drawer, konten }) {
    this._tombol = tombol;
    this._drawer = drawer;
    this._konten = konten;

    this._instalAppShell();
  }

  _instalAppShell() {
    instalDrawer.init({
      tombol: this._tombol,
      drawer: this._drawer,
      konten: this._konten
    });
  }

  async renderPage() {
    const url = parseUrl.gantiUrlAktifdenganCombiner();
    const page = route[url];
    this._konten.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
