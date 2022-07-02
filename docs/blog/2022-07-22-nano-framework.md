---
slug: 22-nano-framework
title: "22: .NET nanoFramework building and interoperability"
authors: [laurent,jose]
tags: [30days, iot, embeddediot]
draft: true
---

<head>
  <meta name="twitter:url" content="https://julyot.dev/blog/22-nano-framework" />
  <meta name="twitter:title" content=".NET nanoFramework building and interoperability" />
  <meta name="twitter:description" content=".NET nanoFramework building and interoperability" />
  <meta name="twitter:image" content="https://julyot.dev/img/png/JulyOT-banner-22-nanoframework.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@ellerbach" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" href="https://julyot.dev/blog/22-nano-framework" />
</head>

> Welcome to Day 22 of **#JulyOT**!

![Page banner](/img/png/JulyOT-banner-22-nanoframework.png)

# Building .NET nanoFramework and interoperability

 You can build your own image for an MCU with .NET nanoFramework. In most cases you'll use prebuilt images for popular boards, including advanced ESP32 devices like the M5Stack with a dedicated images to support M5Stack screens.

 In case you need native interop, you'll have to build an image to add required C/C++ code and expose it properly. Refer to [Interop in .NET nanoFramework](https://jsimoesblog.wordpress.com/2018/06/19/interop-in-net-nanoframework/). The mechanism is made easy for developers, stubs are built for you. Refer to [Generating stubs for a native project, NANOCLR macros, Arguments and return types](https://docs.nanoframework.net/content/architecture/nanoclr-stub-args.html) when building the C\# side of the code. Then you simply need to copy and paste the generated C++ headers to your code and add your native code to call the C/C++ functions.

 While there are many platforms and MCUs supported, .NET nanoFramework Dev Containers make it easier to build targets. See [Using Dev Container to build targets](https://docs.nanoframework.net/content/building/using-dev-container.html)

 If you prefer not to use the Dev Containers, it's possible, and well documented at [Building .NET nanoFramework](https://docs.nanoframework.net/content/building/index.html).
