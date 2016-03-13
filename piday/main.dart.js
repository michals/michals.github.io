(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
return y.__proto__&&y.__proto__.p===z.prototype.p}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b){"use strict"
function generateAccessor(a9,b0,b1){var g=a9.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var c
if(g.length>1)c=true
else c=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a0=d&3
var a1=d>>2
var a2=f=f.substring(0,e-1)
var a3=f.indexOf(":")
if(a3>0){a2=f.substring(0,a3)
f=f.substring(a3+1)}if(a0){var a4=a0&2?"r":""
var a5=a0&1?"this":"r"
var a6="return "+a5+"."+f
var a7=b1+".prototype.g"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}if(a1){var a4=a1&2?"r,v":"v"
var a5=a1&1?"this":"r"
var a6=a5+"."+f+"=v"
var a7=b1+".prototype.s"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}}return f}function defineClass(a2,a3){var g=[]
var f="function "+a2+"("
var e=""
var d=""
for(var c=0;c<a3.length;c++){if(c!=0)f+=", "
var a0=generateAccessor(a3[c],g,a2)
d+="'"+a0+"',"
var a1="p_"+a0
f+=a1
e+="this."+a0+" = "+a1+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a2+".builtin$cls=\""+a2+"\";\n"
f+="$desc=$collectedClasses."+a2+"[1];\n"
f+=a2+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a2+".name=\""+a2+"\";\n"
f+=a2+"."+"$__fields__"+"=["+d+"];\n"
f+=g.join("")
return f}init.createNewIsolate=function(){return new I()}
init.classIdExtractor=function(c){return c.constructor.name}
init.classFieldsExtractor=function(c){var g=c.constructor.$__fields__
if(!g)return[]
var f=[]
f.length=g.length
for(var e=0;e<g.length;e++)f[e]=c[g[e]]
return f}
init.instanceFromClassId=function(c){return new init.allClasses[c]()}
init.initializeEmptyInstance=function(c,d,e){init.allClasses[c].apply(d,e)
return d}
var z=supportsDirectProtoAccess?function(c,d){var g=c.prototype
g.__proto__=d.prototype
g.constructor=c
g["$is"+c.name]=c
return convertToFastObject(g)}:function(){function tmp(){}return function(a0,a1){tmp.prototype=a1.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a0.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var c=e[d]
g[c]=f[c]}g["$is"+a0.name]=a0
g.constructor=a0
a0.prototype=g
return g}}()
function finishClasses(a4){var g=init.allClasses
a4.combinedConstructorFunction+="return [\n"+a4.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a4.combinedConstructorFunction)(a4.collected)
a4.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.name
var a0=a4.collected[c]
var a1=a0[0]
a0=a0[1]
g[c]=d
a1[c]=d}f=null
var a2=init.finishedClasses
function finishClass(c1){if(a2[c1])return
a2[c1]=true
var a5=a4.pending[c1]
if(a5&&a5.indexOf("+")>0){var a6=a5.split("+")
a5=a6[0]
var a7=a6[1]
finishClass(a7)
var a8=g[a7]
var a9=a8.prototype
var b0=g[c1].prototype
var b1=Object.keys(a9)
for(var b2=0;b2<b1.length;b2++){var b3=b1[b2]
if(!u.call(b0,b3))b0[b3]=a9[b3]}}if(!a5||typeof a5!="string"){var b4=g[c1]
var b5=b4.prototype
b5.constructor=b4
b5.$isc=b4
b5.$deferredAction=function(){}
return}finishClass(a5)
var b6=g[a5]
if(!b6)b6=existingIsolateProperties[a5]
var b4=g[c1]
var b5=z(b4,b6)
if(a9)b5.$deferredAction=mixinDeferredActionHelper(a9,b5)
if(Object.prototype.hasOwnProperty.call(b5,"%")){var b7=b5["%"].split(";")
if(b7[0]){var b8=b7[0].split("|")
for(var b2=0;b2<b8.length;b2++){init.interceptorsByTag[b8[b2]]=b4
init.leafTags[b8[b2]]=true}}if(b7[1]){b8=b7[1].split("|")
if(b7[2]){var b9=b7[2].split("|")
for(var b2=0;b2<b9.length;b2++){var c0=g[b9[b2]]
c0.$nativeSuperclassTag=b8[0]}}for(b2=0;b2<b8.length;b2++){init.interceptorsByTag[b8[b2]]=b4
init.leafTags[b8[b2]]=false}}b5.$deferredAction()}if(b5.$isd)b5.$deferredAction()}var a3=Object.keys(a4.pending)
for(var e=0;e<a3.length;e++)finishClass(a3[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.charCodeAt(0)
var a0
if(d!=="^"&&d!=="$reflectable"&&c!==43&&c!==42&&(a0=g[d])!=null&&a0.constructor===Array&&d!=="<>")addStubs(g,a0,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(c,d){var g
if(d.hasOwnProperty("$deferredAction"))g=d.$deferredAction
return function foo(){var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}c.$deferredAction()
f.$deferredAction()}}function processClassData(b1,b2,b3){b2=convertToSlowObject(b2)
var g
var f=Object.keys(b2)
var e=false
var d=supportsDirectProtoAccess&&b1!="c"
for(var c=0;c<f.length;c++){var a0=f[c]
var a1=a0.charCodeAt(0)
if(a0==="k"){processStatics(init.statics[b1]=b2.k,b3)
delete b2.k}else if(a1===43){w[g]=a0.substring(1)
var a2=b2[a0]
if(a2>0)b2[g].$reflectable=a2}else if(a1===42){b2[g].$defaultValues=b2[a0]
var a3=b2.$methodsWithOptionalArguments
if(!a3)b2.$methodsWithOptionalArguments=a3={}
a3[a0]=g}else{var a4=b2[a0]
if(a0!=="^"&&a4!=null&&a4.constructor===Array&&a0!=="<>")if(d)e=true
else addStubs(b2,a4,a0,false,[])
else g=a0}}if(e)b2.$deferredAction=finishAddStubsHelper
var a5=b2["^"],a6,a7,a8=a5
var a9=a8.split(";")
a8=a9[1]?a9[1].split(","):[]
a7=a9[0]
a6=a7.split(":")
if(a6.length==2){a7=a6[0]
var b0=a6[1]
if(b0)b2.$signature=function(b4){return function(){return init.types[b4]}}(b0)}if(a7)b3.pending[b1]=a7
b3.combinedConstructorFunction+=defineClass(b1,a8)
b3.constructorsList.push(b1)
b3.collected[b1]=[m,b2]
i.push(b1)}function processStatics(a3,a4){var g=Object.keys(a3)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a3[e]
var c=e.charCodeAt(0)
var a0
if(c===43){v[a0]=e.substring(1)
var a1=a3[e]
if(a1>0)a3[a0].$reflectable=a1
if(d&&d.length)init.typeInformation[a0]=d}else if(c===42){m[a0].$defaultValues=d
var a2=a3.$methodsWithOptionalArguments
if(!a2)a3.$methodsWithOptionalArguments=a2={}
a2[e]=a0}else if(typeof d==="function"){m[a0=e]=d
h.push(e)
init.globalFunctions[e]=d}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a0=e
processClassData(e,d,a4)}}}function addStubs(b2,b3,b4,b5,b6){var g=0,f=b3[g],e
if(typeof f=="string")e=b3[++g]
else{e=f
f=b4}var d=[b2[b4]=b2[f]=e]
e.$stubName=b4
b6.push(b4)
for(g++;g<b3.length;g++){e=b3[g]
if(typeof e!="function")break
if(!b5)e.$stubName=b3[++g]
d.push(e)
if(e.$stubName){b2[e.$stubName]=e
b6.push(e.$stubName)}}for(var c=0;c<d.length;g++,c++)d[c].$callName=b3[g]
var a0=b3[g]
b3=b3.slice(++g)
var a1=b3[0]
var a2=a1>>1
var a3=(a1&1)===1
var a4=a1===3
var a5=a1===1
var a6=b3[1]
var a7=a6>>1
var a8=(a6&1)===1
var a9=a2+a7!=d[0].length
var b0=b3[2]
if(typeof b0=="number")b3[2]=b0+b
var b1=2*a7+a2+3
if(a0){e=tearOff(d,b3,b5,b4,a9)
b2[b4].$getter=e
e.$getterStub=true
if(b5){init.globalFunctions[b4]=e
b6.push(a0)}b2[a0]=e
d.push(e)
e.$stubName=a0
e.$callName=null}}function tearOffGetter(c,d,e,f){return f?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"(x) {"+"if (c === null) c = "+"H.bG"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(c,d,e,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"() {"+"if (c === null) c = "+"H.bG"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(c,d,e,H,null)}function tearOff(c,d,e,f,a0){var g
return e?function(){if(g===void 0)g=H.bG(this,c,d,true,[],f).prototype
return g}:tearOffGetter(c,d,f,a0)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b7=function(){}
var dart=[["","",,H,{"^":"",ie:{"^":"c;a"}}],["","",,J,{"^":"",
j:function(a){return void 0},
bb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b9:function(a){var z,y,x,w
z=a[init.dispatchPropertyName]
if(z==null)if($.bJ==null){H.hn()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(new P.cJ("Return interceptor for "+H.a(y(a,z))))}w=H.hx(a)
if(w==null){if(typeof a=="function")return C.y
y=Object.getPrototypeOf(a)
if(y==null||y===Object.prototype)return C.B
else return C.C}return w},
d:{"^":"c;",
l:function(a,b){return a===b},
gp:function(a){return H.W(a)},
h:["ca",function(a){return H.aT(a)}],
"%":"Blob|CanvasGradient|CanvasPattern|DOMError|File|FileError|MediaError|MediaKeyError|NavigatorUserMediaError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedString|TextMetrics|WebGLRenderingContext"},
ej:{"^":"d;",
h:function(a){return String(a)},
gp:function(a){return a?519018:218159},
$ishe:1},
ek:{"^":"d;",
l:function(a,b){return null==b},
h:function(a){return"null"},
gp:function(a){return 0}},
bl:{"^":"d;",
gp:function(a){return 0},
h:["cb",function(a){return String(a)}],
$isel:1},
eA:{"^":"bl;"},
aC:{"^":"bl;"},
ay:{"^":"bl;",
h:function(a){var z=a[$.$get$bT()]
return z==null?this.cb(a):J.U(z)}},
av:{"^":"d;",
bD:function(a,b){if(!!a.immutable$list)throw H.b(new P.H(b))},
bC:function(a,b){if(!!a.fixed$length)throw H.b(new P.H(b))},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(new P.t(a))}},
X:function(a,b){return H.h(new H.bq(a,b),[null,null])},
aS:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.a(a[x])
if(x>=z)return H.f(y,x)
y[x]=w}return y.join(b)},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
gdc:function(a){if(a.length>0)return a[0]
throw H.b(H.c4())},
t:function(a,b,c,d,e){var z,y,x
this.bD(a,"set range")
P.ai(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e<0)H.q(P.Q(e,0,null,"skipCount",null))
if(e+z>d.length)throw H.b(H.c5())
if(e<b)for(y=z-1;y>=0;--y){x=e+y
if(x>>>0!==x||x>=d.length)return H.f(d,x)
a[b+y]=d[x]}else for(y=0;y<z;++y){x=e+y
if(x>>>0!==x||x>=d.length)return H.f(d,x)
a[b+y]=d[x]}},
J:function(a,b,c,d){return this.t(a,b,c,d,0)},
am:function(a,b,c,d){var z,y,x,w,v,u
this.bC(a,"replace range")
P.ai(b,c,a.length,null,null,null)
d=C.b.ab(d)
z=c-b
y=d.length
x=a.length
w=b+y
if(z>=y){v=z-y
u=x-v
this.J(a,b,w,d)
if(v!==0){this.t(a,w,u,a,c)
this.sj(a,u)}}else{u=x+(y-z)
this.sj(a,u)
this.t(a,w,u,a,c)
this.J(a,b,w,d)}},
h:function(a){return P.aO(a,"[","]")},
gw:function(a){return new J.dD(a,a.length,0,null)},
gp:function(a){return H.W(a)},
gj:function(a){return a.length},
sj:function(a,b){this.bC(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.aK(b,"newLength",null))
if(b<0)throw H.b(P.Q(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.r(a,b))
if(b>=a.length||b<0)throw H.b(H.r(a,b))
return a[b]},
q:function(a,b,c){this.bD(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.r(a,b))
if(b>=a.length||b<0)throw H.b(H.r(a,b))
a[b]=c},
$isbj:1,
$isk:1,
$ask:null,
$isp:1},
id:{"^":"av;"},
dD:{"^":"c;a,b,c,d",
gn:function(){return this.d},
m:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.hF(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aw:{"^":"d;",
gbK:function(a){return a===0?1/a<0:a<0},
al:function(a,b){return a%b},
aa:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(new P.H(""+a))},
dF:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(new P.H(""+a))},
dI:function(a,b){var z
H.M(b)
if(b>20)throw H.b(P.Q(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbK(a))return"-"+z
return z},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp:function(a){return a&0x1FFFFFFF},
I:function(a,b){if(typeof b!=="number")throw H.b(H.z(b))
return a+b},
Z:function(a,b){if(typeof b!=="number")throw H.b(H.z(b))
return a-b},
b2:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ae:function(a,b){if((a|0)===a&&(b|0)===b&&0!==b&&-1!==b)return a/b|0
else return this.aa(a/b)},
U:function(a,b){return(a|0)===a?a/b|0:this.aa(a/b)},
aM:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
ad:function(a,b){if(typeof b!=="number")throw H.b(H.z(b))
return a<b},
ap:function(a,b){if(typeof b!=="number")throw H.b(H.z(b))
return a<=b},
$isaJ:1},
c7:{"^":"aw;",$isar:1,$isaJ:1,$isl:1},
c6:{"^":"aw;",$isar:1,$isaJ:1},
ax:{"^":"d;",
bE:function(a,b){if(b>=a.length)throw H.b(H.r(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(typeof b!=="string")throw H.b(P.aK(b,null,null))
return a+b},
am:function(a,b,c,d){var z,y
H.b3(d)
H.M(b)
c=P.ai(b,c,a.length,null,null,null)
H.M(c)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
C:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.z(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.z(c))
if(b<0)throw H.b(P.aU(b,null,null))
if(typeof c!=="number")return H.J(c)
if(b>c)throw H.b(P.aU(b,null,null))
if(c>a.length)throw H.b(P.aU(c,null,null))
return a.substring(b,c)},
b4:function(a,b){return this.C(a,b,null)},
b3:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.l)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
a6:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.b3(c,z)+a},
h:function(a){return a},
gp:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10>>>0)
y^=y>>6}y=536870911&y+((67108863&y)<<3>>>0)
y^=y>>11
return 536870911&y+((16383&y)<<15>>>0)},
gj:function(a){return a.length},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.r(a,b))
if(b>=a.length||b<0)throw H.b(H.r(a,b))
return a[b]},
$isbj:1,
$isR:1}}],["","",,H,{"^":"",
aE:function(a,b){var z=a.a3(b)
if(!init.globalState.d.cy)init.globalState.f.a9()
return z},
db:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.j(y).$isk)throw H.b(P.aa("Arguments to main must be a List: "+H.a(y)))
init.globalState=new H.fG(0,0,1,null,null,null,null,null,null,null,null,null,a)
y=init.globalState
x=self.window==null
w=self.Worker
v=x&&!!self.postMessage
y.x=v
v=!v
if(v)w=w!=null&&$.$get$c2()!=null
else w=!0
y.y=w
y.r=x&&v
y.f=new H.fi(P.bo(null,H.aD),0)
y.z=H.h(new H.a1(0,null,null,null,null,null,0),[P.l,H.bA])
y.ch=H.h(new H.a1(0,null,null,null,null,null,0),[P.l,null])
if(y.x===!0){x=new H.fF()
y.Q=x
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.eb,x)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.fH)}if(init.globalState.x===!0)return
y=init.globalState.a++
x=H.h(new H.a1(0,null,null,null,null,null,0),[P.l,H.aV])
w=P.ah(null,null,null,P.l)
v=new H.aV(0,null,!1)
u=new H.bA(y,x,w,init.createNewIsolate(),v,new H.a0(H.bd()),new H.a0(H.bd()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
w.V(0,0)
u.b7(0,v)
init.globalState.e=u
init.globalState.d=u
y=H.aG()
x=H.a8(y,[y]).K(a)
if(x)u.a3(new H.hD(z,a))
else{y=H.a8(y,[y,y]).K(a)
if(y)u.a3(new H.hE(z,a))
else u.a3(a)}init.globalState.f.a9()},
ef:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.eg()
return},
eg:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.b(new P.H("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.b(new P.H('Cannot extract URI from "'+H.a(z)+'"'))},
eb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.aX(!0,[]).L(b.data)
y=J.y(z)
switch(y.i(z,"command")){case"start":init.globalState.b=y.i(z,"id")
x=y.i(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.i(z,"args")
u=new H.aX(!0,[]).L(y.i(z,"msg"))
t=y.i(z,"isSpawnUri")
s=y.i(z,"startPaused")
r=new H.aX(!0,[]).L(y.i(z,"replyTo"))
y=init.globalState.a++
q=H.h(new H.a1(0,null,null,null,null,null,0),[P.l,H.aV])
p=P.ah(null,null,null,P.l)
o=new H.aV(0,null,!1)
n=new H.bA(y,q,p,init.createNewIsolate(),o,new H.a0(H.bd()),new H.a0(H.bd()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
p.V(0,0)
n.b7(0,o)
init.globalState.f.a.G(new H.aD(n,new H.ec(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.a9()
break
case"spawn-worker":break
case"message":if(y.i(z,"port")!=null)J.a9(y.i(z,"port"),y.i(z,"msg"))
init.globalState.f.a9()
break
case"close":init.globalState.ch.a8(0,$.$get$c3().i(0,a))
a.terminate()
init.globalState.f.a9()
break
case"log":H.ea(y.i(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.ag(["command","print","msg",z])
q=new H.a4(!0,P.aj(null,P.l)).B(q)
y.toString
self.postMessage(q)}else P.aq(y.i(z,"msg"))
break
case"error":throw H.b(y.i(z,"msg"))}},
ea:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.ag(["command","log","msg",a])
x=new H.a4(!0,P.aj(null,P.l)).B(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.v(w)
z=H.w(w)
throw H.b(P.aN(z))}},
ed:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.co=$.co+("_"+y)
$.cp=$.cp+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
J.a9(f,["spawned",new H.b_(y,x),w,z.r])
x=new H.ee(a,b,c,d,z)
if(e===!0){z.bz(w,w)
init.globalState.f.a.G(new H.aD(z,x,"start isolate"))}else x.$0()},
h0:function(a){return new H.aX(!0,[]).L(new H.a4(!1,P.aj(null,P.l)).B(a))},
hD:{"^":"e:0;a,b",
$0:function(){this.b.$1(this.a.a)}},
hE:{"^":"e:0;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
fG:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",k:{
fH:function(a){var z=P.ag(["command","print","msg",a])
return new H.a4(!0,P.aj(null,P.l)).B(z)}}},
bA:{"^":"c;a,b,c,dq:d<,d_:e<,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bz:function(a,b){if(!this.f.l(0,a))return
if(this.Q.V(0,b)&&!this.y)this.y=!0
this.aO()},
dB:function(a){var z,y,x,w,v,u
if(!this.y)return
z=this.Q
z.a8(0,a)
if(z.a===0){for(z=this.z;y=z.length,y!==0;){if(0>=y)return H.f(z,-1)
x=z.pop()
y=init.globalState.f.a
w=y.b
v=y.a
u=v.length
w=(w-1&u-1)>>>0
y.b=w
if(w<0||w>=u)return H.f(v,w)
v[w]=x
if(w===y.c)y.bh();++y.d}this.y=!1}this.aO()},
cT:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.j(a),y=0;x=this.ch,y<x.length;y+=2)if(z.l(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.f(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
dA:function(a){var z,y,x
if(this.ch==null)return
for(z=J.j(a),y=0;x=this.ch,y<x.length;y+=2)if(z.l(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.q(new P.H("removeRange"))
P.ai(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
c7:function(a,b){if(!this.r.l(0,a))return
this.db=b},
dh:function(a,b,c){var z=J.j(b)
if(!z.l(b,0))z=z.l(b,1)&&!this.cy
else z=!0
if(z){J.a9(a,c)
return}z=this.cx
if(z==null){z=P.bo(null,null)
this.cx=z}z.G(new H.fA(a,c))},
dg:function(a,b){var z
if(!this.r.l(0,a))return
z=J.j(b)
if(!z.l(b,0))z=z.l(b,1)&&!this.cy
else z=!0
if(z){this.aT()
return}z=this.cx
if(z==null){z=P.bo(null,null)
this.cx=z}z.G(this.gdt())},
di:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.aq(a)
if(b!=null)P.aq(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.U(a)
y[1]=b==null?null:J.U(b)
for(x=new P.bB(z,z.r,null,null),x.c=z.e;x.m();)J.a9(x.d,y)},
a3:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){t=H.v(u)
w=t
v=H.w(u)
this.di(w,v)
if(this.db===!0){this.aT()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.gdq()
if(this.cx!=null)for(;t=this.cx,!t.gH(t);)this.cx.bQ().$0()}return y},
bN:function(a){return this.b.i(0,a)},
b7:function(a,b){var z=this.b
if(z.a0(a))throw H.b(P.aN("Registry: ports must be registered only once."))
z.q(0,a,b)},
aO:function(){var z=this.b
if(z.gj(z)-this.c.a>0||this.y||!this.x)init.globalState.z.q(0,this.a,this)
else this.aT()},
aT:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.W(0)
for(z=this.b,y=z.gbX(z),y=y.gw(y);y.m();)y.gn().cq()
z.W(0)
this.c.W(0)
init.globalState.z.a8(0,this.a)
this.dx.W(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.f(z,v)
J.a9(w,z[v])}this.ch=null}},"$0","gdt",0,0,1]},
fA:{"^":"e:1;a,b",
$0:function(){J.a9(this.a,this.b)}},
fi:{"^":"c;a,b",
d3:function(){var z=this.a
if(z.b===z.c)return
return z.bQ()},
bU:function(){var z,y,x
z=this.d3()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.a0(init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.gH(y)}else y=!1
else y=!1
else y=!1
if(y)H.q(P.aN("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.gH(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.ag(["command","close"])
x=new H.a4(!0,H.h(new P.cS(0,null,null,null,null,null,0),[null,P.l])).B(x)
y.toString
self.postMessage(x)}return!1}z.dz()
return!0},
bs:function(){if(self.window!=null)new H.fj(this).$0()
else for(;this.bU(););},
a9:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.bs()
else try{this.bs()}catch(x){w=H.v(x)
z=w
y=H.w(x)
w=init.globalState.Q
v=P.ag(["command","error","msg",H.a(z)+"\n"+H.a(y)])
v=new H.a4(!0,P.aj(null,P.l)).B(v)
w.toString
self.postMessage(v)}}},
fj:{"^":"e:1;a",
$0:function(){if(!this.a.bU())return
P.f0(C.h,this)}},
aD:{"^":"c;a,b,c",
dz:function(){var z=this.a
if(z.y){z.z.push(this)
return}z.a3(this.b)}},
fF:{"^":"c;"},
ec:{"^":"e:0;a,b,c,d,e,f",
$0:function(){H.ed(this.a,this.b,this.c,this.d,this.e,this.f)}},
ee:{"^":"e:1;a,b,c,d,e",
$0:function(){var z,y,x,w
z=this.e
z.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
x=H.aG()
w=H.a8(x,[x,x]).K(y)
if(w)y.$2(this.b,this.c)
else{x=H.a8(x,[x]).K(y)
if(x)y.$1(this.b)
else y.$0()}}z.aO()}},
cL:{"^":"c;"},
b_:{"^":"cL;b,a",
ar:function(a,b){var z,y,x,w
z=init.globalState.z.i(0,this.a)
if(z==null)return
y=this.b
if(y.gbk())return
x=H.h0(b)
if(z.gd_()===y){y=J.y(x)
switch(y.i(x,0)){case"pause":z.bz(y.i(x,1),y.i(x,2))
break
case"resume":z.dB(y.i(x,1))
break
case"add-ondone":z.cT(y.i(x,1),y.i(x,2))
break
case"remove-ondone":z.dA(y.i(x,1))
break
case"set-errors-fatal":z.c7(y.i(x,1),y.i(x,2))
break
case"ping":z.dh(y.i(x,1),y.i(x,2),y.i(x,3))
break
case"kill":z.dg(y.i(x,1),y.i(x,2))
break
case"getErrors":y=y.i(x,1)
z.dx.V(0,y)
break
case"stopErrors":y=y.i(x,1)
z.dx.a8(0,y)
break}return}y=init.globalState.f
w="receive "+H.a(b)
y.a.G(new H.aD(z,new H.fK(this,x),w))},
l:function(a,b){if(b==null)return!1
return b instanceof H.b_&&J.T(this.b,b.b)},
gp:function(a){return this.b.gaF()}},
fK:{"^":"e:0;a,b",
$0:function(){var z=this.a.b
if(!z.gbk())z.cl(this.b)}},
bD:{"^":"cL;b,c,a",
ar:function(a,b){var z,y,x
z=P.ag(["command","message","port",this,"msg",b])
y=new H.a4(!0,P.aj(null,P.l)).B(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.i(0,this.b)
if(x!=null)x.postMessage(y)}},
l:function(a,b){if(b==null)return!1
return b instanceof H.bD&&J.T(this.b,b.b)&&J.T(this.a,b.a)&&J.T(this.c,b.c)},
gp:function(a){var z,y,x
z=this.b
if(typeof z!=="number")return z.c8()
y=this.a
if(typeof y!=="number")return y.c8()
x=this.c
if(typeof x!=="number")return H.J(x)
return(z<<16^y<<8^x)>>>0}},
aV:{"^":"c;aF:a<,b,bk:c<",
cq:function(){this.c=!0
this.b=null},
cl:function(a){if(this.c)return
this.cB(a)},
cB:function(a){return this.b.$1(a)},
$iseC:1},
eX:{"^":"c;a,b,c",
ci:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.G(new H.aD(y,new H.eZ(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.ao(new H.f_(this,b),0),a)}else throw H.b(new P.H("Timer greater than 0."))},
k:{
eY:function(a,b){var z=new H.eX(!0,!1,null)
z.ci(a,b)
return z}}},
eZ:{"^":"e:1;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
f_:{"^":"e:1;a,b",
$0:function(){this.a.c=null;--init.globalState.f.b
this.b.$0()}},
a0:{"^":"c;aF:a<",
gp:function(a){var z=this.a
if(typeof z!=="number")return z.dN()
z=C.e.aM(z,0)^C.e.U(z,4294967296)
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
l:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.a0){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
a4:{"^":"c;a,b",
B:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.i(0,a)
if(y!=null)return["ref",y]
z.q(0,a,z.gj(z))
z=J.j(a)
if(!!z.$iscd)return["buffer",a]
if(!!z.$isbs)return["typed",a]
if(!!z.$isbj)return this.c3(a)
if(!!z.$ise9){x=this.gc0()
w=a.gbL()
w=H.aQ(w,x,H.F(w,"E",0),null)
w=P.bp(w,!0,H.F(w,"E",0))
z=z.gbX(a)
z=H.aQ(z,x,H.F(z,"E",0),null)
return["map",w,P.bp(z,!0,H.F(z,"E",0))]}if(!!z.$isel)return this.c4(a)
if(!!z.$isd)this.bW(a)
if(!!z.$iseC)this.ac(a,"RawReceivePorts can't be transmitted:")
if(!!z.$isb_)return this.c5(a)
if(!!z.$isbD)return this.c6(a)
if(!!z.$ise){v=a.$static_name
if(v==null)this.ac(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isa0)return["capability",a.a]
if(!(a instanceof P.c))this.bW(a)
return["dart",init.classIdExtractor(a),this.c2(init.classFieldsExtractor(a))]},"$1","gc0",2,0,2],
ac:function(a,b){throw H.b(new P.H(H.a(b==null?"Can't transmit:":b)+" "+H.a(a)))},
bW:function(a){return this.ac(a,null)},
c3:function(a){var z=this.c1(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.ac(a,"Can't serialize indexable: ")},
c1:function(a){var z,y,x
z=[]
C.d.sj(z,a.length)
for(y=0;y<a.length;++y){x=this.B(a[y])
if(y>=z.length)return H.f(z,y)
z[y]=x}return z},
c2:function(a){var z
for(z=0;z<a.length;++z)C.d.q(a,z,this.B(a[z]))
return a},
c4:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.ac(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.d.sj(y,z.length)
for(x=0;x<z.length;++x){w=this.B(a[z[x]])
if(x>=y.length)return H.f(y,x)
y[x]=w}return["js-object",z,y]},
c6:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
c5:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gaF()]
return["raw sendport",a]}},
aX:{"^":"c;a,b",
L:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.b(P.aa("Bad serialized message: "+H.a(a)))
switch(C.d.gdc(a)){case"ref":if(1>=a.length)return H.f(a,1)
z=a[1]
y=this.b
if(z>>>0!==z||z>=y.length)return H.f(y,z)
return y[z]
case"buffer":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return x
case"typed":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return x
case"fixed":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
y=H.h(this.a1(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return H.h(this.a1(x),[null])
case"mutable":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return this.a1(x)
case"const":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
y=H.h(this.a1(x),[null])
y.fixed$length=Array
return y
case"map":return this.d6(a)
case"sendport":return this.d7(a)
case"raw sendport":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.d5(a)
case"function":if(1>=a.length)return H.f(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.f(a,1)
return new H.a0(a[1])
case"dart":y=a.length
if(1>=y)return H.f(a,1)
w=a[1]
if(2>=y)return H.f(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.a1(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.b("couldn't deserialize: "+H.a(a))}},"$1","gd4",2,0,2],
a1:function(a){var z,y,x
z=J.y(a)
y=0
while(!0){x=z.gj(a)
if(typeof x!=="number")return H.J(x)
if(!(y<x))break
z.q(a,y,this.L(z.i(a,y)));++y}return a},
d6:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.f(a,1)
y=a[1]
if(2>=z)return H.f(a,2)
x=a[2]
w=P.c8()
this.b.push(w)
y=J.ds(y,this.gd4()).ab(0)
for(z=J.y(y),v=J.y(x),u=0;u<z.gj(y);++u){if(u>=y.length)return H.f(y,u)
w.q(0,y[u],this.L(v.i(x,u)))}return w},
d7:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.f(a,1)
y=a[1]
if(2>=z)return H.f(a,2)
x=a[2]
if(3>=z)return H.f(a,3)
w=a[3]
if(J.T(y,init.globalState.b)){v=init.globalState.z.i(0,x)
if(v==null)return
u=v.bN(w)
if(u==null)return
t=new H.b_(u,x)}else t=new H.bD(y,w,x)
this.b.push(t)
return t},
d5:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.f(a,1)
y=a[1]
if(2>=z)return H.f(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.y(y)
v=J.y(x)
u=0
while(!0){t=z.gj(y)
if(typeof t!=="number")return H.J(t)
if(!(u<t))break
w[z.i(y,u)]=this.L(v.i(x,u));++u}return w}}}],["","",,H,{"^":"",
hi:function(a){return init.types[a]},
hw:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.j(a).$isbk},
a:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.U(a)
if(typeof z!=="string")throw H.b(H.z(a))
return z},
W:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ck:function(a,b){throw H.b(new P.at(a,null,null))},
az:function(a,b,c){var z,y
H.b3(a)
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return H.ck(a,c)
if(3>=z.length)return H.f(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return H.ck(a,c)},
bv:function(a){var z,y,x,w,v,u,t,s
z=J.j(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.p||!!J.j(a).$isaC){v=C.i(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.bE(w,0)===36)w=C.b.b4(w,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+H.d6(H.bH(a),0,null),init.mangledGlobalNames)},
aT:function(a){return"Instance of '"+H.bv(a)+"'"},
eB:function(a,b,c,d,e,f,g,h){var z,y,x,w
H.M(a)
H.M(b)
H.M(c)
H.M(d)
H.M(e)
H.M(f)
H.M(g)
z=J.bM(b,1)
y=h?Date.UTC(a,z,c,d,e,f,g):new Date(a,z,c,d,e,f,g).valueOf()
if(isNaN(y)||y<-864e13||y>864e13)return
x=J.aH(a)
if(x.ap(a,0)||x.ad(a,100)){w=new Date(y)
if(h)w.setUTCFullYear(a)
else w.setFullYear(a)
return w.valueOf()}return y},
x:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
cn:function(a){return a.b?H.x(a).getUTCFullYear()+0:H.x(a).getFullYear()+0},
cm:function(a){return a.b?H.x(a).getUTCMonth()+1:H.x(a).getMonth()+1},
cl:function(a){return a.b?H.x(a).getUTCDate()+0:H.x(a).getDate()+0},
bu:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(H.z(a))
return a[b]},
cq:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(H.z(a))
a[b]=c},
J:function(a){throw H.b(H.z(a))},
f:function(a,b){if(a==null)J.a_(a)
throw H.b(H.r(a,b))},
r:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.V(!0,b,"index",null)
z=J.a_(a)
if(!(b<0)){if(typeof z!=="number")return H.J(z)
y=b>=z}else y=!0
if(y)return P.c0(b,a,"index",null,z)
return P.aU(b,"index",null)},
z:function(a){return new P.V(!0,a,null,null)},
M:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(H.z(a))
return a},
b3:function(a){if(typeof a!=="string")throw H.b(H.z(a))
return a},
b:function(a){var z
if(a==null)a=new P.bt()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dd})
z.name=""}else z.toString=H.dd
return z},
dd:function(){return J.U(this.dartException)},
q:function(a){throw H.b(a)},
hF:function(a){throw H.b(new P.t(a))},
v:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.hH(a)
if(a==null)return
if(a instanceof H.bi)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.a.aM(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bm(H.a(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.a(y)+" (Error "+w+")"
return z.$1(new H.ci(v,null))}}if(a instanceof TypeError){u=$.$get$cy()
t=$.$get$cz()
s=$.$get$cA()
r=$.$get$cB()
q=$.$get$cF()
p=$.$get$cG()
o=$.$get$cD()
$.$get$cC()
n=$.$get$cI()
m=$.$get$cH()
l=u.D(y)
if(l!=null)return z.$1(H.bm(y,l))
else{l=t.D(y)
if(l!=null){l.method="call"
return z.$1(H.bm(y,l))}else{l=s.D(y)
if(l==null){l=r.D(y)
if(l==null){l=q.D(y)
if(l==null){l=p.D(y)
if(l==null){l=o.D(y)
if(l==null){l=r.D(y)
if(l==null){l=n.D(y)
if(l==null){l=m.D(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.ci(y,l==null?null:l.method))}}return z.$1(new H.f3(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cu()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.V(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cu()
return a},
w:function(a){var z
if(a instanceof H.bi)return a.b
if(a==null)return new H.cT(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.cT(a,null)},
hA:function(a){if(a==null||typeof a!='object')return J.B(a)
else return H.W(a)},
hf:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
hq:function(a,b,c,d,e,f,g){switch(c){case 0:return H.aE(b,new H.hr(a))
case 1:return H.aE(b,new H.hs(a,d))
case 2:return H.aE(b,new H.ht(a,d,e))
case 3:return H.aE(b,new H.hu(a,d,e,f))
case 4:return H.aE(b,new H.hv(a,d,e,f,g))}throw H.b(P.aN("Unsupported number of arguments for wrapped closure"))},
ao:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.hq)
a.$identity=z
return z},
dM:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.j(c).$isk){z.$reflectionInfo=c
x=H.eE(z).r}else x=c
w=d?Object.create(new H.eM().constructor.prototype):Object.create(new H.bf(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.K
$.K=J.N(u,1)
u=new Function("a,b,c,d","this.$initialize(a,b,c,d);"+u)
v=u}w.constructor=v
v.prototype=w
u=!d
if(u){t=e.length==1&&!0
s=H.bS(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.hi,x)
else if(u&&typeof x=="function"){q=t?H.bR:H.bg
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$signature=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.bS(a,o,t)
w[n]=m}}w["call*"]=s
w.$requiredArgCount=z.$requiredArgCount
w.$defaultValues=z.$defaultValues
return v},
dJ:function(a,b,c,d){var z=H.bg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
bS:function(a,b,c){var z,y,x,w,v,u
if(c)return H.dL(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.dJ(y,!w,z,b)
if(y===0){w=$.ac
if(w==null){w=H.aL("self")
$.ac=w}w="return function(){return this."+H.a(w)+"."+H.a(z)+"();"
v=$.K
$.K=J.N(v,1)
return new Function(w+H.a(v)+"}")()}u="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w="return function("+u+"){return this."
v=$.ac
if(v==null){v=H.aL("self")
$.ac=v}v=w+H.a(v)+"."+H.a(z)+"("+u+");"
w=$.K
$.K=J.N(w,1)
return new Function(v+H.a(w)+"}")()},
dK:function(a,b,c,d){var z,y
z=H.bg
y=H.bR
switch(b?-1:a){case 0:throw H.b(new H.eG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
dL:function(a,b){var z,y,x,w,v,u,t,s
z=H.dE()
y=$.bQ
if(y==null){y=H.aL("receiver")
$.bQ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.dK(w,!u,x,b)
if(w===1){y="return function(){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+");"
u=$.K
$.K=J.N(u,1)
return new Function(y+H.a(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+", "+s+");"
u=$.K
$.K=J.N(u,1)
return new Function(y+H.a(u)+"}")()},
bG:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.j(c).$isk){c.fixed$length=Array
z=c}else z=c
return H.dM(a,b,z,!!d,e,f)},
hC:function(a,b){var z=J.y(b)
throw H.b(H.dI(H.bv(a),z.C(b,3,z.gj(b))))},
hp:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.j(a)[b]
else z=!0
if(z)return a
H.hC(a,b)},
hG:function(a){throw H.b(new P.dQ("Cyclic initialization for static "+H.a(a)))},
a8:function(a,b,c){return new H.eH(a,b,c,null)},
aG:function(){return C.k},
bd:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
h:function(a,b){a.$builtinTypeInfo=b
return a},
bH:function(a){if(a==null)return
return a.$builtinTypeInfo},
d4:function(a,b){return H.dc(a["$as"+H.a(b)],H.bH(a))},
F:function(a,b,c){var z=H.d4(a,b)
return z==null?null:z[c]},
S:function(a,b){var z=H.bH(a)
return z==null?null:z[b]},
bL:function(a,b){if(a==null)return"dynamic"
else if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d6(a,1,b)
else if(typeof a=="function")return a.builtin$cls
else if(typeof a==="number"&&Math.floor(a)===a)return C.a.h(a)
else return},
d6:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.aB("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.a(H.bL(u,c))}return w?"":"<"+H.a(z)+">"},
dc:function(a,b){if(typeof a=="function"){a=a.apply(null,b)
if(a==null)return a
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)}return b},
ha:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.A(a[y],b[y]))return!1
return!0},
b4:function(a,b,c){return a.apply(b,H.d4(b,c))},
A:function(a,b){var z,y,x,w,v
if(a===b)return!0
if(a==null||b==null)return!0
if('func' in b)return H.d5(a,b)
if('func' in a)return b.builtin$cls==="e1"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){if(!('$is'+H.bL(w,null) in y.prototype))return!1
v=y.prototype["$as"+H.a(H.bL(w,null))]}else v=null
if(!z&&v==null||!x)return!0
z=z?a.slice(1):null
x=x?b.slice(1):null
return H.ha(H.dc(v,z),x)},
d0:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.A(z,v)||H.A(v,z)))return!1}return!0},
h9:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.A(v,u)||H.A(u,v)))return!1}return!0},
d5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.A(z,y)||H.A(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.d0(x,w,!1))return!1
if(!H.d0(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.A(o,n)||H.A(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.A(o,n)||H.A(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.A(o,n)||H.A(n,o)))return!1}}return H.h9(a.named,b.named)},
iY:function(a){var z=$.bI
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
iX:function(a){return H.W(a)},
iW:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hx:function(a){var z,y,x,w,v,u
z=$.bI.$1(a)
y=$.b6[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ba[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.d_.$2(a,z)
if(z!=null){y=$.b6[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ba[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bK(x)
$.b6[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ba[z]=x
return x}if(v==="-"){u=H.bK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.d8(a,x)
if(v==="*")throw H.b(new P.cJ(z))
if(init.leafTags[z]===true){u=H.bK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.d8(a,x)},
d8:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bb(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bK:function(a){return J.bb(a,!1,null,!!a.$isbk)},
hz:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.bb(z,!1,null,!!z.$isbk)
else return J.bb(z,c,null,null)},
hn:function(){if(!0===$.bJ)return
$.bJ=!0
H.ho()},
ho:function(){var z,y,x,w,v,u,t,s
$.b6=Object.create(null)
$.ba=Object.create(null)
H.hj()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.d9.$1(v)
if(u!=null){t=H.hz(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
hj:function(){var z,y,x,w,v,u,t
z=C.v()
z=H.a7(C.r,H.a7(C.x,H.a7(C.j,H.a7(C.j,H.a7(C.w,H.a7(C.t,H.a7(C.u(C.i),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.bI=new H.hk(v)
$.d_=new H.hl(u)
$.d9=new H.hm(t)},
a7:function(a,b){return a(b)||b},
eD:{"^":"c;a,b,c,d,e,f,r,x",k:{
eE:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.eD(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
f1:{"^":"c;a,b,c,d,e,f",
D:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
k:{
L:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.f1(a.replace('\\$arguments\\$','((?:x|[^x])*)').replace('\\$argumentsExpr\\$','((?:x|[^x])*)').replace('\\$expr\\$','((?:x|[^x])*)').replace('\\$method\\$','((?:x|[^x])*)').replace('\\$receiver\\$','((?:x|[^x])*)'),y,x,w,v,u)},
aW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ci:{"^":"u;a,b",
h:function(a){var z=this.b
if(z==null)return"NullError: "+H.a(this.a)
return"NullError: method not found: '"+H.a(z)+"' on null"}},
ep:{"^":"u;a,b,c",
h:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.a(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+H.a(z)+"' ("+H.a(this.a)+")"
return"NoSuchMethodError: method not found: '"+H.a(z)+"' on '"+H.a(y)+"' ("+H.a(this.a)+")"},
k:{
bm:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ep(a,y,z?null:b.receiver)}}},
f3:{"^":"u;a",
h:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
bi:{"^":"c;a,E:b<"},
hH:{"^":"e:2;a",
$1:function(a){if(!!J.j(a).$isu)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
cT:{"^":"c;a,b",
h:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z}},
hr:{"^":"e:0;a",
$0:function(){return this.a.$0()}},
hs:{"^":"e:0;a,b",
$0:function(){return this.a.$1(this.b)}},
ht:{"^":"e:0;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
hu:{"^":"e:0;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
hv:{"^":"e:0;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
e:{"^":"c;",
h:function(a){return"Closure '"+H.bv(this)+"'"},
gbY:function(){return this},
gbY:function(){return this}},
cw:{"^":"e;"},
eM:{"^":"cw;",
h:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bf:{"^":"cw;a,b,c,d",
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gp:function(a){var z,y
z=this.c
if(z==null)y=H.W(this.a)
else y=typeof z!=="object"?J.B(z):H.W(z)
z=H.W(this.b)
if(typeof y!=="number")return y.dO()
return(y^z)>>>0},
h:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.a(this.d)+"' of "+H.aT(z)},
k:{
bg:function(a){return a.a},
bR:function(a){return a.c},
dE:function(){var z=$.ac
if(z==null){z=H.aL("self")
$.ac=z}return z},
aL:function(a){var z,y,x,w,v
z=new H.bf("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
dH:{"^":"u;a",
h:function(a){return this.a},
k:{
dI:function(a,b){return new H.dH("CastError: Casting value of type "+H.a(a)+" to incompatible type "+H.a(b))}}},
eG:{"^":"u;a",
h:function(a){return"RuntimeError: "+H.a(this.a)}},
ct:{"^":"c;"},
eH:{"^":"ct;a,b,c,d",
K:function(a){var z=this.cv(a)
return z==null?!1:H.d5(z,this.Y())},
cv:function(a){var z=J.j(a)
return"$signature" in z?z.$signature():null},
Y:function(){var z,y,x,w,v,u,t
z={func:"dynafunc"}
y=this.a
x=J.j(y)
if(!!x.$isiG)z.v=true
else if(!x.$isbV)z.ret=y.Y()
y=this.b
if(y!=null&&y.length!==0)z.args=H.cs(y)
y=this.c
if(y!=null&&y.length!==0)z.opt=H.cs(y)
y=this.d
if(y!=null){w=Object.create(null)
v=H.d3(y)
for(x=v.length,u=0;u<x;++u){t=v[u]
w[t]=y[t].Y()}z.named=w}return z},
h:function(a){var z,y,x,w,v,u,t,s
z=this.b
if(z!=null)for(y=z.length,x="(",w=!1,v=0;v<y;++v,w=!0){u=z[v]
if(w)x+=", "
x+=H.a(u)}else{x="("
w=!1}z=this.c
if(z!=null&&z.length!==0){x=(w?x+", ":x)+"["
for(y=z.length,w=!1,v=0;v<y;++v,w=!0){u=z[v]
if(w)x+=", "
x+=H.a(u)}x+="]"}else{z=this.d
if(z!=null){x=(w?x+", ":x)+"{"
t=H.d3(z)
for(y=t.length,w=!1,v=0;v<y;++v,w=!0){s=t[v]
if(w)x+=", "
x+=H.a(z[s].Y())+" "+s}x+="}"}}return x+(") -> "+H.a(this.a))},
k:{
cs:function(a){var z,y,x
a=a
z=[]
for(y=a.length,x=0;x<y;++x)z.push(a[x].Y())
return z}}},
bV:{"^":"ct;",
h:function(a){return"dynamic"},
Y:function(){return}},
a1:{"^":"c;a,b,c,d,e,f,r",
gj:function(a){return this.a},
gH:function(a){return this.a===0},
gbL:function(){return H.h(new H.et(this),[H.S(this,0)])},
gbX:function(a){return H.aQ(this.gbL(),new H.eo(this),H.S(this,0),H.S(this,1))},
a0:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.be(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.be(y,a)}else return this.dl(a)},
dl:function(a){var z=this.d
if(z==null)return!1
return this.a5(this.F(z,this.a4(a)),a)>=0},
i:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.F(z,b)
return y==null?null:y.gM()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.F(x,b)
return y==null?null:y.gM()}else return this.dm(b)},
dm:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.F(z,this.a4(a))
x=this.a5(y,a)
if(x<0)return
return y[x].gM()},
q:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aI()
this.b=z}this.b6(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aI()
this.c=y}this.b6(y,b,c)}else{x=this.d
if(x==null){x=this.aI()
this.d=x}w=this.a4(b)
v=this.F(x,w)
if(v==null)this.aL(x,w,[this.aJ(b,c)])
else{u=this.a5(v,b)
if(u>=0)v[u].sM(c)
else v.push(this.aJ(b,c))}}},
a8:function(a,b){if(typeof b==="string")return this.br(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.br(this.c,b)
else return this.dn(b)},
dn:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.F(z,this.a4(a))
x=this.a5(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.bx(w)
return w.gM()},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(new P.t(this))
z=z.c}},
b6:function(a,b,c){var z=this.F(a,b)
if(z==null)this.aL(a,b,this.aJ(b,c))
else z.sM(c)},
br:function(a,b){var z
if(a==null)return
z=this.F(a,b)
if(z==null)return
this.bx(z)
this.bf(a,b)
return z.gM()},
aJ:function(a,b){var z,y
z=new H.es(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
bx:function(a){var z,y
z=a.gcK()
y=a.c
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
a4:function(a){return J.B(a)&0x3ffffff},
a5:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].gbJ(),b))return y
return-1},
h:function(a){return P.cc(this)},
F:function(a,b){return a[b]},
aL:function(a,b,c){a[b]=c},
bf:function(a,b){delete a[b]},
be:function(a,b){return this.F(a,b)!=null},
aI:function(){var z=Object.create(null)
this.aL(z,"<non-identifier-key>",z)
this.bf(z,"<non-identifier-key>")
return z},
$ise9:1},
eo:{"^":"e:2;a",
$1:function(a){return this.a.i(0,a)}},
es:{"^":"c;bJ:a<,M:b@,c,cK:d<"},
et:{"^":"E;a",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.eu(z,z.r,null,null)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.b(new P.t(z))
y=y.c}},
$isp:1},
eu:{"^":"c;a,b,c,d",
gn:function(){return this.d},
m:function(){var z=this.a
if(this.b!==z.r)throw H.b(new P.t(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
hk:{"^":"e:2;a",
$1:function(a){return this.a(a)}},
hl:{"^":"e:8;a",
$2:function(a,b){return this.a(a,b)}},
hm:{"^":"e:9;a",
$1:function(a){return this.a(a)}},
em:{"^":"c;a,b,c,d",
h:function(a){return"RegExp/"+this.a+"/"},
dd:function(a){var z=this.b.exec(H.b3(a))
if(z==null)return
return new H.fJ(this,z)},
k:{
en:function(a,b,c,d){var z,y,x,w
H.b3(a)
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(new P.at("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
fJ:{"^":"c;a,b",
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]}}}],["","",,A,{"^":"",
d7:[function(){var z=0,y=new P.ad(),x=1,w,v,u
var $async$d7=P.an(function(a,b){if(a===1){w=b
z=x}while(true)switch(z){case 0:v=document.querySelector("#input")
v.focus()
u=J.dp(v)
H.h(new W.aY(0,u.a,u.b,W.b2(new A.hy(v)),!1),[H.S(u,0)]).a_()
return P.n(null,0,y,null)
case 1:return P.n(w,1,y)}})
return P.n(null,$async$d7,y,null)},"$0","d2",0,0,0],
ap:function(a2){var z=0,y=new P.ad(),x,w=2,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$ap=P.an(function(a3,a4){if(a3===1){v=a4
z=w}while(true)switch(z){case 0:u=C.b.a6(C.a.h(C.a.b2(H.cn(a2),100)),2,"0")
t=C.b.a6(C.a.h(H.cm(a2)),2,"0")
s=C.b.a6(C.a.h(H.cl(a2)),2,"0")
r=u+t+s
P.aq("Searching for "+r+" ...")
z=3
return P.n(A.b5(r),$async$ap,y)
case 3:q=a4
P.aq("index is "+H.a(q))
p=J.aH(q)
o=P.bc(p.ae(q,2),5000)
z=4
return P.n(A.aI(0,o),$async$ap,y)
case 4:n=a4
m=r.length
z=5
return P.n(A.aI(J.N(J.N(p.Z(q,o),m),5),o),$async$ap,y)
case 5:l=a4
n=C.b.C(C.b.I("3.",n),0,o)
k=C.b.C(r,0,2)+"\u2022"+C.b.C(r,2,4)+"\u2022"+C.b.C(r,4,6)
j=J.y(l)
i=j.gj(l)
if(typeof i!=="number"){x=i.Z()
z=1
break}else ;h=i-5-m
l=j.am(l,h,h+m,k)
if(l==null){x=l.I()
z=1
break}else ;m=(l+"...").split("")
l=C.b.C(H.h(new H.eF(m),[H.S(m,0)]).dr(0),0,o)
g=new N.eK(o,0.75,0.1,null,null,null)
m=g.cu()
g.d=m
if(typeof m!=="number"){x=H.J(m)
z=1
break}else ;g.e=3.141592653589793/m
f=document.querySelector("#canvas")
e=A.cj(f,n,"red",!1,"#FF8000","",-1)
d=A.cj(f,l,"white",!0,"#FF8000",k,8)
J.di(J.o(f).ao(f,"2d"),0,0,f.width,f.height)
g.bG(e,-0.3141592653589793)
g.bG(d,2.827433388230814)
p=p.I(q,1)
c=C.n.ao(f,"2d")
b=P.bc(f.width,f.height)
a=b/2
J.o(c).bA(c)
c.font=H.a(b*0.8)+"px Times New Roman"
a0=c.measureText("\u03c0")
c.fillStyle="rgb(231, 46, 46)"
c.lineWidth=6
c.strokeStyle="black"
m=a0.width
if(typeof m!=="number"){x=m.an()
z=1
break}else ;m/=2
c.strokeText("\u03c0",a-m,a+m)
m=a0.width
if(typeof m!=="number"){x=m.an()
z=1
break}else ;m/=2
C.f.aR(c,"\u03c0",a-m,a+m)
c.font=H.a(b*0.04)+"px Times New Roman"
a1="My browser found my pi day @ pi digit "+J.U(J.N(p,1))
p=c.measureText(a1).width
if(typeof p!=="number"){x=p.an()
z=1
break}else ;C.f.aR(c,a1,a-p/2,b)
c.closePath()
case 1:return P.n(x,0,y,null)
case 2:return P.n(v,1,y)}})
return P.n(null,$async$ap,y,null)},
hy:{"^":"e:10;a",
$1:function(a){var z=0,y=new P.ad(),x=1,w,v=[],u=this,t,s,r,q,p,o
var $async$$1=P.an(function(b,c){if(b===1){w=c
z=x}while(true)switch(z){case 0:z=J.dn(a)===13?2:3
break
case 2:t=H.hp(W.h1(a.target),"$isc1").value
x=5
s=P.dU(t)
J.dy(u.a,!0)
q=document.querySelector("#wait").style
q.display="block"
z=8
return P.n(A.ap(s),$async$$1,y)
case 8:q=document.querySelector("#inputBox").style
q.display="none"
x=1
z=7
break
case 5:x=4
o=w
q=H.v(o)
r=q
if(typeof console!="undefined")console.log(r)
else ;z=7
break
case 4:z=1
break
case 7:case 3:return P.n(null,0,y,null)
case 1:return P.n(w,1,y)}})
return P.n(null,$async$$1,y,null)}},
ez:{"^":"eL;a,b,c,d,e,f,r,x,y,z,Q",
d8:function(a,b,c,d,e){var z,y,x,w,v
if(d*this.e<1)return
J.dv(this.b)
J.dh(this.b)
J.dx(this.b,1)
z=this.f
J.dz(this.b,z)
y=this.y
x=e>=y&&e<y+this.z.length
w=this.b
if(x)J.bP(w,this.Q)
else J.bP(w,z)
z=this.e
x=this.c
w=this.d
v=d*z*1.6
J.dB(this.b,a*z+x,b*z+w)
w=this.b
J.du(w,this.x?c+3.141592653589793:c)
J.dw(this.b,H.a(v)+"px arial,monospace")
z=this.b
x=this.r
if(e>=x.length)return H.f(x,e)
w=-v*0.275
J.bO(z,x[e],w,v*0.35)
if(e===y+this.z.length-1)J.bO(this.b,"\u25b4",w,v*1.1)
J.dj(this.b)
J.dt(this.b)},
cg:function(a,b,c,d,e,f,g){var z=this.a
this.b=J.dr(z,"2d")
z=P.bc(z.width,z.height)/2
this.c=z
this.d=z
this.e=P.bc(z,z)*0.85},
k:{
cj:function(a,b,c,d,e,f,g){var z=new A.ez(a,null,null,null,null,c,b,d,g,f,e)
z.cg(a,b,c,d,e,f,g)
return z}}}},1],["","",,H,{"^":"",
c4:function(){return new P.a2("No element")},
c5:function(){return new P.a2("Too few elements")},
aP:{"^":"E;",
gw:function(a){return new H.c9(this,this.gj(this),0,null)},
v:function(a,b){var z,y
z=this.gj(this)
for(y=0;y<z;++y){b.$1(this.u(0,y))
if(z!==this.gj(this))throw H.b(new P.t(this))}},
aS:function(a,b){var z,y,x,w,v
z=this.gj(this)
if(b.length!==0){if(z===0)return""
y=H.a(this.u(0,0))
if(z!==this.gj(this))throw H.b(new P.t(this))
x=new P.aB(y)
for(w=1;w<z;++w){x.a+=b
x.a+=H.a(this.u(0,w))
if(z!==this.gj(this))throw H.b(new P.t(this))}v=x.a
return v.charCodeAt(0)==0?v:v}else{x=new P.aB("")
for(w=0;w<z;++w){x.a+=H.a(this.u(0,w))
if(z!==this.gj(this))throw H.b(new P.t(this))}v=x.a
return v.charCodeAt(0)==0?v:v}},
dr:function(a){return this.aS(a,"")},
X:function(a,b){return H.h(new H.bq(this,b),[null,null])},
b_:function(a,b){var z,y,x
z=H.h([],[H.F(this,"aP",0)])
C.d.sj(z,this.gj(this))
for(y=0;y<this.gj(this);++y){x=this.u(0,y)
if(y>=z.length)return H.f(z,y)
z[y]=x}return z},
ab:function(a){return this.b_(a,!0)},
$isp:1},
c9:{"^":"c;a,b,c,d",
gn:function(){return this.d},
m:function(){var z,y,x,w
z=this.a
y=J.y(z)
x=y.gj(z)
if(this.b!==x)throw H.b(new P.t(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.u(z,w);++this.c
return!0}},
cb:{"^":"E;a,b",
gw:function(a){var z=new H.ew(null,J.be(this.a),this.b)
z.$builtinTypeInfo=this.$builtinTypeInfo
return z},
gj:function(a){return J.a_(this.a)},
$asE:function(a,b){return[b]},
k:{
aQ:function(a,b,c,d){if(!!J.j(a).$isp)return H.h(new H.bW(a,b),[c,d])
return H.h(new H.cb(a,b),[c,d])}}},
bW:{"^":"cb;a,b",$isp:1},
ew:{"^":"ei;a,b,c",
m:function(){var z=this.b
if(z.m()){this.a=this.aE(z.gn())
return!0}this.a=null
return!1},
gn:function(){return this.a},
aE:function(a){return this.c.$1(a)}},
bq:{"^":"aP;a,b",
gj:function(a){return J.a_(this.a)},
u:function(a,b){return this.aE(J.dl(this.a,b))},
aE:function(a){return this.b.$1(a)},
$asaP:function(a,b){return[b]},
$asE:function(a,b){return[b]},
$isp:1},
bZ:{"^":"c;",
sj:function(a,b){throw H.b(new P.H("Cannot change the length of a fixed-length list"))},
am:function(a,b,c,d){throw H.b(new P.H("Cannot remove from a fixed-length list"))}},
eF:{"^":"aP;a",
gj:function(a){return J.a_(this.a)},
u:function(a,b){var z,y
z=this.a
y=J.y(z)
return y.u(z,y.gj(z)-1-b)}}}],["","",,H,{"^":"",
d3:function(a){var z=H.h(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,P,{"^":"",
f5:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.hb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ao(new P.f7(z),1)).observe(y,{childList:true})
return new P.f6(z,y,x)}else if(self.setImmediate!=null)return P.hc()
return P.hd()},
iI:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.ao(new P.f8(a),0))},"$1","hb",2,0,3],
iJ:[function(a){++init.globalState.f.b
self.setImmediate(H.ao(new P.f9(a),0))},"$1","hc",2,0,3],
iK:[function(a){P.bw(C.h,a)},"$1","hd",2,0,3],
n:function(a,b,c){if(b===0){J.dk(c,a)
return}else if(b===1){c.bF(H.v(a),H.w(a))
return}P.fU(a,b)
return c.gdf()},
fU:function(a,b){var z,y,x,w
z=new P.fV(b)
y=new P.fW(b)
x=J.j(a)
if(!!x.$isI)a.aN(z,y)
else if(!!x.$isG)a.aZ(z,y)
else{w=H.h(new P.I(0,$.i,null),[null])
w.a=4
w.c=a
w.aN(z,null)}},
an:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
$.i.toString
return new P.h8(z)},
cV:function(a,b){var z=H.aG()
z=H.a8(z,[z,z]).K(a)
if(z){b.toString
return a}else{b.toString
return a}},
ad:function(a){return H.h(new P.fS(H.h(new P.I(0,$.i,null),[a])),[a])},
h3:function(){var z,y
for(;z=$.a5,z!=null;){$.al=null
y=z.b
$.a5=y
if(y==null)$.ak=null
z.a.$0()}},
iV:[function(){$.bE=!0
try{P.h3()}finally{$.al=null
$.bE=!1
if($.a5!=null)$.$get$bx().$1(P.d1())}},"$0","d1",0,0,1],
cZ:function(a){var z=new P.cK(a,null)
if($.a5==null){$.ak=z
$.a5=z
if(!$.bE)$.$get$bx().$1(P.d1())}else{$.ak.b=z
$.ak=z}},
h7:function(a){var z,y,x
z=$.a5
if(z==null){P.cZ(a)
$.al=$.ak
return}y=new P.cK(a,null)
x=$.al
if(x==null){y.b=z
$.al=y
$.a5=y}else{y.b=x.b
x.b=y
$.al=y
if(y.b==null)$.ak=y}},
da:function(a){var z=$.i
if(C.c===z){P.a6(null,null,C.c,a)
return}z.toString
P.a6(null,null,z,z.aP(a,!0))},
iz:function(a,b){var z,y,x
z=H.h(new P.cU(null,null,null,0),[b])
y=z.gcF()
x=z.gcH()
z.a=a.O(y,!0,z.gcG(),x)
return z},
h6:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){t=H.v(u)
z=t
y=H.w(u)
$.i.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.O(x)
w=t
v=x.gE()
c.$2(w,v)}}},
fX:function(a,b,c,d){var z=a.aQ()
if(!!J.j(z).$isG)z.b1(new P.h_(b,c,d))
else b.A(c,d)},
fY:function(a,b){return new P.fZ(a,b)},
f0:function(a,b){var z=$.i
if(z===C.c){z.toString
return P.bw(a,b)}return P.bw(a,z.aP(b,!0))},
bw:function(a,b){var z=C.a.U(a.a,1000)
return H.eY(z<0?0:z,b)},
aF:function(a,b,c,d,e){var z={}
z.a=d
P.h7(new P.h5(z,e))},
cW:function(a,b,c,d){var z,y
y=$.i
if(y===c)return d.$0()
$.i=c
z=y
try{y=d.$0()
return y}finally{$.i=z}},
cY:function(a,b,c,d,e){var z,y
y=$.i
if(y===c)return d.$1(e)
$.i=c
z=y
try{y=d.$1(e)
return y}finally{$.i=z}},
cX:function(a,b,c,d,e,f){var z,y
y=$.i
if(y===c)return d.$2(e,f)
$.i=c
z=y
try{y=d.$2(e,f)
return y}finally{$.i=z}},
a6:function(a,b,c,d){var z=C.c!==c
if(z)d=c.aP(d,!(!z||!1))
P.cZ(d)},
f7:{"^":"e:2;a",
$1:function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()}},
f6:{"^":"e:11;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
f8:{"^":"e:0;a",
$0:function(){--init.globalState.f.b
this.a.$0()}},
f9:{"^":"e:0;a",
$0:function(){--init.globalState.f.b
this.a.$0()}},
fV:{"^":"e:2;a",
$1:function(a){return this.a.$2(0,a)}},
fW:{"^":"e:4;a",
$2:function(a,b){this.a.$2(1,new H.bi(a,b))}},
h8:{"^":"e:12;a",
$2:function(a,b){this.a(a,b)}},
G:{"^":"c;"},
cM:{"^":"c;df:a<",
bF:[function(a,b){a=a!=null?a:new P.bt()
if(this.a.a!==0)throw H.b(new P.a2("Future already completed"))
$.i.toString
this.A(a,b)},function(a){return this.bF(a,null)},"cY","$2","$1","gcX",2,2,5,0]},
f4:{"^":"cM;a",
aj:function(a,b){var z=this.a
if(z.a!==0)throw H.b(new P.a2("Future already completed"))
z.co(b)},
A:function(a,b){this.a.cp(a,b)}},
fS:{"^":"cM;a",
aj:function(a,b){var z=this.a
if(z.a!==0)throw H.b(new P.a2("Future already completed"))
z.R(b)},
A:function(a,b){this.a.A(a,b)}},
cQ:{"^":"c;aK:a<,b,c,d,e",
gcS:function(){return this.b.b},
gbI:function(){return(this.c&1)!==0},
gdj:function(){return(this.c&2)!==0},
gdk:function(){return this.c===6},
gbH:function(){return this.c===8},
gcJ:function(){return this.d},
gcR:function(){return this.d}},
I:{"^":"c;T:a@,b,cO:c<",
gcD:function(){return this.a===2},
gaG:function(){return this.a>=4},
aZ:function(a,b){var z=$.i
if(z!==C.c){z.toString
if(b!=null)b=P.cV(b,z)}return this.aN(a,b)},
bV:function(a){return this.aZ(a,null)},
aN:function(a,b){var z=H.h(new P.I(0,$.i,null),[null])
this.at(new P.cQ(null,z,b==null?1:3,a,b))
return z},
b1:function(a){var z,y
z=$.i
y=new P.I(0,z,null)
y.$builtinTypeInfo=this.$builtinTypeInfo
if(z!==C.c)z.toString
this.at(new P.cQ(null,y,8,a,null))
return y},
at:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaG()){y.at(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.a6(null,null,z,new P.fm(this,a))}},
bq:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaK()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaG()){v.bq(a)
return}this.a=v.a
this.c=v.c}z.a=this.ai(a)
y=this.b
y.toString
P.a6(null,null,y,new P.fu(z,this))}},
ah:function(){var z=this.c
this.c=null
return this.ai(z)},
ai:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaK()
z.a=y}return y},
R:function(a){var z
if(!!J.j(a).$isG)P.aZ(a,this)
else{z=this.ah()
this.a=4
this.c=a
P.a3(this,z)}},
bd:function(a){var z=this.ah()
this.a=4
this.c=a
P.a3(this,z)},
A:[function(a,b){var z=this.ah()
this.a=8
this.c=new P.ab(a,b)
P.a3(this,z)},function(a){return this.A(a,null)},"dP","$2","$1","gaz",2,2,13,0],
co:function(a){var z
if(a==null);else if(!!J.j(a).$isG){if(a.a===8){this.a=1
z=this.b
z.toString
P.a6(null,null,z,new P.fo(this,a))}else P.aZ(a,this)
return}this.a=1
z=this.b
z.toString
P.a6(null,null,z,new P.fp(this,a))},
cp:function(a,b){var z
this.a=1
z=this.b
z.toString
P.a6(null,null,z,new P.fn(this,a,b))},
$isG:1,
k:{
fq:function(a,b){var z,y,x,w
b.sT(1)
try{a.aZ(new P.fr(b),new P.fs(b))}catch(x){w=H.v(x)
z=w
y=H.w(x)
P.da(new P.ft(b,z,y))}},
aZ:function(a,b){var z,y,x
for(;a.gcD();)a=a.c
z=a.gaG()
y=b.c
if(z){b.c=null
x=b.ai(y)
b.a=a.a
b.c=a.c
P.a3(b,x)}else{b.a=2
b.c=a
a.bq(y)}},
a3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
z=y.b
y=J.O(v)
x=v.gE()
z.toString
P.aF(null,null,z,y,x)}return}for(;b.gaK()!=null;b=u){u=b.a
b.a=null
P.a3(z.a,b)}t=z.a.c
x.a=w
x.b=t
y=!w
if(!y||b.gbI()||b.gbH()){s=b.gcS()
if(w){r=z.a.b
r.toString
r=r==null?s==null:r===s
if(!r)s.toString
else r=!0
r=!r}else r=!1
if(r){y=z.a
v=y.c
y=y.b
x=J.O(v)
r=v.gE()
y.toString
P.aF(null,null,y,x,r)
return}q=$.i
if(q==null?s!=null:q!==s)$.i=s
else q=null
if(b.gbH())new P.fx(z,x,w,b,s).$0()
else if(y){if(b.gbI())new P.fw(x,w,b,t,s).$0()}else if(b.gdj())new P.fv(z,x,b,s).$0()
if(q!=null)$.i=q
y=x.b
r=J.j(y)
if(!!r.$isG){p=b.b
if(!!r.$isI)if(y.a>=4){o=p.c
p.c=null
b=p.ai(o)
p.a=y.a
p.c=y.c
z.a=y
continue}else P.aZ(y,p)
else P.fq(y,p)
return}}p=b.b
b=p.ah()
y=x.a
x=x.b
if(!y){p.a=4
p.c=x}else{p.a=8
p.c=x}z.a=p
y=p}}}},
fm:{"^":"e:0;a,b",
$0:function(){P.a3(this.a,this.b)}},
fu:{"^":"e:0;a,b",
$0:function(){P.a3(this.b,this.a.a)}},
fr:{"^":"e:2;a",
$1:function(a){this.a.bd(a)}},
fs:{"^":"e:14;a",
$2:function(a,b){this.a.A(a,b)},
$1:function(a){return this.$2(a,null)}},
ft:{"^":"e:0;a,b,c",
$0:function(){this.a.A(this.b,this.c)}},
fo:{"^":"e:0;a,b",
$0:function(){P.aZ(this.b,this.a)}},
fp:{"^":"e:0;a,b",
$0:function(){this.a.bd(this.b)}},
fn:{"^":"e:0;a,b,c",
$0:function(){this.a.A(this.b,this.c)}},
fw:{"^":"e:1;a,b,c,d,e",
$0:function(){var z,y,x,w
try{x=this.a
x.b=this.e.aX(this.c.gcJ(),this.d)
x.a=!1}catch(w){x=H.v(w)
z=x
y=H.w(w)
x=this.a
x.b=new P.ab(z,y)
x.a=!0}}},
fv:{"^":"e:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.a.c
y=!0
r=this.c
if(r.gdk()){x=r.d
try{y=this.d.aX(x,J.O(z))}catch(q){r=H.v(q)
w=r
v=H.w(q)
r=J.O(z)
p=w
o=(r==null?p==null:r===p)?z:new P.ab(w,v)
r=this.b
r.b=o
r.a=!0
return}}u=r.e
if(y===!0&&u!=null)try{r=u
p=H.aG()
p=H.a8(p,[p,p]).K(r)
n=this.d
m=this.b
if(p)m.b=n.dG(u,J.O(z),z.gE())
else m.b=n.aX(u,J.O(z))
m.a=!1}catch(q){r=H.v(q)
t=r
s=H.w(q)
r=J.O(z)
p=t
o=(r==null?p==null:r===p)?z:new P.ab(t,s)
r=this.b
r.b=o
r.a=!0}}},
fx:{"^":"e:1;a,b,c,d,e",
$0:function(){var z,y,x,w,v,u
z=null
try{z=this.e.bS(this.d.gcR())}catch(w){v=H.v(w)
y=v
x=H.w(w)
if(this.c){v=J.O(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.ab(y,x)
u.a=!0
return}if(!!J.j(z).$isG){if(z instanceof P.I&&z.gT()>=4){if(z.gT()===8){v=this.b
v.b=z.gcO()
v.a=!0}return}v=this.b
v.b=z.bV(new P.fy(this.a.a))
v.a=!1}}},
fy:{"^":"e:2;a",
$1:function(a){return this.a}},
cK:{"^":"c;a,b"},
Y:{"^":"c;",
X:function(a,b){return H.h(new P.fI(b,this),[H.F(this,"Y",0),null])},
v:function(a,b){var z,y
z={}
y=H.h(new P.I(0,$.i,null),[null])
z.a=null
z.a=this.O(new P.eQ(z,this,b,y),!0,new P.eR(y),y.gaz())
return y},
gj:function(a){var z,y
z={}
y=H.h(new P.I(0,$.i,null),[P.l])
z.a=0
this.O(new P.eS(z),!0,new P.eT(z,y),y.gaz())
return y},
ab:function(a){var z,y
z=H.h([],[H.F(this,"Y",0)])
y=H.h(new P.I(0,$.i,null),[[P.k,H.F(this,"Y",0)]])
this.O(new P.eU(this,z),!0,new P.eV(z,y),y.gaz())
return y}},
eQ:{"^":"e;a,b,c,d",
$1:function(a){P.h6(new P.eO(this.c,a),new P.eP(),P.fY(this.a.a,this.d))},
$signature:function(){return H.b4(function(a){return{func:1,args:[a]}},this.b,"Y")}},
eO:{"^":"e:0;a,b",
$0:function(){return this.a.$1(this.b)}},
eP:{"^":"e:2;",
$1:function(a){}},
eR:{"^":"e:0;a",
$0:function(){this.a.R(null)}},
eS:{"^":"e:2;a",
$1:function(a){++this.a.a}},
eT:{"^":"e:0;a,b",
$0:function(){this.b.R(this.a.a)}},
eU:{"^":"e;a,b",
$1:function(a){this.b.push(a)},
$signature:function(){return H.b4(function(a){return{func:1,args:[a]}},this.a,"Y")}},
eV:{"^":"e:0;a,b",
$0:function(){this.b.R(this.a)}},
eN:{"^":"c;"},
iO:{"^":"c;"},
fa:{"^":"c;T:e@",
aV:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.bB()
if((z&4)===0&&(this.e&32)===0)this.bi(this.gbm())},
a7:function(a){return this.aV(a,null)},
bR:function(){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.gH(z)}else z=!1
if(z)this.r.aq(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.bi(this.gbo())}}}},
aQ:function(){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)!==0)return this.f
this.aw()
return this.f},
aw:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.bB()
if((this.e&32)===0)this.r=null
this.f=this.bl()},
av:["cc",function(a){var z=this.e
if((z&8)!==0)return
if(z<32)this.bt(a)
else this.au(new P.ff(a,null))}],
as:["cd",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.bv(a,b)
else this.au(new P.fh(a,b,null))}],
cn:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.bu()
else this.au(C.m)},
bn:[function(){},"$0","gbm",0,0,1],
bp:[function(){},"$0","gbo",0,0,1],
bl:function(){return},
au:function(a){var z,y
z=this.r
if(z==null){z=new P.fR(null,null,0)
this.r=z}z.V(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.aq(this)}},
bt:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.aY(this.a,a)
this.e=(this.e&4294967263)>>>0
this.ax((z&4)!==0)},
bv:function(a,b){var z,y
z=this.e
y=new P.fc(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.aw()
z=this.f
if(!!J.j(z).$isG)z.b1(y)
else y.$0()}else{y.$0()
this.ax((z&4)!==0)}},
bu:function(){var z,y
z=new P.fb(this)
this.aw()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.j(y).$isG)y.b1(z)
else z.$0()},
bi:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.ax((z&4)!==0)},
ax:function(a){var z,y
if((this.e&64)!==0){z=this.r
z=z.gH(z)}else z=!1
if(z){z=(this.e&4294967231)>>>0
this.e=z
if((z&4)!==0)if(z<128){z=this.r
z=z==null||z.gH(z)}else z=!1
else z=!1
if(z)this.e=(this.e&4294967291)>>>0}for(;!0;a=y){z=this.e
if((z&8)!==0){this.r=null
return}y=(z&4)!==0
if(a===y)break
this.e=(z^32)>>>0
if(y)this.bn()
else this.bp()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.aq(this)},
cj:function(a,b,c,d){var z=this.d
z.toString
this.a=a
this.b=P.cV(b,z)
this.c=c}},
fc:{"^":"e:1;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.aG()
x=H.a8(x,[x,x]).K(y)
w=z.d
v=this.b
u=z.b
if(x)w.dH(u,v,this.c)
else w.aY(u,v)
z.e=(z.e&4294967263)>>>0}},
fb:{"^":"e:1;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.bT(z.c)
z.e=(z.e&4294967263)>>>0}},
cN:{"^":"c;ak:a@"},
ff:{"^":"cN;b,a",
aW:function(a){a.bt(this.b)}},
fh:{"^":"cN;a2:b>,E:c<,a",
aW:function(a){a.bv(this.b,this.c)}},
fg:{"^":"c;",
aW:function(a){a.bu()},
gak:function(){return},
sak:function(a){throw H.b(new P.a2("No events after a done."))}},
fL:{"^":"c;T:a@",
aq:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.da(new P.fM(this,a))
this.a=1},
bB:function(){if(this.a===1)this.a=3}},
fM:{"^":"e:0;a,b",
$0:function(){var z,y,x,w
z=this.a
y=z.a
z.a=0
if(y===3)return
x=z.b
w=x.gak()
z.b=w
if(w==null)z.c=null
x.aW(this.b)}},
fR:{"^":"fL;b,c,a",
gH:function(a){return this.c==null},
V:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{z.sak(b)
this.c=b}}},
cU:{"^":"c;a,b,c,T:d@",
b9:function(a){this.a=null
this.c=null
this.b=null
this.d=1},
dT:[function(a){var z
if(this.d===2){this.b=a
z=this.c
this.c=null
this.d=0
z.R(!0)
return}this.a.a7(0)
this.c=a
this.d=3},"$1","gcF",2,0,function(){return H.b4(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"cU")}],
cI:[function(a,b){var z
if(this.d===2){z=this.c
this.b9(0)
z.A(a,b)
return}this.a.a7(0)
this.c=new P.ab(a,b)
this.d=4},function(a){return this.cI(a,null)},"dV","$2","$1","gcH",2,2,5,0],
dU:[function(){if(this.d===2){var z=this.c
this.b9(0)
z.R(!1)
return}this.a.a7(0)
this.c=null
this.d=5},"$0","gcG",0,0,1]},
h_:{"^":"e:0;a,b,c",
$0:function(){return this.a.A(this.b,this.c)}},
fZ:{"^":"e:4;a,b",
$2:function(a,b){return P.fX(this.a,this.b,a,b)}},
bz:{"^":"Y;",
O:function(a,b,c,d){return this.ct(a,d,c,!0===b)},
bM:function(a,b,c){return this.O(a,null,b,c)},
ct:function(a,b,c,d){return P.fl(this,a,b,c,d,H.F(this,"bz",0),H.F(this,"bz",1))},
bj:function(a,b){b.av(a)},
$asY:function(a,b){return[b]}},
cP:{"^":"fa;x,y,a,b,c,d,e,f,r",
av:function(a){if((this.e&2)!==0)return
this.cc(a)},
as:function(a,b){if((this.e&2)!==0)return
this.cd(a,b)},
bn:[function(){var z=this.y
if(z==null)return
z.a7(0)},"$0","gbm",0,0,1],
bp:[function(){var z=this.y
if(z==null)return
z.bR()},"$0","gbo",0,0,1],
bl:function(){var z=this.y
if(z!=null){this.y=null
return z.aQ()}return},
dQ:[function(a){this.x.bj(a,this)},"$1","gcw",2,0,function(){return H.b4(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"cP")}],
dS:[function(a,b){this.as(a,b)},"$2","gcA",4,0,15],
dR:[function(){this.cn()},"$0","gcz",0,0,1],
ck:function(a,b,c,d,e,f,g){var z,y
z=this.gcw()
y=this.gcA()
this.y=this.x.a.bM(z,this.gcz(),y)},
k:{
fl:function(a,b,c,d,e,f,g){var z=$.i
z=H.h(new P.cP(a,null,null,null,null,z,e?1:0,null,null),[f,g])
z.cj(b,c,d,e)
z.ck(a,b,c,d,e,f,g)
return z}}},
fI:{"^":"bz;b,a",
bj:function(a,b){var z,y,x,w,v
z=null
try{z=this.cP(a)}catch(w){v=H.v(w)
y=v
x=H.w(w)
$.i.toString
b.as(y,x)
return}b.av(z)},
cP:function(a){return this.b.$1(a)}},
ab:{"^":"c;a2:a>,E:b<",
h:function(a){return H.a(this.a)},
$isu:1},
fT:{"^":"c;"},
h5:{"^":"e:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bt()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=J.U(y)
throw x}},
fN:{"^":"fT;",
bT:function(a){var z,y,x,w
try{if(C.c===$.i){x=a.$0()
return x}x=P.cW(null,null,this,a)
return x}catch(w){x=H.v(w)
z=x
y=H.w(w)
return P.aF(null,null,this,z,y)}},
aY:function(a,b){var z,y,x,w
try{if(C.c===$.i){x=a.$1(b)
return x}x=P.cY(null,null,this,a,b)
return x}catch(w){x=H.v(w)
z=x
y=H.w(w)
return P.aF(null,null,this,z,y)}},
dH:function(a,b,c){var z,y,x,w
try{if(C.c===$.i){x=a.$2(b,c)
return x}x=P.cX(null,null,this,a,b,c)
return x}catch(w){x=H.v(w)
z=x
y=H.w(w)
return P.aF(null,null,this,z,y)}},
aP:function(a,b){if(b)return new P.fO(this,a)
else return new P.fP(this,a)},
cU:function(a,b){return new P.fQ(this,a)},
i:function(a,b){return},
bS:function(a){if($.i===C.c)return a.$0()
return P.cW(null,null,this,a)},
aX:function(a,b){if($.i===C.c)return a.$1(b)
return P.cY(null,null,this,a,b)},
dG:function(a,b,c){if($.i===C.c)return a.$2(b,c)
return P.cX(null,null,this,a,b,c)}},
fO:{"^":"e:0;a,b",
$0:function(){return this.a.bT(this.b)}},
fP:{"^":"e:0;a,b",
$0:function(){return this.a.bS(this.b)}},
fQ:{"^":"e:2;a,b",
$1:function(a){return this.a.aY(this.b,a)}}}],["","",,P,{"^":"",
c8:function(){return H.h(new H.a1(0,null,null,null,null,null,0),[null,null])},
ag:function(a){return H.hf(a,H.h(new H.a1(0,null,null,null,null,null,0),[null,null]))},
eh:function(a,b,c){var z,y
if(P.bF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$am()
y.push(a)
try{P.h2(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.cv(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
aO:function(a,b,c){var z,y,x
if(P.bF(a))return b+"..."+c
z=new P.aB(b)
y=$.$get$am()
y.push(a)
try{x=z
x.a=P.cv(x.gS(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gS()+c
y=z.gS()
return y.charCodeAt(0)==0?y:y},
bF:function(a){var z,y
for(z=0;y=$.$get$am(),z<y.length;++z)if(a===y[z])return!0
return!1},
h2:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.m())return
w=H.a(z.gn())
b.push(w)
y+=w.length+2;++x}if(!z.m()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gn();++x
if(!z.m()){if(x<=4){b.push(H.a(t))
return}v=H.a(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gn();++x
for(;z.m();t=s,s=r){r=z.gn();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.a(t)
v=H.a(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
ah:function(a,b,c,d){return H.h(new P.fC(0,null,null,null,null,null,0),[d])},
cc:function(a){var z,y,x
z={}
if(P.bF(a))return"{...}"
y=new P.aB("")
try{$.$get$am().push(a)
x=y
x.a=x.gS()+"{"
z.a=!0
J.dm(a,new P.ex(z,y))
z=y
z.a=z.gS()+"}"}finally{z=$.$get$am()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gS()
return z.charCodeAt(0)==0?z:z},
cS:{"^":"a1;a,b,c,d,e,f,r",
a4:function(a){return H.hA(a)&0x3ffffff},
a5:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].gbJ()
if(x==null?b==null:x===b)return y}return-1},
k:{
aj:function(a,b){return H.h(new P.cS(0,null,null,null,null,null,0),[a,b])}}},
fC:{"^":"fz;a,b,c,d,e,f,r",
gw:function(a){var z=new P.bB(this,this.r,null,null)
z.c=this.e
return z},
gj:function(a){return this.a},
cZ:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cs(b)},
cs:function(a){var z=this.d
if(z==null)return!1
return this.ag(z[this.af(a)],a)>=0},
bN:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.cZ(0,a)?a:null
else return this.cE(a)},
cE:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.af(a)]
x=this.ag(y,a)
if(x<0)return
return J.bN(y,x).gbg()},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.b(new P.t(this))
z=z.b}},
V:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bC()
this.b=z}return this.ba(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bC()
this.c=y}return this.ba(y,b)}else return this.G(b)},
G:function(a){var z,y,x
z=this.d
if(z==null){z=P.bC()
this.d=z}y=this.af(a)
x=z[y]
if(x==null)z[y]=[this.ay(a)]
else{if(this.ag(x,a)>=0)return!1
x.push(this.ay(a))}return!0},
a8:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bb(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bb(this.c,b)
else return this.cM(b)},
cM:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.af(a)]
x=this.ag(y,a)
if(x<0)return!1
this.bc(y.splice(x,1)[0])
return!0},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ba:function(a,b){if(a[b]!=null)return!1
a[b]=this.ay(b)
return!0},
bb:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bc(z)
delete a[b]
return!0},
ay:function(a){var z,y
z=new P.fD(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
bc:function(a){var z,y
z=a.gcr()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.r=this.r+1&67108863},
af:function(a){return J.B(a)&0x3ffffff},
ag:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].gbg(),b))return y
return-1},
$isp:1,
k:{
bC:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
fD:{"^":"c;bg:a<,b,cr:c<"},
bB:{"^":"c;a,b,c,d",
gn:function(){return this.d},
m:function(){var z=this.a
if(this.b!==z.r)throw H.b(new P.t(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
fz:{"^":"eI;"},
ca:{"^":"c;",
gw:function(a){return new H.c9(a,this.gj(a),0,null)},
u:function(a,b){return this.i(a,b)},
v:function(a,b){var z,y,x,w
z=this.gj(a)
for(y=a.length,x=z!==y,w=0;w<z;++w){if(w>=y)return H.f(a,w)
b.$1(a[w])
if(x)throw H.b(new P.t(a))}},
X:function(a,b){return H.h(new H.bq(a,b),[null,null])},
t:["b5",function(a,b,c,d,e){var z,y,x,w,v,u
P.ai(b,c,this.gj(a),null,null,null)
z=c-b
if(z===0)return
if(e<0)H.q(P.Q(e,0,null,"skipCount",null))
if(e+z>J.a_(d))throw H.b(H.c5())
if(e<b)for(y=z-1,x=d.length,w=a.length;y>=0;--y){v=b+y
u=e+y
if(u>>>0!==u||u>=x)return H.f(d,u)
u=d[u]
if(v>>>0!==v||v>=w)return H.f(a,v)
a[v]=u}else for(x=d.length,w=a.length,y=0;y<z;++y){v=b+y
u=e+y
if(u>>>0!==u||u>=x)return H.f(d,u)
u=d[u]
if(v>>>0!==v||v>=w)return H.f(a,v)
a[v]=u}},function(a,b,c,d){return this.t(a,b,c,d,0)},"J",null,null,"gdM",6,2,null,1],
am:function(a,b,c,d){var z,y,x,w,v,u
P.ai(b,c,this.gj(a),null,null,null)
d=C.b.ab(d)
z=c-b
y=d.length
x=a.length
w=b+y
if(z>=y){v=z-y
u=x-v
this.J(a,b,w,d)
if(v!==0){this.t(a,w,u,a,c)
this.sj(a,u)}}else{u=x+(y-z)
this.sj(a,u)
this.t(a,w,u,a,c)
this.J(a,b,w,d)}},
h:function(a){return P.aO(a,"[","]")},
$isk:1,
$ask:null,
$isp:1},
ex:{"^":"e:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.a(a)
z.a=y+": "
z.a+=H.a(b)}},
ev:{"^":"E;a,b,c,d",
gw:function(a){return new P.fE(this,this.c,this.d,this.b,null)},
v:function(a,b){var z,y,x
z=this.d
for(y=this.b;y!==this.c;y=(y+1&this.a.length-1)>>>0){x=this.a
if(y<0||y>=x.length)return H.f(x,y)
b.$1(x[y])
if(z!==this.d)H.q(new P.t(this))}},
gH:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
W:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.f(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
h:function(a){return P.aO(this,"{","}")},
bQ:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.b(H.c4());++this.d
y=this.a
x=y.length
if(z>=x)return H.f(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
G:function(a){var z,y,x
z=this.a
y=this.c
x=z.length
if(y>=x)return H.f(z,y)
z[y]=a
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.bh();++this.d},
bh:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.h(z,[H.S(this,0)])
z=this.a
x=this.b
w=z.length-x
C.d.t(y,0,w,z,x)
C.d.t(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
cf:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.h(z,[b])},
$isp:1,
k:{
bo:function(a,b){var z=H.h(new P.ev(null,0,0,0),[b])
z.cf(a,b)
return z}}},
fE:{"^":"c;a,b,c,d,e",
gn:function(){return this.e},
m:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.q(new P.t(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.f(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
eJ:{"^":"c;",
X:function(a,b){return H.h(new H.bW(this,b),[H.S(this,0),null])},
h:function(a){return P.aO(this,"{","}")},
v:function(a,b){var z
for(z=new P.bB(this,this.r,null,null),z.c=this.e;z.m();)b.$1(z.d)},
$isp:1},
eI:{"^":"eJ;"}}],["","",,P,{"^":"",
b0:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.fB(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.b0(a[z])
return a},
h4:function(a,b){var z,y,x,w
x=a
if(typeof x!=="string")throw H.b(H.z(a))
z=null
try{z=JSON.parse(a)}catch(w){x=H.v(w)
y=x
throw H.b(new P.at(String(y),null,null))}return P.b0(z)},
fB:{"^":"c;a,b,c",
i:function(a,b){var z,y
z=this.b
if(z==null)return this.c.i(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.cL(b):y}},
gj:function(a){var z
if(this.b==null){z=this.c
z=z.gj(z)}else z=this.aA().length
return z},
q:function(a,b,c){var z,y
if(this.b==null)this.c.q(0,b,c)
else if(this.a0(b)){z=this.b
z[b]=c
y=this.a
if(y==null?z!=null:y!==z)y[b]=null}else this.cQ().q(0,b,c)},
a0:function(a){if(this.b==null)return this.c.a0(a)
if(typeof a!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
v:function(a,b){var z,y,x,w
if(this.b==null)return this.c.v(0,b)
z=this.aA()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.b0(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.b(new P.t(this))}},
h:function(a){return P.cc(this)},
aA:function(){var z=this.c
if(z==null){z=Object.keys(this.a)
this.c=z}return z},
cQ:function(){var z,y,x,w,v
if(this.b==null)return this.c
z=P.c8()
y=this.aA()
for(x=0;w=y.length,x<w;++x){v=y[x]
z.q(0,v,this.i(0,v))}if(w===0)y.push(null)
else C.d.sj(y,0)
this.b=null
this.a=null
this.c=z
return z},
cL:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.b0(this.a[a])
return this.b[a]=z}},
dN:{"^":"c;"},
dO:{"^":"c;"},
eq:{"^":"dN;a,b",
d1:function(a,b){return P.h4(a,this.gd2().a)},
d0:function(a){return this.d1(a,null)},
gd2:function(){return C.A}},
er:{"^":"dO;a"}}],["","",,P,{"^":"",
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.U(a)
if(typeof a==="string")return JSON.stringify(a)
return P.e_(a)},
e_:function(a){var z=J.j(a)
if(!!z.$ise)return z.h(a)
return H.aT(a)},
aN:function(a){return new P.fk(a)},
bp:function(a,b,c){var z,y
z=H.h([],[c])
for(y=J.be(a);y.m();)z.push(y.gn())
return z},
aq:function(a){var z=H.a(a)
H.hB(z)},
he:{"^":"c;"},
"+bool":0,
bU:{"^":"c;a,b",
l:function(a,b){if(b==null)return!1
if(!(b instanceof P.bU))return!1
return this.a===b.a&&this.b===b.b},
gp:function(a){var z=this.a
return(z^C.e.aM(z,30))&1073741823},
h:function(a){var z,y,x,w,v,u,t,s
z=P.dS(H.cn(this))
y=P.as(H.cm(this))
x=P.as(H.cl(this))
w=this.b
v=P.as(w?H.x(this).getUTCHours()+0:H.x(this).getHours()+0)
u=P.as(w?H.x(this).getUTCMinutes()+0:H.x(this).getMinutes()+0)
t=P.as(w?H.x(this).getUTCSeconds()+0:H.x(this).getSeconds()+0)
s=P.dT(w?H.x(this).getUTCMilliseconds()+0:H.x(this).getMilliseconds()+0)
if(w)return z+"-"+y+"-"+x+" "+v+":"+u+":"+t+"."+s+"Z"
else return z+"-"+y+"-"+x+" "+v+":"+u+":"+t+"."+s},
gdv:function(){return this.a},
ce:function(a,b){var z=this.a
if(!(Math.abs(z)>864e13)){if(Math.abs(z)===864e13);z=!1}else z=!0
if(z)throw H.b(P.aa(this.gdv()))},
k:{
dU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=new H.em("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:\\.(\\d{1,6}))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",H.en("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:\\.(\\d{1,6}))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",!1,!0,!1),null,null).dd(a)
if(z!=null){y=new P.dV()
x=z.b
if(1>=x.length)return H.f(x,1)
w=H.az(x[1],null,null)
if(2>=x.length)return H.f(x,2)
v=H.az(x[2],null,null)
if(3>=x.length)return H.f(x,3)
u=H.az(x[3],null,null)
if(4>=x.length)return H.f(x,4)
t=y.$1(x[4])
if(5>=x.length)return H.f(x,5)
s=y.$1(x[5])
if(6>=x.length)return H.f(x,6)
r=y.$1(x[6])
if(7>=x.length)return H.f(x,7)
q=new P.dW().$1(x[7])
p=J.aH(q)
o=p.ae(q,1000)
n=p.al(q,1000)
p=x.length
if(8>=p)return H.f(x,8)
if(x[8]!=null){if(9>=p)return H.f(x,9)
p=x[9]
if(p!=null){m=J.T(p,"-")?-1:1
if(10>=x.length)return H.f(x,10)
l=H.az(x[10],null,null)
if(11>=x.length)return H.f(x,11)
k=y.$1(x[11])
if(typeof l!=="number")return H.J(l)
k=J.N(k,60*l)
if(typeof k!=="number")return H.J(k)
s=J.bM(s,m*k)}j=!0}else j=!1
i=H.eB(w,v,u,t,s,r,o+C.q.dF(n/1000),j)
if(i==null)throw H.b(new P.at("Time out of range",a,null))
return P.dR(i,j)}else throw H.b(new P.at("Invalid date format",a,null))},
dR:function(a,b){var z=new P.bU(a,b)
z.ce(a,b)
return z},
dS:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+H.a(z)
if(z>=10)return y+"00"+H.a(z)
return y+"000"+H.a(z)},
dT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
as:function(a){if(a>=10)return""+a
return"0"+a}}},
dV:{"^":"e:6;",
$1:function(a){if(a==null)return 0
return H.az(a,null,null)}},
dW:{"^":"e:6;",
$1:function(a){var z,y,x,w
if(a==null)return 0
z=J.y(a)
z.gj(a)
for(y=0,x=0;x<6;++x){y*=10
w=z.gj(a)
if(typeof w!=="number")return H.J(w)
if(x<w)y+=z.bE(a,x)^48}return y}},
ar:{"^":"aJ;"},
"+double":0,
ae:{"^":"c;a",
I:function(a,b){return new P.ae(C.a.I(this.a,b.gaB()))},
Z:function(a,b){return new P.ae(C.a.Z(this.a,b.gaB()))},
ae:function(a,b){if(b===0)throw H.b(new P.e7())
return new P.ae(C.a.ae(this.a,b))},
ad:function(a,b){return C.a.ad(this.a,b.gaB())},
ap:function(a,b){return C.a.ap(this.a,b.gaB())},
l:function(a,b){if(b==null)return!1
if(!(b instanceof P.ae))return!1
return this.a===b.a},
gp:function(a){return this.a&0x1FFFFFFF},
h:function(a){var z,y,x,w,v
z=new P.dZ()
y=this.a
if(y<0)return"-"+new P.ae(-y).h(0)
x=z.$1(C.a.al(C.a.U(y,6e7),60))
w=z.$1(C.a.al(C.a.U(y,1e6),60))
v=new P.dY().$1(C.a.al(y,1e6))
return""+C.a.U(y,36e8)+":"+H.a(x)+":"+H.a(w)+"."+H.a(v)}},
dY:{"^":"e:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
dZ:{"^":"e:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
u:{"^":"c;",
gE:function(){return H.w(this.$thrownJsError)}},
bt:{"^":"u;",
h:function(a){return"Throw of null."}},
V:{"^":"u;a,b,c,d",
gaD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaC:function(){return""},
h:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+H.a(z)+")":""
z=this.d
x=z==null?"":": "+H.a(z)
w=this.gaD()+y+x
if(!this.a)return w
v=this.gaC()
u=P.bX(this.b)
return w+v+": "+H.a(u)},
k:{
aa:function(a){return new P.V(!1,null,null,a)},
aK:function(a,b,c){return new P.V(!0,a,b,c)},
dC:function(a){return new P.V(!1,null,a,"Must not be null")}}},
cr:{"^":"V;e,f,a,b,c,d",
gaD:function(){return"RangeError"},
gaC:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.a(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.a(z)
else{if(typeof x!=="number")return x.dL()
if(typeof z!=="number")return H.J(z)
if(x>z)y=": Not in range "+H.a(z)+".."+H.a(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.a(z)}}return y},
k:{
aU:function(a,b,c){return new P.cr(null,null,!0,a,b,"Value not in range")},
Q:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
ai:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.Q(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.Q(b,a,c,"end",f))
return b}}},
e6:{"^":"V;e,j:f>,a,b,c,d",
gaD:function(){return"RangeError"},
gaC:function(){if(J.de(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.a(z)},
k:{
c0:function(a,b,c,d,e){var z=e!=null?e:J.a_(b)
return new P.e6(b,z,!0,a,c,"Index out of range")}}},
H:{"^":"u;a",
h:function(a){return"Unsupported operation: "+this.a}},
cJ:{"^":"u;a",
h:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.a(z):"UnimplementedError"}},
a2:{"^":"u;a",
h:function(a){return"Bad state: "+this.a}},
t:{"^":"u;a",
h:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.a(P.bX(z))+"."}},
ey:{"^":"c;",
h:function(a){return"Out of Memory"},
gE:function(){return},
$isu:1},
cu:{"^":"c;",
h:function(a){return"Stack Overflow"},
gE:function(){return},
$isu:1},
dQ:{"^":"u;a",
h:function(a){return"Reading static variable '"+this.a+"' during its initialization"}},
fk:{"^":"c;a",
h:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.a(z)}},
at:{"^":"c;a,b,c",
h:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.a(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=J.dA(x,0,75)+"..."
return y+"\n"+H.a(x)}},
e7:{"^":"c;",
h:function(a){return"IntegerDivisionByZeroException"}},
e0:{"^":"c;a,b",
h:function(a){return"Expando:"+H.a(this.a)},
i:function(a,b){var z,y
z=this.b
if(typeof z!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.q(P.aK(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return z.get(b)}y=H.bu(b,"expando$values")
return y==null?null:H.bu(y,z)},
q:function(a,b,c){var z,y
z=this.b
if(typeof z!=="string")z.set(b,c)
else{y=H.bu(b,"expando$values")
if(y==null){y=new P.c()
H.cq(b,"expando$values",y)}H.cq(y,z,c)}}},
e1:{"^":"c;"},
l:{"^":"aJ;"},
"+int":0,
E:{"^":"c;",
X:function(a,b){return H.aQ(this,b,H.F(this,"E",0),null)},
v:function(a,b){var z
for(z=this.gw(this);z.m();)b.$1(z.gn())},
b_:function(a,b){return P.bp(this,!0,H.F(this,"E",0))},
ab:function(a){return this.b_(a,!0)},
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.m();)++y
return y},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.dC("index"))
if(b<0)H.q(P.Q(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.m();){x=z.gn()
if(b===y)return x;++y}throw H.b(P.c0(b,this,"index",null,y))},
h:function(a){return P.eh(this,"(",")")}},
ei:{"^":"c;"},
k:{"^":"c;",$ask:null,$isp:1},
"+List":0,
iu:{"^":"c;",
h:function(a){return"null"}},
"+Null":0,
aJ:{"^":"c;"},
"+num":0,
c:{"^":";",
l:function(a,b){return this===b},
gp:function(a){return H.W(this)},
h:function(a){return H.aT(this)},
toString:function(){return this.h(this)}},
X:{"^":"c;"},
R:{"^":"c;"},
"+String":0,
aB:{"^":"c;S:a<",
gj:function(a){return this.a.length},
h:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
k:{
cv:function(a,b,c){var z=J.be(b)
if(!z.m())return a
if(c.length===0){do a+=H.a(z.gn())
while(z.m())}else{a+=H.a(z.gn())
for(;z.m();)a=a+c+H.a(z.gn())}return a}}}}],["","",,W,{"^":"",
c_:function(a,b,c){return W.e4(a,null,null,b,null,null,null,c).bV(new W.e3())},
e4:function(a,b,c,d,e,f,g,h){var z,y,x
z=H.h(new P.f4(H.h(new P.I(0,$.i,null),[W.af])),[W.af])
y=new XMLHttpRequest()
C.o.dw(y,"GET",a,!0)
x=H.h(new W.by(y,"load",!1),[null])
H.h(new W.aY(0,x.a,x.b,W.b2(new W.e5(z,y)),!1),[H.S(x,0)]).a_()
x=H.h(new W.by(y,"error",!1),[null])
H.h(new W.aY(0,x.a,x.b,W.b2(z.gcX()),!1),[H.S(x,0)]).a_()
y.send()
return z.a},
Z:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10>>>0)
return a^a>>>6},
cR:function(a){a=536870911&a+((67108863&a)<<3>>>0)
a^=a>>>11
return 536870911&a+((16383&a)<<15>>>0)},
h1:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.fe(a)
if(!!J.j(z).$isC)return z
return}else return a},
b2:function(a){var z=$.i
if(z===C.c)return a
return z.cU(a,!0)},
D:{"^":"aM;",$isD:1,$isaM:1,$isc:1,"%":"HTMLAppletElement|HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMenuItemElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|PluginPlaceholderElement;HTMLElement"},
hK:{"^":"D;",
h:function(a){return String(a)},
$isd:1,
"%":"HTMLAnchorElement"},
hM:{"^":"D;",
h:function(a){return String(a)},
$isd:1,
"%":"HTMLAreaElement"},
hN:{"^":"D;",$isC:1,$isd:1,"%":"HTMLBodyElement"},
dF:{"^":"D;",
bZ:function(a,b,c){return a.getContext(b)},
ao:function(a,b){return this.bZ(a,b,null)},
"%":"HTMLCanvasElement"},
dG:{"^":"d;d9:fillStyle},de:font},du:lineWidth},c9:strokeStyle}",
bA:function(a){return a.beginPath()},
cV:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
dD:function(a){return a.restore()},
dE:function(a,b){return a.rotate(b)},
c_:function(a){return a.save()},
dJ:function(a,b,c){return a.translate(b,c)},
cW:function(a){return a.closePath()},
da:function(a,b,c,d,e){a.fillText(b,c,d)},
aR:function(a,b,c,d){return this.da(a,b,c,d,null)},
"%":"CanvasRenderingContext2D"},
hP:{"^":"aS;j:length=",$isd:1,"%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
hQ:{"^":"e8;j:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
e8:{"^":"d+dP;"},
dP:{"^":"c;"},
hR:{"^":"aS;",$isd:1,"%":"DocumentFragment|ShadowRoot"},
hS:{"^":"d;",
h:function(a){return String(a)},
"%":"DOMException"},
dX:{"^":"d;N:height=,aU:left=,b0:top=,P:width=",
h:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(this.gP(a))+" x "+H.a(this.gN(a))},
l:function(a,b){var z,y,x
if(b==null)return!1
z=J.j(b)
if(!z.$isaA)return!1
y=a.left
x=z.gaU(b)
if(y==null?x==null:y===x){y=a.top
x=z.gb0(b)
if(y==null?x==null:y===x){y=this.gP(a)
x=z.gP(b)
if(y==null?x==null:y===x){y=this.gN(a)
z=z.gN(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gp:function(a){var z,y,x,w
z=J.B(a.left)
y=J.B(a.top)
x=J.B(this.gP(a))
w=J.B(this.gN(a))
return W.cR(W.Z(W.Z(W.Z(W.Z(0,z),y),x),w))},
$isaA:1,
$asaA:I.b7,
"%":";DOMRectReadOnly"},
aM:{"^":"aS;",
h:function(a){return a.localName},
gbO:function(a){return H.h(new W.cO(a,"keyup",!1),[null])},
$isaM:1,
$isc:1,
$isd:1,
$isC:1,
"%":";Element"},
hT:{"^":"bh;a2:error=","%":"ErrorEvent"},
bh:{"^":"d;","%":"AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeUnloadEvent|CloseEvent|CustomEvent|DeviceLightEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|FetchEvent|FontFaceSetLoadEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaKeyEvent|MediaKeyMessageEvent|MediaKeyNeededEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MutationEvent|OfflineAudioCompletionEvent|OverflowEvent|PageTransitionEvent|PopStateEvent|ProgressEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|TrackEvent|TransitionEvent|WebGLContextEvent|WebKitAnimationEvent|WebKitTransitionEvent|XMLHttpRequestProgressEvent;ClipboardEvent|Event|InputEvent"},
C:{"^":"d;",
cm:function(a,b,c,d){return a.addEventListener(b,H.ao(c,1),!1)},
cN:function(a,b,c,d){return a.removeEventListener(b,H.ao(c,1),!1)},
$isC:1,
"%":"MediaStream;EventTarget"},
ia:{"^":"D;j:length=","%":"HTMLFormElement"},
af:{"^":"e2;dC:responseText=",
dW:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
dw:function(a,b,c,d){return a.open(b,c,d)},
ar:function(a,b){return a.send(b)},
$isaf:1,
$isc:1,
"%":"XMLHttpRequest"},
e3:{"^":"e:17;",
$1:function(a){return J.dq(a)}},
e5:{"^":"e:2;a,b",
$1:function(a){var z,y,x,w,v
z=this.b
y=z.status
if(typeof y!=="number")return y.dK()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.a
if(y)v.aj(0,z)
else v.cY(a)}},
e2:{"^":"C;","%":";XMLHttpRequestEventTarget"},
ib:{"^":"D;",
aj:function(a,b){return a.complete.$1(b)},
"%":"HTMLImageElement"},
c1:{"^":"D;bP:readOnly}",$isc1:1,$isd:1,$isC:1,"%":"HTMLInputElement"},
bn:{"^":"f2;",
gds:function(a){return a.keyCode},
$isbn:1,
$isc:1,
"%":"KeyboardEvent"},
ii:{"^":"D;a2:error=","%":"HTMLAudioElement|HTMLMediaElement|HTMLVideoElement"},
it:{"^":"d;",$isd:1,"%":"Navigator"},
aS:{"^":"C;",
h:function(a){var z=a.nodeValue
return z==null?this.ca(a):z},
"%":"Attr|Document|HTMLDocument|XMLDocument;Node"},
ix:{"^":"D;j:length=","%":"HTMLSelectElement"},
iy:{"^":"bh;a2:error=","%":"SpeechRecognitionError"},
iC:{"^":"D;bP:readOnly}","%":"HTMLTextAreaElement"},
f2:{"^":"bh;","%":"CompositionEvent|DragEvent|FocusEvent|MSPointerEvent|MouseEvent|PointerEvent|SVGZoomEvent|TextEvent|TouchEvent|WheelEvent;UIEvent"},
iH:{"^":"C;",$isd:1,$isC:1,"%":"DOMWindow|Window"},
iL:{"^":"d;N:height=,aU:left=,b0:top=,P:width=",
h:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
l:function(a,b){var z,y,x
if(b==null)return!1
z=J.j(b)
if(!z.$isaA)return!1
y=a.left
x=z.gaU(b)
if(y==null?x==null:y===x){y=a.top
x=z.gb0(b)
if(y==null?x==null:y===x){y=a.width
x=z.gP(b)
if(y==null?x==null:y===x){y=a.height
z=z.gN(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gp:function(a){var z,y,x,w
z=J.B(a.left)
y=J.B(a.top)
x=J.B(a.width)
w=J.B(a.height)
return W.cR(W.Z(W.Z(W.Z(W.Z(0,z),y),x),w))},
$isaA:1,
$asaA:I.b7,
"%":"ClientRect"},
iM:{"^":"aS;",$isd:1,"%":"DocumentType"},
iN:{"^":"dX;",
gN:function(a){return a.height},
gP:function(a){return a.width},
"%":"DOMRect"},
iQ:{"^":"D;",$isC:1,$isd:1,"%":"HTMLFrameSetElement"},
by:{"^":"Y;a,b,c",
O:function(a,b,c,d){var z=new W.aY(0,this.a,this.b,W.b2(a),!1)
z.$builtinTypeInfo=this.$builtinTypeInfo
z.a_()
return z},
bM:function(a,b,c){return this.O(a,null,b,c)}},
cO:{"^":"by;a,b,c"},
aY:{"^":"eN;a,b,c,d,e",
aQ:function(){if(this.b==null)return
this.by()
this.b=null
this.d=null
return},
aV:function(a,b){if(this.b==null)return;++this.a
this.by()},
a7:function(a){return this.aV(a,null)},
bR:function(){if(this.b==null||this.a<=0)return;--this.a
this.a_()},
a_:function(){var z,y,x
z=this.d
y=z!=null
if(y&&this.a<=0){x=this.b
x.toString
if(y)J.df(x,this.c,z,!1)}},
by:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.dg(x,this.c,z,!1)}}},
fd:{"^":"c;a",$isC:1,$isd:1,k:{
fe:function(a){if(a===window)return a
else return new W.fd(a)}}}}],["","",,P,{"^":""}],["","",,P,{"^":"",hI:{"^":"au;",$isd:1,"%":"SVGAElement"},hJ:{"^":"eW;",$isd:1,"%":"SVGAltGlyphElement"},hL:{"^":"m;",$isd:1,"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGSetElement"},hU:{"^":"m;",$isd:1,"%":"SVGFEBlendElement"},hV:{"^":"m;",$isd:1,"%":"SVGFEColorMatrixElement"},hW:{"^":"m;",$isd:1,"%":"SVGFEComponentTransferElement"},hX:{"^":"m;",$isd:1,"%":"SVGFECompositeElement"},hY:{"^":"m;",$isd:1,"%":"SVGFEConvolveMatrixElement"},hZ:{"^":"m;",$isd:1,"%":"SVGFEDiffuseLightingElement"},i_:{"^":"m;",$isd:1,"%":"SVGFEDisplacementMapElement"},i0:{"^":"m;",$isd:1,"%":"SVGFEFloodElement"},i1:{"^":"m;",$isd:1,"%":"SVGFEGaussianBlurElement"},i2:{"^":"m;",$isd:1,"%":"SVGFEImageElement"},i3:{"^":"m;",$isd:1,"%":"SVGFEMergeElement"},i4:{"^":"m;",$isd:1,"%":"SVGFEMorphologyElement"},i5:{"^":"m;",$isd:1,"%":"SVGFEOffsetElement"},i6:{"^":"m;",$isd:1,"%":"SVGFESpecularLightingElement"},i7:{"^":"m;",$isd:1,"%":"SVGFETileElement"},i8:{"^":"m;",$isd:1,"%":"SVGFETurbulenceElement"},i9:{"^":"m;",$isd:1,"%":"SVGFilterElement"},au:{"^":"m;",$isd:1,"%":"SVGCircleElement|SVGClipPathElement|SVGDefsElement|SVGEllipseElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement|SVGRectElement|SVGSwitchElement;SVGGraphicsElement"},ic:{"^":"au;",$isd:1,"%":"SVGImageElement"},ig:{"^":"m;",$isd:1,"%":"SVGMarkerElement"},ih:{"^":"m;",$isd:1,"%":"SVGMaskElement"},iv:{"^":"m;",$isd:1,"%":"SVGPatternElement"},iw:{"^":"m;",$isd:1,"%":"SVGScriptElement"},m:{"^":"aM;",
gbO:function(a){return H.h(new W.cO(a,"keyup",!1),[null])},
$isC:1,
$isd:1,
"%":"SVGAltGlyphDefElement|SVGAltGlyphItemElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGFontElement|SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement|SVGGlyphElement|SVGHKernElement|SVGMetadataElement|SVGMissingGlyphElement|SVGStopElement|SVGStyleElement|SVGTitleElement|SVGVKernElement;SVGElement"},iA:{"^":"au;",$isd:1,"%":"SVGSVGElement"},iB:{"^":"m;",$isd:1,"%":"SVGSymbolElement"},cx:{"^":"au;","%":";SVGTextContentElement"},iD:{"^":"cx;",$isd:1,"%":"SVGTextPathElement"},eW:{"^":"cx;","%":"SVGTSpanElement|SVGTextElement;SVGTextPositioningElement"},iE:{"^":"au;",$isd:1,"%":"SVGUseElement"},iF:{"^":"m;",$isd:1,"%":"SVGViewElement"},iP:{"^":"m;",$isd:1,"%":"SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement"},iR:{"^":"m;",$isd:1,"%":"SVGCursorElement"},iS:{"^":"m;",$isd:1,"%":"SVGFEDropShadowElement"},iT:{"^":"m;",$isd:1,"%":"SVGGlyphRefElement"},iU:{"^":"m;",$isd:1,"%":"SVGMPathElement"}}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,P,{"^":"",hO:{"^":"c;"}}],["","",,P,{"^":"",
bc:function(a,b){if(typeof a!=="number")throw H.b(P.aa(a))
if(typeof b!=="number")throw H.b(P.aa(b))
if(a>b)return b
if(a<b)return a
if(typeof b==="number"){if(typeof a==="number")if(a===0)return(a+b)*a*b
if(a===0&&C.e.gbK(b)||isNaN(b))return b
return a}return a}}],["","",,H,{"^":"",cd:{"^":"d;",$iscd:1,"%":"ArrayBuffer"},bs:{"^":"d;",
cC:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.aK(b,d,"Invalid list position"))
else throw H.b(P.Q(b,0,c,d,null))},
b8:function(a,b,c,d){if(b>>>0!==b||b>c)this.cC(a,b,c,d)},
$isbs:1,
"%":"DataView;ArrayBufferView;br|ce|cg|aR|cf|ch|P"},br:{"^":"bs;",
gj:function(a){return a.length},
bw:function(a,b,c,d,e){var z,y,x
z=a.length
this.b8(a,b,z,"start")
this.b8(a,c,z,"end")
if(b>c)throw H.b(P.Q(b,0,c,null,null))
y=c-b
if(e<0)throw H.b(P.aa(e))
x=d.length
if(x-e<y)throw H.b(new P.a2("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$isbk:1,
$isbj:1},aR:{"^":"cg;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
return a[b]},
q:function(a,b,c){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
a[b]=c},
t:function(a,b,c,d,e){if(!!J.j(d).$isaR){this.bw(a,b,c,d,e)
return}this.b5(a,b,c,d,e)},
J:function(a,b,c,d){return this.t(a,b,c,d,0)}},ce:{"^":"br+ca;",$isk:1,
$ask:function(){return[P.ar]},
$isp:1},cg:{"^":"ce+bZ;"},P:{"^":"ch;",
q:function(a,b,c){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
a[b]=c},
t:function(a,b,c,d,e){if(!!J.j(d).$isP){this.bw(a,b,c,d,e)
return}this.b5(a,b,c,d,e)},
J:function(a,b,c,d){return this.t(a,b,c,d,0)},
$isk:1,
$ask:function(){return[P.l]},
$isp:1},cf:{"^":"br+ca;",$isk:1,
$ask:function(){return[P.l]},
$isp:1},ch:{"^":"cf+bZ;"},ij:{"^":"aR;",$isk:1,
$ask:function(){return[P.ar]},
$isp:1,
"%":"Float32Array"},ik:{"^":"aR;",$isk:1,
$ask:function(){return[P.ar]},
$isp:1,
"%":"Float64Array"},il:{"^":"P;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isp:1,
"%":"Int16Array"},im:{"^":"P;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isp:1,
"%":"Int32Array"},io:{"^":"P;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isp:1,
"%":"Int8Array"},ip:{"^":"P;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isp:1,
"%":"Uint16Array"},iq:{"^":"P;",
i:function(a,b){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isp:1,
"%":"Uint32Array"},ir:{"^":"P;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isp:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},is:{"^":"P;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)H.q(H.r(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isp:1,
"%":";Uint8Array"}}],["","",,H,{"^":"",
hB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,A,{"^":"",
aI:function(a,b){var z=0,y=new P.ad(),x,w=2,v,u,t,s,r,q,p,o
var $async$aI=P.an(function(c,d){if(c===1){v=d
z=w}while(true)switch(z){case 0:P.aq("-------------- getPiDigits("+H.a(a)+", "+H.a(b)+") -----------")
if(typeof a!=="number"){x=a.an()
z=1
break}else ;u=C.e.aa(Math.floor(a/1e4))
t=C.e.aa(Math.ceil((a+b)/1e4))-1
s=t-u+1
r=new Array(s)
q=u
case 3:if(!(q<=t)){z=5
break}p=q-u
z=6
return P.n(A.b1(q),$async$aI,y)
case 6:o=d
if(p>=s){x=H.f(r,p)
z=1
break}else ;r[p]=o
case 4:++q
z=3
break
case 5:x=C.b.C(C.b.b4(C.d.aS(r,""),C.e.b2(a,1e4)),0,b)
z=1
break
case 1:return P.n(x,0,y,null)
case 2:return P.n(v,1,y)}})
return P.n(null,$async$aI,y,null)},
b5:function(a){var z=0,y=new P.ad(),x,w=2,v,u,t
var $async$b5=P.an(function(b,c){if(b===1){v=c
z=w}while(true)switch(z){case 0:u=J
t=C.z
z=3
return P.n(W.c_("d2i/"+C.b.C(a,0,2)+"-d2i.json",null,null),$async$b5,y)
case 3:x=u.bN(t.d0(c),a)
z=1
break
case 1:return P.n(x,0,y,null)
case 2:return P.n(v,1,y)}})
return P.n(null,$async$b5,y,null)},
b1:function(a){var z=0,y=new P.ad(),x,w=2,v,u,t
var $async$b1=P.an(function(b,c){if(b===1){v=c
z=w}while(true)switch(z){case 0:u=C.b.a6(C.a.h(C.a.U(a,100)),2,"0")
t=C.b.a6(C.a.dI(a,0),4,"0")
z=3
return P.n(W.c_("pi10k/"+u+"/pi10k"+t,null,null),$async$b1,y)
case 3:x=c
z=1
break
case 1:return P.n(x,0,y,null)
case 2:return P.n(v,1,y)}})
return P.n(null,$async$b1,y,null)}}],["","",,N,{"^":"",eL:{"^":"c;"},eK:{"^":"c;a,b,c,d,e,f",
bG:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=this.d
if(typeof z!=="number")return H.J(z)
y=6.283185307179586/z
x=this.a
w=1-z*this.c/x
for(z=this.b,v=0;v<x;++v){u=v*z
t=b+u*y
s=Math.pow(w,u)
u=Math.sin(t)
r=Math.cos(t)
q=this.e
if(typeof q!=="number")return q.b3()
a.d8(s*u,s*-r,t,q*s,v)}},
aH:function(a,b){return 3.141592653589793/a*Math.pow(1-a*this.c/this.a,b)},
cu:function(){var z,y,x,w
for(z=10;z<=110;++z){y=this.aH(z,0)
x=this.aH(z,z)
w=3.141592653589793/z
if(y-x-w*y-w*x>2*(w*this.aH(z,C.e.aa(Math.ceil(z*0.5)))))return z}return}}}]]
setupProgram(dart,0)
J.j=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c7.prototype
return J.c6.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.ek.prototype
if(typeof a=="boolean")return J.ej.prototype
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.c)return a
return J.b9(a)}
J.y=function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.c)return a
return J.b9(a)}
J.b8=function(a){if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.c)return a
return J.b9(a)}
J.aH=function(a){if(typeof a=="number")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aC.prototype
return a}
J.hg=function(a){if(typeof a=="number")return J.aw.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aC.prototype
return a}
J.hh=function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aC.prototype
return a}
J.o=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.c)return a
return J.b9(a)}
J.N=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hg(a).I(a,b)}
J.T=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.j(a).l(a,b)}
J.de=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aH(a).ad(a,b)}
J.bM=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aH(a).Z(a,b)}
J.bN=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hw(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.y(a).i(a,b)}
J.df=function(a,b,c,d){return J.o(a).cm(a,b,c,d)}
J.dg=function(a,b,c,d){return J.o(a).cN(a,b,c,d)}
J.dh=function(a){return J.o(a).bA(a)}
J.di=function(a,b,c,d,e){return J.o(a).cV(a,b,c,d,e)}
J.dj=function(a){return J.o(a).cW(a)}
J.dk=function(a,b){return J.o(a).aj(a,b)}
J.dl=function(a,b){return J.b8(a).u(a,b)}
J.bO=function(a,b,c,d){return J.o(a).aR(a,b,c,d)}
J.dm=function(a,b){return J.b8(a).v(a,b)}
J.O=function(a){return J.o(a).ga2(a)}
J.B=function(a){return J.j(a).gp(a)}
J.be=function(a){return J.b8(a).gw(a)}
J.dn=function(a){return J.o(a).gds(a)}
J.a_=function(a){return J.y(a).gj(a)}
J.dp=function(a){return J.o(a).gbO(a)}
J.dq=function(a){return J.o(a).gdC(a)}
J.dr=function(a,b){return J.o(a).ao(a,b)}
J.ds=function(a,b){return J.b8(a).X(a,b)}
J.dt=function(a){return J.o(a).dD(a)}
J.du=function(a,b){return J.o(a).dE(a,b)}
J.dv=function(a){return J.o(a).c_(a)}
J.a9=function(a,b){return J.o(a).ar(a,b)}
J.bP=function(a,b){return J.o(a).sd9(a,b)}
J.dw=function(a,b){return J.o(a).sde(a,b)}
J.dx=function(a,b){return J.o(a).sdu(a,b)}
J.dy=function(a,b){return J.o(a).sbP(a,b)}
J.dz=function(a,b){return J.o(a).sc9(a,b)}
J.dA=function(a,b,c){return J.hh(a).C(a,b,c)}
J.U=function(a){return J.j(a).h(a)}
J.dB=function(a,b,c){return J.o(a).dJ(a,b,c)}
var $=I.p
C.n=W.dF.prototype
C.f=W.dG.prototype
C.o=W.af.prototype
C.p=J.d.prototype
C.d=J.av.prototype
C.q=J.c6.prototype
C.a=J.c7.prototype
C.e=J.aw.prototype
C.b=J.ax.prototype
C.y=J.ay.prototype
C.B=J.eA.prototype
C.C=J.aC.prototype
C.k=new H.bV()
C.l=new P.ey()
C.m=new P.fg()
C.c=new P.fN()
C.h=new P.ae(0)
C.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.t=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.i=function getTagFallback(o) {
  var constructor = o.constructor;
  if (typeof constructor == "function") {
    var name = constructor.name;
    if (typeof name == "string" &&
        name.length > 2 &&
        name !== "Object" &&
        name !== "Function.prototype") {
      return name;
    }
  }
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.j=function(hooks) { return hooks; }

C.u=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.w=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.v=function() {
  function typeNameInChrome(o) {
    var constructor = o.constructor;
    if (constructor) {
      var name = constructor.name;
      if (name) return name;
    }
    var s = Object.prototype.toString.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = Object.prototype.toString.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: typeNameInChrome,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.x=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.z=new P.eq(null,null)
C.A=new P.er(null)
$.co="$cachedFunction"
$.cp="$cachedInvocation"
$.K=0
$.ac=null
$.bQ=null
$.bI=null
$.d_=null
$.d9=null
$.b6=null
$.ba=null
$.bJ=null
$.a5=null
$.ak=null
$.al=null
$.bE=!1
$.i=C.c
$.bY=0
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){$dart_deferred_initializers$[a]($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryUris={}
init.deferredLibraryHashes={};(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["bT","$get$bT",function(){return init.getIsolateTag("_$dart_dartClosure")},"c2","$get$c2",function(){return H.ef()},"c3","$get$c3",function(){if(typeof WeakMap=="function")var z=new WeakMap()
else{z=$.bY
$.bY=z+1
z="expando$key$"+z}return new P.e0(null,z)},"cy","$get$cy",function(){return H.L(H.aW({
toString:function(){return"$receiver$"}}))},"cz","$get$cz",function(){return H.L(H.aW({$method$:null,
toString:function(){return"$receiver$"}}))},"cA","$get$cA",function(){return H.L(H.aW(null))},"cB","$get$cB",function(){return H.L(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"cF","$get$cF",function(){return H.L(H.aW(void 0))},"cG","$get$cG",function(){return H.L(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"cD","$get$cD",function(){return H.L(H.cE(null))},"cC","$get$cC",function(){return H.L(function(){try{null.$method$}catch(z){return z.message}}())},"cI","$get$cI",function(){return H.L(H.cE(void 0))},"cH","$get$cH",function(){return H.L(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bx","$get$bx",function(){return P.f5()},"am","$get$am",function(){return[]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[null,0]
init.types=[{func:1},{func:1,v:true},{func:1,args:[,]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,P.X]},{func:1,v:true,args:[P.c],opt:[P.X]},{func:1,ret:P.l,args:[P.R]},{func:1,ret:P.R,args:[P.l]},{func:1,args:[,P.R]},{func:1,args:[P.R]},{func:1,ret:P.G,args:[W.bn]},{func:1,args:[{func:1,v:true}]},{func:1,args:[P.l,,]},{func:1,v:true,args:[,],opt:[P.X]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[,P.X]},{func:1,args:[,,]},{func:1,args:[W.af]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}else if(x===y)H.hG(d||a)
return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.b7=a.b7
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.db(A.d2(),b)},[])
else (function(b){H.db(A.d2(),b)})([])})})()