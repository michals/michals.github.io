(function(){"use strict";var e={2639:function(e,t,o){var n=o(5130),s=o(6768);const r={class:"container"},a={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"};function c(e,t){const o=(0,s.g2)("router-link"),n=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.Lk)("nav",a,[(0,s.Lk)("div",i,[(0,s.bF)(o,{class:"navbar-brand",to:"/"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("Home")]))),_:1}),(0,s.bF)(o,{to:"/about"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("About")]))),_:1})])]),(0,s.bF)(n)])}var l=o(1241);const d={},u=(0,l.A)(d,[["render",c]]);var p=u,h=(o(8077),o(4458));(0,h.k)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var g=o(1387);const m={class:"container"},f={class:"card"},b={class:"card-header"},k={class:"form-check form-switch"},w={class:"form-check-label d-block",for:"liturg"},v={class:"form-check-label d-block",for:"precate"},L={class:"form-check-label d-block",for:"cate"},y={class:"form-check-label d-block",for:"elec"},W={class:"card-body"};function C(e,t,o,r,a,i){const c=(0,s.g2)("WordsInput"),l=(0,s.g2)("SongList");return(0,s.uX)(),(0,s.CE)("div",m,[(0,s.Lk)("div",f,[(0,s.Lk)("div",b,[(0,s.Lk)("h3",null,[t[6]||(t[6]=(0,s.eW)("Odgadnij Pieśń ;-) ")),(0,s.Lk)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=(...e)=>i.next&&i.next(...e))},"Następna")]),(0,s.bF)(c,{title:"Słowa kluczowe",words:a.words,"onUpdate:words":t[1]||(t[1]=e=>a.words=e),completion:i.wordList()},null,8,["words","completion"]),(0,s.Lk)("div",k,[(0,s.Lk)("label",w,[(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>a.sectionLiturg=e),id:"liturg"},null,512),[[n.lH,a.sectionLiturg]]),t[7]||(t[7]=(0,s.eW)("Liturgiczne "))]),(0,s.Lk)("label",v,[(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=e=>a.sectionPrecate=e),id:"precate"},null,512),[[n.lH,a.sectionPrecate]]),t[8]||(t[8]=(0,s.eW)("Prekatechumentu "))]),(0,s.Lk)("label",L,[(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>a.sectionCate=e),id:"cate"},null,512),[[n.lH,a.sectionCate]]),t[9]||(t[9]=(0,s.eW)("Katechumentu "))]),(0,s.Lk)("label",y,[(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>a.sectionElec=e),id:"elec"},null,512),[[n.lH,a.sectionElec]]),t[10]||(t[10]=(0,s.eW)("Wybrania "))])])]),(0,s.Lk)("div",W,[a.songs.length?((0,s.uX)(),(0,s.Wv)(l,{key:0,songs:i.selectRandom(a.words),tags:a.tags,words:a.words,hidden:!0},null,8,["songs","tags","words"])):(0,s.Q3)("",!0)])]),t[11]||(t[11]=(0,s.Lk)("p",null,"Pozdrowienia dla Weroniki S. z podziękowaniami za świetny pomysł! 😃",-1))])}o(4114),o(7642),o(8004),o(3853),o(5876),o(2475),o(5024),o(1698);function S(e,t,o,n,r,a){const i=(0,s.g2)("SongCard");return(0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.songs,(e=>((0,s.uX)(),(0,s.Wv)(i,{key:e.songid,song:e,tags:o.tags,words:o.words,hidden:o.hidden},null,8,["song","tags","words","hidden"])))),128)}var E=o(4232);const j={class:"card-header container-fluid"},x={class:"fw-bold"},P=["title"],A={key:0,class:"card-body"};function _(e,t,o,n,r,a){return(0,s.uX)(),(0,s.CE)("div",{class:(0,E.C4)(["card m-2",`pagecol-${o.song.color}`])},[(0,s.Lk)("div",j,[(0,s.Lk)("span",x,[(0,s.eW)((0,E.v_)(r.hide?"Zgaduj zgadula 🤔":o.song.title)+" ",1),r.hide?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"btn btn-sm btn-primary",onClick:t[0]||(t[0]=e=>a.show())},"Pokaż")):(0,s.Q3)("",!0)]),(0,s.Lk)("span",{style:{float:"right"},title:`Pasuje słów: ${o.song.match}`},(0,E.v_)("✅ ".repeat(o.song.match)),9,P)]),o.tags?((0,s.uX)(),(0,s.CE)("div",A,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.song.index,(e=>((0,s.uX)(),(0,s.CE)("span",{class:(0,E.C4)(["badge text-black me-1 tag",{match:o.words.includes(e)}]),key:e},(0,E.v_)(e),3)))),128))])):(0,s.Q3)("",!0)],2)}var X={name:"SongCard",props:{song:Object,hidden:{type:Boolean,default:!1},words:Array,tags:Boolean},data(){return{hide:this.hidden}},methods:{show(){this.hide=!1}}};const O=(0,l.A)(X,[["render",_],["__scopeId","data-v-400679c0"]]);var z=O,U={name:"SongList",components:{SongCard:z},props:{songs:Array,words:Array,hidden:{type:Boolean,default:!1},tags:Boolean}};const F=(0,l.A)(U,[["render",S],["__scopeId","data-v-acae2924"]]);var I=F;const V={class:"words-input"},H={for:"currentWord"},B=["onClick"],T={id:"completion-words"},D=["value"];function N(e,t,o,r,a,i){return(0,s.uX)(),(0,s.CE)("div",V,[(0,s.Lk)("label",H,[(0,s.eW)((0,E.v_)(o.title)+" ",1),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.wordList,((e,t)=>((0,s.uX)(),(0,s.CE)("span",{key:t,class:"word"},[(0,s.eW)((0,E.v_)(e)+" ",1),(0,s.Lk)("button",{class:"remove-badge",onClick:e=>i.removeWord(t)},"×",8,B)])))),128)),(0,s.bo)((0,s.Lk)("input",{id:"currentWord","onUpdate:modelValue":t[0]||(t[0]=e=>a.currentWord=e),class:"last-word",type:"text",list:"completion-words",onKeyup:[t[1]||(t[1]=(0,n.jR)(((...e)=>i.addWord&&i.addWord(...e)),["space"])),t[2]||(t[2]=(0,n.jR)(((...e)=>i.handleBackspace&&i.handleBackspace(...e)),["backspace"])),t[3]||(t[3]=(0,n.jR)(((...e)=>i.submitWords&&i.submitWords(...e)),["enter"]))],onInput:t[4]||(t[4]=(...e)=>i.handleCompletion&&i.handleCompletion(...e)),placeholder:"Dodaj słowo"},null,544),[[n.Jo,a.currentWord]])]),(0,s.Lk)("datalist",T,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.completion,((e,t)=>((0,s.uX)(),(0,s.CE)("option",{key:t,value:e},(0,E.v_)(e),9,D)))),128))])])}var K={name:"WordsInput",props:{title:{String:String},words:{type:Array,default:()=>[]},completion:Array},data(){return{wordList:[...this.words],currentWord:""}},watch:{words:{immediate:!0,handler(e){this.wordList=[...e]}}},methods:{addWord(){this.currentWord.trim()&&(this.wordList.push(this.currentWord.trim()),this.currentWord="",this.emitWords())},removeWord(e){this.wordList.splice(e,1),this.emitWords()},handleBackspace(){""===this.currentWord&&this.wordList.length>0&&(this.currentWord=this.wordList.pop(),this.emitWords())},emitWords(){this.$emit("update:words",[...this.wordList])},handleCompletion(e){const t=e.target.value.trim();this.completion.includes(t)&&void 0===e.inputType&&this.addWord()},submitWords(){this.currentWord.trim()?this.addWord():this.emitWords()}}};const R=(0,l.A)(K,[["render",N],["__scopeId","data-v-ca1b0cb0"]]);var M=R,Q={name:"GameView",props:{},data(){return{songs:[],tags:!0,words:[],sectionLiturg:!1,sectionPrecate:!0,sectionCate:!0,sectionElec:!0}},computed:{},components:{SongList:I,WordsInput:M},methods:{matchWords(e,t){return t.length?t.map((t=>{const o=t.toLowerCase();return e.index.filter((e=>e.toLowerCase()===o)).length>0})).reduce(((e,t)=>e+t),0):0},next(){this.tags=!this.tags,this.tags=!this.tags},selectRandom(e){const t=this.selectedSongs(e);if(0===t.length)return null;const o=Math.floor(Math.random()*t.length);return[t[o]]},selectedSongs(e){const t=[];this.sectionLiturg&&t.push("liturg"),this.sectionPrecate&&t.push("precate"),this.sectionCate&&t.push("cate"),this.sectionElec&&t.push("elec");let o=this.songs.filter((e=>t.includes(e.section)));if(e.length){const t=o.map((t=>({...t,match:this.matchWords(t,e)})));o=t.filter((e=>e.match)).sort(((e,t)=>t.match-e.match))}return o},wordList(){if(this.songs){const e=this.songs.map((e=>e.index)).flat();return[...new Set(e)]}return[]},async loadSongs(){let e;if(window.DecompressionStream){console.log("Using DecompressionStream");const t=new window.DecompressionStream("gzip"),o=await fetch("songs.json.gz"),n=await o.blob(),s=n.stream().pipeThrough(t);e=new window.Response(s)}else console.log("No support for DecompressionStream"),e=await fetch("songs.json");this.songs=await e.json(),console.log("Loaded songs")}},async mounted(){await this.loadSongs()}};const $=(0,l.A)(Q,[["render",C]]);var q=$;const G={class:"container"},J={class:"card"},Z={class:"card-header"},Y={for:"tags",class:"ms-2"},ee={class:"form-check form-switch"},te={class:"form-check-label d-block",for:"liturg"},oe={class:"form-check-label d-block",for:"precate"},ne={class:"form-check-label d-block",for:"cate"},se={class:"form-check-label d-block",for:"elec"},re={class:"card-body"};function ae(e,t,o,r,a,i){const c=(0,s.g2)("WordsInput"),l=(0,s.g2)("SongList");return(0,s.uX)(),(0,s.CE)("div",G,[(0,s.Lk)("div",J,[(0,s.Lk)("div",Z,[t[11]||(t[11]=(0,s.Lk)("h3",null,"Wyszukiwanie Pieśni",-1)),(0,s.bF)(c,{title:"Słowa kluczowe",words:a.words,"onUpdate:words":t[0]||(t[0]=e=>a.words=e),completion:i.wordList()},null,8,["words","completion"]),(0,s.Lk)("div",null,[(0,s.Lk)("label",Y,[t[6]||(t[6]=(0,s.eW)(" Pokaż słowa w wynikach: ")),(0,s.bo)((0,s.Lk)("input",{id:"tags",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=e=>a.tags=e)},null,512),[[n.lH,a.tags]])])]),(0,s.Lk)("div",ee,[(0,s.Lk)("label",te,[(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>a.sectionLiturg=e),id:"liturg"},null,512),[[n.lH,a.sectionLiturg]]),t[7]||(t[7]=(0,s.eW)("Liturgiczne "))]),(0,s.Lk)("label",oe,[(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=e=>a.sectionPrecate=e),id:"precate"},null,512),[[n.lH,a.sectionPrecate]]),t[8]||(t[8]=(0,s.eW)("Prekatechumentu "))]),(0,s.Lk)("label",ne,[(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>a.sectionCate=e),id:"cate"},null,512),[[n.lH,a.sectionCate]]),t[9]||(t[9]=(0,s.eW)("Katechumentu "))]),(0,s.Lk)("label",se,[(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>a.sectionElec=e),id:"elec"},null,512),[[n.lH,a.sectionElec]]),t[10]||(t[10]=(0,s.eW)("Wybrania "))])])]),(0,s.Lk)("div",re,[a.songs.length?((0,s.uX)(),(0,s.Wv)(l,{key:0,songs:i.selectedSongs(a.words),tags:a.tags,words:a.words},null,8,["songs","tags","words"])):(0,s.Q3)("",!0)])])])}var ie={name:"HomeView",props:{},data(){return{songs:[],tags:!0,words:[],sectionLiturg:!1,sectionPrecate:!0,sectionCate:!0,sectionElec:!0}},computed:{},components:{SongList:I,WordsInput:M},methods:{matchWords(e,t){return t.length?t.map((t=>{const o=t.toLowerCase();return e.index.filter((e=>e.toLowerCase()===o)).length>0})).reduce(((e,t)=>e+t),0):0},selectedSongs(e){const t=[];this.sectionLiturg&&t.push("liturg"),this.sectionPrecate&&t.push("precate"),this.sectionCate&&t.push("cate"),this.sectionElec&&t.push("elec");let o=this.songs.filter((e=>t.includes(e.section)));if(e.length){const t=o.map((t=>({...t,match:this.matchWords(t,e)})));o=t.filter((e=>e.match)).sort(((e,t)=>t.match-e.match))}return o},wordList(){if(this.songs){const e=this.songs.map((e=>e.index)).flat();return[...new Set(e)]}return[]},async loadSongs(){let e;if(window.DecompressionStream){console.log("Using DecompressionStream");const t=new window.DecompressionStream("gzip"),o=await fetch("songs.json.gz"),n=await o.blob(),s=n.stream().pipeThrough(t);e=new window.Response(s)}else console.log("No support for DecompressionStream"),e=await fetch("songs.json");this.songs=await e.json(),console.log("Loaded songs")}},async mounted(){await this.loadSongs()}};const ce=(0,l.A)(ie,[["render",ae]]);var le=ce;const de=[{path:"/",name:"home",component:le},{path:"/game",name:"game",component:q},{path:"/about",name:"about",component:()=>o.e(594).then(o.bind(o,3131))}],ue=(0,g.aE)({history:(0,g.Bt)(),routes:de});var pe=ue;(0,n.Ef)(p).use(pe).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,r){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],r=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,s,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.939beb43.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="piesni:";o.l=function(n,s,r,a){if(e[n])e[n].push(s);else{var i,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){i=u;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[s];var p=function(t,o){i.onerror=i.onload=null,clearTimeout(h);var s=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var e={524:0};o.f.j=function(t,n){var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(o,n){s=e[t]=[o,n]}));n.push(s[2]=r);var a=o.p+o.u(t),i=new Error,c=function(n){if(o.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,s[1](i)}};o.l(a,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,a=n[0],i=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(c)var d=c(o)}for(t&&t(n);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},n=self["webpackChunkpiesni"]=self["webpackChunkpiesni"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(2639)}));n=o.O(n)})();
//# sourceMappingURL=app.d5572060.js.map