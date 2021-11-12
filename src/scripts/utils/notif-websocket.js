const notifWebsocket = {
  kirimNotif({ title, options }) {
    const Tersedia = this._cekKetersediaan();
    const Dizinkan = this._cekPerizinan();

    if (!Tersedia) {
      console.info('Notification not supported in this browser');
      return;
    }

    if (!Dizinkan) {
      console.info('User did not yet granted permission');
      this._mintaPerizinan();
      return;
    }

    this._tampilNotif({ title, options });
  },

  _cekKetersediaan() {
    return Boolean('Notification' in window);
  },

  _cekPerizinan() {
    return Notification.permission === 'granted';
  },

  async _mintaPerizinan() {
    const status = await Notification.mintaPerizinan();

    if (status === 'denied') {
      console.error('Notification Denied');
    }

    if (status === 'default') {
      console.warn('Permission closed');
    }
  },

  async _tampilNotif({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.tampilNotif(title, options);
  }
};

export default notifWebsocket;
