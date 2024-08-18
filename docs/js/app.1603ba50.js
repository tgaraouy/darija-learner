(()=>{"use strict";var e={5052:(e,n,r)=>{r(3792),r(3362),r(9085),r(9391);var t=r(3751),u=r(641);function a(e,n,r,t,a,l){var i=(0,u.g2)("DarijaLearner"),o=(0,u.g2)("v-main"),c=(0,u.g2)("v-app");return(0,u.uX)(),(0,u.Wv)(c,null,{default:(0,u.k6)((function(){return[(0,u.bF)(o,null,{default:(0,u.k6)((function(){return[(0,u.bF)(i)]})),_:1})]})),_:1})}var l=r(33),i=(0,u.Lk)("h1",{class:"text-center mb-4"},"Learn Darija",-1),o=(0,u.Lk)("strong",null,"Darija:",-1),c=(0,u.Lk)("strong",null,"Phonetic:",-1),s=(0,u.Lk)("strong",null,"Arabic Script:",-1),f=(0,u.Lk)("strong",null,"MSA Equivalent:",-1),v=(0,u.Lk)("strong",null,"Region:",-1);function d(e,n,r,t,a,d){var p=(0,u.g2)("v-card-title"),k=(0,u.g2)("v-card-text"),h=(0,u.g2)("v-btn"),b=(0,u.g2)("v-card-actions"),g=(0,u.g2)("v-card"),A=(0,u.g2)("v-overlay"),_=(0,u.g2)("v-list-item-title"),W=(0,u.g2)("v-icon"),m=(0,u.g2)("v-list-item"),y=(0,u.g2)("v-list"),F=(0,u.g2)("v-col"),w=(0,u.g2)("v-expansion-panel-title"),x=(0,u.g2)("v-expansion-panel-text"),S=(0,u.g2)("v-expansion-panel"),j=(0,u.g2)("v-expansion-panels"),E=(0,u.g2)("v-row"),L=(0,u.g2)("v-container");return(0,u.uX)(),(0,u.Wv)(L,null,{default:(0,u.k6)((function(){return[e.hasUserInteracted?(0,u.Q3)("",!0):((0,u.uX)(),(0,u.Wv)(A,{key:0,"model-value":!e.hasUserInteracted},{default:(0,u.k6)((function(){return[(0,u.bF)(g,null,{default:(0,u.k6)((function(){return[(0,u.bF)(p,null,{default:(0,u.k6)((function(){return[(0,u.eW)("Welcome to Darija Learner!")]})),_:1}),(0,u.bF)(k,null,{default:(0,u.k6)((function(){return[(0,u.eW)(" Click the button below to enable audio features. ")]})),_:1}),(0,u.bF)(b,null,{default:(0,u.k6)((function(){return[(0,u.bF)(h,{color:"primary",onClick:e.initializeAudio},{default:(0,u.k6)((function(){return[(0,u.eW)(" Enable Audio ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["model-value"])),i,e.currentWord?((0,u.uX)(),(0,u.Wv)(E,{key:1},{default:(0,u.k6)((function(){return[(0,u.bF)(F,{cols:"6"},{default:(0,u.k6)((function(){return[(0,u.bF)(g,null,{default:(0,u.k6)((function(){return[(0,u.bF)(p,null,{default:(0,u.k6)((function(){return[(0,u.eW)("Usage Examples")]})),_:1}),(0,u.bF)(k,null,{default:(0,u.k6)((function(){return[(0,u.bF)(y,null,{default:(0,u.k6)((function(){return[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.currentWord.usageDarija,(function(n,r){return(0,u.uX)(),(0,u.Wv)(m,{key:r},{append:(0,u.k6)((function(){return[(0,u.bF)(h,{icon:"",onClick:function(r){return e.speakExample(n)},disabled:e.isSpeaking||!e.isSpeechAvailable},{default:(0,u.k6)((function(){return[(0,u.bF)(W,null,{default:(0,u.k6)((function(){return[(0,u.eW)("mdi-volume-high")]})),_:1})]})),_:2},1032,["onClick","disabled"])]})),default:(0,u.k6)((function(){return[(0,u.bF)(_,null,{default:(0,u.k6)((function(){return[(0,u.eW)((0,l.v_)(n),1)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})]})),_:1})]})),_:1}),(0,u.bF)(h,{onClick:e.speakWord,color:"primary",class:"mr-2 mt-4",disabled:e.isSpeaking||!e.isSpeechAvailable},{default:(0,u.k6)((function(){return[(0,u.eW)(" Speak Word ")]})),_:1},8,["onClick","disabled"])]})),_:1}),(0,u.bF)(F,{cols:"6"},{default:(0,u.k6)((function(){return[(0,u.bF)(g,null,{default:(0,u.k6)((function(){return[(0,u.bF)(p,null,{default:(0,u.k6)((function(){return[(0,u.eW)("Word Information")]})),_:1}),(0,u.bF)(k,null,{default:(0,u.k6)((function(){return[(0,u.Lk)("p",null,[o,(0,u.eW)(" "+(0,l.v_)(e.currentWord.darija),1)]),(0,u.Lk)("p",null,[c,(0,u.eW)(" "+(0,l.v_)(e.currentWord.phonetic),1)]),(0,u.Lk)("p",null,[s,(0,u.eW)(" "+(0,l.v_)(e.currentWord.arabicScript),1)]),(0,u.Lk)("p",null,[f,(0,u.eW)(" "+(0,l.v_)(e.currentWord.msaEquivalent),1)]),(0,u.Lk)("p",null,[v,(0,u.eW)(" "+(0,l.v_)(e.currentWord.region),1)]),(0,u.bF)(j,null,{default:(0,u.k6)((function(){return[(0,u.bF)(S,null,{default:(0,u.k6)((function(){return[(0,u.bF)(w,null,{default:(0,u.k6)((function(){return[(0,u.eW)("Usage (French)")]})),_:1}),(0,u.bF)(x,null,{default:(0,u.k6)((function(){return[(0,u.Lk)("ul",null,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.currentWord.usageFrench,(function(e,n){return(0,u.uX)(),(0,u.CE)("li",{key:n},(0,l.v_)(e),1)})),128))])]})),_:1})]})),_:1}),(0,u.bF)(S,null,{default:(0,u.k6)((function(){return[(0,u.bF)(w,null,{default:(0,u.k6)((function(){return[(0,u.eW)("Usage (English)")]})),_:1}),(0,u.bF)(x,null,{default:(0,u.k6)((function(){return[(0,u.Lk)("ul",null,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.currentWord.usageEnglish,(function(e,n){return(0,u.uX)(),(0,u.CE)("li",{key:n},(0,l.v_)(e),1)})),128))])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})):(0,u.Q3)("",!0),(0,u.bF)(h,{onClick:e.nextWord,color:"info",class:"mt-4"},{default:(0,u.k6)((function(){return[(0,u.eW)("Next Word")]})),_:1},8,["onClick"])]})),_:1})}var p=r(4048),k=r(388),h=(r(113),r(6099),r(1392),r(953)),b=r(4335);const g=(0,u.pM)({name:"DarijaLearner",setup:function(){var e=(0,h.KR)([]),n=(0,h.KR)(0),r=(0,h.KR)(!1),t=(0,h.KR)(!1),a=(0,h.KR)(!1),l=function(){var n=(0,k.A)((0,p.A)().mark((function n(){var r;return(0,p.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.A.get("http://localhost:3000/words");case 3:r=n.sent,e.value=r.data,n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.error("Error fetching words:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();(0,u.sV)((function(){l(),i()}));var i=function(){"speechSynthesis"in window?speechSynthesis.onvoiceschanged=function(){var e=speechSynthesis.getVoices();t.value=e.length>0}:t.value=!1},o=(0,u.EW)((function(){return e.value[n.value]||null})),c=function(){n.value=(n.value+1)%e.value.length},s=function(){a.value=!0;var e=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");e.play()["catch"]((function(e){return console.error("Silent audio error:",e)}))},f=function(e){return new Promise((function(n,r){if(!t.value)return console.warn("Speech synthesis is not available"),void r("Speech synthesis not available");if(!a.value)return console.warn("User interaction required"),void r("User interaction required");var u=new SpeechSynthesisUtterance(e),l=speechSynthesis.getVoices(),i=l.find((function(e){return"ar-MA"===e.lang})),o=l.find((function(e){return e.lang.startsWith("ar")})),c=l.find((function(e){return"en-US"===e.lang}));u.voice=i||o||c||null,u.onend=n,u.onerror=r,speechSynthesis.speak(u)}))},v=function(){var e=(0,k.A)((0,p.A)().mark((function e(){return(0,p.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(o.value&&t.value&&a.value)){e.next=13;break}return e.prev=1,r.value=!0,e.next=5,f(o.value.darija);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),console.error("Speech synthesis error:",e.t0);case 10:return e.prev=10,r.value=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,k.A)((0,p.A)().mark((function e(n){return(0,p.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.value||!a.value){e.next=13;break}return e.prev=1,r.value=!0,e.next=5,f(n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),console.error("Speech synthesis error:",e.t0);case 10:return e.prev=10,r.value=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(n){return e.apply(this,arguments)}}();return{currentWord:o,nextWord:c,speakWord:v,speakExample:d,isSpeaking:r,isSpeechAvailable:t,hasUserInteracted:a,initializeAudio:s}}});var A=r(6262);const _=(0,A.A)(g,[["render",d]]),W=_,m=(0,u.pM)({name:"App",components:{DarijaLearner:W}}),y=(0,A.A)(m,[["render",a]]),F=y;r(5524);var w=r(7768),x=r(1920),S=r(5741),j=(0,w.$N)({components:x,directives:S});const E=j;(0,t.Ef)(F).use(E).mount("#app")}},n={};function r(t){var u=n[t];if(void 0!==u)return u.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(n,t,u,a)=>{if(!t){var l=1/0;for(s=0;s<e.length;s++){for(var[t,u,a]=e[s],i=!0,o=0;o<t.length;o++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](t[o])))?t.splice(o--,1):(i=!1,a<l&&(l=a));if(i){e.splice(s--,1);var c=u();void 0!==c&&(n=c)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,u,a]}})(),(()=>{r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={524:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var u,a,[l,i,o]=t,c=0;if(l.some((n=>0!==e[n]))){for(u in i)r.o(i,u)&&(r.m[u]=i[u]);if(o)var s=o(r)}for(n&&n(t);c<l.length;c++)a=l[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},t=self["webpackChunkdarija_learning_app"]=self["webpackChunkdarija_learning_app"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var t=r.O(void 0,[504],(()=>r(5052)));t=r.O(t)})();
//# sourceMappingURL=app.1603ba50.js.map