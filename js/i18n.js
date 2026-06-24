(function () {
  var STORAGE_KEY = 'site_lang';
  var DEFAULT_LANG = 'en';
  var cache = {};

  function getSavedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function getByPath(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function applyDict(dict) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = getByPath(dict, key);
      if (value === undefined) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.textContent = value;
      }
    });
  }

  function updateLangButtons(lang) {
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('lang-btn-active', active);
    });
  }

  function loadDict(lang) {
    if (cache[lang]) return Promise.resolve(cache[lang]);
    return fetch('./locales/' + lang + '.json')
      .then(function (res) { return res.json(); })
      .then(function (dict) {
        cache[lang] = dict;
        return dict;
      });
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'vi') lang = DEFAULT_LANG;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    updateLangButtons(lang);
    loadDict(lang).then(applyDict);
  }

  window.setLang = setLang;

  document.addEventListener('DOMContentLoaded', function () {
    setLang(getSavedLang());
  });
})();
