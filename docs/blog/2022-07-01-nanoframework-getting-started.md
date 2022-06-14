---
slug: nanoframework-getting-started
title: .NET nanoFramework Getting Started
authors:
  name: Ellerbach
  name: josesimoes
tags: [dotnet, nanoframework]
---

# Introduction and getting started

## Getting started

.NET nanoFramework: Our mantra is about **making it easy to write C\# code for embedded systems!** And all what we're doing here is about that. This free and Open Source platform that enables the writing of managed code applications for constrained embedded devices. As a developer, you can use your powerful and familiar tools like Microsoft Visual Studio IDE and your .NET C\# skills to write code on a microcontroller.

.NET nanoFramework supports a large variety of Micro Controller Units (MCU): STM32, ESP32, TI and NXP. It does provide access to low level IO and protocols but also networking and advance security features allowing connection to the Cloud.

Here you'll find all the tools, examples, documentation and a great developer ecosystem to help you on your next embedded systems project.

> **New**: Adoption of .NET nanoFramework is growing really fast. It just reached 2 million nuget downloads, it took 5 years to reach the first million and only 9 months for the second one! Read more about it [here](https://www.nanoframework.net/2-million-nuget-downloads-and-counting/)

To get started, you can use our [step by step guide](https://docs.nanoframework.net/content/getting-started-guides/getting-started-managed.html) containing as well short videos.

You'll go through the installation of the Visual Studio extension:

![step by step](https://docs.nanoframework.net/images/getting-started-guides/getting-started-extension-installation.gif)

Then installing `nanoff`, the tool to flash your device and flashing your device:

![install and flash nanoff](https://docs.nanoframework.net/images/getting-started-guides/getting-started-install-nanoff-flash-esp32.gif)

And then coding your first hello .NET nanoFramework application with a breakpoint in your code:

![Hello nano](https://docs.nanoframework.net/images/getting-started-guides/getting-started-first-project.gif)

In a matter of few minutes, you'll be up and running with .NET nanoFramework!


And a lot of samples to start: <https://github.com/nanoframework/Samples>

## What is .NET nanoFramework?

.NET **nanoFramework** is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source_software) platform that enables the writing of managed code applications for constrained [embedded devices](https://en.wikipedia.org/wiki/Embedded_system). It is suitable for many types of projects including IoT sensors, wearables, academic proof of concept, robotics, hobbyist/makers creations or even complex industrial equipment. It makes the development for such platforms easier, faster and less costly by giving embedded developers access to modern technologies and tools used by desktop application developers.

Developers can harness the powerful and familiar [Microsoft Visual Studio IDE](https://www.visualstudio.com/vs/) and their [.NET](https://en.wikipedia.org/wiki/.NET_Framework) [C\#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) knowledge to quickly write code without having to worry about the low-level hardware intricacies of a microcontroller. Desktop .NET developers will feel “at home” and are able to use their skills in embedded systems development, enlarging the pool of qualified embedded developers.

It includes a reduced version of the .NET [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) and features a subset of the .NET base class libraries along with the most common APIs included in [.NET IoT](https://docs.microsoft.com/en-us/uwp/api/) allowing code reuse from .NET IoT applications, thousands of code examples and open source projects.  
Using Microsoft Visual Studio, a developer can deploy and debug the code directly on real hardware.

The project is supported by the .NET Foundation.

You can watch this video from the Microsoft [IoT Show](https://aka.ms/iotshow) featuring .NET nanoFramework connected to Azure IoT Hub, measuring a [BMP280 sensors](https://docs.nanoframework.net/devices/Iot.Device.Bmxx80.Bmp280.html) and using the unique deep sleep feature from microcontrollers. A real life example with .NET nanoFramework:

[![IoT Show](~/static/img/jpg/05716d799811c33d9d6bc54fd0cd0cff.jpg)](https://docs.microsoft.com/en-us/shows/internet-of-things-show/introduction-to-net-nanoframework)

## Why use .NET nanoFramework?

.NET **nanoFramework** is the perfect enabler for developing software that works on embedded devices. Start with a low cost and readily available development board, then use nanoFramework to write, debug and deploy your code.

Whether this is your first foray into programming or you are a seasoned developer, if you want a powerful and easy to use tool for developing software that runs on embedded devices, you are in the right place. With its modular architecture, it's easy to grab the core components (like the CLR, debugger and interpreter) and extend it to new hardware platforms, .NET nanoFramework is the perfect partner for your project. The current reference implementations uses [ChibiOS](http://www.chibios.org/dokuwiki/doku.php) supporting several [ST Microelectronics](http://www.st.com/content/st_com/en.html) development boards, Espressif [ESP32](https://en.wikipedia.org/wiki/ESP32), Texas Instruments [CC3220 Launchpad](https://www.ti.com/tool/CC3220SF-LAUNCHXL), [CC1352 Launchpad](https://www.ti.com/tool/LAUNCHXL-CC1352R1) and NXP [MIMXRT1060-EVK](https://www.nxp.com/part/MIMXRT1060-EVK#/).  
Because it's completely [free and Open Source](https://en.wikipedia.org/wiki/Free_and_open-source_software) you have access to and the ability to modify all parts of the code including the ability to leverage what others have already contributed. If you are willing to, you can help shape the future by contributing back to the project and rapidly growing community.

Here are couple of supported boards:

![nucleo](https://docs.nanoframework.net/images/reference-targets/nucleo64-f091rc.jpg)![esp32](https://docs.nanoframework.net/images/reference-targets/esp32-devkitc.jpg)![M5Stack](https://docs.nanoframework.net/images/reference-targets/m5stack.jpg)![OrgPall PalThree](https://docs.nanoframework.net/images/reference-targets/orgpal-palthree.jpg)![NXP](https://docs.nanoframework.net/images/reference-targets/mimxrt1060_evk.jpg)

Our reference boards can be found [here](https://github.com/nanoframework/nf-interpreter#net-nanoframework-interpreter-for-reference-boards). And community boards [here](https://github.com/nanoframework/nf-Community-Targets#available-community-boards). Depending on your board, it can be a matter of few hours to get your board supported! A blog post will explain how.

Here are some of its unique features:

- Can run on resource-constrained devices with as low as 128kB of flash and 64kB of RAM.
- Runs directly on bare metal. Currently [ARM Cortex-M](https://en.wikipedia.org/wiki/ARM_Cortex-M) and [ESP32](https://en.wikipedia.org/wiki/ESP32) devices are supported.
- Supports common embedded peripherals and interconnects like GPIO, UART, SPI, I2C, USB, networking.
- Provides multi threading support natively.
- Support for energy-efficient operation such as devices running on batteries.
- Support for Interop code allowing developers to easily write libraries that have both managed (C\#) and native code (C/C++).
- No manual memory management because of its simpler mark-and-sweep [garbage collector](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)).
- Execution constrains to catch device lockups and crashes.

Here are some advantages over other similar systems:

- First class debugger experience right on the target hardware with breakpoints, single step, step into, step out, step over, pause and stop.
- Powerful and free programming environment with [Microsoft Visual Studio IDE](https://www.visualstudio.com/vs/).
- Support for a large range of inexpensive boards from several manufacturers including: Discovery and Nucleo boards from [ST Microelectronics](http://www.st.com/content/st_com/en.html), [Quail](https://www.mikroe.com/quail) from Mikrobus, [Netduino](https://www.wildernesslabs.co/Netduino) from Wilderness Labs, [ESP32](https://en.wikipedia.org/wiki/ESP32) DevKit C, Texas Instruments [CC3220 Launchpad](https://www.ti.com/tool/CC3220SF-LAUNCHXL), [CC1352 Launchpad](https://www.ti.com/tool/LAUNCHXL-CC1352R1) and NXP [MIMXRT1060-EVK](https://www.nxp.com/part/MIMXRT1060-EVK#/).
- Easily expandable to other hardware platforms and [RTOS](https://en.wikipedia.org/wiki/Real-time_operating_system)es. Currently is targeting [CMSIS](https://developer.arm.com/embedded/cmsis) compatible ones and ESP32 FreeRTOS port.
- Completely free and Open Source. From the core components to the utilities used for building, deploying, debugging and IDE components.

## Associated links:

- Official .NET nanoFramework [site and blog](https://www.nanoframework.net/).
- [All our documentation](https://docs.nanoframework.net/) for API, classes, how to install, build your own images, architecture and more!.
- THE place to go to get any code: our [Github .NET nanoFramework](https://github.com/nanoframework).