
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

class Form {
  constructor(line) {
    this.line = line;
    line = line.split('&');
    this.question = "Question";
    this.options = [];
    this.sum = 0;
    for (var i = 0; i < line.length; i++) {
      var pair = line[i].split('=');
      var text = decode(pair[0]);
      var value = decode(pair[1]);
      if (text == "-q") {
        this.question = decode(value);
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

  pick(fate) {
    for(var i=0; i < this.options.length; i++) {
      var opt = this.options[i];
      if (fate < opt.value) {
        return i;
      } else {
        fate -= opt.value;
      }
    }
    return this.options.length - 1;
  }

  select() {
    var idx = this.pick(Math.random() * this.sum);
    var pickedEl = this.options[idx].element;
    pickedEl.selected = true;
  }

  static fromUrl() {
    var line = document.location.hash || document.location.search;
    line = line.substring(1);
    line = line || "yes&no&-q=Answer:";
    var form = new Form(line);
    var qS = document.querySelector;
    return form;
  }
}

