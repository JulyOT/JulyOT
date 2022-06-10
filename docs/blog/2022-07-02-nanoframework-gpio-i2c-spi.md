---
slug: nanoframework-gpio-i2c-spi
title: .NET nanoFramework GPIO, I2C, SPI and other IO support
authors:
  name: Ellerbach
  name: josesimoes
tags: [dotnet, nanoframework]
---

# GPIO, I2C, SPI, PWM, ADC, DAC, Serial and more!

.NET nanoFramework has support for GPIO, I2C, SPI, PWM, ADC, DAC, Serial, OneWire, here are dedicated samples:

- [1-Wire sample](https://github.com/nanoframework/Samples/blob/main/samples/1-Wire)
- [Analogic/Digital converter](https://github.com/nanoframework/Samples/blob/main/samples/ADC)
- [Blink your first led](https://github.com/nanoframework/Samples/blob/main/samples/Blinky)
- [Digital Analog Converter sample](https://github.com/nanoframework/Samples/blob/main/samples/DAC)
- [GPIO and events sample](https://github.com/nanoframework/Samples/blob/main/samples/Gpio/Gpio+Events)
- [GPIO and events sample (.NET IoT style)](https://github.com/nanoframework/Samples/blob/main/samples/Gpio/Gpio+EventsIoTStyle)
- [GPIO sample pack](https://github.com/nanoframework/Samples/blob/main/samples/Gpio)
- [I2C GPS sample](https://github.com/nanoframework/Samples/blob/main/samples/I2C/System.Device.I2c/GPS)
- [I2C sample sample pack](https://github.com/nanoframework/Samples/blob/main/samples/I2C)
- [I2C Scanner sample](https://github.com/nanoframework/Samples/blob/main/samples/I2C/NanoI2cScanner)
- [System.Device.Pwm](https://github.com/nanoframework/Samples/blob/main/samples/PWM/System.Device.Pwm)
- [System.Device.PWM sample](https://github.com/nanoframework/Samples/blob/main/samples/PWM)
- [System.Device.Spi sample](https://github.com/nanoframework/Samples/blob/main/samples/SPI)
- [System.IO.Ports serial Communication sample](https://github.com/nanoframework/Samples/blob/main/samples/SerialCommunication)

The API reference is available here: <https://docs.nanoframework.net/api/index.html>

Also the API are aligned with .NET IoT (<https://github.com/dotnet/iot/>) making it easy for code reuse between development on a Raspberry Pi with .NET 6.0 and an MCU running .NET nanoFramework.

A comparison on how to reuse code and differences between .NET IoT and .NET nanoFramework is available: <https://github.com/dotnet/samples/tree/main/iot/dotnet-iot-and-nanoframework>

## IoT Repository and advance bindings

The alignment between .NET IoT and .NET nanoFramework allows code reuse between the different platforms. While it's not technically possible to have the exact same nuget for both as the platforms are different, reusing API and code is possible. A lot of work and effort has been put in place to facilitate the creation of individual nuget for almost each of the .NET IoT bindings! The IoT Device repository (<https://github.com/nanoframework/nanoFramework.IoT.Device>) contains all the tools and the code for all the available bindings.

.NET nanoFramework does not have *yet* Generics and does not neither have Linq and some other compromise had to be done to fit into those very little MCU. This page explains most of them: <https://docs.nanoframework.net/content/architecture/simplifications-and-trade-offs.html>

Tools to help in the migration has been built to automate some of the migration and initial work started back in May 2021 (<https://www.nanoframework.net/net-iot-bindings-available/>). Now more than 98 bindings are available, some specific for MCU and optimized for a specific platform like ESP32. .NET IoT also benefited from this work as some of those new bindings has been migrated back to .NET IoT.
