const instalDrawer = {
  init({ tombol, drawer, konten }) {
    tombol.addEventListener('click', (event) => {
      this._toogleDrawer(event, drawer);
    });

    konten.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toogleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('navbar-list-block');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('navbar-list-block');
  }
};

export default instalDrawer;
