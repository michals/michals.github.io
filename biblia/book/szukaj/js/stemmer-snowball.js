/**
 * Standalone Polish Snowball Stemmer.
 * Based on the Snowball Polish stemmer (BSD License) from https://snowballstem.org/
 * Bundled with Snowball base class for zero-dependency usage in Node.js and browsers.
 */

class SnowballBase {
  constructor() {
    this.S = "";
    this.c = 0;
    this.h = 0;
    this.o = 0;
    this.t = 0;
    this.u = 0;
    this.q = 0;
  }

  P(t) {
    this.S = t;
    this.c = 0;
    this.h = this.S.length;
    this.o = 0;
    this.t = this.c;
    this.u = this.h;
  }

  getCurrent() {
    return this.S;
  }

  C(t) {
    this.S = t.S;
    this.c = t.c;
    this.h = t.h;
    this.o = t.o;
    this.t = t.t;
    this.u = t.u;
  }

  A(t, i, s) {
    if (this.c >= this.h) return false;
    let h = this.S.charCodeAt(this.c);
    return !(h > s || h < i) && ((h -= i), !!(t[h >>> 3] & (1 << (7 & h)))) && (this.c++, true);
  }

  v(t, i, s) {
    for (; this.c < this.h; ) {
      let h = this.S.charCodeAt(this.c);
      if (h > s || h < i) return true;
      if (((h -= i), !(t[h >>> 3] & (1 << (7 & h))))) return true;
      this.c++;
    }
    return false;
  }

  B(t, i, s) {
    if (this.c <= this.o) return false;
    let h = this.S.charCodeAt(this.c - 1);
    return !(h > s || h < i) && ((h -= i), !!(t[h >>> 3] & (1 << (7 & h)))) && (this.c--, true);
  }

  D(t, i, s) {
    for (; this.c > this.o; ) {
      let h = this.S.charCodeAt(this.c - 1);
      if (h > s || h < i) return true;
      if (((h -= i), !(t[h >>> 3] & (1 << (7 & h))))) return true;
      this.c--;
    }
    return false;
  }

  F(t, i, s) {
    if (this.c >= this.h) return false;
    let h = this.S.charCodeAt(this.c);
    return h > s || h < i ? (this.c++, true) : ((h -= i), !(t[h >>> 3] & (1 << (7 & h))) && (this.c++, true));
  }

  j(t, i, s) {
    for (; this.c < this.h; ) {
      let h = this.S.charCodeAt(this.c);
      if (h <= s && h >= i && ((h -= i), t[h >>> 3] & (1 << (7 & h)))) return true;
      this.c++;
    }
    return false;
  }

  G(t, i, s) {
    if (this.c <= this.o) return false;
    let h = this.S.charCodeAt(this.c - 1);
    return h > s || h < i ? (this.c--, true) : ((h -= i), !(t[h >>> 3] & (1 << (7 & h))) && (this.c--, true));
  }

  H(t, i, s) {
    for (; this.c > this.o; ) {
      let h = this.S.charCodeAt(this.c - 1);
      if (h <= s && h >= i && ((h -= i), t[h >>> 3] & (1 << (7 & h)))) return true;
      this.c--;
    }
    return false;
  }

  l(t) {
    return !(this.h - this.c < t.length) && !!this.S.startsWith(t, this.c) && ((this.c += t.length), true);
  }

  N(t) {
    return !(this.c - this.o < t.length) && !!this.S.endsWith(t, this.c) && ((this.c -= t.length), true);
  }

  i(t, i) {
    let s = 0,
      h = t.length;
    const r = this.c,
      e = this.h;
    let n = 0,
      o = 0,
      f = false;
    for (;;) {
      const i = s + ((h - s) >>> 1);
      let u = 0,
        l = n < o ? n : o;
      const _ = t[i];
      let c;
      for (c = l; c < _[0].length; c++) {
        if (r + l === e) {
          u = -1;
          break;
        }
        if (((u = this.S.charCodeAt(r + l) - _[0].charCodeAt(c)), 0 !== u)) break;
        l++;
      }
      if ((u < 0 ? ((h = i), (o = l)) : ((s = i), (n = l)), h - s <= 1)) {
        if (s > 0) break;
        if (h === s) break;
        if (f) break;
        f = true;
      }
    }
    for (;;) {
      const h = t[s];
      if (n >= h[0].length) {
        if (((this.c = r + h[0].length), h.length < 4)) return h[1];
        if (((this.q = h[3]), i.call(this))) return (this.c = r + h[0].length), h[1];
      }
      if (!h[2]) return 0;
      s -= h[2];
    }
  }

