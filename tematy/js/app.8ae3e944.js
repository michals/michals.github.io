(function(e){function t(t){for(var s,c,a=t[0],i=t[1],l=t[2],d=0,b=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);p&&p(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],s=!0,a=1;a<o.length;a++){var i=o[a];0!==n[i]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=o[0]))}return e}var s={},n={app:0},r=[];function c(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=s,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(o,s,function(t){return e[t]}.bind(null,s));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var p=i;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"142a":function(e,t,o){"use strict";o("c6b5")},"2ab1":function(e,t,o){"use strict";o("f797")},"390a":function(e,t,o){},"39f8":function(e,t,o){},"4a47":function(e,t,o){"use strict";o("390a")},"56d7":function(e,t,o){"use strict";o.r(t);var s=o("7a23"),n=o("6605"),r=o("a584");const c={class:"container"};function a(e,t,o,n,r,a){const i=Object(s["A"])("nav-bar"),l=Object(s["A"])("router-view");return Object(s["t"])(),Object(s["f"])(s["a"],null,[Object(s["j"])(i,{json:r.json,location:e.$route},null,8,["json","location"]),Object(s["g"])("div",c,[Object(s["j"])(l,{json:r.json},null,8,["json"])])],64)}o("88a7"),o("271a"),o("5494");const i={class:"navbar navbar-expand-lg bg-body-tertiary"},l={class:"container-fluid"},p=Object(s["g"])("img",{src:"logo.png",alt:"",width:"30",class:"d-inline-block align-text-top"},null,-1),d=Object(s["g"])("i",{class:"bi bi-info-circle"},null,-1),b={class:"dropdown dropstart d-inline-block ms-auto"},u=Object(s["g"])("button",{class:"btn btn-light btn-sm dropdown-toggle",type:"button",id:"cfg","data-bs-toggle":"dropdown","aria-expanded":"false"},[Object(s["g"])("i",{class:"bi bi-gear"})],-1),j={class:"dropdown-menu","aria-labelledby":"cfg"},O=Object(s["g"])("li",null,[Object(s["g"])("h6",{class:"dropdown-header"},"Konfiguracje:")],-1),g=["href"];function y(e,t,o,n,r,c){const a=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["f"])("nav",i,[Object(s["g"])("div",l,[Object(s["j"])(a,{to:"/",class:"navbar-brand left"},{default:Object(s["G"])(()=>[p,Object(s["i"])(" Tematy Liturgii Słowa ")]),_:1}),Object(s["j"])(a,{to:"/info",class:"d-inline-block left btn"},{default:Object(s["G"])(()=>[d]),_:1}),Object(s["g"])("div",b,[u,Object(s["g"])("ul",j,[O,(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(c.configs(),e=>(Object(s["t"])(),Object(s["f"])("li",{key:e.url},[Object(s["g"])("a",{href:e.url,class:"dropdown-item"},Object(s["D"])(e.text),9,g)]))),128))])])])])}var m={name:"NavBar",props:{json:{type:Object,requred:!0},location:{requred:!0}},methods:{configs(){return[{db:"ddh-lim77-overlap",text:"DdH, sklejane, bez ogromnych"},{db:"ddh-nolim-overlap",text:"DdH, sklejane, wszystkie"},{db:"ddh-lim77-nomerge",text:"DdH, oryginalne, bez ogromnych"},{db:"ddh-nolim-nomerge",text:"DdH, oryginalne, wszystkie"},{db:"ddh-lim77-chapter",text:"DdH, grupowane, bez ogromnych"},{db:"ddh-nolim-chapter",text:"DdH, grupowane, wszystkie"},{db:"ddp-lim77-overlap",text:"DdP, sklejane, bez ogromnych"},{db:"ddp-nolim-overlap",text:"DdP, sklejane, wszystkie"},{db:"ddp-lim77-nomerge",text:"DdP, oryginalne, bez ogromnych"},{db:"ddp-nolim-nomerge",text:"DdP, oryginalne, wszystkie"},{db:"ddp-lim77-chapter",text:"DdP, grupowane, bez ogromnych"},{db:"ddp-nolim-chapter",text:"DdP, grupowane, wszystkie"}].map(e=>{const t=new URL(window.location);return t.searchParams.set("use",e.db),{url:t.toString(),text:e.text}})}}},f=o("6b0d"),h=o.n(f);const w=h()(m,[["render",y]]);var k=w,z={name:"App",components:{NavBar:k},data(){return{json:null}},methods:{async loadJSON(){const e=new URLSearchParams(window.location.search).get("use")||"ddh-lim77-overlap";let t;if(console.log("DB:",e),window.DecompressionStream){console.log("Using DecompressionStream");const o=new window.DecompressionStream("gzip"),s=await fetch(`subjects-${e}.json.gz`),n=await s.blob(),r=n.stream().pipeThrough(o);t=new window.Response(r)}else console.log("No support for DecompressionStream"),t=await fetch(`subjects-${e}.json`);this.json=await t.json(),console.log(this.json)}},async mounted(){await this.loadJSON()}};const v=h()(z,[["render",a]]);var D=v;const P=e=>(Object(s["w"])("data-v-5a353792"),e=e(),Object(s["u"])(),e),x={class:"accordion my-3",id:"parts"},I={class:"accordion-item"},A=P(()=>Object(s["g"])("h2",{class:"accordion-header",id:"subjectHead"},[Object(s["g"])("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#subject","aria-expanded":"true","aria-controls":"subject"}," Tematy dla prekatechumenatu ")],-1)),q={id:"subject",class:"accordion-collapse collapse show","aria-labelledby":"subjectHead","data-bs-parent":"#parts"},S={class:"accordion-body"},_={class:"accordion-item"},H=P(()=>Object(s["g"])("h2",{class:"accordion-header",id:"entryHead"},[Object(s["g"])("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#entry","aria-expanded":"true","aria-controls":"entry"}," Lista wszystkich haseł ")],-1)),N={id:"entry",class:"accordion-collapse collapse","aria-labelledby":"entryHead","data-bs-parent":"#parts"},L={class:"accordion-body"};function $(e,t,o,n,r,c){const a=Object(s["A"])("SubjectList"),i=Object(s["A"])("EntryList");return Object(s["t"])(),Object(s["f"])("div",x,[Object(s["g"])("div",I,[A,Object(s["g"])("div",q,[Object(s["g"])("div",S,[Object(s["j"])(a,{subjects:c.subjects},null,8,["subjects"])])])]),Object(s["g"])("div",_,[H,Object(s["g"])("div",N,[Object(s["g"])("div",L,[Object(s["j"])(i,{entries:c.entries},null,8,["entries"])])])])])}const V={class:"subject-list"};function C(e,t,o,n,r,c){const a=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["f"])("ol",V,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(o.entries,e=>(Object(s["t"])(),Object(s["f"])("li",{key:e},[Object(s["j"])(a,{to:{name:"entry",params:{slug:e.slug}}},{default:Object(s["G"])(()=>[Object(s["i"])(Object(s["D"])(e.title),1)]),_:2},1032,["to"])]))),128))])}var E={name:"EntryList",components:{},props:{entries:Array}};o("4a47");const B=h()(E,[["render",C],["__scopeId","data-v-4b74e406"]]);var G=B;const K={class:"subject-list"};function T(e,t,o,n,r,c){const a=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["f"])("ol",K,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(o.subjects,e=>(Object(s["t"])(),Object(s["f"])("li",{key:e},[Object(s["j"])(a,{to:{name:"subject",params:{slug:e.s}}},{default:Object(s["G"])(()=>[Object(s["i"])(Object(s["D"])(e.t),1)]),_:2},1032,["to"])]))),128))])}var J={name:"SubjectList",components:{},props:{subjects:Array}};o("6d4d");const M=h()(J,[["render",T],["__scopeId","data-v-2385375e"]]);var W=M,R={name:"HomePage",components:{EntryList:G,SubjectList:W},props:{json:{type:Object,requred:!0}},computed:{subjects(){return this.json?this.json.subjects:[]},entries(){return this.json?this.json.entries:[]}}};o("8bb2");const U=h()(R,[["render",$],["__scopeId","data-v-5a353792"]]);var Z=U;const F=Object(s["h"])('<h1>O aplikacji</h1><p> Aplikacja &quot;Tematy&quot; została opracowana jako pomoc przy przygotowaniu Liturgii Słowa dla wspólnot Neokatechumenalnych. </p><p> Na głównej stronie znajduje się lista tematów wybranych dla spólnot na etapie prekatechumenatu. Poniej również jest lista wszystkich haseł se Słownika Teologii Biblijnej. </p><p> Po wybraniu tematu lub hasła można określić ile osób jest na spotakniu (<i class="bi bi-people-fill"></i>). Aplikacja wówczas automatycznie porozdziela wersety pomiędzy poszczególne osoby. Aby wyświetlić wersety dla konkretnej osoby naley wybrać osobę z rozwijalnej listy (<i class="bi bi-asterisk"></i>). </p><p> Każdy werset jest od razu linkiem do serwisu biblia.pl. Zaczhęcamy oczywiście do czytania Pisma w wersji papierowej, ale jeśli ktoś preferuje ekran, to jest to pewne ułatwienie. </p><p> Przy każdym wersecie jest &quot;kółeczko&quot; które monżna kliknąć i w ten sposób podczas wybierania wersetu oznaczyć sobie danego kandydata jako &quot;jedzcze nie wiem&quot; / &quot;raczej nie&quot; / &quot;raczej tak&quot;. </p><p> Po wybraniu tematu lub hasła wersety są już pogrupowane według kolejnych czytań (księgi historyczne, prorockie, nowytestament, ewangelie). </p><p> Aplikacja może działać w różnych konfiguracjach (<i class="bi bi-gear"></i>). <strong>DdH</strong> oznacza księgi Dydaktyczne do Historycznych. Natomiast <strong>DdP</strong> to księgi Dydaktyczne do Prorockich. Domyślną kofiguracją jest DdH ponieważ w takim układzie najczęściej obecnie wpólnoty pracują. </p><p> W słowniku czasami zdarzają się bardzo duże wersety. Na przykład w temacie Ewangelia jest <em>Iz 40-66</em> czyli 27 rozdziałów zawierających w sumie 526 wersetów. Trudno sobie wyobrazić, aby cała grupa czekała trzy godziny aż ktoś kto taki werset dostanie go przeczyał. Aplikacja domyślnie ma możliwość odfiltrowywania tego typu ogromnych wersetów aby usprawnić techniczne aspekty spotkania. Zobacz konfiguracje &quot;bez ogromnych&quot; vs. &quot;wszystkie&quot;. </p><p> Dodatkowo w aplikacji jest możliwość łączenia pobliskich wersetów. Weźmy na przykład temat Świątynia i wersety z <em>1Krl 8</em>. W słowniku mamy następujące wersety: <ol><li>1Krl 8,1-9</li><li>1Krl 8,10-13</li><li>1Krl 8,16-21</li><li>1Krl 8,27</li><li>1Krl 8,29</li></ol> Jeśli wybierzemy konfigurację &quot;<strong>oryginalne</strong>&quot;, to aplikacja wyświetli wszystkie te wersety tak jak występują w słowniku. Jeżeli natomiast wybierzemy opcję &quot;<strong>sklejanie</strong>&quot;, to wersety, które na siebie nachodzą lub się stykają zostaną połączone w jeden i tak z powyższej listy wersetów otrzymamy: <ol><li>1Krl 8,1-13 (powstałe po &quot;sklejeniu&quot; 1-9 oraz 10-13)</li><li>1Krl 8,16-21</li><li>1Krl 8,27</li><li>1Krl 8,29</li></ol> Jeśli natomiast wybierzemy opcję &quot;<strong>grupowanie</strong>&quot; to oprócz sklejania aplikacja również zgrupuje wersety w ramach tego samego rozdziału i z powyszych wersetów uzyskamy pojedyczne siglo: <ol><li>1Krl 8,1-13.16-21.27.29</li></ol></p><p> W przypadku znalezienia jakichś problemów lub błędów, można kontaktować się przez adres: <a href="mailto:michal@post.pl">michal@post.pl</a>. </p>',11);function Q(e,t,o,s,n,r){return F}var X={name:"InfoPage",props:{json:Object}};const Y=h()(X,[["render",Q]]);var ee=Y;const te=e=>(Object(s["w"])("data-v-0879a669"),e=e(),Object(s["u"])(),e),oe={class:"card my-3"},se={class:"card-body"},ne={class:"card-title clearfix"},re={class:"float-start"},ce={class:"float-end"},ae=te(()=>Object(s["g"])("span",null," z",-1)),ie={class:"accordion",id:"versesAccordion"};function le(e,t,o,n,r,c){const a=Object(s["A"])("person-dropdown"),i=Object(s["A"])("people-dropdown"),l=Object(s["A"])("VerseList");return Object(s["t"])(),Object(s["f"])("div",oe,[Object(s["g"])("div",se,[Object(s["g"])("h5",ne,[Object(s["g"])("span",re,[Object(s["g"])("strong",null,Object(s["D"])(c.entry.title),1)]),Object(s["g"])("span",ce,[Object(s["j"])(a,{slug:o.slug,people:o.people,person:o.person,ref:"personComponent"},null,8,["slug","people","person"]),ae,Object(s["j"])(i,{slug:o.slug,people:o.people,ref:"peopleComponent"},null,8,["slug","people"])])]),Object(s["g"])("div",ie,[c.entry.refs.HD?(Object(s["t"])(),Object(s["d"])(l,{key:0,persons:o.people,person:o.person,selected:!0,entries:[c.entry],sectionId:"HD",title:"Historyczne + Dydaktyczne"},null,8,["persons","person","entries"])):Object(s["e"])("",!0),c.entry.refs.H?(Object(s["t"])(),Object(s["d"])(l,{key:1,persons:o.people,person:o.person,selected:!0,entries:[c.entry],sectionId:"H",title:"Historyczne"},null,8,["persons","person","entries"])):Object(s["e"])("",!0),c.entry.refs.PD?(Object(s["t"])(),Object(s["d"])(l,{key:2,persons:o.people,person:o.person,entries:[c.entry],sectionId:"PD",title:"Prorockie + Dydaktyczne"},null,8,["persons","person","entries"])):Object(s["e"])("",!0),c.entry.refs.P?(Object(s["t"])(),Object(s["d"])(l,{key:3,persons:o.people,person:o.person,entries:[c.entry],sectionId:"P",title:"Prorockie"},null,8,["persons","person","entries"])):Object(s["e"])("",!0),Object(s["j"])(l,{persons:o.people,person:o.person,entries:[c.entry],sectionId:"N",title:"Pozaewangeliczne"},null,8,["persons","person","entries"]),Object(s["j"])(l,{persons:o.people,person:o.person,entries:[c.entry],sectionId:"G",title:"Ewangelie"},null,8,["persons","person","entries"]),c.entry.refs.d?(Object(s["t"])(),Object(s["d"])(l,{key:4,persons:o.people,person:0,entries:[c.entry],sectionId:"d",title:"Psalmy",note:"Odniesienia do Psalmów. Pomocne przy doborze pieśni."},null,8,["persons","entries"])):Object(s["e"])("",!0)])])])}const pe={class:"accordion-item"},de={class:"accordion-header"},be=["data-bs-target","aria-controls"],ue=["id"],je={class:"accordion-body"},Oe={class:"mb-2"},ge={key:0},ye={class:"verse-list"};function me(e,t,o,n,r,c){const a=Object(s["A"])("VerseLink");return Object(s["t"])(),Object(s["f"])("div",pe,[Object(s["g"])("h2",de,[Object(s["g"])("button",{class:Object(s["p"])("accordion-button "+(o.selected?"":"collapsed")),type:"button","data-bs-toggle":"collapse","data-bs-target":"#verses-"+o.sectionId,"aria-expanded":"false","aria-controls":"verses-"+o.sectionId},Object(s["D"])(o.title)+" ("+Object(s["D"])(c.titleCounters)+") ",11,be)]),Object(s["g"])("div",{id:"verses-"+o.sectionId,class:Object(s["p"])("accordion-collapse collapse "+(o.selected?"show":"")),"data-bs-parent":"#versesAccordion"},[Object(s["g"])("div",je,[Object(s["g"])("div",Oe,Object(s["D"])(o.note),1),(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(o.entries,e=>(Object(s["t"])(),Object(s["f"])("div",{key:e},[c.multiEntry?(Object(s["t"])(),Object(s["f"])("div",ge,[Object(s["i"])(" Wersety dla hasła "),Object(s["g"])("strong",null,Object(s["D"])(e.title),1),Object(s["i"])(" ("+Object(s["D"])(c.titleCounter(e))+"): ",1)])):Object(s["e"])("",!0),Object(s["g"])("ol",ye,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(c.verses(e),(e,t)=>(Object(s["t"])(),Object(s["f"])("li",{key:e,class:Object(s["p"])(c.hideVerse(t)?"visually-hidden":"")},[Object(s["j"])(a,{verse:e,noicon:"d"===o.sectionId},null,8,["verse","noicon"])],2))),128))])]))),128))])],10,ue)])}o("13d5"),o("5b81");const fe=["href"];function he(e,t,o,n,r,c){const a=Object(s["A"])("multi-icon");return Object(s["t"])(),Object(s["f"])("span",null,[o.noicon?Object(s["e"])("",!0):(Object(s["t"])(),Object(s["d"])(a,{key:0,selected:0,options:["bi-circle","bi-dash-circle-dotted","bi-check-circle-fill"]})),Object(s["g"])("a",{class:"verse",href:c.link(),target:"_blank"},Object(s["D"])(o.verse.replaceAll("."," .")),9,fe)])}function we(e,t,o,n,r,c){return Object(s["t"])(),Object(s["f"])("button",{type:"button",class:"my-custom-button",onClick:t[0]||(t[0]=(...e)=>c.toggleState&&c.toggleState(...e))},[Object(s["g"])("i",{class:Object(s["p"])("bi "+o.options[r.selectedIndex])},null,2)])}var ke={name:"MultiIcon",props:{options:{type:Array,required:!0},selected:{type:Number,required:!1,default:0}},data(){return{selectedIndex:this.selected%this.options.length}},methods:{toggleState(){this.selectedIndex=(this.selectedIndex+1)%this.options.length,this.state=this.options[this.selectedIndex]}}};o("8a0f");const ze=h()(ke,[["render",we],["__scopeId","data-v-6f35d9c2"]]);var ve=ze,De={components:{MultiIcon:ve},name:"VerseLink",props:{verse:String,noicon:Boolean},methods:{fixBook(e){return/^\d/.test(e)?`${e[0]} ${e.slice(1)}`:e},parseVerse(){const e=this.verse.match(/([^ ]+) (\d+)(?:,(\d+))?/);return e?{book:this.fixBook(e[1]),chapter:parseInt(e[2],10),firstVerse:e[3]?parseInt(e[3],10):0}:null},link(){const e="https://www.biblia.pl/otworz.php?skrot=",{book:t,chapter:o,firstVerse:s}=this.parseVerse(this.verse),n=`${t} ${o}${0!==s?","+s:""}`,r=encodeURIComponent(n);return`${e}${r}`}}};o("78e1");const Pe=h()(De,[["render",he],["__scopeId","data-v-597c36bd"]]);var xe=Pe,Ie={name:"VerseList",components:{VerseLink:xe},props:{entries:Array,sectionId:String,title:String,note:String,selected:Boolean,persons:Number,person:Number},methods:{hideVerse(e){const t=+this.person,o=+this.persons;return t>0&&(e-t+1)%o!==0},verses(e){return e.refs[this.sectionId]},countVisible(e){return this.persons&&this.person&&this.verses?this.verses(e).reduce((e,t,o)=>e+!this.hideVerse(o),0):0},titleCounter(e){const t=this.person?this.countVisible(e)+" z ":"",o=this.verses(e)?""+this.verses(e).length:"";return t+o}},computed:{titleCounters(){return this.entries.map(this.titleCounter).join(" oraz ")},multiEntry(){return this.entries&&this.entries.length>1}}};o("142a");const Ae=h()(Ie,[["render",me],["__scopeId","data-v-189ecef6"]]);var qe=Ae;const Se={class:"dropdown dropstart d-inline-block mx-2"},_e={class:"btn btn-secondary btn-sm dropdown-toggle",type:"button",id:"people","data-bs-toggle":"dropdown","aria-expanded":"false",ref:"peopleButton"},He=Object(s["g"])("i",{class:"bi bi-people-fill"},null,-1),Ne={class:"dropdown-menu","aria-labelledby":"people"},Le=Object(s["g"])("li",null,[Object(s["g"])("h6",{class:"dropdown-header"},"Osób na spotkaniu:")],-1);function $e(e,t,o,n,r,c){const a=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["f"])("div",Se,[Object(s["g"])("button",_e,[Object(s["i"])(Object(s["D"])(o.people)+" ",1),He],512),Object(s["g"])("ul",Ne,[Le,(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(Array(c.maxPeople),(t,n)=>(Object(s["t"])(),Object(s["f"])("li",{key:n+1},[Object(s["j"])(a,{to:{name:e.$route.name,params:{slug:o.slug,people:n+1},query:{}},class:Object(s["p"])({"dropdown-item":!0,active:o.people===n+1})},{default:Object(s["G"])(()=>[Object(s["i"])(Object(s["D"])(n+1)+" ",1),(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(Array(n+1),(e,t)=>(Object(s["t"])(),Object(s["f"])("i",{key:t,class:"bi bi-person-fill"}))),128))]),_:2},1032,["to","class"])]))),128))])])}var Ve={name:"PeopleDropdown",props:{slug:{type:String,requred:!0},people:Number},computed:{maxPeople(){return 8}},methods:{open(){new window.bootstrap.Dropdown(this.$refs.peopleButton).show()}}};const Ce=h()(Ve,[["render",$e]]);var Ee=Ce;const Be={class:"dropdown dropstart d-inline-block"},Ge=["disabled"],Ke={key:0,class:"bi bi-asterisk"},Te={key:1},Je=Object(s["g"])("i",{class:"bi bi-person-fill"},null,-1),Me={class:"dropdown-menu","aria-labelledby":"person"},We=Object(s["g"])("li",null,[Object(s["g"])("h6",{class:"dropdown-header"},"Pokaż wersety dla:")],-1);function Re(e,t,o,n,r,c){const a=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["f"])("div",Be,[Object(s["g"])("button",{class:"btn btn-secondary btn-sm dropdown-toggle",type:"button",id:"person",disabled:!o.people,"data-bs-toggle":"dropdown","aria-expanded":"false",ref:"personButton"},[o.person?Object(s["e"])("",!0):(Object(s["t"])(),Object(s["f"])("i",Ke)),o.person?(Object(s["t"])(),Object(s["f"])("span",Te,[Object(s["i"])(Object(s["D"])(o.person),1),Je])):Object(s["e"])("",!0)],8,Ge),Object(s["g"])("ul",Me,[We,(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(c.personOptions,(t,n)=>(Object(s["t"])(),Object(s["f"])("li",{key:n},[Object(s["j"])(a,{to:{name:e.$route.name,params:{slug:o.slug,people:o.people,person:n},query:{}},class:Object(s["p"])({"dropdown-item":!0,active:o.person===n})},{default:Object(s["G"])(()=>[Object(s["i"])(Object(s["D"])(t),1)]),_:2},1032,["to","class"])]))),128))])])}var Ue={name:"PersonDropdown",props:{slug:{type:String,requred:!0},people:{type:Number,requred:!0},person:Number},methods:{open(){this.people&&new window.bootstrap.Dropdown(this.$refs.personButton).show()}},computed:{personOptions(){const e=Array(8).fill("Osoba");return["Wszystkich"].concat(e.map((e,t)=>`${t+1}. ${e}`)).slice(0,this.people+1)}}};const Ze=h()(Ue,[["render",Re]]);var Fe=Ze,Qe={name:"EntryPage",components:{PeopleDropdown:Ee,PersonDropdown:Fe,VerseList:qe},props:{json:{type:Object,requred:!0},slug:{type:String,requred:!0},people:Number,person:Number,names:Array},methods:{openDoropdowns(){this.people?void 0===this.person&&(console.log("person is not set"),setTimeout(()=>{this.$refs.personComponent.open()},300)):(console.log("people is not set"),setTimeout(()=>{this.$refs.peopleComponent.open()},300))}},computed:{entry(){return this.json?this.json.entries.find(e=>e.slug===this.slug):{title:"...",slug:this.slug,refs:{HD:[],P:[],N:[],G:[],d:[]}}}},updated(){console.log("entry view updated"),this.openDoropdowns()}};o("7380");const Xe=h()(Qe,[["render",le],["__scopeId","data-v-0879a669"]]);var Ye=Xe;const et=e=>(Object(s["w"])("data-v-3ab307ad"),e=e(),Object(s["u"])(),e),tt={key:0,class:"card my-3"},ot={class:"card-body"},st={class:"card-title clearfix"},nt={class:"float-start"},rt={class:"float-end"},ct=et(()=>Object(s["g"])("span",null," z",-1)),at={class:"accordion",id:"versesAccordion"};function it(e,t,o,n,r,c){const a=Object(s["A"])("person-dropdown"),i=Object(s["A"])("people-dropdown"),l=Object(s["A"])("VerseList");return o.json?(Object(s["t"])(),Object(s["f"])("div",tt,[Object(s["g"])("div",ot,[Object(s["g"])("h5",st,[Object(s["g"])("span",nt,[Object(s["g"])("strong",null,Object(s["D"])(c.subject.t),1)]),Object(s["g"])("span",rt,[Object(s["j"])(a,{slug:o.slug,people:o.people,person:o.person,ref:"personComponent"},null,8,["slug","people","person"]),ct,Object(s["j"])(i,{slug:o.slug,people:o.people,ref:"peopleComponent"},null,8,["slug","people"])])]),Object(s["g"])("div",at,[c.entries[0].refs.HD?(Object(s["t"])(),Object(s["d"])(l,{key:0,persons:o.people,person:o.person,selected:!0,entries:c.entries,sectionId:"HD",title:"Historyczne + Dydaktyczne"},null,8,["persons","person","entries"])):Object(s["e"])("",!0),c.entries[0].refs.H?(Object(s["t"])(),Object(s["d"])(l,{key:1,persons:o.people,person:o.person,selected:!0,entries:c.entries,sectionId:"H",title:"Historyczne"},null,8,["persons","person","entries"])):Object(s["e"])("",!0),c.entries[0].refs.PD?(Object(s["t"])(),Object(s["d"])(l,{key:2,persons:o.people,person:o.person,entries:c.entries,sectionId:"PD",title:"Prorockie + Dydaktyczne"},null,8,["persons","person","entries"])):Object(s["e"])("",!0),c.entries[0].refs.P?(Object(s["t"])(),Object(s["d"])(l,{key:3,persons:o.people,person:o.person,entries:c.entries,sectionId:"P",title:"Prorockie"},null,8,["persons","person","entries"])):Object(s["e"])("",!0),Object(s["j"])(l,{persons:o.people,person:o.person,entries:c.entries,sectionId:"N",title:"Pozaewangeliczne"},null,8,["persons","person","entries"]),Object(s["j"])(l,{persons:o.people,person:o.person,entries:c.entries,sectionId:"G",title:"Ewangelie"},null,8,["persons","person","entries"]),c.entries[0].refs.d?(Object(s["t"])(),Object(s["d"])(l,{key:4,persons:o.people,person:0,entries:c.entries,sectionId:"d",title:"Psalmy",note:"Odniesienia do Psalmów. Pomocne przy doborze pieśni."},null,8,["persons","entries"])):Object(s["e"])("",!0)])])])):Object(s["e"])("",!0)}var lt={name:"EntryPage",components:{PeopleDropdown:Ee,PersonDropdown:Fe,VerseList:qe},props:{json:{type:Object,requred:!0},slug:{type:String,requred:!0},people:Number,person:Number,names:Array},methods:{openDoropdowns(){this.people?void 0===this.person&&(console.log("person is not set"),setTimeout(()=>{this.$refs.personComponent.open()},300)):(console.log("people is not set"),setTimeout(()=>{this.$refs.peopleComponent.open()},300))},getEntry(e){return this.json?this.json.entries.find(t=>t.slug===e):{title:"...",slug:this.slug,refs:{HD:[],P:[],N:[],G:[],d:[]}}}},computed:{subject(){if(this.json){console.log("slug=",this.slug);const e=this.json.subjects.find(e=>e.s===this.slug);return console.log("found=",e),e}return console.log("no json"),{t:"...",s:this.slug,e:[]}},entries(){return this.subject.e.map(e=>this.getEntry(e))}},updated(){console.log("entry view updated"),this.openDoropdowns()}};o("2ab1");const pt=h()(lt,[["render",it],["__scopeId","data-v-3ab307ad"]]);var dt=pt;function bt(e,t){return t?{[e]:parseInt(t,10)}:{}}const ut=Object(n["a"])({history:Object(n["b"])(),routes:[{path:"/",name:"home",component:Z},{path:"/info",name:"info",component:ee},{path:"/haslo/:slug/:people?/:person?",name:"entry",component:Ye,props:e=>({slug:e.params.slug||"",...bt("people",e.params.people),...bt("person",e.params.person)})},{path:"/temat/:slug/:people?/:person?",name:"subject",component:dt,props:e=>({slug:e.params.slug||"",...bt("people",e.params.people),...bt("person",e.params.person)})}]});ut.beforeEach((e,t,o)=>{console.log("Global Before Each: Navigating from",t.fullPath,"to",e.fullPath),o()}),ut.afterEach((e,t)=>{console.log("Global After Each: Navigated from",t.fullPath,"to",e.fullPath)});const jt=Object(s["c"])(D);jt.config.productionTip=!1,jt.use(ut),jt.use(r["a"],{config:{id:"G-MCBJLFP84W"}},ut),jt.mount("#app")},"5b5c":function(e,t,o){},"6d4d":function(e,t,o){"use strict";o("f3aa")},7380:function(e,t,o){"use strict";o("39f8")},7632:function(e,t,o){},"78e1":function(e,t,o){"use strict";o("7632")},"8a0f":function(e,t,o){"use strict";o("e8e9")},"8bb2":function(e,t,o){"use strict";o("5b5c")},c6b5:function(e,t,o){},e8e9:function(e,t,o){},f3aa:function(e,t,o){},f797:function(e,t,o){}});
//# sourceMappingURL=app.8ae3e944.js.map