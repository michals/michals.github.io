(function () {
  'use strict';

  function fontSize(size) {
    document.documentElement.style.fontSize = size + 'px';
    try { localStorage.setItem('btv-font-size', size); } catch (e) {}
  }

  var switcher = document.querySelector('.font-switcher');
  if (switcher) {
    [14, 16, 18, 20, 22, 24].forEach(function (size) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = 'A';
      b.style.fontSize = size + 'px';
      b.setAttribute('aria-label', 'Rozmiar czcionki ' + size + ' pikseli');
      b.addEventListener('click', function () { fontSize(size); });
      switcher.appendChild(b);
    });
  }

  var armed = null;

  function clearSel() {
    document.querySelectorAll('span.v.sel').forEach(function (el) {
      el.classList.remove('sel');
    });
  }

  function disarm() {
    armed = null;
    document.body.classList.remove('range-armed');
    document.querySelectorAll('span.v.armed-start').forEach(function (el) {
      el.classList.remove('armed-start');
    });
  }

  function arm(id) {
    disarm();
    armed = id;
    document.body.classList.add('range-armed');
    var el = document.getElementById(id);
    if (el) el.classList.add('armed-start');
  }

  function verseIndex(verses, id) {
    return verses.findIndex(function (el) { return el.id === id; });
  }

  function parseVerseId(domId) {
    if (!domId || domId.charAt(0) !== 'v') return null;
    var under = domId.indexOf('_');
    if (under === -1) return null;
    var ch = parseInt(domId.slice(1, under), 10);
    if (isNaN(ch)) return null;
    var v = domId.slice(under + 1);
    return { ch: ch, v: v };
  }

  function toDomId(ch, v) {
    return 'v' + ch + '_' + v;
  }

  function parseHash(rawHash) {
    if (!rawHash) return null;
    var s = decodeURIComponent(rawHash).trim();
    if (!s) return null;

    // Legacy range: #vv8_65__9_3
    if (s.indexOf('vv') === 0) {
      var inner = s.slice(2);
      var parts = inner.split('__');
      if (parts.length === 2) {
        return { type: 'range', startId: 'v' + parts[0], endId: 'v' + parts[1] };
      }
    }

    // Legacy single verse: #v8_65 (must contain underscore so chapter #v8 is ignored)
    if (s.indexOf('v') === 0 && s.indexOf('_') !== -1) {
      return { type: 'single', id: s };
    }

    // Modern range: #8,65-9,3 or #8,1-8,5 or #8,1-5
    var dashIdx = s.indexOf('-');
    if (dashIdx !== -1) {
      var left = s.slice(0, dashIdx).replace(/:/g, ',');
      var right = s.slice(dashIdx + 1).replace(/:/g, ',');
      if (left.indexOf(',') !== -1) {
        var sp1 = left.split(',');
        var ch1 = parseInt(sp1[0], 10);
        var v1 = sp1.slice(1).join(',');
        var ch2, v2;
        if (right.indexOf(',') !== -1) {
          var sp2 = right.split(',');
          ch2 = parseInt(sp2[0], 10);
          v2 = sp2.slice(1).join(',');
        } else {
          ch2 = ch1;
          v2 = right;
        }
        if (!isNaN(ch1) && !isNaN(ch2) && v1 && v2) {
          return {
            type: 'range',
            startId: toDomId(ch1, v1),
            endId: toDomId(ch2, v2)
          };
        }
      }
    }

    // Modern single verse: #8,65 or #8:65
    var colonOrComma = s.replace(/:/g, ',');
    if (colonOrComma.indexOf(',') !== -1) {
      var singleParts = colonOrComma.split(',');
      var sCh = parseInt(singleParts[0], 10);
      var sV = singleParts.slice(1).join(',');
      if (!isNaN(sCh) && sV) {
        return { type: 'single', id: toDomId(sCh, sV) };
      }
    }

    return null;
  }

  function buildRange(a, b) {
    var verses = Array.from(document.querySelectorAll('span.v'));
    var i1 = verseIndex(verses, a);
    var i2 = verseIndex(verses, b);
    if (i1 < 0 || i2 < 0) return;
    var p1 = parseVerseId(verses[i1].id);
    var p2 = parseVerseId(verses[i2].id);
    if (!p1 || !p2) return;
    if (i1 === i2) {
      location.hash = '#' + p1.ch + ',' + p1.v;
      return;
    }
    if (i1 > i2) {
      var tp = p1; p1 = p2; p2 = tp;
    }
    location.hash = '#' + p1.ch + ',' + p1.v + '-' + p2.ch + ',' + p2.v;
  }

  function applyRange() {
    clearSel();
    var hash = location.hash.slice(1);
    if (!hash) return;
    var parsed = parseHash(hash);
    if (!parsed) return;

    var verses = Array.from(document.querySelectorAll('span.v'));
    if (!verses.length) return;

    if (parsed.type === 'range') {
      var i1 = verseIndex(verses, parsed.startId);
      var i2 = verseIndex(verses, parsed.endId);
      if (i1 < 0 || i2 < 0) return;
      if (i1 > i2) { var t = i1; i1 = i2; i2 = t; }
      verses.slice(i1, i2 + 1).forEach(function (el) { el.classList.add('sel'); });
      verses[i1].scrollIntoView({ block: 'start' });
      return;
    }

    if (parsed.type === 'single') {
      var targetEl = document.getElementById(parsed.id);
      if (targetEl && targetEl.classList.contains('v')) {
        targetEl.classList.add('sel');
        targetEl.scrollIntoView({ block: 'start' });
      }
    }
  }

  function initVerseLinks() {
    document.querySelectorAll('span.v').forEach(function (vEl) {
      var p = parseVerseId(vEl.id);
      if (!p) return;
      var a = vEl.querySelector('sup:first-of-type a');
      if (a) {
        a.href = '#' + p.ch + ',' + p.v;
        a.title = 'Kliknij, aby zaznaczyć. Kliknij z Shiftem lub ponownie, aby zaznaczyć zakres.';
      }
    });
  }

  document.addEventListener('click', function (e) {
    try { if (window.getSelection && String(window.getSelection())) return; } catch (err) {}
    if (e.target.closest && e.target.closest('.font-switcher')) return;

    var verseEl = e.target.closest ? e.target.closest('span.v') : null;
    var numLink = e.target.closest ? e.target.closest('span.v > sup:first-of-type a') : null;

    if (armed) {
      if (!verseEl) return;
      e.preventDefault();
      var target = verseEl.id;
      if (target === armed) { disarm(); return; }
      var a = armed;
      disarm();
      buildRange(a, target);
      return;
    }

    var curParsed = parseHash(location.hash.slice(1));
    var isCurrentSingle = curParsed && curParsed.type === 'single' && verseEl && curParsed.id === verseEl.id;

    if (numLink && verseEl) {
      if (isCurrentSingle || e.shiftKey) {
        e.preventDefault();
        arm(verseEl.id);
        return;
      }
      var p = parseVerseId(verseEl.id);
      if (p) {
        e.preventDefault();
        location.hash = '#' + p.ch + ',' + p.v;
        return;
      }
    }

    if (e.shiftKey && verseEl && curParsed && curParsed.type === 'single' && verseEl.id !== curParsed.id) {
      e.preventDefault();
      buildRange(curParsed.id, verseEl.id);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') disarm();
  });

  window.addEventListener('hashchange', function () {
    disarm();
    applyRange();
  });

  document.addEventListener('DOMContentLoaded', function () {
    initVerseLinks();
    applyRange();
  });

  initVerseLinks();
  applyRange();
})();
