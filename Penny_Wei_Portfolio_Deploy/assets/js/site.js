(function () {
  var root = document.documentElement;

  // Theme: follows the OS until the visitor picks one
  var themeBtn = document.querySelector('.theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme') ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile menu
  var menuBtn = document.querySelector('.menu-btn');
  var links = document.querySelector('.nav-links');
  if (menuBtn && links) {
    menuBtn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Section tabs: highlight the section in view
  var tabs = document.querySelectorAll('.tabs a');
  if (tabs.length && 'IntersectionObserver' in window) {
    var byId = {};
    tabs.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        tabs.forEach(function (a) { a.classList.remove('on'); a.removeAttribute('aria-current'); });
        var a = byId[en.target.id];
        if (a) {
          a.classList.add('on'); a.setAttribute('aria-current', 'true');
          var ol = a.parentElement.parentElement;
          ol.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  // "What can this card do?" demo (CityFitness)
  var demo = document.querySelector('[data-demo="card"]');
  if (demo) {
    var states = {
      black: { book: false, attend: false, note: 'Black Card: the class is visible and its details can be read, but it needs Premium, so Book is off.' },
      pro: { book: true, attend: true, note: 'Premium: one attribute says yes, so View, Book and Attend all agree.' }
    };
    var set = function (key) {
      var s = states[key];
      demo.querySelectorAll('.seg button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.card === key); });
      ['book', 'attend'].forEach(function (k) {
        var el = demo.querySelector('[data-state="' + k + '"]');
        el.classList.toggle('no', !s[k]);
        el.querySelector('span').textContent = s[k] ? 'Allowed' : 'Not allowed';
        el.querySelector('use').setAttribute('href', s[k] ? '#i-check' : '#i-x');
      });
      demo.querySelector('[data-note]').textContent = s.note;
    };
    demo.querySelectorAll('.seg button').forEach(function (b) {
      b.addEventListener('click', function () { set(b.dataset.card); });
    });
    set('black');
  }

  // Greyscale check for the access-state component
  document.querySelectorAll('[data-grey]').forEach(function (b) {
    var t = document.getElementById(b.getAttribute('aria-controls'));
    b.addEventListener('click', function () {
      var on = t.classList.toggle('grey');
      b.setAttribute('aria-pressed', on);
      b.textContent = on ? 'Back to colour' : 'View in greyscale';
    });
  });

  // Open collapsed detail sections when a link points inside them
  function openTarget() {
    var id = location.hash.slice(1); if (!id) return;
    var el = document.getElementById(id); if (!el) return;
    var d = el.closest('details');
    while (d) { d.open = true; d = d.parentElement && d.parentElement.closest('details'); }
    if (el.tagName === 'DETAILS') el.open = true;
    el.scrollIntoView();
  }
  window.addEventListener('hashchange', openTarget);
  if (location.hash) setTimeout(openTarget, 0);
})();
