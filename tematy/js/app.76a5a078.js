(function(e){function t(t){for(var n,r,a=t[0],i=t[1],l=t[2],d=0,u=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);b&&b(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,a=1;a<s.length;a++){var i=s[a];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},c={app:0},o=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var b=i;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"18a9":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("7a23");const c={class:"container"};function o(e,t,s,o,r,a){const i=Object(n["m"])("nav-bar"),l=Object(n["m"])("HomePage");return Object(n["i"])(),Object(n["c"])(n["a"],null,[Object(n["g"])(i,{onHome:a.home,onPersonsChanged:a.personsChanged},null,8,["onHome","onPersonsChanged"]),Object(n["d"])("div",c,[Object(n["g"])(l,{ref:"home"},null,512)])],64)}const r={key:0},a={key:1};function i(e,t,s,c,o,i){const l=Object(n["m"])("SubjectView"),b=Object(n["m"])("SubjectList");return o.subject&&o.subject.part&&o.subject.code?(Object(n["i"])(),Object(n["c"])("div",r,[Object(n["g"])(l,{subject:i.getSubject(o.subject.part,o.subject.code),title:o.subject.code,persons:o.persons,person:0},null,8,["subject","title","persons"])])):(Object(n["i"])(),Object(n["c"])("div",a,[Object(n["g"])(b,{name:"Prekatechument",part:"prekat",subjects:i.getSubjects("prekat"),onChangeSubject:i.changeSubject},null,8,["subjects","onChangeSubject"]),Object(n["g"])(b,{name:"Pozostałe",part:"reszta",subjects:i.getSubjects("reszta"),onChangeSubject:i.changeSubject},null,8,["subjects","onChangeSubject"])]))}const l={class:"card my-3"},b={class:"card-body"},d={class:"subject-list"},u=["onClick","verse"];function p(e,t,s,c,o,r){return Object(n["i"])(),Object(n["c"])("div",l,[Object(n["d"])("div",b,[Object(n["d"])("h5",null,"Lista tematów: "+Object(n["n"])(s.name),1),Object(n["d"])("ol",d,[(Object(n["i"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(s.subjects,t=>(Object(n["i"])(),Object(n["c"])("li",{key:t},[Object(n["d"])("a",{href:"#",onClick:n=>{e.$emit("changeSubject",s.part,t)},verse:t},Object(n["n"])(t),9,u)]))),128))])])])}var j={name:"VerseList",components:{},emits:["changeSubject"],props:{name:String,part:String,subjects:Array}},O=(s("a03a"),s("d959")),h=s.n(O);const v=h()(j,[["render",p],["__scopeId","data-v-775fefc2"]]);var g=v;const f={class:"card my-3"},m={class:"card-body"},y={class:"card-title clearfix"},S={class:"float-start"},k={class:"float-end"},w=["selected","value"],P={class:"accordion",id:"versesAccordion"};function C(e,t,s,c,o,r){const a=Object(n["m"])("VerseList");return Object(n["i"])(),Object(n["c"])("div",f,[Object(n["d"])("div",m,[Object(n["d"])("h5",y,[Object(n["d"])("span",S,Object(n["n"])(s.title),1),Object(n["d"])("span",k,[Object(n["d"])("select",{class:"dropdown-toggle",onChange:t[0]||(t[0]=(...e)=>r.changePerson&&r.changePerson(...e))},[(Object(n["i"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(r.options(),(e,t)=>(Object(n["i"])(),Object(n["c"])("option",{key:t,selected:o.selectedPerson===t,value:t},Object(n["n"])(e),9,w))),128))],32)])]),Object(n["d"])("div",P,[Object(n["g"])(a,{persons:s.persons,person:o.selectedPerson,verses:s.subject.hd,sectionid:"hd",selected:!0,title:"Historyczne"},null,8,["persons","person","verses"]),Object(n["g"])(a,{persons:s.persons,person:o.selectedPerson,verses:s.subject.p,sectionid:"p",title:"Prorockie"},null,8,["persons","person","verses"]),Object(n["g"])(a,{persons:s.persons,person:o.selectedPerson,verses:s.subject.n,sectionid:"n",title:"Pozaewangeliczne"},null,8,["persons","person","verses"]),Object(n["g"])(a,{persons:s.persons,person:o.selectedPerson,verses:s.subject.e,sectionid:"e",title:"Ewangelie"},null,8,["persons","person","verses"])])])])}const x={class:"accordion-item"},V={class:"accordion-header"},_=["data-bs-target","aria-controls"],I=["id"],$={class:"accordion-body"},L={class:"verse-list"};function z(e,t,s,c,o,r){const a=Object(n["m"])("VerseLink");return Object(n["i"])(),Object(n["c"])("div",x,[Object(n["d"])("h2",V,[Object(n["d"])("button",{class:Object(n["h"])("accordion-button "+(s.selected?"":"collapsed")),type:"button","data-bs-toggle":"collapse","data-bs-target":"#verses-"+s.sectionid,"aria-expanded":"false","aria-controls":"verses-"+s.sectionid},Object(n["n"])(s.title)+" ("+Object(n["n"])(s.verses?s.verses.length:"...")+") ",11,_)]),Object(n["d"])("div",{id:"verses-"+s.sectionid,class:Object(n["h"])("accordion-collapse collapse "+(s.selected?"show":"")),"data-bs-parent":"#versesAccordion"},[Object(n["d"])("div",$,[Object(n["d"])("ol",L,[(Object(n["i"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(s.verses,(e,t)=>(Object(n["i"])(),Object(n["c"])("li",{key:e,class:Object(n["h"])(r.hideVerse(t)?"visually-hidden":"")},[Object(n["g"])(a,{verse:e},null,8,["verse"])],2))),128))])])],10,I)])}const N=["href"];function A(e,t,s,c,o,r){const a=Object(n["m"])("multi-icon");return Object(n["i"])(),Object(n["c"])("span",null,[Object(n["g"])(a,{selected:0,options:["bi-circle","bi-dash-circle-dotted","bi-patch-question","bi-check-circle-fill"]}),Object(n["d"])("a",{class:"verse",href:r.link(),target:"_blank"},Object(n["n"])(s.verse),9,N)])}function H(e,t,s,c,o,r){return Object(n["i"])(),Object(n["c"])("button",{type:"button",class:"my-custom-button",onClick:t[0]||(t[0]=(...e)=>r.toggleState&&r.toggleState(...e))},[Object(n["d"])("i",{class:Object(n["h"])("bi "+s.options[o.selectedIndex])},null,2)])}var M={name:"MultiIcon",props:{options:{type:Array,required:!0},selected:{type:Number,required:!1,default:0}},data(){return{selectedIndex:this.selected%this.options.length}},methods:{toggleState(){this.selectedIndex=(this.selectedIndex+1)%this.options.length,this.state=this.options[this.selectedIndex]}}};s("8a0f");const B=h()(M,[["render",H],["__scopeId","data-v-6f35d9c2"]]);var q=B,T={components:{MultiIcon:q},name:"VerseLink",props:{verse:String},methods:{fixBook(e){return/^\d/.test(e)?`${e[0]} ${e.slice(1)}`:e},parseVerse(){const e=this.verse.match(/([^ ]+) (\d+)(?:,(\d+))?/);return e?{book:this.fixBook(e[1]),chapter:parseInt(e[2],10),firstVerse:e[3]?parseInt(e[3],10):0}:null},link(){const e="https://www.biblia.pl/otworz.php?skrot=",{book:t,chapter:s,firstVerse:n}=this.parseVerse(this.verse),c=`${t} ${s}${0!==n?","+n:""}`,o=encodeURIComponent(c);return`${e}${o}`}}};s("820d");const J=h()(T,[["render",A],["__scopeId","data-v-ec4227f6"]]);var E=J,R={name:"VerseList",components:{VerseLink:E},props:{verses:Array,sectionid:String,title:String,selected:Boolean,persons:Number,person:Number},methods:{hideVerse(e){const t=+this.person,s=+this.persons;return t>0&&(e-t+1)%s!==0}}};const U=h()(R,[["render",z]]);var W=U,D={name:"SubjectView",components:{VerseList:W},props:{subject:Object,title:String,persons:Number,person:Number},data(){return{selectedPerson:+this.person}},methods:{changePerson(e){this.selectedPerson=+e.target.value},options(){return["Wszyscy","Osoba 1","Osoba 2","Osoba 3","Osoba 4","Osoba 5","Osoba 6","Osoba 7","Osoba 8"].slice(0,this.persons+1)}}};s("aeb6");const F=h()(D,[["render",C],["__scopeId","data-v-04ceb9d9"]]);var G=F,K={components:{SubjectList:g,SubjectView:G},name:"HomePage",methods:{async loadSubjects(){const e=await fetch("tematy.json"),t=await e.json();this.tematy=t,console.log(t)},getSubjects(e){return null!==this.tematy?Object.keys(this.tematy[e]):[]},getSubject(e,t){return null!==this.tematy?this.tematy[e][t]:{hd:[],h:[],e:[],n:[]}},clear(){this.changeSubject(null,null)},changeSubject(e,t){console.log(e,t),this.subject={part:e,code:t}}},async mounted(){await this.loadSubjects()},data(){return{tematy:null,persons:5,subject:{part:null,code:null}}}};const Q=h()(K,[["render",i]]);var X=Q;const Y={class:"navbar navbar-expand-lg bg-body-tertiary"},Z={class:"container-fluid"},ee=Object(n["d"])("img",{src:"logo.png",alt:"",width:"30",class:"d-inline-block align-text-top"},null,-1),te={class:"navbar-nav ms-auto"},se={class:"nav-item dropdown"},ne=Object(n["e"])('<option value="1">1 Osoba</option><option value="2">2 Osoby</option><option value="3">3 Osoby</option><option value="4">4 Osoby</option><option value="5" selected>5 Osób</option><option value="6">6 Osób</option><option value="7">7 Osób</option><option value="8">8 Osób</option>',8),ce=[ne];function oe(e,t,s,c,o,r){return Object(n["i"])(),Object(n["c"])("nav",Y,[Object(n["d"])("div",Z,[Object(n["d"])("a",{class:"navbar-brand",href:"#",onClick:t[0]||(t[0]=t=>e.$emit("home"))},[ee,Object(n["f"])(" Tematy Liturgii Słowa ")]),Object(n["d"])("ul",te,[Object(n["d"])("li",se,[Object(n["d"])("select",{class:"nav-link dropdown-toggle",onChange:t[1]||(t[1]=(...e)=>r.personsChanged&&r.personsChanged(...e))},ce,32)])])])])}var re={name:"NavBar",components:{},emits:["home","personsChanged"],props:{subject:Object},methods:{personsChanged(e){this.$emit("personsChanged",+e.target.value)}}};const ae=h()(re,[["render",oe]]);var ie=ae,le={name:"App",components:{HomePage:X,NavBar:ie},methods:{home(){this.$refs.home.clear()},personsChanged(e){this.$refs.home.persons=e}}};s("de94");const be=h()(le,[["render",o]]);var de=be;Object(n["b"])(de).mount("#app")},"5b9b":function(e,t,s){},"820d":function(e,t,s){"use strict";s("18a9")},"8a0f":function(e,t,s){"use strict";s("5b9b")},a03a:function(e,t,s){"use strict";s("d06d")},aeb6:function(e,t,s){"use strict";s("e4f0")},d06d:function(e,t,s){},de94:function(e,t,s){"use strict";s("f29f")},e4f0:function(e,t,s){},f29f:function(e,t,s){}});
//# sourceMappingURL=app.76a5a078.js.map