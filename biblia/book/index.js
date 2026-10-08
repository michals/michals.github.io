(function () {
  'use strict';
  function fontSize(size) {
    document.documentElement.style.fontSize = size + 'px';
    try { localStorage.setItem('btv-font-size', size); } catch (e) {}
  }
  var switcher = document.querySelector('.font-switcher');
  [14, 16, 18, 20, 22].forEach(function (size) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = 'A';
    b.style.fontSize = size + 'px';
    b.setAttribute('aria-label', 'Rozmiar czcionki ' + size + ' pikseli');
    b.addEventListener('click', function () { fontSize(size); });
    switcher.appendChild(b);
  });
})();
