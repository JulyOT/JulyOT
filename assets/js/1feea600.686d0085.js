"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2175],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],d={slug:"julyot-day12-embedded",title:"12: AI-powered predictive maintenance with Azure Sphere",authors:["dave"],tags:["30days","iot","iot4b","embeddediot"],draft:!1},c=void 0,l={permalink:"/blog/julyot-day12-embedded",source:"@site/blog/2022-07-12-embedded.md",title:"12: AI-powered predictive maintenance with Azure Sphere",description:"Welcome to Day 12 of #JulyOT!!",date:"2022-07-12T00:00:00.000Z",formattedDate:"July 12, 2022",tags:[{label:"30days",permalink:"/blog/tags/30-days"},{label:"iot",permalink:"/blog/tags/iot"},{label:"iot4b",permalink:"/blog/tags/iot-4-b"},{label:"embeddediot",permalink:"/blog/tags/embeddediot"}],readingTime:3.085,truncated:!1,authors:[{name:"Dave Glover",title:"Senior Cloud Advocate @Microsoft",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"dave"}],frontMatter:{slug:"julyot-day12-embedded",title:"12: AI-powered predictive maintenance with Azure Sphere",authors:["dave"],tags:["30days","iot","iot4b","embeddediot"],draft:!1},prevItem:{title:"13: Ask Me Anything at Reactor: Azure IoT!",permalink:"/blog/13-iot-ama"},nextItem:{title:"11: Cohetes de agua - Water rockets!",permalink:"/blog/11-cohetes-de-agua"}},s={authorsImageUrls:[void 0]},u=[{value:"Watch the 10-minute end-to-end demonstration",id:"watch-the-10-minute-end-to-end-demonstration",level:2},{value:"Machine Learning on Embedded Hardware",id:"machine-learning-on-embedded-hardware",level:2},{value:"Predictive Maintenance on Azure Sphere",id:"predictive-maintenance-on-azure-sphere",level:2},{value:"Building the TinyML model",id:"building-the-tinyml-model",level:2},{value:"Get Started",id:"get-started",level:2}],p={toc:u};function m(e){var t=e.components,d=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://julyot.dev/blog/julyot-day12-embedded"}),(0,i.kt)("meta",{name:"twitter:title",content:"AI-powered predictive maintenance with Azure Sphere"}),(0,i.kt)("meta",{name:"twitter:description",content:"AI-powered predictive maintenance can help identify a faulty machine before a real problem occurs, reducing maintenance costs, improving availability and customer satisfaction"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://julyot.dev/img/png/JulyOT-banner-12-sphere.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@dglover"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://julyot.dev/blog/julyot-day12-embedded"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Welcome to Day 12 of ",(0,i.kt)("strong",{parentName:"p"},"#JulyOT"),"!!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Post banner",src:n(4256).Z,width:"1000",height:"420"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"HVAC (",(0,i.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Heating,_ventilation,_and_air_conditioning"},"Heating, ventilation, and air conditioning"),") units regulate our home and workplace environments. HVAC systems are ideal candidates for predictive maintenance, as they require regular costly maintenance.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/9/90/Rooftop_Packaged_Units.JPG",alt:"HVAC System"})),(0,i.kt)("h2",{id:"watch-the-10-minute-end-to-end-demonstration"},"Watch the 10-minute end-to-end demonstration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/62XKxzRld28"},(0,i.kt)("img",{alt:"The image is the youtube thumbnail for the intro video",src:n(4615).Z,width:"1483",height:"838"}))),(0,i.kt)("h2",{id:"machine-learning-on-embedded-hardware"},"Machine Learning on Embedded Hardware"),(0,i.kt)("p",null,"AI-powered predictive maintenance can help identify a faulty machine before a real problem occurs, reducing maintenance costs, improving availability and customer satisfaction. The advantages of predictive maintenance include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reduced carbon footprint. Keeping equipment running well has straightforward benefits for operating efficiency, but we should also ensure our processes are efficient. Fault monitoring can generate high volumes of low-value data. Sending this data to cloud systems consumes power and network resources. Running an ML model on embedded hardware consumes less electricity and network resources. Only predicted maintenance events get sent to the backend systems. Disabling network interfaces (for example, Wi-Fi) can further reduce power consumption until a high-value predictive maintenance event occurs."),(0,i.kt)("li",{parentName:"ul"},"Access to better data for faster fault resolution."),(0,i.kt)("li",{parentName:"ul"},"Low latency response to system faults. There are fault monitoring use cases that require immediate action to shut down a system. Sending fault monitoring data to cloud systems for processing might be too slow, further damaging the machine.")),(0,i.kt)("h2",{id:"predictive-maintenance-on-azure-sphere"},"Predictive Maintenance on Azure Sphere"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image shows the Machine Learning Predictive Maintenance rig",src:n(5587).Z,width:"2450",height:"1290"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/azure-sphere"},"Azure Sphere")," is a secure embedded platform that is ideal for quickly developing an IoT system. By providing a platform meeting all ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/research/wp-content/uploads/2017/03/SevenPropertiesofHighlySecureDevices.pdf?wt.mc_id=eventspg_16482_webpage_reactor"},"7 properties of highly secured devices"),", Azure Sphere eliminates the need to be a hardware, OS, and security expert. These seven properties make Azure Sphere ideal for running and updating ML models. You don\u2019t want to solve one problem (equipment operation) and introduce a larger one (security)."),(0,i.kt)("p",null,"You can deploy up to 3 custom apps on Azure Sphere, including two ML workloads on the low-power real-time cores. The predictive maintenance solution runs a continuous movement classification TinyML model on one of the Azure Sphere real-time cores. When the TinyML model detects movement, for example, a rattle, or a faulty motor bearing, an event is sent to the predictive maintenance app running on the high-level core. The predictive maintenance app then powers up the network connection and sends the event to Azure IoT Central. Azure IoT Central exports the predictive maintenance event to a Logic App, which generates a message destined for Microsoft Teams."),(0,i.kt)("p",null,"The beauty of this solution is that you are combining building blocks. You don\u2019t need to be a security expert, Azure Sphere has got you covered, Edge Impulse simplifies model development, and IoT Central, Logic Apps, and Microsoft Teams are low code offerings making it easier to pull everything together."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This image shows the predictive maintenance solution architecture",src:n(5032).Z,width:"1622",height:"801"})),(0,i.kt)("h2",{id:"building-the-tinyml-model"},"Building the TinyML model"),(0,i.kt)("p",null,"The TinyML (TensorFlow Lite) model was built with ",(0,i.kt)("a",{parentName:"p",href:"https://www.edgeimpulse.com/"},"Edge Impulse"),". Edge Impulse simplifies building machine learning models for embedded hardware such as Azure Sphere. The cloud service is designed for developers, so you don\u2019t need to be a data science guru. There are tools for ML training data acquisition, and wizards lead you through the process of training, testing, and exporting models. Learn more about Edge Impulse on their ",(0,i.kt)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs"},"getting started")," page."),(0,i.kt)("h2",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,"Head to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/AzureSphereMLPredictiveMaintenanceEW"},"AI-powered Predictive Maintenance")," repo to get started."))}m.isMDXComponent=!0},4256:function(e,t,n){t.Z=n.p+"assets/images/JulyOT-banner-12-sphere-46fc5508921d10464ad58a548ae816f4.png"},5587:function(e,t,n){t.Z=n.p+"assets/images/ml_predictive_maintenance_rig-a8b6ce69b9912cabece6c92450edadf7.jpeg"},4615:function(e,t,n){t.Z=n.p+"assets/images/predictive_maintenace_youtube-c8937fb2e6f510a20c5ce289e9a03534.png"},5032:function(e,t,n){t.Z=n.p+"assets/images/predictive_maintenance_solution_architecture-f4269f5f2582ac3edff15439b8ffaa68.png"}}]);