  k(t, i) {
    let s = 0,
      h = t.length;
    const r = this.c,
      e = this.o;
    let n = 0,
      o = 0,
      f = false;
    for (;;) {
      const i = s + ((h - s) >> 1);
      let u = 0,
        l = n < o ? n : o;
      const _ = t[i];
      let c;
      for (c = _[0].length - 1 - l; c >= 0; c--) {
        if (r - l === e) {
          u = -1;
          break;
        }
        if (((u = this.S.charCodeAt(r - 1 - l) - _[0].charCodeAt(c)), 0 !== u)) break;
        l++;
      }
      if ((u < 0 ? ((h = i), (o = l)) : ((s = i), (n = l)), h - s <= 1)) {
        if (s > 0) break;
        if (h === s) break;
        if (f) break;
        f = true;
      }
    }
    for (;;) {
      const h = t[s];
      if (n >= h[0].length) {
        if (((this.c = r - h[0].length), h.length < 4)) return h[1];
        if (((this.q = h[3]), i && i.call(this))) return (this.c = r - h[0].length), h[1];
      }
      if (!h[2]) return 0;
      s -= h[2];
    }
  }

  #t(t, i, s) {
    const h = s.length - (i - t);
    return (
      (this.S = this.S.slice(0, t) + s + this.S.slice(i)),
      (this.h += h),
      this.c >= i ? (this.c += h) : this.c > t && (this.c = t),
      h
    );
  }

  #i() {
    // boundary assertions omitted in production
  }

  _(t) {
    this.#i();
    this.#t(this.t, this.u, t);
    this.u = this.t + t.length;
  }

  p() {
    this._("");
  }

  I(t, i, s) {
    const h = this.#t(t, i, s);
    t <= this.t && (this.t += h);
    t <= this.u && (this.u += h);
  }

  J() {
    this.#i();
    return this.S.slice(this.t, this.u);
  }
}

const t = [["byście", 1], ["bym", 1], ["by", 1], ["byśmy", 1], ["byś", 1]];
const s = [["ąc", 1], ["ając", 1, 1], ["sząc", 2, 2], ["sz", 1], ["iejsz", 1, 1]];
const v = ["", "s"];
const h = [
  ["a", 1, 0, 1], ["ąca", 1, 1], ["ająca", 1, 1], ["sząca", 2, 2], ["ia", 1, 4, 1], ["sza", 1, 5],
  ["iejsza", 1, 1], ["ała", 1, 7], ["iała", 1, 1], ["iła", 1, 9], ["ąc", 1], ["ając", 1, 1],
  ["e", 1, 0, 1], ["ące", 1, 1], ["ające", 1, 1], ["szące", 2, 2], ["ie", 1, 4, 1], ["cie", 1, 1],
  ["acie", 1, 1], ["ecie", 1, 2], ["icie", 1, 3], ["ajcie", 1, 4], ["liście", 4, 5], ["aliście", 1, 1],
  ["ieliście", 1, 2], ["iliście", 1, 3], ["łyście", 4, 9], ["ałyście", 1, 1], ["iałyście", 1, 1],
  ["iłyście", 1, 3], ["sze", 1, 18], ["iejsze", 1, 1], ["ach", 1, 0, 1], ["iach", 1, 1, 1],
  ["ich", 5], ["ych", 5], ["i", 1, 0, 1], ["ali", 1, 1], ["ieli", 1, 2], ["ili", 1, 3],
  ["ami", 1, 4, 1], ["iami", 1, 1, 1], ["imi", 5, 6], ["ymi", 5, 7], ["owi", 1, 8, 1],
  ["iowi", 1, 1, 1], ["aj", 1], ["ej", 5], ["iej", 5, 1], ["am", 1], ["ałam", 1, 1],
  ["iałam", 1, 1], ["iłam", 1, 3], ["em", 1, 0, 1], ["iem", 1, 1, 1], ["ałem", 1, 2],
  ["iałem", 1, 1], ["iłem", 1, 4], ["im", 5], ["om", 1, 0, 1], ["iom", 1, 1, 1], ["ym", 5],
  ["o", 1, 0, 1], ["ego", 5, 1], ["iego", 5, 1], ["ało", 1, 3], ["iało", 1, 1], ["iło", 1, 5],
  ["u", 1, 0, 1], ["iu", 1, 1, 1], ["emu", 5, 2], ["iemu", 5, 1], ["ów", 1, 0, 1], ["y", 5],
  ["amy", 1, 1], ["emy", 1, 2], ["imy", 1, 3], ["liśmy", 4, 4], ["aliśmy", 1, 1],
  ["ieliśmy", 1, 2], ["iliśmy", 1, 3], ["łyśmy", 4, 8], ["ałyśmy", 1, 1], ["iałyśmy", 1, 1],
  ["iłyśmy", 1, 3], ["ały", 1, 12], ["iały", 1, 1], ["iły", 1, 14], ["asz", 1], ["esz", 1],
  ["isz", 1], ["ą", 1, 0, 1], ["ącą", 1, 1], ["ającą", 1, 1], ["szącą", 2, 2], ["ią", 1, 4, 1],
  ["ają", 1, 5], ["szą", 3, 6], ["iejszą", 1, 1], ["ać", 1], ["ieć", 1], ["ić", 1], ["ąć", 1],
  ["aść", 1], ["eść", 1], ["ę", 1], ["szę", 2, 1], ["ał", 1], ["iał", 1, 1], ["ił", 1],
  ["łaś", 4], ["ałaś", 1, 1], ["iałaś", 1, 1], ["iłaś", 1, 3], ["łeś", 4], ["ałeś", 1, 1],
  ["iałeś", 1, 1], ["iłeś", 1, 3]
];
const e = [["ć", 1], ["ń", 2], ["ś", 3], ["ź", 4]];
const d = ["c", "n", "s", "z"];
const m = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 16, 0, 0, 1];

