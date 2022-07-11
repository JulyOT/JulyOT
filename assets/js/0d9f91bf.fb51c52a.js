"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7454],{4137:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,a(a({ref:e},s),{},{components:r})):n.createElement(d,a({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1857:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(4137)),a=["components"],u={slug:"09-azure-circuit-python",title:"09: Getting Started with Microsoft Azure and CircuitPython",authors:["jen"],tags:["30days","iot","iot4b"],draft:!1},c=void 0,l={permalink:"/blog/09-azure-circuit-python",source:"@site/blog/2022-07-09-azure-circuit-python.mdx",title:"09: Getting Started with Microsoft Azure and CircuitPython",description:"Welcome to Day 9 of #JulyOT!",date:"2022-07-09T00:00:00.000Z",formattedDate:"July 9, 2022",tags:[{label:"30days",permalink:"/blog/tags/30-days"},{label:"iot",permalink:"/blog/tags/iot"},{label:"iot4b",permalink:"/blog/tags/iot-4-b"}],readingTime:.85,truncated:!1,authors:[{name:"Jen Fox",title:"Senior Program Manager @Microsoft",url:"https://github.com/jenfoxbot",imageURL:"https://pbs.twimg.com/profile_images/1251933030194704385/bFUIbxQ-_400x400.jpg",key:"jen"}],frontMatter:{slug:"09-azure-circuit-python",title:"09: Getting Started with Microsoft Azure and CircuitPython",authors:["jen"],tags:["30days","iot","iot4b"],draft:!1},prevItem:{title:"11: Learn Azure Percept from conference sessions",permalink:"/blog/11-azure-percept-conference-sessions"},nextItem:{title:"08: IoT for Beginners lesson 2!",permalink:"/blog/08-julyot-iot-beginners"}},s={authorsImageUrls:[void 0]},p=[{value:"Getting Started with Microsoft Azure and CircuitPython",id:"getting-started-with-microsoft-azure-and-circuitpython",level:2}],f={toc:p};function m(t){var e=t.components,u=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://julyot.dev/blog/09-azure-circuit-python"}),(0,i.kt)("meta",{name:"twitter:title",content:"Getting Started with Microsoft Azure and CircuitPython"}),(0,i.kt)("meta",{name:"twitter:description",content:"Getting Started with Microsoft Azure and CircuitPython"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://julyot.dev/img/png/JulyOT-banner-9-azure-circuitpython.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@ellerbach"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://julyot.dev/blog/09-azure-circuit-python"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Welcome to Day 9 of ",(0,i.kt)("strong",{parentName:"p"},"#JulyOT"),"!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Page banner",src:r(4469).Z,width:"1000",height:"420"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Today we learn about using Azure IoT with Circuit Python.")),(0,i.kt)("h2",{id:"getting-started-with-microsoft-azure-and-circuitpython"},"Getting Started with Microsoft Azure and CircuitPython"),(0,i.kt)("p",null,"Learn how to use Microsoft Azure IoT with CircuitPython! If you are an embedded developer who loves CircuitPython and want to connect to the cloud, then ",(0,i.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/getting-started-with-microsoft-azure-and-circuitpython"},"this guide on the Adafruit Learn platform")," is for you."),(0,i.kt)("p",null,"This guide will walk you through how to get started with Microsoft Azure using a Feather ESP32-S2 TFT and a BME688 sensor to monitor temperature, humidity and air pressure. The data is logged to Microsoft Azure every fifteen minutes and can be viewed on a dashboard."),(0,i.kt)("form",{action:"https://learn.adafruit.com/getting-started-with-microsoft-azure-and-circuitpython",target:"_blank"},(0,i.kt)("input",{type:"submit",value:"Take me to the guide",class:"clean-btn button button--primary margin-left--md"})))}m.isMDXComponent=!0},4469:function(t,e,r){e.Z=r.p+"assets/images/JulyOT-banner-9-azure-circuitpython-0a122bfa6958f7b192e507feb20c91a0.png"}}]);