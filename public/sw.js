if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,r)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/RDFOsV_KjM1UhA4Mg_KBa/_buildManifest.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/RDFOsV_KjM1UhA4Mg_KBa/_ssgManifest.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/b882ecb99492b194fbe7b06f655d105349b9b68c.595e26635416441d2372.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/commons.d5bfabdf76327ab1e73c.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/framework.2113c6061a2f456066a1.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/main-45bd381560a62645e233.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/pages/_app-44de0d5c7f83bd3a3d8e.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/pages/_error-72842e312a76c914d287.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/pages/index-028b5b9be8779fa6c484.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/pages/offline-9ca36f09fde287c12942.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/pages/restaurant/%5Bid%5D-d90288fdf3fd2d944f0c.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/polyfills-a98cee78eb8282e29fb6.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/css/66b9b479822b728d113f.css",revision:"RDFOsV_KjM1UhA4Mg_KBa"},{url:"/_next/static/css/c87936d9ee2cb46201d3.css",revision:"RDFOsV_KjM1UhA4Mg_KBa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
