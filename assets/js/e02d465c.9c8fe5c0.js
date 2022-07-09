"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5878],{4137:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5216:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(4137)),o=["components"],l={slug:"julyot-day5-embedded",title:"05: Altair Everywhere",authors:["dave"],tags:["30days","iot","iot4b","embeddediot"],draft:!1},s=void 0,p={permalink:"/blog/julyot-day5-embedded",source:"@site/blog/2022-07-05-embedded.md",title:"05: Altair Everywhere",description:"Welcome to Day 5 of #JulyOT!!",date:"2022-07-05T00:00:00.000Z",formattedDate:"July 5, 2022",tags:[{label:"30days",permalink:"/blog/tags/30-days"},{label:"iot",permalink:"/blog/tags/iot"},{label:"iot4b",permalink:"/blog/tags/iot-4-b"},{label:"embeddediot",permalink:"/blog/tags/embeddediot"}],readingTime:2.765,truncated:!1,authors:[{name:"Dave Glover",title:"Senior Cloud Advocate @Microsoft",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"dave"}],frontMatter:{slug:"julyot-day5-embedded",title:"05: Altair Everywhere",authors:["dave"],tags:["30days","iot","iot4b","embeddediot"],draft:!1},prevItem:{title:"06: Edge Impulse Project of the Month competition",permalink:"/blog/06-edge-impulse-competition"},nextItem:{title:"04: Detect the very big with the very small \u2013 counting bears with TinyML meetup from IoT North",permalink:"/blog/julyot-day4"}},d={authorsImageUrls:[void 0]},m=[{value:"Run Altair Everywhere",id:"run-altair-everywhere",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Cloud services integration",id:"cloud-services-integration",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Altair History",id:"altair-history",level:2}],u={toc:m};function c(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://julyot.dev/blog/julyot-day5-embedded"}),(0,i.kt)("meta",{name:"twitter:title",content:"Altair IoT Everywhere!"}),(0,i.kt)("meta",{name:"twitter:description",content:"Altair Everywhere scale IoT apps from embedded to desktop"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://julyot.dev/img/png/JulyOT-banner-5-altair.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@dglover"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://julyot.dev/blog/julyot-day5-embedded"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Welcome to Day 5 of ",(0,i.kt)("strong",{parentName:"p"},"#JulyOT"),"!!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Post banner",src:a(3203).Z,width:"1000",height:"420"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The goal of the cloud-connected Altair project is to provide a unique blend of ",(0,i.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Retrocomputing"},"computing history")," with modern cloud computing. You'll learn about computing fundamentals, software development, and modern IoT, Data, and AI cloud services that address today's real-world IT challenges.")),(0,i.kt)("h2",{id:"run-altair-everywhere"},"Run Altair Everywhere"),(0,i.kt)("p",null,"The Altair Everywhere project is tested and runs on the following platforms:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX")," compatible operating system including Linux, Windows with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/windows/wsl/install?wt.mc_id=eventspg_16482_webpage_reactor"},"WSL 2"),", macOS on Apple Silicon and Intel.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/"},"Raspberry Pi"),", models, Zero 1 & 2, 2B, 3B, 3B, and 4 running Raspberry Pi OS."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi with Pi Sense HAT"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Sense HAT"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The image shows the address and data bus LEDs",src:a(9855).Z,width:"562",height:"379"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The gif shows the address and data bus LEDs in action",src:a(5106).Z,width:"469",height:"400"})))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/azure-sphere/"},"Azure Sphere Avnet and Seeed Developer Kits")," running embedded Linux."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Azure Sphere with the Altair front panel kit"),(0,i.kt)("th",{parentName:"tr",align:null},"MikroE Retro Click"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The gif shows the Altair on Azure Sphere with the Altair front panel",src:a(6301).Z,width:"979",height:"400"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The gif shows the address and data bus LEDs in action",src:a(2696).Z,width:"332",height:"400"}))))))),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("p",null,"The Altair project can be viewed through three lenses:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Learn how to develop multithreaded event-driven IoT C applications that scale from embedded ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Microcontroller"},"microcontrollers")," to ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Raspberry_Pi"},"Raspberry Pis"),", to desktop-class computers."),(0,i.kt)("li",{parentName:"ol"},"A fantastic safe way to explore Intel 8080 machine-level programming and Assembly programming, along with C and BASIC development."),(0,i.kt)("li",{parentName:"ol"},"If you are interested in retro gaming, chill out playing retro games from yesteryear.")),(0,i.kt)("h2",{id:"cloud-services-integration"},"Cloud services integration"),(0,i.kt)("p",null,"Optionally, the project integrates free weather and pollution cloud services from Open Weather Map, Azure IoT Central, and Azure Anomaly Detection Cognitive Service. The following reports were generated from data published by the Altair emulator using data sourced from Open Weather Map."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"IoT Central Sydney pollution report"),(0,i.kt)("th",{parentName:"tr",align:null},"Azure Anomaly Detection report"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The images shows pollution report for Sydney",src:a(3186).Z,width:"600",height:"400"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The following images shows temperature based anomalies",src:a(2784).Z,width:"533",height:"400"}))))),(0,i.kt)("h2",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,"Head to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X/wiki"},"Altair Everywhere")," repo, get started, have some fun, learn new skills, and impress your friends and family :)"),(0,i.kt)("h2",{id:"altair-history"},"Altair History"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The image shows the Altair 8800",src:a(1738).Z,width:"1200",height:"600"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://commons.wikimedia.org/wiki/File:Altair_8800,_Smithsonian_Museum.jpg"},"Altair 8800 image attribution - Smithsonian Museum")),(0,i.kt)("p",null,"The Altair 8800 was built on the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Intel_8080?azure-portal=true"},"Intel 8080")," CPU, the second 8-bit microprocessor manufactured by Intel in 1974. By today's standards, it's a simple CPU design, perfect for learning computing fundamentals because of its small instruction set."),(0,i.kt)("p",null,"The original Altair 8800 was programmed by setting switches on the front panel. It was a painstaking, error-prone process to load and run a program. The Altair 8800 had a series of LEDs and switches that you used to load apps and determine the state of the Altair."),(0,i.kt)("p",null,"You could save and load applications from a paper tape reader connected to the Altair 8800. As the Altair 8800 grew in popularity, more options became available. You could attach a keyboard, a computer monitor, and disk drives, a more reliable way to save and load applications."))}c.isMDXComponent=!0},6301:function(e,t,a){t.Z=a.p+"assets/images/altair_on_sphere-98abeed24d5bc60e757abebf5915ef90.gif"},2696:function(e,t,a){t.Z=a.p+"assets/images/avnet_retro_click-7b1a51a16e5d323ac421778d433c78d0.gif"},5106:function(e,t,a){t.Z=a.p+"assets/images/raspberry_pi_sense_hat-079bdc455c3a3502d2aaa72a6f7b69ed.gif"},3203:function(e,t,a){t.Z=a.p+"assets/images/JulyOT-banner-5-altair-a33c8f3bd41ae6352f1a5a335e05be9f.png"},1738:function(e,t,a){t.Z=a.p+"assets/images/altair-8800-smithsonian-museum-efa63f9b538227319fa6d4ec8ca701b7.png"},3186:function(e,t,a){t.Z=a.p+"assets/images/iot_central_pollution_report-ac41244851068dc6e9880987e78e9d1a.png"},9855:function(e,t,a){t.Z=a.p+"assets/images/raspberry_pi_sense_hat_map-219521f7247903276cd59d090845b3ea.png"},2784:function(e,t,a){t.Z=a.p+"assets/images/univariate-anomalies-ca2e171d017ac8c6f26ad82d99afd7b8.png"}}]);