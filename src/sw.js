if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fdc54604"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/app-routing.module.ts",revision:"3c1d721cfd0753406a1cfde101c59380"},{url:"app/app.component.html",revision:"088db6ca7ca729453844fe83a8139de4"},{url:"app/app.component.scss",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"app/app.component.spec.ts",revision:"bf55dd358e48fc84823ef2fbe88af8ff"},{url:"app/app.component.ts",revision:"a8afb6bc1d0b39b01042e621d8aba233"},{url:"app/app.module.ts",revision:"ed657d56c28ab8e9e0f32ad46470dc94"},{url:"environments/environment.prod.ts",revision:"6de221395114600b523995704b7d1caa"},{url:"environments/environment.ts",revision:"c141562af7e49205b518b4910a92fb5e"},{url:"favicon.ico",revision:"1fbdf735a0dd3e8321c5e0828a45a4d5"},{url:"index.html",revision:"df13c0169b2698e9a4681dfdfe4e71e6"},{url:"main.ts",revision:"d4b213bb798f41b19cba4d1b4b9c26ef"},{url:"polyfills.ts",revision:"d76a8adbd3b4e12c6f210ccbabaeca5a"},{url:"styles.scss",revision:"ac89bfdd6de82636b7680c8b96584c96"},{url:"test.ts",revision:"756f673f7c3ae5e84477e2cb0683f078"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map