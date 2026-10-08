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

  var curBook = document.body.dataset.book || '';
  var curCh = parseInt(document.body.dataset.chapter || '0', 10);

  function clearSel() {
    document.querySelectorAll('span.v.sel').forEach(function (el) {
      el.classList.remove('sel');
    });
    document.querySelectorAll('.range-continuation').forEach(function (el) {
      el.remove();
    });
  }

  function getStoredArmed() {
    try {
      var s = sessionStorage.getItem('btv-armed');
      if (s) {
        var obj = JSON.parse(s);
        if (obj && obj.book === curBook) return obj;
      }
    } catch (e) {}
    return null;
  }

  function setStoredArmed(obj) {
    try {
      if (obj) sessionStorage.setItem('btv-armed', JSON.stringify(obj));
      else sessionStorage.removeItem('btv-armed');
    } catch (e) {}
  }

  function disarm() {
    setStoredArmed(null);
    document.body.classList.remove('range-armed');
    document.querySelectorAll('span.v.armed-start').forEach(function (el) {
      el.classList.remove('armed-start');
    });
  }

  function arm(id) {
    disarm();
    var obj = { book: curBook, ch: curCh, v: id };
    setStoredArmed(obj);
    document.body.classList.add('range-armed');
    var el = document.getElementById(id);
    if (el) el.classList.add('armed-start');
  }

  function syncArmedUI() {
    var armed = getStoredArmed();
    if (armed) {
      document.body.classList.add('range-armed');
      if (armed.ch === curCh) {
        var el = document.getElementById(armed.v);
        if (el) el.classList.add('armed-start');
      }
    }
  }

  function verseIndex(verses, id) {
    return verses.findIndex(function (el) { return el.id === id; });
  }

  function parseHash(rawHash) {
    if (!rawHash) return null;
    var s = decodeURIComponent(rawHash);

    // Support legacy #vv4_5__5_2 or #vv4__5 or #v14
    if (s.indexOf('vv') === 0) {
      var inner = s.slice(2);
      if (inner.indexOf('__') !== -1) {
        var parts = inner.split('__');
        var p1 = parts[0];
        var p2 = parts[1];
        if (p1.indexOf('_') !== -1 && p2.indexOf('_') !== -1) {
          s = p1.replace('_', ',') + '-' + p2.replace('_', ',');
        } else {
          s = p1 + '-' + p2;
        }
      }
    } else if (s.indexOf('v') === 0 && s.indexOf('vv') !== 0) {
      var vInner = s.slice(1);
      if (vInner.indexOf('_') !== -1) {
        s = vInner.replace('_', ',');
      } else {
        s = vInner;
      }
    }

    if (s.indexOf('-') !== -1) {
      var dashIdx = s.indexOf('-');
      var left = s.slice(0, dashIdx);
      var right = s.slice(dashIdx + 1);

      if (left.indexOf(',') !== -1 || right.indexOf(',') !== -1) {
        var sp1 = left.split(',');
        var sp2 = right.split(',');
        var ch1 = parseInt(sp1[0], 10);
        var v1 = sp1.slice(1).join(',');
        var ch2 = sp2.length > 1 ? parseInt(sp2[0], 10) : ch1;
        var v2 = sp2.length > 1 ? sp2.slice(1).join(',') : right;
        return { type: 'cross', ch1: ch1, v1: v1, ch2: ch2, v2: v2, raw: s };
      } else {
        return { type: 'local', v1: left, v2: right, raw: s };
      }
    }

    if (s.indexOf(',') !== -1) {
      var chParts = s.split(',');
      var chNum = parseInt(chParts[0], 10);
      var vId = chParts.slice(1).join(',');
      if (chNum === curCh) {
        return { type: 'single', v: vId, raw: s };
      }
      return null;
    }

    return { type: 'single', v: s, raw: s };
  }

  function applyRange() {
    clearSel();
    var hash = location.hash.slice(1);
    if (!hash) return;

    var parsed = parseHash(hash);
    if (!parsed) return;

    var verses = Array.from(document.querySelectorAll('span.v'));
    if (!verses.length) return;

    if (parsed.type === 'cross' && curCh > 0) {
      var ch1 = parsed.ch1;
      var v1 = parsed.v1;
      var ch2 = parsed.ch2;
      var v2 = parsed.v2;
      if (ch1 > ch2) {
        var tch = ch1; ch1 = ch2; ch2 = tch;
        var tv = v1; v1 = v2; v2 = tv;
      }

      if (curCh < ch1 || curCh > ch2) return;

      var labelRange = (curBook ? curBook + ' ' : '') + parsed.raw;

      if (curCh > ch1 && curCh < ch2) {
        // Entire chapter is selected
        verses.forEach(function (el) { el.classList.add('sel'); });
        var prevBanner = document.createElement('span');
        prevBanner.className = 'range-continuation range-prev';
        prevBanner.innerHTML = '<a href="../' + (curCh - 1) + '/#' + parsed.raw + '">← ' + labelRange + '</a>';
        verses[0].parentNode.insertBefore(prevBanner, verses[0]);

        var nextBanner = document.createElement('span');
        nextBanner.className = 'range-continuation range-next';
        nextBanner.innerHTML = '<a href="../' + (curCh + 1) + '/#' + parsed.raw + '">' + labelRange + ' →</a>';
        var lastV = verses[verses.length - 1];
        lastV.parentNode.insertBefore(nextBanner, lastV.nextSibling);
        verses[0].scrollIntoView({ block: 'start' });
        return;
      }

      if (curCh === ch1 && curCh < ch2) {
        // From v1 to end of current chapter
        var iStart = verseIndex(verses, v1);
        if (iStart < 0) return;
        verses.slice(iStart).forEach(function (el) { el.classList.add('sel'); });
        var nextBanner = document.createElement('span');
        nextBanner.className = 'range-continuation range-next';
        nextBanner.innerHTML = '<a href="../' + (curCh + 1) + '/#' + parsed.raw + '">' + labelRange + ' →</a>';
        var lastV = verses[verses.length - 1];
        lastV.parentNode.insertBefore(nextBanner, lastV.nextSibling);
        verses[iStart].scrollIntoView({ block: 'start' });
        return;
      }

      if (curCh === ch2 && curCh > ch1) {
        // From beginning of chapter to v2
        var iEnd = verseIndex(verses, v2);
        if (iEnd < 0) return;
        verses.slice(0, iEnd + 1).forEach(function (el) { el.classList.add('sel'); });
        var prevBanner = document.createElement('span');
        prevBanner.className = 'range-continuation range-prev';
        prevBanner.innerHTML = '<a href="../' + (curCh - 1) + '/#' + parsed.raw + '">← ' + labelRange + '</a>';
        verses[0].parentNode.insertBefore(prevBanner, verses[0]);
        verses[0].scrollIntoView({ block: 'start' });
        return;
      }

      if (curCh === ch1 && curCh === ch2) {
        var i1 = verseIndex(verses, v1);
        var i2 = verseIndex(verses, v2);
        if (i1 < 0 || i2 < 0) return;
        if (i1 > i2) { var t = i1; i1 = i2; i2 = t; }
        verses.slice(i1, i2 + 1).forEach(function (el) { el.classList.add('sel'); });
        verses[i1].scrollIntoView({ block: 'start' });
        return;
      }
    }

    if (parsed.type === 'local') {
      var li1 = verseIndex(verses, parsed.v1);
      var li2 = verseIndex(verses, parsed.v2);
      if (li1 < 0 || li2 < 0) return;
      if (li1 > li2) { var lt = li1; li1 = li2; li2 = lt; }
      verses.slice(li1, li2 + 1).forEach(function (el) { el.classList.add('sel'); });
      verses[li1].scrollIntoView({ block: 'start' });
      return;
    }

    if (parsed.type === 'single') {
      var targetEl = document.getElementById(parsed.v);
      if (targetEl && targetEl.classList.contains('v')) {
        targetEl.classList.add('sel');
        targetEl.scrollIntoView({ block: 'start' });
      }
    }
  }

  document.querySelectorAll('span.v > sup:first-of-type a').forEach(function (a) {
    a.title = 'Kliknij, aby zaznaczyć. Kliknij z Shiftem lub ponownie, aby zaznaczyć zakres.';
  });

  document.addEventListener('click', function (e) {
    try { if (window.getSelection && String(window.getSelection())) return; } catch (err) {}
    if (e.target.closest && e.target.closest('.font-switcher')) return;

    var verseEl = e.target.closest ? e.target.closest('span.v') : null;
    var numLink = e.target.closest ? e.target.closest('span.v > sup:first-of-type a') : null;
    var armed = getStoredArmed();

    if (armed) {
      if (!verseEl) return;
      e.preventDefault();
      var targetId = verseEl.id;

      if (armed.ch === curCh && targetId === armed.v) {
        disarm();
        return;
      }

      if (armed.ch === curCh) {
        var verses = Array.from(document.querySelectorAll('span.v'));
        var i1 = verseIndex(verses, armed.v);
        var i2 = verseIndex(verses, targetId);
        disarm();
        if (i1 < 0 || i2 < 0) return;
        if (i1 === i2) { location.hash = '#' + targetId; return; }
        if (i1 > i2) { var t = i1; i1 = i2; i2 = t; }
        location.hash = '#' + verses[i1].id + '-' + verses[i2].id;
        return;
      }

      // Cross-chapter range!
      var ch1 = armed.ch;
      var v1 = armed.v;
      var ch2 = curCh;
      var v2 = targetId;
      disarm();
      if (ch1 > ch2) {
        var tch = ch1; ch1 = ch2; ch2 = tch;
        var tv = v1; v1 = v2; v2 = tv;
      }
      location.hash = '#' + ch1 + ',' + v1 + '-' + ch2 + ',' + v2;
      return;
    }

    if (numLink && verseEl) {
      var curParsed = parseHash(location.hash.slice(1));
      var isAlreadyCurrent = curParsed && curParsed.type === 'single' && curParsed.v === verseEl.id;
      if (isAlreadyCurrent || e.shiftKey) {
        e.preventDefault();
        arm(verseEl.id);
      }
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') disarm();
  });

  window.addEventListener('hashchange', function () {
    applyRange();
  });

  document.addEventListener('DOMContentLoaded', function () {
    syncArmedUI();
    applyRange();
  });

  syncArmedUI();
  applyRange();
})();
