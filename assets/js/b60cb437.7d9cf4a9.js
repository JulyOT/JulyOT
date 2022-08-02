"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5001],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(b,o(o({ref:t},p),{},{components:r})):a.createElement(b,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16222:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={slug:"20-azure-iot-pi-reterminal",title:"20: Azure IoT with a Raspberry Pi and reTerminal",authors:["bruno"],tags:["30days","iot","iot4b","aiatedge"],draft:!1},u=void 0,s={permalink:"/blog/20-azure-iot-pi-reterminal",source:"@site/blog/2022-07-20-pi-reterminal.mdx",title:"20: Azure IoT with a Raspberry Pi and reTerminal",description:"Welcome to Day 20 of #JulyOT!!",date:"2022-07-20T00:00:00.000Z",formattedDate:"July 20, 2022",tags:[{label:"30days",permalink:"/blog/tags/30-days"},{label:"iot",permalink:"/blog/tags/iot"},{label:"iot4b",permalink:"/blog/tags/iot-4-b"},{label:"aiatedge",permalink:"/blog/tags/aiatedge"}],readingTime:1.575,hasTruncateMarker:!1,authors:[{name:"Bruno Capuano",title:"Senior Regional Cloud Advocate @Microsoft",url:"https://github.com/elbruno",imageURL:"https://github.com/elbruno.png",key:"bruno"}],frontMatter:{slug:"20-azure-iot-pi-reterminal",title:"20: Azure IoT with a Raspberry Pi and reTerminal",authors:["bruno"],tags:["30days","iot","iot4b","aiatedge"],draft:!1},prevItem:{title:"20: Azure IoT con Raspberry Pi y reTerminal",permalink:"/blog/20-azure-iot-pi-reterminal-juliot"},nextItem:{title:"19: Powering Azure Sphere C Development with DevX",permalink:"/blog/julyot-day19-embedded"}},p={authorsImageUrls:[void 0]},c=[{value:"Azure IoT with a Raspberry Pi and reTerminal",id:"azure-iot-with-a-raspberry-pi-and-reterminal",level:2},{value:"Let&#39;s setup a Raspberry Pi and a reTerminal as an Azure IoT \u2601\ufe0f device",id:"lets-setup-a-raspberry-pi-and-a-reterminal-as-an-azure-iot-\ufe0f-device",level:3},{value:"Azure IoT Edge and Machine Learning \ud83e\udde0 with Raspberry Pi and reTerminal",id:"azure-iot-edge-and-machine-learning--with-raspberry-pi-and-reterminal",level:3},{value:"Let&#39;s create a Digital Twin solution for our Azure IoT Elevator \ud83d\uded7",id:"lets-create-a-digital-twin-solution-for-our-azure-iot-elevator-",level:3}],m={toc:c};function d(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://julyot.dev/blog/20-azure-iot-pi-reterminal"}),(0,i.kt)("meta",{name:"twitter:title",content:"Azure IoT with a Raspberry Pi and reTerminal"}),(0,i.kt)("meta",{name:"twitter:description",content:"Azure IoT with a Raspberry Pi and reTerminal"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://julyot.dev/img/png/JulyOT-banner-20-azure-iot-pi-reterminal.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@elbruno"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://julyot.dev/blog/20-azure-iot-pi-reterminal"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Welcome to Day 20 of ",(0,i.kt)("strong",{parentName:"p"},"#JulyOT"),"!!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Post banner",src:r(48006).Z,width:"1000",height:"420"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In this upcoming livestream series we will show how to create a complete Azure IoT / Digital Twin solution using popular devices like a Raspberry Pi, SeeedStudio reTerminal and a real elevator.")),(0,i.kt)("h2",{id:"azure-iot-with-a-raspberry-pi-and-reterminal"},"Azure IoT with a Raspberry Pi and reTerminal"),(0,i.kt)("p",null,"In this upcoming series we will show how to create a complete Azure IoT / Digital Twin solution using popular devices like a Raspberry Pi, SeeedStudio reTerminal and a real elevator."),(0,i.kt)("p",null,"This series will cover the following sessions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lets-setup-a-raspberry-pi-and-a-reterminal-as-an-azure-iot-%E2%98%81%EF%B8%8F-device"},"Let's setup a Raspberry Pi and a reTerminal as an Azure IoT \u2601\ufe0f device")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#azure-iot-edge-and-machine-learning-%F0%9F%A7%A0-with-raspberry-pi-and-reterminal"},"Azure IoT Edge and Machine Learning \ud83e\udde0 with Raspberry Pi and reTerminal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lets-create-a-digital-twin-solution-for-our-azure-iot-elevator-%F0%9F%9B%97"},"Let's create a Digital Twin solution for our Azure IoT Elevator \ud83d\uded7"))),(0,i.kt)("p",null,"We will show the step-by-step process for each one of these scenarios. And, we'll share a few implementation options, so you can get some ideas and walk away with a plan to start creating your own Azure IoT solution."),(0,i.kt)("h3",{id:"lets-setup-a-raspberry-pi-and-a-reterminal-as-an-azure-iot-\ufe0f-device"},"Let's setup a Raspberry Pi and a reTerminal as an Azure IoT \u2601\ufe0f device"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/9D9q5ix40gs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h3",{id:"azure-iot-edge-and-machine-learning--with-raspberry-pi-and-reterminal"},"Azure IoT Edge and Machine Learning \ud83e\udde0 with Raspberry Pi and reTerminal"),(0,i.kt)("p",null,"Catch this stream live on Wednesday, July 27, 2022 at 10AM Pacific Time."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xb3boIyj0GI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h3",{id:"lets-create-a-digital-twin-solution-for-our-azure-iot-elevator-"},"Let's create a Digital Twin solution for our Azure IoT Elevator \ud83d\uded7"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/H5nlZKYNaY8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0},48006:function(e,t,r){t.Z=r.p+"assets/images/JulyOT-banner-20-azure-iot-pi-reterminal-c91183053807b2643d6c7e74a12415c6.png"}}]);