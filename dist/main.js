!function(n){var e={};function r(a){if(e[a])return e[a].exports;var t=e[a]={i:a,l:!1,exports:{}};return n[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=e,r.d=function(n,e,a){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)r.d(a,t,function(e){return n[e]}.bind(null,t));return a},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=6)}([function(n,e,r){var a=r(1),t=r(2);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var o={insert:"head",singleton:!1},i=(a(t,o),t.locals?t.locals:{});n.exports=i},function(n,e,r){"use strict";var a,t=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function s(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function p(n,e){for(var r={},a=[],t=0;t<n.length;t++){var o=n[t],p=e.base?o[0]+e.base:o[0],l=r[p]||0,h="".concat(p," ").concat(l);r[p]=l+1;var d=s(h),c={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(c)):i.push({identifier:h,updater:E(c,e),references:1}),a.push(h)}return a}function l(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var t=r.nc;t&&(a.nonce=t)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var h,d=(h=[],function(n,e){return h[n]=e,h.filter(Boolean).join("\n")});function c(n,e,r,a){var t=r?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=d(e,t);else{var o=document.createTextNode(t),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}function m(n,e,r){var a=r.css,t=r.media,o=r.sourceMap;if(t?n.setAttribute("media",t):n.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var u=null,f=0;function E(n,e){var r,a,t;if(e.singleton){var o=f++;r=u||(u=l(e)),a=c.bind(null,r,o,!1),t=c.bind(null,r,o,!0)}else r=l(e),a=m.bind(null,r,e),t=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else t()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=t());var r=p(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<r.length;a++){var t=s(r[a]);i[t].references--}for(var o=p(n,e),l=0;l<r.length;l++){var h=s(r[l]);0===i[h].references&&(i[h].updater(),i.splice(h,1))}r=o}}}},function(n,e,r){var a=r(3),t=r(4),o=r(5);e=a(!1);var i=t(o);e.push([n.i,"main {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  height: 100%; }\r\n  main div {\r\n    display: flex;\r\n    border: 4px solid black;\r\n    position: absolute;\r\n    background-color: #faf3eb;\r\n    color: white;\r\n    align-items: center;\r\n    justify-content: center; }\r\n    @media screen and (max-width: 90em) {\r\n      main div {\r\n        height: 62.1%; } }\r\n    main div p {\r\n      padding: 2em;\r\n      font-size: 1.5em; }\r\n    main div a {\r\n      font-size: 1.2em;\r\n      border: 3px solid;\r\n      padding: 0.5em;\r\n      border: 2px solid black;\r\n      text-transform: uppercase; }\r\n      @media screen and (max-width: 90em) {\r\n        main div a {\r\n          font-size: 13px; } }\r\n  main #div-1 {\r\n    height: 41%;\r\n    width: 36%;\r\n    top: -6px;\r\n    position: relative;\r\n    flex-direction: column;\r\n    z-index: 1;\r\n    color: black;\r\n    font-family: 'Dosis', sans-serif; }\r\n    @media screen and (max-width: 90em) {\r\n      main #div-1 P {\r\n        font-size: 16px; } }\r\n  main #paralax-1 {\r\n    height: 70%;\r\n    width: 65%;\r\n    z-index: 2;\r\n    left: 35%;\r\n    bottom: -55%;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.329)), url(/src/assets/img/foto1.jpg);\r\n    /* Set a specific height */\r\n    min-height: 500px;\r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover; }\r\n    main #paralax-1 p {\r\n      letter-spacing: 10px;\r\n      font-size: 5.5em;\r\n      padding: 29px;\r\n      font-weight: bold;\r\n      border: 14px solid white; }\r\n  main #paralax-2 {\r\n    top: 140%;\r\n    height: 60%;\r\n    width: 68%;\r\n    z-index: 3;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.329)), url("+i+");\r\n    /* Set a specific height */\r\n    min-height: 500px;\r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover; }\r\n    main #paralax-2 p {\r\n      letter-spacing: 10px;\r\n      font-size: 5.5em;\r\n      padding: 29px;\r\n      font-weight: bold;\r\n      border: 14px solid white; }\r\n  main #div-4 {\r\n    height: 46%;\r\n    width: 33%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Dosis', sans-serif;\r\n    z-index: 1;\r\n    top: 154%;\r\n    right: 0%;\r\n    color: black; }\r\n    @media screen and (max-width: 90em) {\r\n      main #div-4 {\r\n        height: 62.1%; }\r\n        main #div-4 p {\r\n          font-size: 16px; } }\r\n\r\n/* Nav */\r\n/* footer */\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  background-color: rgba(0, 10, 15, 0.753);\r\n  z-index: 5;\r\n  height: 8%;\r\n  color: white; }\r\n  footer .icons a {\r\n    background-image: url(/src/assets/img/facebook.svg); }\r\n    footer .icons a img {\r\n      padding: 0 3px;\r\n      height: 25px; }\r\n\r\nnav {\r\n  display: flex;\r\n  color: white;\r\n  -webkit-box-shadow: inset 0px 111px 51px -28px rgba(0, 0, 0, 0.84);\r\n  -moz-box-shadow: inset 0px 111px 51px -28px rgba(0, 0, 0, 0.84);\r\n  box-shadow: inset 0px 111px 51px -28px rgba(0, 0, 0, 0.84); }\r\n  nav .trigger {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 3%;\r\n    z-index: 4; }\r\n  nav .option1 {\r\n    transition: background 280ms ease-in;\r\n    animation: slide 2s ease;\r\n    --bg-color: rgba(0, 0, 0, 0);\r\n    position: fixed;\r\n    top: 0;\r\n    display: flex;\r\n    width: 100%;\r\n    z-index: 5;\r\n    background-color: var(--bg-color);\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    align-items: center;\r\n    margin-top: 0; }\r\n@keyframes slide {\r\n  0% {\r\n    transform: translate(0, 20px); }\r\n  100% {\r\n    transform: translate(0, 0); } }\r\n    nav .option1 a {\r\n      height: 5%;\r\n      color: white;\r\n      text-decoration: none; }\r\n      nav .option1 a:hover {\r\n        color: #cb8820; }\r\n    nav .option1 #logo {\r\n      --lg-h: 41%;\r\n      --lg-w: 15%;\r\n      --border: 4px;\r\n      display: flex;\r\n      color: white;\r\n      border: var(--border) solid white;\r\n      text-align: center;\r\n      margin: 25px 48px;\r\n      width: var(--lg-w);\r\n      height: var(--lg-h);\r\n      letter-spacing: 5px;\r\n      padding: 1em;\r\n      line-height: 42px;\r\n      animation: slide 2s ease; }\r\n@keyframes slide {\r\n  0% {\r\n    transform: translate(0, 20px); }\r\n  100% {\r\n    transform: translate(0, 0); } }\r\n      @media screen and (max-width: 90em) {\r\n        nav .option1 #logo {\r\n          font-size: 20px; } }\r\n    nav .option1 #index {\r\n      display: flex;\r\n      margin: 30px 0em;\r\n      justify-content: flex-end;\r\n      width: 71%;\r\n      text-align: center;\r\n      align-items: center;\r\n      animation: slide 2s ease;\r\n      font-size: 20px; }\r\n@keyframes slide {\r\n  0% {\r\n    transform: translate(0, 20px); }\r\n  100% {\r\n    transform: translate(0, 0); } }\r\n      @media screen and (max-width: 90em) {\r\n        nav .option1 #index {\r\n          font-size: 12px; } }\r\n      nav .option1 #index a {\r\n        text-transform: uppercase;\r\n        margin-left: 2em;\r\n        letter-spacing: 3px; }\r\n      nav .option1 #index #reserve {\r\n        border: 2px solid white;\r\n        padding: 8px; }\r\n  nav .scrolled-nav {\r\n    --bg-color: rgba(0, 10, 15, 0.753); }\r\n    nav .scrolled-nav #logo {\r\n      --lg-w:20%;\r\n      --lg-h:45px;\r\n      --border:2px;\r\n      line-height: 0px; }\r\n\r\n.menu-index {\r\n  background: #faf3eb; }\r\n  .menu-index #special-logo {\r\n    animation: slide 1s ease;\r\n    position: absolute;\r\n    top: 62%;\r\n    left: 29.5%;\r\n    color: white;\r\n    border: 8px solid;\r\n    font-size: 5em;\r\n    padding: 5px 40px;\r\n    animation: slide 2s ease; }\r\n@keyframes slide {\r\n  0% {\r\n    transform: translate(0, 40px); }\r\n  100% {\r\n    transform: translate(0, 0); } }\r\n  .menu-index .meals {\r\n    border-left: 3px solid;\r\n    border-right: 3px solid;\r\n    border-bottom: 3px solid;\r\n    margin: 0 1.5em 87px 1.5em; }\r\n    .menu-index .meals .options {\r\n      display: flex;\r\n      justify-content: center; }\r\n    .menu-index .meals #dinner {\r\n      border: 2px solid #F49C1E; }\r\n    .menu-index .meals a {\r\n      display: flex;\r\n      position: relative;\r\n      top: -23px;\r\n      padding: 2em;\r\n      font-weight: 400;\r\n      margin-right: 2em;\r\n      padding: 8px 25px;\r\n      text-decoration: none;\r\n      border: none;\r\n      color: #F49C1E;\r\n      letter-spacing: 2px;\r\n      background-color: #faf3eb; }\r\n      .menu-index .meals a:hover {\r\n        animation: zoom-out .5s ease;\r\n        transition: border 280ms;\r\n        border: 2px solid #F49C1E;\r\n        transform: scale(1.1, 1); }\r\n@keyframes zoom-out {\r\n  0% {\r\n    transform: scale(1, 1); }\r\n  100% {\r\n    transform: scale(1.1, 1); } }\r\n        .menu-index .meals a:hover p {\r\n          transform: scale(0.9, 1); }\r\n  .menu-index .dinner-content {\r\n    background-color: #faf3eb;\r\n    display: flex;\r\n    width: 36%;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    flex-direction: column; }\r\n    .menu-index .dinner-content h1 {\r\n      border-bottom: 2px solid;\r\n      margin-top: 1em;\r\n      position: relative;\r\n      font-size: 40px;\r\n      right: 25%;\r\n      width: 149%; }\r\n      .menu-index .dinner-content h1 span {\r\n        background-color: #faf3eb;\r\n        position: relative;\r\n        top: 29px;\r\n        padding: 0 20px; }\r\n    .menu-index .dinner-content h2 {\r\n      margin-top: 3em;\r\n      position: relative;\r\n      font-size: 35px;\r\n      right: 25%;\r\n      width: 149%; }\r\n    .menu-index .dinner-content p {\r\n      margin-top: 2em; }\r\n\r\n.location-hours {\r\n  background: #faf3eb; }\r\n  .location-hours #special-logo {\r\n    animation: slide 1s ease;\r\n    position: absolute;\r\n    top: 62%;\r\n    left: 23.3%;\r\n    color: white;\r\n    font-size: 5em;\r\n    padding: 5px 40px;\r\n    animation: slide 2s ease; }\r\n@keyframes slide {\r\n  0% {\r\n    transform: translate(0, 40px); }\r\n  100% {\r\n    transform: translate(0, 0); } }\r\n  .location-hours .meals {\r\n    border-left: 3px solid;\r\n    border-right: 3px solid;\r\n    border-bottom: 3px solid;\r\n    margin: 0 1.5em 87px 1.5em;\r\n    display: flex;\r\n    flex-direction: row; }\r\n    .location-hours .meals a {\r\n      display: flex;\r\n      position: relative;\r\n      top: -23px;\r\n      padding: 2em;\r\n      font-weight: 400;\r\n      margin-right: 2em;\r\n      padding: 8px 25px;\r\n      text-decoration: none;\r\n      border: none;\r\n      color: #F49C1E;\r\n      letter-spacing: 2px;\r\n      background-color: #faf3eb; }\r\n      .location-hours .meals a:hover {\r\n        animation: zoom-out .5s ease;\r\n        transition: border 280ms;\r\n        border: 2px solid #F49C1E;\r\n        transform: scale(1.1, 1); }\r\n@keyframes zoom-out {\r\n  0% {\r\n    transform: scale(1, 1); }\r\n  100% {\r\n    transform: scale(1.1, 1); } }\r\n        .location-hours .meals a:hover p {\r\n          transform: scale(0.9, 1); }\r\n  .location-hours .dinner-content {\r\n    background-color: #faf3eb;\r\n    display: flex;\r\n    width: 36%;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    flex-direction: column; }\r\n    .location-hours .dinner-content h1 {\r\n      margin-top: 1em;\r\n      position: relative;\r\n      font-size: 40px;\r\n      right: 25%;\r\n      width: 149%; }\r\n      .location-hours .dinner-content h1 span {\r\n        background-color: #faf3eb;\r\n        position: relative;\r\n        top: 29px;\r\n        padding: 0 20px; }\r\n    .location-hours .dinner-content h2 {\r\n      margin-top: 3em;\r\n      position: relative;\r\n      font-size: 35px;\r\n      right: 25%;\r\n      width: 149%; }\r\n    .location-hours .dinner-content p {\r\n      margin-top: 2em; }\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box; }\r\n\r\nhtml {\r\n  height: 100%;\r\n  background-color: #faf3eb; }\r\n\r\nbody {\r\n  height: 100%;\r\n  font-family: 'Nunito', sans-serif; }\r\n\r\n.img-home {\r\n  height: 101%;\r\n  width: 100%;\r\n  filter: brightness(0.5); }\r\n\r\n.content {\r\n  height: 100%; }\r\n",""]),n.exports=e},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",a=n[3];if(!a)return r;if(e&&"function"==typeof btoa){var t=(i=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(p," */")),o=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[r].concat(o).concat([t]).join("\n")}var i,s,p;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,a){"string"==typeof n&&(n=[[null,n,""]]);var t={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);a&&t[p[0]]||(r&&(p[2]?p[2]="".concat(r," and ").concat(p[2]):p[2]=r),e.push(p))}},e}},function(n,e,r){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,r){"use strict";r.r(e),e.default=r.p+"9c2e28ef2627e970d18d4b44268f4297.jpg"},function(n,e,r){"use strict";r.r(e);r(0),r.p;var a='\n<img src="../src/assets/img/foto2.jpg" class="img-home">\n<main>\n\n<div id="div-1">\n    <p>The Coding Room offers fixed price and tasting menus, as well as an à la carte lunch. Reservations recommended.</p>\n    <a class="menu">See the menu</a>\n</div>\n<div id="paralax-1"><p>TAVERN</p></div>\n<div id="paralax-2"><p>CODING</p></div>\n<div id="div-4">\n    <p>The Tavern serves an à la carte menu throughout the afternoon and evening. No reservations – just stop in.</p>\n    <a class="menu">View the menu</a>\n</div>\n</main>';var t=function(){const n=document.querySelector(".content"),e=e=>{n.insertAdjacentHTML("afterbegin",e)};return{redirectTo:(r,a)=>{r.addEventListener("click",()=>{n.innerHTML="",e(a)})},changeNavScrolled:()=>{const n=document.querySelector(".option1"),e=document.querySelector(".trigger");new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?n.classList.remove("scrolled-nav"):n.classList.add("scrolled-nav")})},{}).observe(e)},insertPage:e}}();const o=document.querySelector(".content");o.insertAdjacentHTML("beforebegin",'<nav>\n        <div class="option1">\n            <a href="#" id="logo">CODING TAVERN</a>\n            <div id="index">\n                <a href="#" class="menubtn">menu</a>\n                <a href="#" class="loc-hours">location and hours</a>\n                <a href="#" class="newEventsbtn">about</a>\n                <a href="#" class="privateDiningbtn">news & events</a>\n                <a href="#" class="aboutbtn">private dining</a>\n                <a href="#" class="reservebtn" id="reserve">reserve</a>\n            </div>\n        \n        </div>\n        <div class="trigger"></div>\n    </nav>'),o.insertAdjacentHTML("beforeend",'<footer>\n<div class="icons">\n    <a href="#"><img src="/img/facebook.svg" alt=""></a>\n    <a href="#"><img src="/img/twitter.svg" alt=""></a>\n    <a href="#"><img src="/img/instagram.svg" alt=""></a>\n</div>\n<p>Developed by Nicolás Mariño. Design from gramercytavern.com  Delivery CAREERS | GIFT | CARDS | EMAIL | SIGNUP\n</p>\n\n\n\n</footer>'),t.insertPage(a);const i=document.querySelector(".menubtn"),s=document.querySelector("#logo"),p=document.querySelector(".loc-hours"),l=document.querySelector(".newEventsbtn"),h=document.querySelector(".privateDiningbtn"),d=document.querySelector(".aboutbtn"),c=document.querySelector(".reservebtn");t.redirectTo(i,'\n<img src="../src/assets/img/foto3.jpg" class="img-home">\n<div class="menu-index">\n<p id="special-logo">Dining room</p>\n<div class="meals">\n    <div class="options">\n        <a href="#" id="dinner"> <p>Dinner</p> </a>\n        <a href="#"> <p>Lunch</p> </a>\n        <a href="#"> <p>Beverages</p> </a>\n        <a href="#"> <p>Wines</p> </a>\n    </div>\n    <div class="dinner-content">\n        The Dining Room offers a three-course, prix-fixe menu,\n        as well as Seasonal and Vegetable Tasting menus with optional wine pairings.\n    </br></br>\n        Gramercy Tavern is a non-tipping restaurant. Hospitality Included.\n        <h1><span>DINNER</span></h1>\n        <p>Three Course Menu $134</p> \n        <h2><span>FIRST COURSES</span></h2>\n        \n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>DESSERTS</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h1><span>DINNER TASTING</span></h1>\n        <h2><span>SEASONAL</span></h2>\n        <P>Menu $189 Wine Pairing $99</P>\n        <h2><span>VEGETABLE</span></h2>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n    </div>\n    \n</div>\n\n</div>'),t.redirectTo(s,a),t.redirectTo(p,'\n<img src="../src/assets/img/foto4.jpg" class="img-home">\n<div class="location-hours">\n<p id="special-logo">Location & Hours</p>\n<div class="meals">\n    \n    <div class="dinner-content">\n        The Dining Room offers a three-course, prix-fixe menu,\n        as well as Seasonal and Vegetable Tasting menus with optional wine pairings.\n        </br></br>\n        Gramercy Tavern is a non-tipping restaurant. Hospitality Included.\n        <h1><span>DINNER</span></h1>\n        <p>Three Course Menu $134</p> \n        <h2><span>FIRST COURSES</span></h2>\n        \n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        \n    </div>\n    <div class="dinner-content">\n        The Dining Room offers a three-course, prix-fixe menu,\n        as well as Seasonal and Vegetable Tasting menus with optional wine pairings.\n        </br></br>\n        Gramercy Tavern is a non-tipping restaurant. Hospitality Included.\n        <h1><span>DINNER</span></h1>\n        <p>Three Course Menu $134</p> \n        <h2><span>FIRST COURSES</span></h2>\n        \n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        \n    </div>\n    \n</div>\n\n</div>'),t.redirectTo(l,'<img src="../src/assets/img/foto5.jpg" class="img-home">\n<div class="menu-index">\n<p id="special-logo">Dining room</p>\n<div class="meals">\n    <div class="options">\n        <a href="#" id="dinner"> <p>Dinner</p> </a>\n        <a href="#"> <p>Lunch</p> </a>\n        <a href="#"> <p>Beverages</p> </a>\n        <a href="#"> <p>Wines</p> </a>\n    </div>\n    <div class="dinner-content">\n        The Dining Room offers a three-course, prix-fixe menu,\n        as well as Seasonal and Vegetable Tasting menus with optional wine pairings.\n    </br></br>\n        Gramercy Tavern is a non-tipping restaurant. Hospitality Included.\n        <h1><span>DINNER</span></h1>\n        <p>Three Course Menu $134</p> \n        <h2><span>FIRST COURSES</span></h2>\n        \n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>DESSERTS</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h1><span>DINNER TASTING</span></h1>\n        <h2><span>SEASONAL</span></h2>\n        <P>Menu $189 Wine Pairing $99</P>\n        <h2><span>VEGETABLE</span></h2>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n    </div>\n    \n</div>\n\n</div>'),t.redirectTo(h,'<img src="../src/assets/img/foto6.jpg" class="img-home">\n<div class="menu-index">\n<p id="special-logo">Dining room</p>\n<div class="meals">\n    <div class="options">\n        <a href="#" id="dinner"> <p>Dinner</p> </a>\n        <a href="#"> <p>Lunch</p> </a>\n        <a href="#"> <p>Beverages</p> </a>\n        <a href="#"> <p>Wines</p> </a>\n    </div>\n    <div class="dinner-content">\n        The Dining Room offers a three-course, prix-fixe menu,\n        as well as Seasonal and Vegetable Tasting menus with optional wine pairings.\n    </br></br>\n        Gramercy Tavern is a non-tipping restaurant. Hospitality Included.\n        <h1><span>DINNER</span></h1>\n        <p>Three Course Menu $134</p> \n        <h2><span>FIRST COURSES</span></h2>\n        \n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>DESSERTS</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h1><span>DINNER TASTING</span></h1>\n        <h2><span>SEASONAL</span></h2>\n        <P>Menu $189 Wine Pairing $99</P>\n        <h2><span>VEGETABLE</span></h2>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n    </div>\n    \n</div>\n\n</div>'),t.redirectTo(d,'\n<img src="../src/assets/img/foto1.jpg" class="img-home">    \n<div class="menu-index">\n<p id="special-logo">Dining room</p>\n<div class="meals">\n    <div class="options">\n        <a href="#" id="dinner"> <p>Dinner</p> </a>\n        <a href="#"> <p>Lunch</p> </a>\n        <a href="#"> <p>Beverages</p> </a>\n        <a href="#"> <p>Wines</p> </a>\n    </div>\n    <div class="dinner-content">\n        The Dining Room offers a three-course, prix-fixe menu,\n        as well as Seasonal and Vegetable Tasting menus with optional wine pairings.\n    </br></br>\n        Gramercy Tavern is a non-tipping restaurant. Hospitality Included.\n        <h1><span>DINNER</span></h1>\n        <p>Three Course Menu $134</p> \n        <h2><span>FIRST COURSES</span></h2>\n        \n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>DESSERTS</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h1><span>DINNER TASTING</span></h1>\n        <h2><span>SEASONAL</span></h2>\n        <P>Menu $189 Wine Pairing $99</P>\n        <h2><span>VEGETABLE</span></h2>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n    </div>\n    \n</div>\n\n</div>'),t.redirectTo(c,'<img src="../src/assets/img/foto7.jpg" class="img-home">\n<div class="menu-index">\n<p id="special-logo">Dining room</p>\n<div class="meals">\n    <div class="options">\n        <a href="#" id="dinner"> <p>Dinner</p> </a>\n        <a href="#"> <p>Lunch</p> </a>\n        <a href="#"> <p>Beverages</p> </a>\n        <a href="#"> <p>Wines</p> </a>\n    </div>\n    <div class="dinner-content">\n        The Dining Room offers a three-course, prix-fixe menu,\n        as well as Seasonal and Vegetable Tasting menus with optional wine pairings.\n    </br></br>\n        Gramercy Tavern is a non-tipping restaurant. Hospitality Included.\n        <h1><span>DINNER</span></h1>\n        <p>Three Course Menu $134</p> \n        <h2><span>FIRST COURSES</span></h2>\n        \n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>DESSERTS</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h2><span>SECOND COURSES</span></h2>\n        <p>Ruby Red Shrimp, Romanesco, Kale</p>\n        <h3>BEET SALAD</h3>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n        <h1><span>DINNER TASTING</span></h1>\n        <h2><span>SEASONAL</span></h2>\n        <P>Menu $189 Wine Pairing $99</P>\n        <h2><span>VEGETABLE</span></h2>\n        <p>Hazelnuts, Apples, Roomano</p>\n        <h3>BEEF TARTARE*</h3>\n        <p>Sweet Potato, Chiles, Cilantro</p>\n        <h3>KALE & CABBAGE SALAD</h3>\n        <p>Meyer Lemon, Buttermilk, Pine Nuts</p>\n        <h3>WHITE BEAN SOUP</h3>\n    </div>\n    \n</div>\n\n</div>'),t.changeNavScrolled()}]);