export class PolishSnowballStemmer extends SnowballBase {
  #i = 0;

  #s() {
    this.#i = this.h;
    return !!this.j(m, 97, 281) && (this.c++, !!this.v(m, 97, 281) && (this.c++, (this.#i = this.c), true));
  }

  #t() {
    return this.#i <= this.c;
  }

  #h() {
    let i;
    const e = this.h - this.c;
    i: {
      if (this.c < this.#i) break i;
      const i = this.o;
      (this.o = this.#i), (this.u = this.c), 0 !== this.k(t) ? ((this.t = this.c), (this.o = i), this.p()) : (this.o = i);
    }
    if (((this.c = this.h - e), (this.u = this.c), (i = this.k(h, this.#t)), 0 === i)) return false;
    switch (((this.t = this.c), i)) {
      case 1:
        this.p();
        break;
      case 2:
        this._("s");
        break;
      case 3: {
        const i = this.h - this.c;
        this.#t() ? this.p() : ((this.c = this.h - i), this._("s"));
        break;
      }
      case 4:
        this._("ł");
        break;
      case 5: {
        this.p();
        const t = this.h - this.c;
        (this.u = this.c), (i = this.k(s)), 0 !== i ? ((this.t = this.c), this._(v[i - 1])) : (this.c = this.h - t);
        break;
      }
    }
    const a = this.h - this.c;
    return (this.u = this.c), this.N("'") ? ((this.t = this.c), this.p()) : (this.c = this.h - a), true;
  }

  #e() {
    let i;
    return (
      (this.u = this.c),
      (i = this.k(e)),
      0 !== i && ((this.t = this.c), !(this.c <= this.o) && (this._(d[i - 1]), true))
    );
  }

  #a() {
    const i = this.c;
    this.#s(), (this.c = i);
    {
      const i = this.c;
      if (this.c + 2 > this.h || ((this.c += 2), (this.o = this.c), (this.c = this.h), !this.#h())) {
        if (((this.c = i), (this.o = this.c), (this.c = this.h), !this.#e())) return false;
        this.c = this.o;
      } else this.c = this.o;
    }
    return true;
  }

  stemWord(word) {
    if (!word || word.length < 2) return word;
    this.P(word);
    this.#a();
    return this.getCurrent();
  }
}

const defaultInstance = new PolishSnowballStemmer();

export function stem(word) {
  return defaultInstance.stemWord(word);
}

export default PolishSnowballStemmer;
