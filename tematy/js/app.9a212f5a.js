(function(e){function t(t){for(var n,c,a=t[0],i=t[1],l=t[2],d=0,b=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&b.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,a=1;a<o.length;a++){var i=o[a];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},s={app:0},r=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var p=i;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"023c":function(e,t,o){"use strict";o("5e4a")},"142a":function(e,t,o){"use strict";o("c6b5")},"390a":function(e,t,o){},4975:function(e,t,o){},"4a47":function(e,t,o){"use strict";o("390a")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),s=o("6605"),r=o("a584");const c={class:"container"};function a(e,t,o,s,r,a){const i=Object(n["C"])("nav-bar"),l=Object(n["C"])("router-view");return Object(n["v"])(),Object(n["f"])(n["a"],null,[Object(n["j"])(i,{json:r.json,location:e.$route},null,8,["json","location"]),Object(n["g"])("div",c,[Object(n["j"])(l,{json:r.json},null,8,["json"])])],64)}o("88a7"),o("271a"),o("5494");const i={class:"navbar navbar-expand-lg bg-body-tertiary"},l={class:"container-fluid"},p=Object(n["g"])("img",{src:"img/icons/logo.svg",alt:"",width:"30",class:"d-inline-block align-text-top"},null,-1),d=Object(n["g"])("i",{class:"bi bi-info-circle"},null,-1),b={class:"dropdown dropstart d-inline-block ms-auto"},u=Object(n["g"])("button",{class:"btn btn-light btn-sm dropdown-toggle",type:"button",id:"cfg","data-bs-toggle":"dropdown","aria-expanded":"false"},[Object(n["g"])("i",{class:"bi bi-gear"})],-1),j={class:"dropdown-menu","aria-labelledby":"cfg"},g=Object(n["g"])("li",null,[Object(n["g"])("h6",{class:"dropdown-header"},"Konfiguracje:")],-1),O=["href"];function y(e,t,o,s,r,c){const a=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["f"])("nav",i,[Object(n["g"])("div",l,[Object(n["j"])(a,{to:"/",class:"navbar-brand left"},{default:Object(n["K"])(()=>[p,Object(n["i"])(" Tematy Liturgii Słowa ")]),_:1}),Object(n["j"])(a,{to:"/info",class:"d-inline-block left btn"},{default:Object(n["K"])(()=>[d]),_:1}),Object(n["g"])("div",b,[u,Object(n["g"])("ul",j,[Object(n["g"])("li",{class:"dropdown-item",onClick:t[0]||(t[0]=e=>c.darkMode())},"Odwróć kolory"),g,(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(c.configs(),e=>(Object(n["v"])(),Object(n["f"])("li",{key:e.url},[Object(n["g"])("a",{href:e.url,class:"dropdown-item"},Object(n["F"])(e.text),9,O)]))),128))])])])])}var m={name:"NavBar",props:{json:{type:Object,requred:!0},location:{requred:!0}},methods:{darkMode(){document.querySelector("html").classList.toggle("dark-mode")},configs(){return[{db:"hlod",text:"DdH, scalanie, bez ogromnych"},{db:"hnod",text:"DdH, scalanie, wszystkie"},{db:"hlnd",text:"DdH, oryginalne, bez ogromnych"},{db:"hnnd",text:"DdH, oryginalne, wszystkie"},{db:"hlgd",text:"DdH, grupowane, bez ogromnych"},{db:"hngd",text:"DdH, grupowane, wszystkie"},{db:"plod",text:"DdP, scalanie, bez ogromnych"},{db:"pnod",text:"DdP, scalanie, wszystkie"},{db:"plnd",text:"DdP, oryginalne, bez ogromnych"},{db:"pnnd",text:"DdP, oryginalne, wszystkie"},{db:"plgd",text:"DdP, grupowane, bez ogromnych"},{db:"pngd",text:"DdP, grupowane, wszystkie"}].map(e=>{const t=new URL(window.location);return t.searchParams.set("use",e.db),{url:t.toString(),text:e.text}})}}},w=o("6b0d"),f=o.n(w);const h=f()(m,[["render",y]]);var v=h,k={name:"App",components:{NavBar:v},data(){return{json:null}},methods:{async loadJSON(){const e=new URLSearchParams(window.location.search).get("use"),t="?use=hlgd";let o;if(""===window.location.search&&(window.location.search=t),e.length>4&&(this.$gtag.event("option_selected",{event_category:"old_db",event_label:e,value:1}),window.location.search="ddh-lim77-overlap"===e?"?use=hlod":"ddh-nolim-overlap"===e?"?use=hnod":"ddh-lim77-nomerge"===e?"?use=hlnd":"ddh-nolim-nomerge"===e?"?use=hnnd":"ddh-lim77-chapter"===e?"?use=hlgd":"ddh-nolim-chapter"===e?"?use=hngd":"ddp-lim77-overlap"===e?"?use=plod":"ddp-nolim-overlap"===e?"?use=pnod":"ddp-lim77-nomerge"===e?"?use=plnd":"ddp-nolim-nomerge"===e?"?use=pnnd":"ddp-lim77-chapter"===e?"?use=plgd":"ddp-nolim-chapter"===e?"?use=pngd":t),console.log("DB:",e),window.DecompressionStream){console.log("Using DecompressionStream");const t=new window.DecompressionStream("gzip"),n=await fetch(`subjects-${e}.json.gz`),s=await n.blob(),r=s.stream().pipeThrough(t);o=new window.Response(r)}else console.log("No support for DecompressionStream"),o=await fetch(`subjects-${e}.json`);this.json=await o.json(),this.$gtag.event("option_selected",{event_category:"DB",event_label:e,value:1}),console.log(this.json)}},async mounted(){await this.loadJSON()}};const z=f()(k,[["render",a]]);var P=z;const D=e=>(Object(n["y"])("data-v-5a353792"),e=e(),Object(n["w"])(),e),x={class:"accordion my-3",id:"parts"},S={class:"accordion-item"},C=D(()=>Object(n["g"])("h2",{class:"accordion-header",id:"subjectHead"},[Object(n["g"])("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#subject","aria-expanded":"true","aria-controls":"subject"}," Tematy dla prekatechumenatu ")],-1)),q={id:"subject",class:"accordion-collapse collapse show","aria-labelledby":"subjectHead","data-bs-parent":"#parts"},I={class:"accordion-body"},_={class:"accordion-item"},H=D(()=>Object(n["g"])("h2",{class:"accordion-header",id:"entryHead"},[Object(n["g"])("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#entry","aria-expanded":"true","aria-controls":"entry"}," Lista wszystkich haseł ")],-1)),N={id:"entry",class:"accordion-collapse collapse","aria-labelledby":"entryHead","data-bs-parent":"#parts"},A={class:"accordion-body"};function B(e,t,o,s,r,c){const a=Object(n["C"])("SubjectList"),i=Object(n["C"])("EntryList");return Object(n["v"])(),Object(n["f"])("div",x,[Object(n["g"])("div",S,[C,Object(n["g"])("div",q,[Object(n["g"])("div",I,[Object(n["j"])(a,{subjects:c.subjects},null,8,["subjects"])])])]),Object(n["g"])("div",_,[H,Object(n["g"])("div",N,[Object(n["g"])("div",A,[Object(n["j"])(i,{entries:c.entries},null,8,["entries"])])])])])}const L={class:"subject-list"};function $(e,t,o,s,r,c){const a=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["f"])("ol",L,[(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(o.entries,e=>(Object(n["v"])(),Object(n["f"])("li",{key:e},[Object(n["j"])(a,{to:{name:"entry",params:{slug:e.slug}}},{default:Object(n["K"])(()=>[Object(n["i"])(Object(n["F"])(e.title),1)]),_:2},1032,["to"])]))),128))])}var K={name:"EntryList",components:{},props:{entries:Array}};o("4a47");const T=f()(K,[["render",$],["__scopeId","data-v-4b74e406"]]);var V=T;const E={class:"subject-list"};function F(e,t,o,s,r,c){const a=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["f"])("ol",E,[(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(o.subjects,e=>(Object(n["v"])(),Object(n["f"])("li",{key:e},[Object(n["j"])(a,{to:{name:"subject",params:{slug:e.s}}},{default:Object(n["K"])(()=>[Object(n["i"])(Object(n["F"])(e.t),1)]),_:2},1032,["to"])]))),128))])}var M={name:"SubjectList",components:{},props:{subjects:Array}};o("6d4d");const R=f()(M,[["render",F],["__scopeId","data-v-2385375e"]]);var J=R,U={name:"HomePage",components:{EntryList:V,SubjectList:J},props:{json:{type:Object,requred:!0}},computed:{subjects(){return this.json?this.json.subjects:[]},entries(){return this.json?this.json.entries:[]}}};o("8bb2");const W=f()(U,[["render",B],["__scopeId","data-v-5a353792"]]);var G=W;const Z=Object(n["h"])('<h1>O aplikacji</h1><p> Aplikacja &quot;Tematy&quot; została opracowana jako pomoc przy przygotowaniu Liturgii Słowa dla wspólnot Neokatechumenalnych. </p><p> Na głównej stronie znajduje się lista tematów wybranych dla spólnot na etapie prekatechumenatu. Poniej również jest lista wszystkich haseł se Słownika Teologii Biblijnej. </p><p> Po wybraniu tematu lub hasła można określić ile osób jest na spotakniu (<i class="bi bi-people-fill"></i>). Aplikacja wówczas automatycznie porozdziela wersety pomiędzy poszczególne osoby. Aby wyświetlić wersety dla konkretnej osoby naley wybrać osobę z rozwijalnej listy (<i class="bi bi-asterisk"></i>). </p><p> Każdy werset jest od razu linkiem do serwisu biblia.pl. Zaczhęcamy oczywiście do czytania Pisma w wersji papierowej, ale jeśli ktoś preferuje ekran, to jest to pewne ułatwienie. </p><p> Przy każdym wersecie jest &quot;kółeczko&quot; które monżna kliknąć i w ten sposób podczas wybierania wersetu oznaczyć sobie danego kandydata jako &quot;jedzcze nie wiem&quot; / &quot;raczej nie&quot; / &quot;raczej tak&quot;. </p><p> Po wybraniu tematu lub hasła wersety są już pogrupowane według kolejnych czytań (księgi historyczne, prorockie, nowytestament, ewangelie). </p><p> Aplikacja może działać w różnych konfiguracjach (<i class="bi bi-gear"></i>). <strong>DdH</strong> oznacza księgi Dydaktyczne do Historycznych. Natomiast <strong>DdP</strong> to księgi Dydaktyczne do Prorockich. Domyślną kofiguracją jest DdH ponieważ w takim układzie najczęściej obecnie wpólnoty pracują. </p><p> W słowniku czasami zdarzają się bardzo duże wersety. Na przykład w temacie Ewangelia jest <em>Iz 40-66</em> czyli 27 rozdziałów zawierających w sumie 526 wersetów. Trudno sobie wyobrazić, aby cała grupa czekała trzy godziny aż ktoś kto taki werset dostanie go przeczyał. Aplikacja domyślnie ma możliwość odfiltrowywania tego typu ogromnych wersetów aby usprawnić techniczne aspekty spotkania. Zobacz konfiguracje &quot;bez ogromnych&quot; vs. &quot;wszystkie&quot;. </p><p> Dodatkowo w aplikacji jest możliwość łączenia pobliskich wersetów. Weźmy na przykład temat Świątynia i wersety z <em>1Krl 8</em>. W słowniku mamy następujące wersety: <ol><li>1Krl 8,1-9</li><li>1Krl 8,10-13</li><li>1Krl 8,16-21</li><li>1Krl 8,27</li><li>1Krl 8,29</li></ol> Jeśli wybierzemy konfigurację &quot;<strong>oryginalne</strong>&quot;, to aplikacja wyświetli wszystkie te wersety tak jak występują w słowniku. Jeżeli natomiast wybierzemy opcję &quot;<strong>sklejanie</strong>&quot;, to wersety, które na siebie nachodzą lub się stykają zostaną połączone w jeden i tak z powyższej listy wersetów otrzymamy: <ol><li>1Krl 8,1-13 (powstałe po &quot;scaleniu&quot; 1-9 oraz 10-13)</li><li>1Krl 8,16-21</li><li>1Krl 8,27</li><li>1Krl 8,29</li></ol> Jeśli natomiast wybierzemy opcję &quot;<strong>grupowanie</strong>&quot; to oprócz scalania aplikacja również zgrupuje wersety w ramach tego samego rozdziału o ile nie są od siebie zbytnio oddalone i z powyszych wersetów uzyskamy pojedyczne siglo: <ol><li>1Krl 8,1-13.16-21.27.29</li></ol> Natomiast 1Krl 8,40 już nie zostałby dodany do grupy ponieważ jest zbyt oddalony od wersetu 29. </p><p> W najnowszej wersji dodatkowo wprowadzono porządkowanie wersetów nie w kolejności jak są w Biblii ale w takiej jak występują w słowniku w danym haśle. </p><p> W przypadku znalezienia jakichś problemów lub błędów, można kontaktować się przez adres: <a href="mailto:michal@post.pl">michal@post.pl</a>. </p>',12);function Q(e,t,o,n,s,r){return Z}var X={name:"InfoPage",props:{json:Object}};const Y=f()(X,[["render",Q]]);var ee=Y;function te(e,t,o,s,r,c){const a=Object(n["C"])("MarkdownViewer");return Object(n["v"])(),Object(n["d"])(a,{slug:o.slug},null,8,["slug"])}const oe=e=>(Object(n["y"])("data-v-09b1864a"),e=e(),Object(n["w"])(),e),ne={class:"controls"},se={class:"form-check form-switch"},re=oe(()=>Object(n["g"])("label",{class:"form-check-label",for:"mySwitch"},"Ukryj wersety",-1));function ce(e,t,o,s,r,c){const a=Object(n["C"])("MarkdownComponent");return Object(n["v"])(),Object(n["f"])("div",null,[Object(n["g"])("div",ne,[Object(n["g"])("div",se,[Object(n["L"])(Object(n["g"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>s.hideRefs=e),id:"mySwitch",name:"darkmode"},null,512),[[n["H"],s.hideRefs]]),re]),Object(n["g"])("label",null,[Object(n["i"])("Czcionka: "),Object(n["L"])(Object(n["g"])("input",{type:"range",min:"12",max:"32","onUpdate:modelValue":t[1]||(t[1]=e=>s.fontSize=e)},null,512),[[n["I"],s.fontSize]])])]),Object(n["j"])(a,{md:s.markdownText,fontSize:s.fontSize,hideRefs:s.hideRefs},null,8,["md","fontSize","hideRefs"])])}o("2c66"),o("249d"),o("40e9"),o("907a"),o("986a"),o("1d02"),o("3c5d"),o("6ce5"),o("2834"),o("4ea1");const ae=["innerHTML"];function ie(e,t,o,s,r,c){return Object(n["v"])(),Object(n["f"])("div",null,[Object(n["g"])("div",{innerHTML:c.htmlContent,style:Object(n["q"])({fontSize:o.fontSize+"px"}),class:Object(n["p"])([{hideRefs:o.hideRefs},"markdown-content"])},null,14,ae)])}var le=o("4cf4");const pe=new le["a"];var de={name:"MarkdownComponent",props:{md:{type:String,required:!0},fontSize:{type:Number,required:!0},hideRefs:{type:Boolean,required:!0}},computed:{htmlContent(){const e=this.md;let t=pe.render(e);return t=t.replace(/\(([^()]+)\)/g,'<i class="ref">($1)</i><i class="ph"></i>'),t}}};o("d80b"),o("023c");const be=f()(de,[["render",ie],["__scopeId","data-v-36b89ab0"]]);var ue=be,je={name:"MarkdownViewer",components:{MarkdownComponent:ue},props:{slug:{type:String,required:!0}},setup(e){const t=Object(n["A"])(18),o=Object(n["A"])(!0),s=Object(n["A"])("");function r(e){const t=(new TextEncoder).encode(e);let o=0;return new window.TransformStream({transform(e,n){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e[r]^t[o],o=(o+1)%t.length;n.enqueue(s)}})}const c="wylacznie do celow kultu religijnego",a=async()=>{try{const t=new window.DecompressionStream("gzip"),o=await fetch(`x/${e.slug}.dat`),n=await o.blob(),a=n.stream().pipeThrough(r(c)).pipeThrough(t),i=new window.Response(a);s.value=await i.text()}catch(t){console.error("Error loading Markdown:",t)}};return Object(n["t"])(a),{fontSize:t,hideRefs:o,markdownText:s}}};o("acb8");const ge=f()(je,[["render",ce],["__scopeId","data-v-09b1864a"]]);var Oe=ge,ye={name:"TextPage",props:{json:Object,slug:String},components:{MarkdownViewer:Oe}};const me=f()(ye,[["render",te]]);var we=me;const fe=e=>(Object(n["y"])("data-v-47d8d183"),e=e(),Object(n["w"])(),e),he={class:"card my-3"},ve={class:"card-body"},ke={class:"card-title clearfix"},ze={class:"float-start"},Pe={class:"float-start"},De=fe(()=>Object(n["g"])("i",{class:"ms-2 bi bi-book"},null,-1)),xe={class:"float-end"},Se=fe(()=>Object(n["g"])("span",null," z",-1)),Ce={class:"accordion",id:"versesAccordion"};function qe(e,t,o,s,r,c){const a=Object(n["C"])("router-link"),i=Object(n["C"])("person-dropdown"),l=Object(n["C"])("people-dropdown"),p=Object(n["C"])("VerseList");return Object(n["v"])(),Object(n["f"])("div",he,[Object(n["g"])("div",ve,[Object(n["g"])("h5",ke,[Object(n["g"])("span",ze,[Object(n["g"])("strong",null,Object(n["F"])(c.entry.title),1)]),Object(n["g"])("span",Pe,[Object(n["j"])(a,{to:{name:"tekst",params:{slug:c.entry.slug}}},{default:Object(n["K"])(()=>[De]),_:1},8,["to"])]),Object(n["g"])("span",xe,[Object(n["j"])(i,{slug:o.slug,people:o.people,person:o.person,ref:"personComponent"},null,8,["slug","people","person"]),Se,Object(n["j"])(l,{slug:o.slug,people:o.people,ref:"peopleComponent"},null,8,["slug","people"])])]),Object(n["g"])("div",Ce,[c.entry.refs.HD?(Object(n["v"])(),Object(n["d"])(p,{key:0,persons:o.people,person:o.person,selected:!0,entries:[c.entry],sectionId:"HD",title:"Historyczne + Dydaktyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entry.refs.H?(Object(n["v"])(),Object(n["d"])(p,{key:1,persons:o.people,person:o.person,selected:!0,entries:[c.entry],sectionId:"H",title:"Historyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entry.refs.PD?(Object(n["v"])(),Object(n["d"])(p,{key:2,persons:o.people,person:o.person,entries:[c.entry],sectionId:"PD",title:"Prorockie + Dydaktyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entry.refs.P?(Object(n["v"])(),Object(n["d"])(p,{key:3,persons:o.people,person:o.person,entries:[c.entry],sectionId:"P",title:"Prorockie"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),Object(n["j"])(p,{persons:o.people,person:o.person,entries:[c.entry],sectionId:"N",title:"Pozaewangeliczne"},null,8,["persons","person","entries"]),Object(n["j"])(p,{persons:o.people,person:o.person,entries:[c.entry],sectionId:"G",title:"Ewangelie"},null,8,["persons","person","entries"]),c.entry.refs.d?(Object(n["v"])(),Object(n["d"])(p,{key:4,persons:o.people,person:0,entries:[c.entry],sectionId:"d",title:"Psalmy",note:"Odniesienia do Psalmów. Pomocne przy doborze pieśni."},null,8,["persons","entries"])):Object(n["e"])("",!0)])])])}const Ie={class:"accordion-item"},_e={class:"accordion-header"},He=["data-bs-target","aria-controls"],Ne=["id"],Ae={class:"accordion-body"},Be={class:"mb-2"},Le={key:0},$e={class:"verse-list"};function Ke(e,t,o,s,r,c){const a=Object(n["C"])("VerseLink");return Object(n["v"])(),Object(n["f"])("div",Ie,[Object(n["g"])("h2",_e,[Object(n["g"])("button",{class:Object(n["p"])("accordion-button "+(o.selected?"":"collapsed")),type:"button","data-bs-toggle":"collapse","data-bs-target":"#verses-"+o.sectionId,"aria-expanded":"false","aria-controls":"verses-"+o.sectionId},Object(n["F"])(o.title)+" ("+Object(n["F"])(c.titleCounters)+") ",11,He)]),Object(n["g"])("div",{id:"verses-"+o.sectionId,class:Object(n["p"])("accordion-collapse collapse "+(o.selected?"show":"")),"data-bs-parent":"#versesAccordion"},[Object(n["g"])("div",Ae,[Object(n["g"])("div",Be,Object(n["F"])(o.note),1),(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(o.entries,e=>(Object(n["v"])(),Object(n["f"])("div",{key:e},[c.multiEntry?(Object(n["v"])(),Object(n["f"])("div",Le,[Object(n["i"])(" Wersety dla hasła "),Object(n["g"])("strong",null,Object(n["F"])(e.title),1),Object(n["i"])(" ("+Object(n["F"])(c.titleCounter(e))+"): ",1)])):Object(n["e"])("",!0),Object(n["g"])("ol",$e,[(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(c.verses(e),(e,t)=>(Object(n["v"])(),Object(n["f"])("li",{key:e,class:Object(n["p"])(c.hideVerse(t)?"visually-hidden":"")},[Object(n["j"])(a,{verse:e,noicon:"d"===o.sectionId},null,8,["verse","noicon"])],2))),128))])]))),128))])],10,Ne)])}o("13d5"),o("5b81");const Te=["href"];function Ve(e,t,o,s,r,c){const a=Object(n["C"])("multi-icon");return Object(n["v"])(),Object(n["f"])("span",null,[o.noicon?Object(n["e"])("",!0):(Object(n["v"])(),Object(n["d"])(a,{key:0,selected:0,options:["bi-circle","bi-dash-circle-dotted","bi-check-circle-fill"]})),Object(n["g"])("a",{class:"verse",href:c.link(),target:"_blank"},Object(n["F"])(o.verse.replaceAll("."," .")),9,Te)])}function Ee(e,t,o,s,r,c){return Object(n["v"])(),Object(n["f"])("button",{type:"button",class:"my-custom-button",onClick:t[0]||(t[0]=(...e)=>c.toggleState&&c.toggleState(...e))},[Object(n["g"])("i",{class:Object(n["p"])("bi "+o.options[r.selectedIndex])},null,2)])}var Fe={name:"MultiIcon",props:{options:{type:Array,required:!0},selected:{type:Number,required:!1,default:0}},data(){return{selectedIndex:this.selected%this.options.length}},methods:{toggleState(){this.selectedIndex=(this.selectedIndex+1)%this.options.length,this.state=this.options[this.selectedIndex]}}};o("8a0f");const Me=f()(Fe,[["render",Ee],["__scopeId","data-v-6f35d9c2"]]);var Re=Me,Je={components:{MultiIcon:Re},name:"VerseLink",props:{verse:String,noicon:Boolean},methods:{fixBook(e){return/^\d/.test(e)?`${e[0]} ${e.slice(1)}`:e},parseVerse(){const e=this.verse.match(/([^ ]+) (\d+)(?:,(\d+))?/);return e?{book:this.fixBook(e[1]),chapter:parseInt(e[2],10),firstVerse:e[3]?parseInt(e[3],10):0}:null},link(){const e="https://www.biblia.pl/otworz.php?skrot=",{book:t,chapter:o,firstVerse:n}=this.parseVerse(this.verse),s=`${t} ${o}${0!==n?","+n:""}`,r=encodeURIComponent(s);return`${e}${r}`}}};o("78e1");const Ue=f()(Je,[["render",Ve],["__scopeId","data-v-597c36bd"]]);var We=Ue,Ge={name:"VerseList",components:{VerseLink:We},props:{entries:Array,sectionId:String,title:String,note:String,selected:Boolean,persons:Number,person:Number},methods:{hideVerse(e){const t=+this.person,o=+this.persons;return t>0&&(e-t+1)%o!==0},verses(e){return e.refs[this.sectionId]},countVisible(e){return this.persons&&this.person&&this.verses?this.verses(e).reduce((e,t,o)=>e+!this.hideVerse(o),0):0},titleCounter(e){const t=this.person?this.countVisible(e)+" z ":"",o=this.verses(e)?""+this.verses(e).length:"";return t+o}},computed:{titleCounters(){return this.entries.map(this.titleCounter).join(" oraz ")},multiEntry(){return this.entries&&this.entries.length>1}}};o("142a");const Ze=f()(Ge,[["render",Ke],["__scopeId","data-v-189ecef6"]]);var Qe=Ze;const Xe={class:"dropdown dropstart d-inline-block mx-2"},Ye={class:"btn btn-secondary btn-sm dropdown-toggle",type:"button",id:"people","data-bs-toggle":"dropdown","aria-expanded":"false",ref:"peopleButton"},et=Object(n["g"])("i",{class:"bi bi-people-fill"},null,-1),tt={class:"dropdown-menu","aria-labelledby":"people"},ot=Object(n["g"])("li",null,[Object(n["g"])("h6",{class:"dropdown-header"},"Osób na spotkaniu:")],-1);function nt(e,t,o,s,r,c){const a=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["f"])("div",Xe,[Object(n["g"])("button",Ye,[Object(n["i"])(Object(n["F"])(o.people)+" ",1),et],512),Object(n["g"])("ul",tt,[ot,(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(Array(c.maxPeople),(t,s)=>(Object(n["v"])(),Object(n["f"])("li",{key:s+1},[Object(n["j"])(a,{to:{name:e.$route.name,params:{slug:o.slug,people:s+1},query:{}},class:Object(n["p"])({"dropdown-item":!0,active:o.people===s+1})},{default:Object(n["K"])(()=>[Object(n["i"])(Object(n["F"])(s+1)+" ",1),(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(Array(s+1),(e,t)=>(Object(n["v"])(),Object(n["f"])("i",{key:t,class:"bi bi-person-fill"}))),128))]),_:2},1032,["to","class"])]))),128))])])}var st={name:"PeopleDropdown",props:{slug:{type:String,requred:!0},people:Number},computed:{maxPeople(){return 10}},methods:{open(){new window.bootstrap.Dropdown(this.$refs.peopleButton).show()}}};const rt=f()(st,[["render",nt]]);var ct=rt;const at={class:"dropdown dropstart d-inline-block"},it=["disabled"],lt={key:0,class:"bi bi-asterisk"},pt={key:1},dt=Object(n["g"])("i",{class:"bi bi-person-fill"},null,-1),bt={class:"dropdown-menu","aria-labelledby":"person"},ut=Object(n["g"])("li",null,[Object(n["g"])("h6",{class:"dropdown-header"},"Pokaż wersety dla:")],-1);function jt(e,t,o,s,r,c){const a=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["f"])("div",at,[Object(n["g"])("button",{class:"btn btn-secondary btn-sm dropdown-toggle",type:"button",id:"person",disabled:!o.people,"data-bs-toggle":"dropdown","aria-expanded":"false",ref:"personButton"},[o.person?Object(n["e"])("",!0):(Object(n["v"])(),Object(n["f"])("i",lt)),o.person?(Object(n["v"])(),Object(n["f"])("span",pt,[Object(n["i"])(Object(n["F"])(o.person),1),dt])):Object(n["e"])("",!0)],8,it),Object(n["g"])("ul",bt,[ut,(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(c.personOptions,(t,s)=>(Object(n["v"])(),Object(n["f"])("li",{key:s},[Object(n["j"])(a,{to:{name:e.$route.name,params:{slug:o.slug,people:o.people,person:s},query:{}},class:Object(n["p"])({"dropdown-item":!0,active:o.person===s})},{default:Object(n["K"])(()=>[Object(n["i"])(Object(n["F"])(t),1)]),_:2},1032,["to","class"])]))),128))])])}var gt={name:"PersonDropdown",props:{slug:{type:String,requred:!0},people:{type:Number,requred:!0},person:Number},methods:{open(){this.people&&new window.bootstrap.Dropdown(this.$refs.personButton).show()}},computed:{personOptions(){const e=Array(10).fill("Osoba");return["Wszystkich"].concat(e.map((e,t)=>`${t+1}. ${e}`)).slice(0,this.people+1)}}};const Ot=f()(gt,[["render",jt]]);var yt=Ot,mt={name:"EntryPage",components:{PeopleDropdown:ct,PersonDropdown:yt,VerseList:Qe},props:{json:{type:Object,requred:!0},slug:{type:String,requred:!0},people:Number,person:Number,names:Array},methods:{openDoropdowns(){this.people?void 0===this.person&&(console.log("person is not set"),setTimeout(()=>{this.$refs.personComponent.open()},300)):(console.log("people is not set"),setTimeout(()=>{this.$refs.peopleComponent.open()},300))}},computed:{entry(){return this.json?this.json.entries.find(e=>e.slug===this.slug):{title:"...",slug:this.slug,refs:{HD:[],P:[],N:[],G:[],d:[]}}}},updated(){console.log("entry view updated"),this.openDoropdowns()}};o("b113");const wt=f()(mt,[["render",qe],["__scopeId","data-v-47d8d183"]]);var ft=wt;const ht=e=>(Object(n["y"])("data-v-253d601e"),e=e(),Object(n["w"])(),e),vt={key:0,class:"card my-3"},kt={class:"card-body"},zt={class:"card-title clearfix"},Pt={class:"float-start"},Dt={class:"float-start"},xt=ht(()=>Object(n["g"])("i",{class:"ms-2 bi bi-book"},null,-1)),St={class:"float-end"},Ct=ht(()=>Object(n["g"])("span",null," z",-1)),qt={class:"accordion",id:"versesAccordion"};function It(e,t,o,s,r,c){const a=Object(n["C"])("router-link"),i=Object(n["C"])("person-dropdown"),l=Object(n["C"])("people-dropdown"),p=Object(n["C"])("VerseList");return o.json?(Object(n["v"])(),Object(n["f"])("div",vt,[Object(n["g"])("div",kt,[Object(n["g"])("h5",zt,[Object(n["g"])("span",Pt,[Object(n["g"])("strong",null,Object(n["F"])(c.subject.t),1)]),Object(n["g"])("span",Dt,[(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(c.subject.e,e=>(Object(n["v"])(),Object(n["d"])(a,{key:e,to:{name:"tekst",params:{slug:e}}},{default:Object(n["K"])(()=>[xt]),_:2},1032,["to"]))),128))]),Object(n["g"])("span",St,[Object(n["j"])(i,{slug:o.slug,people:o.people,person:o.person,ref:"personComponent"},null,8,["slug","people","person"]),Ct,Object(n["j"])(l,{slug:o.slug,people:o.people,ref:"peopleComponent"},null,8,["slug","people"])])]),Object(n["g"])("div",qt,[c.entries[0].refs.HD?(Object(n["v"])(),Object(n["d"])(p,{key:0,persons:o.people,person:o.person,selected:!0,entries:c.entries,sectionId:"HD",title:"Historyczne + Dydaktyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entries[0].refs.H?(Object(n["v"])(),Object(n["d"])(p,{key:1,persons:o.people,person:o.person,selected:!0,entries:c.entries,sectionId:"H",title:"Historyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entries[0].refs.PD?(Object(n["v"])(),Object(n["d"])(p,{key:2,persons:o.people,person:o.person,entries:c.entries,sectionId:"PD",title:"Prorockie + Dydaktyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entries[0].refs.P?(Object(n["v"])(),Object(n["d"])(p,{key:3,persons:o.people,person:o.person,entries:c.entries,sectionId:"P",title:"Prorockie"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),Object(n["j"])(p,{persons:o.people,person:o.person,entries:c.entries,sectionId:"N",title:"Pozaewangeliczne"},null,8,["persons","person","entries"]),Object(n["j"])(p,{persons:o.people,person:o.person,entries:c.entries,sectionId:"G",title:"Ewangelie"},null,8,["persons","person","entries"]),c.entries[0].refs.d?(Object(n["v"])(),Object(n["d"])(p,{key:4,persons:o.people,person:0,entries:c.entries,sectionId:"d",title:"Psalmy",note:"Odniesienia do Psalmów. Pomocne przy doborze pieśni."},null,8,["persons","entries"])):Object(n["e"])("",!0)])])])):Object(n["e"])("",!0)}var _t={name:"EntryPage",components:{PeopleDropdown:ct,PersonDropdown:yt,VerseList:Qe},props:{json:{type:Object,requred:!0},slug:{type:String,requred:!0},people:Number,person:Number,names:Array},methods:{openDoropdowns(){this.people?void 0===this.person&&(console.log("person is not set"),setTimeout(()=>{this.$refs.personComponent.open()},300)):(console.log("people is not set"),setTimeout(()=>{this.$refs.peopleComponent.open()},300))},getEntry(e){return this.json?this.json.entries.find(t=>t.slug===e):{title:"...",slug:this.slug,refs:{HD:[],P:[],N:[],G:[],d:[]}}}},computed:{subject(){if(this.json){console.log("slug=",this.slug);const e=this.json.subjects.find(e=>e.s===this.slug);return console.log("found=",e),e}return console.log("no json"),{t:"...",s:this.slug,e:[]}},entries(){return this.subject.e.map(e=>this.getEntry(e))}},updated(){console.log("entry view updated"),this.openDoropdowns()}};o("b3c0");const Ht=f()(_t,[["render",It],["__scopeId","data-v-253d601e"]]);var Nt=Ht,At=o("9483");function Bt(e,t){return t?{[e]:parseInt(t,10)}:{}}Object(At["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const Lt=Object(s["a"])({history:Object(s["b"])(),routes:[{path:"/",name:"home",component:G},{path:"/info",name:"info",component:ee},{path:"/tekst/:slug",name:"tekst",component:we,props:e=>({slug:e.params.slug||""})},{path:"/haslo/:slug/:people?/:person?",name:"entry",component:ft,props:e=>({slug:e.params.slug||"",...Bt("people",e.params.people),...Bt("person",e.params.person)})},{path:"/temat/:slug/:people?/:person?",name:"subject",component:Nt,props:e=>({slug:e.params.slug||"",...Bt("people",e.params.people),...Bt("person",e.params.person)})}]});Lt.beforeEach((e,t,o)=>{console.log("Global Before Each: Navigating from",t.fullPath,"to",e.fullPath),o()}),Lt.afterEach((e,t)=>{console.log("Global After Each: Navigated from",t.fullPath,"to",e.fullPath)});const $t=Object(n["c"])(P);$t.config.productionTip=!1,$t.use(Lt),$t.use(r["a"],{config:{id:"G-MCBJLFP84W"}},Lt),$t.mount("#app")},"5b5c":function(e,t,o){},"5e4a":function(e,t,o){},"6d4d":function(e,t,o){"use strict";o("f3aa")},7632:function(e,t,o){},"78e1":function(e,t,o){"use strict";o("7632")},8363:function(e,t,o){},"8a0f":function(e,t,o){"use strict";o("e8e9")},"8bb2":function(e,t,o){"use strict";o("5b5c")},"8d83":function(e,t,o){},"996f":function(e,t,o){},acb8:function(e,t,o){"use strict";o("8d83")},b113:function(e,t,o){"use strict";o("8363")},b3c0:function(e,t,o){"use strict";o("4975")},c6b5:function(e,t,o){},d80b:function(e,t,o){"use strict";o("996f")},e8e9:function(e,t,o){},f3aa:function(e,t,o){}});
//# sourceMappingURL=app.9a212f5a.js.map