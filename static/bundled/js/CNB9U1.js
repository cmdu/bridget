import{u as e,o as t,d as n,f as r,i,g as s,h as o,b as a,s as l,F as c,t as u,j as d,$ as g,p as f,q as p,r as y,c as h,v,w as b,l as m,x as w,n as O,e as j,S as x,_ as A}from"./main.js";var I=u("<div class=collection>"),S=u("<img>");function $(e,t){return Math.floor(Math.random()*(t-e+1))+e}function k(u){const d=Array(u.ijs.length),[g,{setIndex:f}]=e(),p=e=>{u.isAnimating()||(f(e),u.setIsOpen(!0))};return t((()=>{d.forEach(((e,t)=>{var n,r;t<5&&(e.src=e.dataset.src),e.addEventListener("click",(()=>{p(t)}),{passive:!0}),e.addEventListener("keydown",(()=>{p(t)}),{passive:!0}),n=e,r=e=>!(e.intersectionRatio<=0||(t+5<d.length&&(d[t+5].src=d[t+5].dataset.src),0)),new IntersectionObserver(((e,t)=>{for(const n of e)if(r(n)){t.disconnect();break}})).observe(n)}))})),n(r((()=>{u.isOpen()}),(()=>{u.isOpen()||d[g().index].scrollIntoView({behavior:"auto",block:"center"})}),{defer:!0})),y=I(),i(y,s(c,{get each(){return u.ijs},children:(e,t)=>(()=>{var n=S();n.$$keydown=()=>{p(t())},n.$$click=()=>{p(t())};var r=d[t()];return"function"==typeof r?o(r,n):d[t()]=n,a((r=>{var i=e.loImgH,s=e.loImgW,o=e.loUrl,a=e.alt,c=`translate3d(${0!==t()?$(-25,25):0}%, ${0!==t()?$(-30,30):0}%, 0)`;return i!==r.e&&l(n,"height",r.e=i),s!==r.t&&l(n,"width",r.t=s),o!==r.a&&l(n,"data-src",r.a=o),a!==r.o&&l(n,"alt",r.o=a),c!==r.i&&(null!=(r.i=c)?n.style.setProperty("transform",c):n.style.removeProperty("transform")),r}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),n})()})),y;var y}d(["click","keydown"]);const P=Symbol("store-raw"),T=Symbol("store-node"),_=Symbol("store-has"),C=Symbol("store-self");function E(e){let t=e[g];if(!t&&(Object.defineProperty(e,g,{value:t=new Proxy(e,F)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let i=0,s=n.length;i<s;i++){const s=n[i];r[s].get&&Object.defineProperty(e,s,{enumerable:r[s].enumerable,get:r[s].get.bind(t)})}}return t}function D(e){let t;return null!=e&&"object"==typeof e&&(e[g]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function L(e,t=new Set){let n,r,i,s;if(n=null!=e&&e[P])return n;if(!D(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,s=e.length;n<s;n++)i=e[n],(r=L(i,t))!==i&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let a=0,l=n.length;a<l;a++)s=n[a],o[s].get||(i=e[s],(r=L(i,t))!==i&&(e[s]=r))}return e}function M(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function R(e,t,n){if(e[t])return e[t];const[r,i]=h(n,{equals:!1,internal:!0});return r.$=i,e[t]=r}function U(e){p()&&R(M(e,T),C)()}const F={get(e,t,n){if(t===P)return e;if(t===g)return n;if(t===f)return U(e),n;const r=M(e,T),i=r[t];let s=i?i():e[t];if(t===T||t===_||"__proto__"===t)return s;if(!i){const n=Object.getOwnPropertyDescriptor(e,t);!p()||"function"==typeof s&&!e.hasOwnProperty(t)||n&&n.get||(s=R(r,t,s)())}return D(s)?E(s):s},has:(e,t)=>t===P||t===g||t===f||t===T||t===_||"__proto__"===t||(p()&&R(M(e,_),t)(),t in e),set:()=>!0,deleteProperty:()=>!0,ownKeys:function(e){return U(e),Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.get&&n.configurable&&t!==g&&t!==T?(delete n.value,delete n.writable,n.get=()=>e[g][t],n):n}};function q(e,t,n,r=!1){if(!r&&e[t]===n)return;const i=e[t],s=e.length;void 0===n?(delete e[t],e[_]&&e[_][t]&&void 0!==i&&e[_][t].$()):(e[t]=n,e[_]&&e[_][t]&&void 0===i&&e[_][t].$());let o,a=M(e,T);if((o=R(a,t,i))&&o.$((()=>n)),Array.isArray(e)&&e.length!==s){for(let t=e.length;t<s;t++)(o=a[t])&&o.$();(o=R(a,"length",s))&&o.$(e.length)}(o=a[C])&&o.$()}function z(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const i=n[r];q(e,i,t[i])}}function H(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();const s=typeof r,o=Array.isArray(e);if(Array.isArray(r)){for(let i=0;i<r.length;i++)H(e,[r[i]].concat(t),n);return}if(o&&"function"===s){for(let i=0;i<e.length;i++)r(e[i],i)&&H(e,[i].concat(t),n);return}if(o&&"object"===s){const{from:i=0,to:s=e.length-1,by:o=1}=r;for(let r=i;r<=s;r+=o)H(e,[r].concat(t),n);return}if(t.length>1)return void H(e[r],t,[r].concat(n));i=e[r],n=[r].concat(n)}let s=t[0];"function"==typeof s&&(s=s(i,n),s===i)||void 0===r&&null==s||(s=L(s),void 0===r||D(i)&&D(s)&&!Array.isArray(s)?z(i,s):q(e,r,s))}function K(...[e,t]){const n=L(e||{}),r=Array.isArray(n);return[E(n),function(...e){y((()=>{r&&1===e.length?function(e,t){if("function"==typeof t&&(t=t(e)),t=L(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const r=t[n];e[n]!==r&&q(e,n,r)}q(e,"length",r)}else z(e,t)}(n,e[0]):H(n,e)}))}]}var V=u("<div class=slideContainer><img><div class=loadingText>");function W(n){let r,s,a;const[l]=e();return t((()=>{m().then((e=>{a=e})).catch((e=>{console.log(e)})),null==r||r.addEventListener("load",(()=>{w(r),w(s),l().index!==n.ij.index?(a.set(r,{opacity:1}),a.set(s,{opacity:0})):(a.to(r,{opacity:1,delay:.5,duration:.5,ease:"power3.out"}),a.to(s,{opacity:0,duration:.5,ease:"power3.in"}))}),{once:!0,passive:!0})})),d=(u=(c=V()).firstChild).nextSibling,"function"==typeof r?o(r,u):r=u,v(u,b((()=>n.load&&{src:n.ij.hiUrl}),{get height(){return n.ij.hiImgH},get width(){return n.ij.hiImgW},get"data-src"(){return n.ij.hiUrl},get alt(){return n.ij.alt},style:{opacity:0}}),!1,!1),"function"==typeof s?o(s,d):s=d,i(d,(()=>n.loadingText)),c;var c,u,d}var B=u("<div class=nav><div><span class=num></span><span class=num></span><span class=num></span><span class=num></span><span>/</span><span class=num></span><span class=num></span><span class=num></span><span class=num></span></div><div>");function G(e){return e.charAt(0).toUpperCase()+e.slice(1)}function J(t){const[n]=e(),r=O((()=>j(n().index+1))),s=O((()=>j(n().length))),o=()=>{t.isAnimating()||t.setIsOpen(!1)};return h=(y=(p=(f=(g=(d=(u=(c=(l=(a=B()).firstChild).firstChild).nextSibling).nextSibling).nextSibling).nextSibling.nextSibling).nextSibling).nextSibling).nextSibling,v=l.nextSibling,i(c,(()=>r()[0])),i(u,(()=>r()[1])),i(d,(()=>r()[2])),i(g,(()=>r()[3])),i(f,(()=>s()[0])),i(p,(()=>s()[1])),i(y,(()=>s()[2])),i(h,(()=>s()[3])),v.$$keydown=o,v.$$click=o,i(v,(()=>G(t.closeText))),a;var a,l,c,u,d,g,f,p,y,h,v}d(["click","keydown"]);var N=u("<div class=gallery><div class=galleryInner><div class=swiper-wrapper>"),Q=u("<div class=curtain>"),X=u("<div class=swiper-slide>");function Y(a){let l,u,d,g,f;const p=G(a.loadingText);let y=-1,v=!1,b="none";const[O,{setIndex:j}]=e(),[I,S]=h(!1),[$,k]=K(Array(a.ijs.length).fill(!1));return t((()=>{window.addEventListener("touchstart",(()=>{m().then((e=>{l=e})).catch((e=>{console.log(e)})),async function(){return(await A((()=>import("./DDLEO-.js")),__vite__mapDeps([]))).Swiper}().then((e=>{w(f),u=new e(f,{spaceBetween:20}),u.on("slideChange",(({realIndex:e})=>{j(e)}))})).catch((e=>{console.log(e)})),S(!0)}),{once:!0,passive:!0}),v=!0})),n(r((()=>{O()}),(()=>{const e=O().index;var t;e!==y&&(b=-1===y?"none":e<y?"prev":e>y?"next":"none",t=e,(()=>{let e=[];const t=O(),n=t.index,r=Math.min(n+1,t.length-1),i=Math.max(n-1,0);switch(b){case"next":e=[r];break;case"prev":e=[i];break;case"none":e=[n,r,i]}var s;k((s=e).length<2?s:[...new Set(s)],!0)})(),u.slideTo(t,0),y=e)}))),n(r((()=>{a.isOpen()}),(()=>{a.isAnimating()||(a.isOpen()?I()&&v&&(a.setIsAnimating(!0),w(d),w(g),l.to(d,{opacity:1,duration:1}),l.to(g,{y:0,ease:"power3.inOut",duration:1,delay:.4}),setTimeout((()=>{a.setScrollable(!1),a.setIsAnimating(!1)}),1200)):(a.setIsAnimating(!0),w(g),w(d),l.to(g,{y:"100%",ease:"power3.inOut",duration:1}),l.to(d,{opacity:0,duration:1.2,delay:.4}),setTimeout((()=>{a.setScrollable(!0),a.setIsAnimating(!1),y=-1}),1400)))}),{defer:!0})),[(P=N(),T=P.firstChild,_=T.firstChild,"function"==typeof g?o(g,P):g=P,"function"==typeof f?o(f,T):f=T,i(_,s(x,{get when(){return I()},get children(){return s(c,{get each(){return a.ijs},children:(e,t)=>{return n=X(),i(n,s(W,{get load(){return $[t()]},ij:e,loadingText:p})),n;var n}})}})),i(P,s(J,{get closeText(){return a.closeText},get isAnimating(){return a.isAnimating},get setIsOpen(){return a.setIsOpen}}),null),P),(C=Q(),"function"==typeof d?o(d,C):d=C,C)];var P,T,_,C}function Z(e){const[t,n]=h(!1),[r,i]=h(!1);return s(x,{get when(){return e.ijs.length>0},get children(){return[s(k,{get ijs(){return e.ijs},isAnimating:r,isOpen:t,setIsOpen:n}),s(Y,{get ijs(){return e.ijs},get closeText(){return e.closeText},get loadingText(){return e.loadingText},isAnimating:r,setIsAnimating:i,isOpen:t,setIsOpen:n,get setScrollable(){return e.setScrollable}})]}})}export{Z as default};function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
