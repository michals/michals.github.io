(function(e){function t(t){for(var n,c,l=t[0],i=t[1],a=t[2],b=0,d=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,a||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,l=1;l<s.length;l++){var i=s[l];0!==o[i]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},o={app:0},r=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var p=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"142a":function(e,t,s){"use strict";s("c6b5")},"2ab1":function(e,t,s){"use strict";s("f797")},"390a":function(e,t,s){},"39f8":function(e,t,s){},"4a47":function(e,t,s){"use strict";s("390a")},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("7a23"),o=s("6605"),r=s("a584");const c={class:"container"};function l(e,t,s,o,r,l){const i=Object(n["z"])("nav-bar"),a=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(i,{json:r.json,location:e.$route},null,8,["json","location"]),Object(n["g"])("div",c,[Object(n["i"])(a,{json:r.json},null,8,["json"])])],64)}s("88a7"),s("271a"),s("5494");const i={class:"navbar navbar-expand-lg bg-body-tertiary"},a={class:"container-fluid"},p=Object(n["g"])("img",{src:"logo.png",alt:"",width:"30",class:"d-inline-block align-text-top"},null,-1),b={class:"dropdown dropstart d-inline-block"},d=Object(n["g"])("button",{class:"btn btn-light btn-sm dropdown-toggle",type:"button",id:"cfg","data-bs-toggle":"dropdown","aria-expanded":"false"},[Object(n["g"])("i",{class:"bi bi-gear"})],-1),u={class:"dropdown-menu","aria-labelledby":"cfg"},j=Object(n["g"])("li",null,[Object(n["g"])("h6",{class:"dropdown-header"},"Konfiguracje:")],-1),O=["href"];function g(e,t,s,o,r,c){const l=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("nav",i,[Object(n["g"])("div",a,[Object(n["i"])(l,{to:"/",class:"navbar-brand"},{default:Object(n["F"])(()=>[p,Object(n["h"])(" Tematy Liturgii Słowa ")]),_:1}),Object(n["g"])("div",b,[d,Object(n["g"])("ul",u,[j,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(c.configs(),e=>(Object(n["s"])(),Object(n["f"])("li",{key:e.url},[Object(n["g"])("a",{href:e.url,class:"dropdown-item"},Object(n["C"])(e.text),9,O)]))),128))])])])])}var f={name:"NavBar",props:{json:{type:Object,requred:!0},location:{type:String,requred:!0}},methods:{configs(){return console.log("XXX",this.location),[{db:"ddhp-lim77-merged",text:"DDH, bez ogromnych, grupowane"},{db:"ddhp-nolim-merged",text:"DDH, wszystkie, grupowane"},{db:"ddhp-lim77-nomerge",text:"DDH, bez ogromnych, osobno"},{db:"ddhp-nolim-nomerge",text:"DDH, wszystkie, osobno"}].map(e=>{const t=new URL(window.location);return t.searchParams.set("use",e.db),{url:t.toString(),text:e.text}})}}},h=s("6b0d"),y=s.n(h);const m=y()(f,[["render",g]]);var v=m,w={name:"App",components:{NavBar:v},data(){return{json:null}},methods:{async loadJSON(){const e=new URLSearchParams(window.location.search).get("use")||"ddhp-lim77-merged";let t;if(console.log("DB:",e),window.DecompressionStream){console.log("Using DecompressionStream");const s=new window.DecompressionStream("gzip"),n=await fetch(`subjects-${e}.json.gz`),o=await n.blob(),r=o.stream().pipeThrough(s);t=new window.Response(r)}else console.log("No support for DecompressionStream"),t=await fetch(`subjects-${e}.json`);this.json=await t.json(),console.log(this.json)}},async mounted(){await this.loadJSON()}};const k=y()(w,[["render",l]]);var P=k;const z=e=>(Object(n["v"])("data-v-5a353792"),e=e(),Object(n["t"])(),e),D={class:"accordion my-3",id:"parts"},I={class:"accordion-item"},x=z(()=>Object(n["g"])("h2",{class:"accordion-header",id:"subjectHead"},[Object(n["g"])("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#subject","aria-expanded":"true","aria-controls":"subject"}," Tematy dla prekatechumenatu ")],-1)),C={id:"subject",class:"accordion-collapse collapse show","aria-labelledby":"subjectHead","data-bs-parent":"#parts"},S={class:"accordion-body"},_={class:"accordion-item"},H=z(()=>Object(n["g"])("h2",{class:"accordion-header",id:"entryHead"},[Object(n["g"])("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#entry","aria-expanded":"true","aria-controls":"entry"}," Lista wszystkich haseł ")],-1)),N={id:"entry",class:"accordion-collapse collapse","aria-labelledby":"entryHead","data-bs-parent":"#parts"},$={class:"accordion-body"};function L(e,t,s,o,r,c){const l=Object(n["z"])("SubjectList"),i=Object(n["z"])("EntryList");return Object(n["s"])(),Object(n["f"])("div",D,[Object(n["g"])("div",I,[x,Object(n["g"])("div",C,[Object(n["g"])("div",S,[Object(n["i"])(l,{subjects:c.subjects},null,8,["subjects"])])])]),Object(n["g"])("div",_,[H,Object(n["g"])("div",N,[Object(n["g"])("div",$,[Object(n["i"])(i,{entries:c.entries},null,8,["entries"])])])])])}const V={class:"subject-list"};function A(e,t,s,o,r,c){const l=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("ol",V,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(s.entries,e=>(Object(n["s"])(),Object(n["f"])("li",{key:e},[Object(n["i"])(l,{to:{name:"entry",params:{slug:e.slug}}},{default:Object(n["F"])(()=>[Object(n["h"])(Object(n["C"])(e.title),1)]),_:2},1032,["to"])]))),128))])}var E={name:"EntryList",components:{},props:{entries:Array}};s("4a47");const q=y()(E,[["render",A],["__scopeId","data-v-4b74e406"]]);var B=q;const T={class:"subject-list"};function G(e,t,s,o,r,c){const l=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("ol",T,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(s.subjects,e=>(Object(n["s"])(),Object(n["f"])("li",{key:e},[Object(n["i"])(l,{to:{name:"subject",params:{slug:e.s}}},{default:Object(n["F"])(()=>[Object(n["h"])(Object(n["C"])(e.t),1)]),_:2},1032,["to"])]))),128))])}var M={name:"SubjectList",components:{},props:{subjects:Array}};s("6d4d");const F=y()(M,[["render",G],["__scopeId","data-v-2385375e"]]);var J=F,R={name:"HomePage",components:{EntryList:B,SubjectList:J},props:{json:{type:Object,requred:!0}},computed:{subjects(){return this.json?this.json.subjects:[]},entries(){return this.json?this.json.entries:[]}}};s("8bb2");const U=y()(R,[["render",L],["__scopeId","data-v-5a353792"]]);var W=U;const X=e=>(Object(n["v"])("data-v-0879a669"),e=e(),Object(n["t"])(),e),K={class:"card my-3"},Q={class:"card-body"},Y={class:"card-title clearfix"},Z={class:"float-start"},ee={class:"float-end"},te=X(()=>Object(n["g"])("span",null," z",-1)),se={class:"accordion",id:"versesAccordion"};function ne(e,t,s,o,r,c){const l=Object(n["z"])("person-dropdown"),i=Object(n["z"])("people-dropdown"),a=Object(n["z"])("VerseList");return Object(n["s"])(),Object(n["f"])("div",K,[Object(n["g"])("div",Q,[Object(n["g"])("h5",Y,[Object(n["g"])("span",Z,[Object(n["g"])("strong",null,Object(n["C"])(c.entry.title),1)]),Object(n["g"])("span",ee,[Object(n["i"])(l,{slug:s.slug,people:s.people,person:s.person,ref:"personComponent"},null,8,["slug","people","person"]),te,Object(n["i"])(i,{slug:s.slug,people:s.people,ref:"peopleComponent"},null,8,["slug","people"])])]),Object(n["g"])("div",se,[c.entry.refs.HD?(Object(n["s"])(),Object(n["d"])(a,{key:0,persons:s.people,person:s.person,selected:!0,entries:[c.entry],sectionId:"HD",title:"Historyczne + Dydaktyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entry.refs.H?(Object(n["s"])(),Object(n["d"])(a,{key:1,persons:s.people,person:s.person,selected:!0,entries:[c.entry],sectionId:"H",title:"Historyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entry.refs.PD?(Object(n["s"])(),Object(n["d"])(a,{key:2,persons:s.people,person:s.person,entries:[c.entry],sectionId:"PD",title:"Prorockie + Dydaktyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entry.refs.P?(Object(n["s"])(),Object(n["d"])(a,{key:3,persons:s.people,person:s.person,entries:[c.entry],sectionId:"P",title:"Prorockie"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),Object(n["i"])(a,{persons:s.people,person:s.person,entries:[c.entry],sectionId:"N",title:"Pozaewangeliczne"},null,8,["persons","person","entries"]),Object(n["i"])(a,{persons:s.people,person:s.person,entries:[c.entry],sectionId:"G",title:"Ewangelie"},null,8,["persons","person","entries"]),c.entry.refs.d?(Object(n["s"])(),Object(n["d"])(a,{key:4,persons:s.people,person:0,entries:[c.entry],sectionId:"d",title:"Psalmy",note:"Odniesienia do Psalmów. Pomocne przy doborze pieśni."},null,8,["persons","entries"])):Object(n["e"])("",!0)])])])}const oe={class:"accordion-item"},re={class:"accordion-header"},ce=["data-bs-target","aria-controls"],le=["id"],ie={class:"accordion-body"},ae={class:"mb-2"},pe={key:0},be={class:"verse-list"};function de(e,t,s,o,r,c){const l=Object(n["z"])("VerseLink");return Object(n["s"])(),Object(n["f"])("div",oe,[Object(n["g"])("h2",re,[Object(n["g"])("button",{class:Object(n["o"])("accordion-button "+(s.selected?"":"collapsed")),type:"button","data-bs-toggle":"collapse","data-bs-target":"#verses-"+s.sectionId,"aria-expanded":"false","aria-controls":"verses-"+s.sectionId},Object(n["C"])(s.title)+" ("+Object(n["C"])(c.titleCounters)+") ",11,ce)]),Object(n["g"])("div",{id:"verses-"+s.sectionId,class:Object(n["o"])("accordion-collapse collapse "+(s.selected?"show":"")),"data-bs-parent":"#versesAccordion"},[Object(n["g"])("div",ie,[Object(n["g"])("div",ae,Object(n["C"])(s.note),1),(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(s.entries,e=>(Object(n["s"])(),Object(n["f"])("div",{key:e},[c.multiEntry?(Object(n["s"])(),Object(n["f"])("div",pe,[Object(n["h"])(" Wersety dla hasła "),Object(n["g"])("strong",null,Object(n["C"])(e.title),1),Object(n["h"])(" ("+Object(n["C"])(c.titleCounter(e))+"): ",1)])):Object(n["e"])("",!0),Object(n["g"])("ol",be,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(c.verses(e),(e,t)=>(Object(n["s"])(),Object(n["f"])("li",{key:e,class:Object(n["o"])(c.hideVerse(t)?"visually-hidden":"")},[Object(n["i"])(l,{verse:e,noicon:"d"===s.sectionId},null,8,["verse","noicon"])],2))),128))])]))),128))])],10,le)])}s("13d5"),s("5b81");const ue=["href"];function je(e,t,s,o,r,c){const l=Object(n["z"])("multi-icon");return Object(n["s"])(),Object(n["f"])("span",null,[s.noicon?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["d"])(l,{key:0,selected:0,options:["bi-circle","bi-dash-circle-dotted","bi-check-circle-fill"]})),Object(n["g"])("a",{class:"verse",href:c.link(),target:"_blank"},Object(n["C"])(s.verse.replaceAll("."," .")),9,ue)])}function Oe(e,t,s,o,r,c){return Object(n["s"])(),Object(n["f"])("button",{type:"button",class:"my-custom-button",onClick:t[0]||(t[0]=(...e)=>c.toggleState&&c.toggleState(...e))},[Object(n["g"])("i",{class:Object(n["o"])("bi "+s.options[r.selectedIndex])},null,2)])}var ge={name:"MultiIcon",props:{options:{type:Array,required:!0},selected:{type:Number,required:!1,default:0}},data(){return{selectedIndex:this.selected%this.options.length}},methods:{toggleState(){this.selectedIndex=(this.selectedIndex+1)%this.options.length,this.state=this.options[this.selectedIndex]}}};s("8a0f");const fe=y()(ge,[["render",Oe],["__scopeId","data-v-6f35d9c2"]]);var he=fe,ye={components:{MultiIcon:he},name:"VerseLink",props:{verse:String,noicon:Boolean},methods:{fixBook(e){return/^\d/.test(e)?`${e[0]} ${e.slice(1)}`:e},parseVerse(){const e=this.verse.match(/([^ ]+) (\d+)(?:,(\d+))?/);return e?{book:this.fixBook(e[1]),chapter:parseInt(e[2],10),firstVerse:e[3]?parseInt(e[3],10):0}:null},link(){const e="https://www.biblia.pl/otworz.php?skrot=",{book:t,chapter:s,firstVerse:n}=this.parseVerse(this.verse),o=`${t} ${s}${0!==n?","+n:""}`,r=encodeURIComponent(o);return`${e}${r}`}}};s("78e1");const me=y()(ye,[["render",je],["__scopeId","data-v-597c36bd"]]);var ve=me,we={name:"VerseList",components:{VerseLink:ve},props:{entries:Array,sectionId:String,title:String,note:String,selected:Boolean,persons:Number,person:Number},methods:{hideVerse(e){const t=+this.person,s=+this.persons;return t>0&&(e-t+1)%s!==0},verses(e){return e.refs[this.sectionId]},countVisible(e){return this.persons&&this.person&&this.verses?this.verses(e).reduce((e,t,s)=>e+!this.hideVerse(s),0):0},titleCounter(e){const t=this.person?this.countVisible(e)+" z ":"",s=this.verses(e)?""+this.verses(e).length:"";return t+s}},computed:{titleCounters(){return this.entries.map(this.titleCounter).join(" oraz ")},multiEntry(){return this.entries&&this.entries.length>1}}};s("142a");const ke=y()(we,[["render",de],["__scopeId","data-v-189ecef6"]]);var Pe=ke;const ze={class:"dropdown dropstart d-inline-block mx-2"},De={class:"btn btn-secondary btn-sm dropdown-toggle",type:"button",id:"people","data-bs-toggle":"dropdown","aria-expanded":"false",ref:"peopleButton"},Ie=Object(n["g"])("i",{class:"bi bi-people-fill"},null,-1),xe={class:"dropdown-menu","aria-labelledby":"people"},Ce=Object(n["g"])("li",null,[Object(n["g"])("h6",{class:"dropdown-header"},"Osób na spotkaniu:")],-1);function Se(e,t,s,o,r,c){const l=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",ze,[Object(n["g"])("button",De,[Object(n["h"])(Object(n["C"])(s.people)+" ",1),Ie],512),Object(n["g"])("ul",xe,[Ce,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(Array(c.maxPeople),(t,o)=>(Object(n["s"])(),Object(n["f"])("li",{key:o+1},[Object(n["i"])(l,{to:{name:e.$route.name,params:{slug:s.slug,people:o+1},query:{}},class:Object(n["o"])({"dropdown-item":!0,active:s.people===o+1})},{default:Object(n["F"])(()=>[Object(n["h"])(Object(n["C"])(o+1)+" ",1),(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(Array(o+1),(e,t)=>(Object(n["s"])(),Object(n["f"])("i",{key:t,class:"bi bi-person-fill"}))),128))]),_:2},1032,["to","class"])]))),128))])])}var _e={name:"PeopleDropdown",props:{slug:{type:String,requred:!0},people:Number},computed:{maxPeople(){return 8}},methods:{open(){new window.bootstrap.Dropdown(this.$refs.peopleButton).show()}}};const He=y()(_e,[["render",Se]]);var Ne=He;const $e={class:"dropdown dropstart d-inline-block"},Le=["disabled"],Ve={key:0,class:"bi bi-asterisk"},Ae={key:1},Ee=Object(n["g"])("i",{class:"bi bi-person-fill"},null,-1),qe={class:"dropdown-menu","aria-labelledby":"person"},Be=Object(n["g"])("li",null,[Object(n["g"])("h6",{class:"dropdown-header"},"Pokaż wersety dla:")],-1);function Te(e,t,s,o,r,c){const l=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",$e,[Object(n["g"])("button",{class:"btn btn-secondary btn-sm dropdown-toggle",type:"button",id:"person",disabled:!s.people,"data-bs-toggle":"dropdown","aria-expanded":"false",ref:"personButton"},[s.person?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("i",Ve)),s.person?(Object(n["s"])(),Object(n["f"])("span",Ae,[Object(n["h"])(Object(n["C"])(s.person),1),Ee])):Object(n["e"])("",!0)],8,Le),Object(n["g"])("ul",qe,[Be,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(c.personOptions,(t,o)=>(Object(n["s"])(),Object(n["f"])("li",{key:o},[Object(n["i"])(l,{to:{name:e.$route.name,params:{slug:s.slug,people:s.people,person:o},query:{}},class:Object(n["o"])({"dropdown-item":!0,active:s.person===o})},{default:Object(n["F"])(()=>[Object(n["h"])(Object(n["C"])(t),1)]),_:2},1032,["to","class"])]))),128))])])}var Ge={name:"PersonDropdown",props:{slug:{type:String,requred:!0},people:{type:Number,requred:!0},person:Number},methods:{open(){this.people&&new window.bootstrap.Dropdown(this.$refs.personButton).show()}},computed:{personOptions(){const e=Array(8).fill("Osoba");return["Wszystkich"].concat(e.map((e,t)=>`${t+1}. ${e}`)).slice(0,this.people+1)}}};const Me=y()(Ge,[["render",Te]]);var Fe=Me,Je={name:"EntryPage",components:{PeopleDropdown:Ne,PersonDropdown:Fe,VerseList:Pe},props:{json:{type:Object,requred:!0},slug:{type:String,requred:!0},people:Number,person:Number,names:Array},methods:{openDoropdowns(){this.people?void 0===this.person&&(console.log("person is not set"),setTimeout(()=>{this.$refs.personComponent.open()},300)):(console.log("people is not set"),setTimeout(()=>{this.$refs.peopleComponent.open()},300))}},computed:{entry(){return this.json?this.json.entries.find(e=>e.slug===this.slug):{title:"...",slug:this.slug,refs:{HD:[],P:[],N:[],G:[],d:[]}}}},updated(){console.log("entry view updated"),this.openDoropdowns()}};s("7380");const Re=y()(Je,[["render",ne],["__scopeId","data-v-0879a669"]]);var Ue=Re;const We=e=>(Object(n["v"])("data-v-3ab307ad"),e=e(),Object(n["t"])(),e),Xe={key:0,class:"card my-3"},Ke={class:"card-body"},Qe={class:"card-title clearfix"},Ye={class:"float-start"},Ze={class:"float-end"},et=We(()=>Object(n["g"])("span",null," z",-1)),tt={class:"accordion",id:"versesAccordion"};function st(e,t,s,o,r,c){const l=Object(n["z"])("person-dropdown"),i=Object(n["z"])("people-dropdown"),a=Object(n["z"])("VerseList");return s.json?(Object(n["s"])(),Object(n["f"])("div",Xe,[Object(n["g"])("div",Ke,[Object(n["g"])("h5",Qe,[Object(n["g"])("span",Ye,[Object(n["g"])("strong",null,Object(n["C"])(c.subject.t),1)]),Object(n["g"])("span",Ze,[Object(n["i"])(l,{slug:s.slug,people:s.people,person:s.person,ref:"personComponent"},null,8,["slug","people","person"]),et,Object(n["i"])(i,{slug:s.slug,people:s.people,ref:"peopleComponent"},null,8,["slug","people"])])]),Object(n["g"])("div",tt,[c.entries[0].refs.HD?(Object(n["s"])(),Object(n["d"])(a,{key:0,persons:s.people,person:s.person,selected:!0,entries:c.entries,sectionId:"HD",title:"Historyczne + Dydaktyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entries[0].refs.H?(Object(n["s"])(),Object(n["d"])(a,{key:1,persons:s.people,person:s.person,selected:!0,entries:c.entries,sectionId:"H",title:"Historyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entries[0].refs.PD?(Object(n["s"])(),Object(n["d"])(a,{key:2,persons:s.people,person:s.person,entries:c.entries,sectionId:"PD",title:"Prorockie + Dydaktyczne"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),c.entries[0].refs.P?(Object(n["s"])(),Object(n["d"])(a,{key:3,persons:s.people,person:s.person,entries:c.entries,sectionId:"P",title:"Prorockie"},null,8,["persons","person","entries"])):Object(n["e"])("",!0),Object(n["i"])(a,{persons:s.people,person:s.person,entries:c.entries,sectionId:"N",title:"Pozaewangeliczne"},null,8,["persons","person","entries"]),Object(n["i"])(a,{persons:s.people,person:s.person,entries:c.entries,sectionId:"G",title:"Ewangelie"},null,8,["persons","person","entries"]),c.entries[0].refs.d?(Object(n["s"])(),Object(n["d"])(a,{key:4,persons:s.people,person:0,entries:c.entries,sectionId:"d",title:"Psalmy",note:"Odniesienia do Psalmów. Pomocne przy doborze pieśni."},null,8,["persons","entries"])):Object(n["e"])("",!0)])])])):Object(n["e"])("",!0)}var nt={name:"EntryPage",components:{PeopleDropdown:Ne,PersonDropdown:Fe,VerseList:Pe},props:{json:{type:Object,requred:!0},slug:{type:String,requred:!0},people:Number,person:Number,names:Array},methods:{openDoropdowns(){this.people?void 0===this.person&&(console.log("person is not set"),setTimeout(()=>{this.$refs.personComponent.open()},300)):(console.log("people is not set"),setTimeout(()=>{this.$refs.peopleComponent.open()},300))},getEntry(e){return this.json?this.json.entries.find(t=>t.slug===e):{title:"...",slug:this.slug,refs:{HD:[],P:[],N:[],G:[],d:[]}}}},computed:{subject(){if(this.json){console.log("slug=",this.slug);const e=this.json.subjects.find(e=>e.s===this.slug);return console.log("found=",e),e}return console.log("no json"),{t:"...",s:this.slug,e:[]}},entries(){return this.subject.e.map(e=>this.getEntry(e))}},updated(){console.log("entry view updated"),this.openDoropdowns()}};s("2ab1");const ot=y()(nt,[["render",st],["__scopeId","data-v-3ab307ad"]]);var rt=ot;function ct(e,t){return t?{[e]:parseInt(t,10)}:{}}const lt=Object(o["a"])({history:Object(o["b"])(),routes:[{path:"/",name:"home",component:W},{path:"/haslo/:slug/:people?/:person?",name:"entry",component:Ue,props:e=>({slug:e.params.slug||"",...ct("people",e.params.people),...ct("person",e.params.person)})},{path:"/temat/:slug/:people?/:person?",name:"subject",component:rt,props:e=>({slug:e.params.slug||"",...ct("people",e.params.people),...ct("person",e.params.person)})}]});lt.beforeEach((e,t,s)=>{console.log("Global Before Each: Navigating from",t.fullPath,"to",e.fullPath),s()}),lt.afterEach((e,t)=>{console.log("Global After Each: Navigated from",t.fullPath,"to",e.fullPath)});const it=Object(n["c"])(P);it.config.productionTip=!1,it.use(lt),it.use(r["a"],{config:{id:"G-MCBJLFP84W"}},lt),it.mount("#app")},"5b5c":function(e,t,s){},"6d4d":function(e,t,s){"use strict";s("f3aa")},7380:function(e,t,s){"use strict";s("39f8")},7632:function(e,t,s){},"78e1":function(e,t,s){"use strict";s("7632")},"8a0f":function(e,t,s){"use strict";s("e8e9")},"8bb2":function(e,t,s){"use strict";s("5b5c")},c6b5:function(e,t,s){},e8e9:function(e,t,s){},f3aa:function(e,t,s){},f797:function(e,t,s){}});
//# sourceMappingURL=app.bc2d5a6a.js.map