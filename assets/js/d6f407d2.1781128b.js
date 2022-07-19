"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2344],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1393:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(4137)),i=["components"],l={slug:"julyot-day19-embedded",title:"19: Powering Azure Sphere C Development with DevX",authors:["dave"],tags:["30days","iot","iot4b","embeddediot"],draft:!1},s=void 0,p={permalink:"/blog/julyot-day19-embedded",source:"@site/blog/2022-07-19-embedded.md",title:"19: Powering Azure Sphere C Development with DevX",description:"Welcome to Day 19 of #JulyOT!!",date:"2022-07-19T00:00:00.000Z",formattedDate:"July 19, 2022",tags:[{label:"30days",permalink:"/blog/tags/30-days"},{label:"iot",permalink:"/blog/tags/iot"},{label:"iot4b",permalink:"/blog/tags/iot-4-b"},{label:"embeddediot",permalink:"/blog/tags/embeddediot"}],readingTime:2.115,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Senior Cloud Advocate @Microsoft",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"dave"}],frontMatter:{slug:"julyot-day19-embedded",title:"19: Powering Azure Sphere C Development with DevX",authors:["dave"],tags:["30days","iot","iot4b","embeddediot"],draft:!1},prevItem:{title:"20: Azure IoT with a Raspberry Pi and reTerminal",permalink:"/blog/20-azure-iot-pi-reterminal"},nextItem:{title:"18: Unlimited possibilities with Azure Percept",permalink:"/blog/18-azure-percept-blog-posts"}},u={authorsImageUrls:[void 0]},c=[{value:"Azure Sphere DevX",id:"azure-sphere-devx",level:2},{value:"Get Started",id:"get-started",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://julyot.dev/blog/julyot-day19-embedded"}),(0,o.kt)("meta",{name:"twitter:title",content:"Powering Azure Sphere C Development with DevX"}),(0,o.kt)("meta",{name:"twitter:description",content:"Azure Sphere DevX is an Open-Source community-driven library that is based on the GitHub Azure Sphere samples and from real-life experiences building Azure Sphere applications."}),(0,o.kt)("meta",{name:"twitter:image",content:"https://julyot.dev/img/png/JulyOT-banner-19-sphere-devx.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"@dglover"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://julyot.dev/blog/julyot-day19-embedded"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Welcome to Day 19 of ",(0,o.kt)("strong",{parentName:"p"},"#JulyOT"),"!!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Post banner",src:r(8186).Z,width:"1000",height:"420"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Azure Sphere is a unique highly secure IoT platform. You focus on your solution, Azure Sphere deals with security, identity, certificates, reporting, tracking emerging attack vectors, mitigating, updating the platform, and application distribution to protect your solutions, customers, and reputations.")),(0,o.kt)("p",null,"I started my Azure Sphere journey 2 years ago. I\u2019d done plenty of embedded development, but I quickly realized there was a lot to learn about Azure Sphere. If this sounds like your journey, then do check out the \u201c",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/internet-of-things/combining-azure-sphere-iot-security-with-azure-rtos-real-time/ba-p/1992869"},"Combining Azure Sphere IoT security with Azure RTOS real-time capabilities"),"\u201d article. There are links to the Azure Sphere developer Learning paths for IoT Hub and IoT Central."),(0,o.kt)("h2",{id:"azure-sphere-devx"},"Azure Sphere DevX"),(0,o.kt)("p",null,"Azure Sphere DevX is an Open-Source community-driven library that is based on the GitHub Azure Sphere samples and from real-life experiences building Azure Sphere applications. Community contributions are very welcome."),(0,o.kt)("p",null,"The DevX library accelerates your development and will help to improve your developer experience building Azure Sphere applications. The DevX library addresses many common Azure Sphere scenarios, it will help reduce the amount of code you write and improve readability and long-term application maintenance."),(0,o.kt)("p",null,"The DevX library addresses many common Azure Sphere scenarios including the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Azure IoT Messaging:\nImplements connection management and simplifies sending messages along with application and content properties metadata."),(0,o.kt)("li",{parentName:"ol"},"Azure IoT Hub Device Twins:\nHandles Device Twin JSON serialization and deserialization along with a type system to validate data types received and sent."),(0,o.kt)("li",{parentName:"ol"},"Direct methods:\nSimplifies in-bound direct methods message processing and passes direct method payload to the associated direct method handler."),(0,o.kt)("li",{parentName:"ol"},"Intercore messaging:\nProvides a context model to simplify the passing of messages between high-level and real-time application cores."),(0,o.kt)("li",{parentName:"ol"},"Event timers:\nSimplified API for all common Event Timer scenarios."),(0,o.kt)("li",{parentName:"ol"},"Deferred updates:\nYou focus on when you want application and OS updates to occur rather than how to defer updates."),(0,o.kt)("li",{parentName:"ol"},"Async events:\nAsync events enable you to marshal calls from one thread to another for event-driven applications.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/rfXwEa-gMG8"},(0,o.kt)("img",{alt:"Click to play youtube introduction to Azure Sphere DevX",src:r(2371).Z,width:"1062",height:"597"}))),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure-Sphere-DevX/AzureSphereDevX.Examples/wiki"},"Azure Sphere DevX library Wiki")," to learn more."))}m.isMDXComponent=!0},8186:function(e,t,r){t.Z=r.p+"assets/images/JulyOT-banner-19-sphere-devx-206c53b6b1641bb4fb181453bf7eb0f2.png"},2371:function(e,t,r){t.Z=r.p+"assets/images/youtube_cover-8200d92c21ee2611f97b74c8a0991a03.png"}}]);