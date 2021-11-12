const parseUrl = {
  gantiUrlAktifdenganCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const urlSplite = this._splitterURL(url);
    return this._urlCombiner(urlSplite);
  },

  gantiUrlAktifTanpaCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._splitterURL(url);
  },

  _splitterURL(url) {
    const splitsUrl = url.split('/');
    return {
      resource: splitsUrl[1] || null,
      id: splitsUrl[2] || null,
      verb: splitsUrl[3] || null
    };
  },

  _urlCombiner(urlSplite) {
    return (urlSplite.resource ? `/${urlSplite.resource}` : '/') + (urlSplite.id ? '/:id' : '') + (urlSplite.verb ? `/${urlSplite.verb}` : '');
  }
};

export default parseUrl;
