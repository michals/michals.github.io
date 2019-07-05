
class Option {
  constructor(text, value) {
    this.text = text;
    this.value = value;
    this.element = this.toElement();
  }
  toElement() {
    var el = document.createElement("option");
    el.value = this.value;
    el.text = this.text;
    return el;
  }
}

function decode(param) {
  return decodeURIComponent(param.replace(/\+/gm,"%20"))
         .replace(/&#[0-9]+;/g, (match) => String.fromCharCode(parseInt(match.substring(2))));
}

/**
 * Simple predictable, seeded PRNG
 */
class SimplePRNG {
  constructor(seed=1) {
    this.seed = seed;
  }

  seedByTime(changeEverySeconds) {
    var ts = Math.floor(Date.now() / 1000);
    this.seed = 1 + ts - (ts % changeEverySeconds);
    return this;
  }

  /** Returns "random" float between 0.0 and 1.0 */
  nextFloat() {
    var x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }
}

class Form {
  constructor(line) {
    this.line = line;
    line = line.split('&');
    this.question = "";
    this.timeUpdateSeconds = null;
    this.options = [];
    this.sum = 0;
    for (var i = 0; i < line.length; i++) {
      var pair = line[i].split('=');
      var text = decode(pair[0]);
      var value = decode(pair[1] || '');
      if (text == "-q") {
        this.question = decode(value);
        continue;
      } else if (text == "-t") {
        this.timeUpdateSeconds = parseInt(decode(value)) || null;
        continue;
      } else if (text == "-a" && value) {
        this.setAutoUpdate(1000);
        continue;
      }
      var opt = new Option(text, parseFloat(value) || 1);
      this.options.push(opt)
      this.sum += opt.value;
    }
  }

  build(selectEl, questionEl, editEl) {
    questionEl.innerHTML = this.question;
    selectEl.innerHTML = "";
    while (selectEl.firstChild) selectEl.removeChild(selectEl.firstChild);
    for(var opt of this.options) {
      selectEl.add(opt.element);
    }
    editEl.href = "create.html?" + this.line;
  }

  /**
   * Pick random option taking into account their scores.
   * Side effects:
   *  - updates this.fate float as value between (0, this.sum)
   *  - updates this.idx - index of picked option
   */
  pick(rand01 = Math.random()) {
    this.fate = rand01 * this.sum;
    var fate = this.fate;
    for(var i=0; i < this.options.length; i++) {
      var opt = this.options[i];
      if (fate < opt.value) {
        this.idx = i;
        return this.idx;
      } else {
        fate -= opt.value;
      }
    }
    this.idx = this.options.length - 1;
    return this.idx;
  }

  /**
   * Select random element and update view
   */
  select() {
    if (this.timeUpdateSeconds) {
      this.pick(new SimplePRNG().seedByTime(this.timeUpdateSeconds).nextFloat());
    } else {
      this.pick(Math.random());
    }
    var option = this.options[this.idx];
    option.element.selected = true;
    return option
  }

  setAutoUpdate(autoupdate) {
    if (autoupdate) {
      this.interval = setInterval(function(){ form.select(); }, autoupdate);
    } else {
      clearInterval(this.interval)
    }
  }

  static fromUrl() {
    var line = document.location.hash || document.location.search;
    line = line.substring(1);
    line = line || "-q=The+Answer+is&Yes=&No=";
    var form = new Form(line);
    var qS = document.querySelector;
    return form;
  }
}

