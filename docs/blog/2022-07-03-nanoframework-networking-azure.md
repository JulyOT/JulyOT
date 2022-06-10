---
slug: nanoframework-gpio-i2c-spi
title: .NET nanoFramework networking and Azure
authors:
  name: Ellerbach
  name: josesimoes
tags: [dotnet, nanoframework]
---

# Networking and Azure

.NET nanoFramework offers native secured network capabilities. They may be dependent of the MCU and associated hardware but if there is an ethernet adaptor or a Wi-Fi module, except if they are extremely exotic, they'll be supported! For example, ESP32 offers native Wi-Fi connectivity allowing to securely connect to a Wi-Fi network and securely as well to Azure. All certificates to authenticate servers and devices are supported making the connection secured from end to end using the underlying TLS/SSL.

As an illustration, IoT Show demonstrating the capability to connect to Azure IoT: <https://www.youtube.com/watch?v=pxXgU3XcRr4&t=5s>

Connecting to Azure IoT is made fully transparent with a full library supporting Device Provisioning Services (DPS), SAS token and certificate authentication, Cloud to Device (C2D) messages, Device to Cloud (D2C) messages, remote function calls, twins, for clients and modules! And we do not forget the IoT Plug & Play full support! Check it yourself: <https://github.com/nanoframework/nanoFramework.Azure.Devices>

## New: first .NET nanoFramework Azure Certified Device

In May 2022, the first Azure Certified Device running .NET nanoFramework has been approved:

<https://www.nanoframework.net/palthree-board-becomes-azure-certified-device/>. This PalThtree device from OrgPal based on a STM32F7 MCU is the first one but certified as well the Azure library itself and also certified it IoT Plug and Play! This is one more proof that .NET nanoFramework is a ready for production solution.

## Running on battery for 8 years and connecting to Azure

One of the advantages of MCU is their low consumption and ability to deep sleep very long. You'll find a full article describing some of the secrets here:

<https://devblogs.microsoft.com/dotnet/show-dotnet-running-my-net-nanoframework-for-8-years-on-a-battery/>
