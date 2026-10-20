/* Copyright (c) 2025-2026 Strategic Task Solutions, LLC. All rights reserved. */
(function () {
  // mobile nav
  var toggle = document.querySelector('.navtoggle');
  var links = document.getElementById('navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
    links.addEventListener('click', function (e) { if (e.target.tagName === 'A') links.classList.remove('open'); });
  }

  // scroll reveal + bracket lock-on
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        if (en.target.classList.contains('brk')) en.target.classList.add('lock');
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rv, .brk').forEach(function (el) { obs.observe(el); });

  // live HUD clock (Zulu) in hero readout, if present
  var z = document.getElementById('zulu');
  if (z) {
    var tick = function () {
      var d = new Date();
      var p = function (n) { return String(n).padStart(2, '0'); };
      z.textContent = p(d.getUTCHours()) + p(d.getUTCMinutes()) + p(d.getUTCSeconds()) + 'Z';
    };
    tick(); setInterval(tick, 1000);
  }
})();
