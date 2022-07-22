---
slug: julyot-day24-az220
title: "24: Exam AZ-220 Study Guide - Provision and Manage Devices"
authors: [diana]
tags: [30days, iot, az220, iotcerts]
draft: true
---

<head>
  <meta name="twitter:url" content="https://julyot.dev/blog/julyot-day24-az220-provision-manage-devices" />
  <meta name="twitter:title" content="Exam AZ-220 Study Guide" />
  <meta name="twitter:description" content="Resources for Exam: AZ-220 – Provision and Manage Devices" />
  <meta name="twitter:image" content="https://julyot.dev/img/png/JulyOT-banner-24-az220-provision-manage-devices.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@utahitpro" />
  <meta name="twitter:site" content="@AzureAdvocates" />
  <link rel="canonical" href="https://julyot.dev/blog/julyot-day24-az220-provision-manage-devices" />
</head>

> Welcome to Day 24 of **#JulyOT**!!

![Post banner](/img/png/JulyOT-banner-24-az220-provision-manage-devices.png)

_This is part 2 of a series of posts to help you pass the AZ-220 Azure IoT Developer specialty exam. 15-20% of the AZ-220 exam will measure your ability to provision and manage devices._

The Microsoft Global Partner Solutions (GPS) Technical Team, IoT Product Group, IoT Advocates, and Microsoft Worldwide Learning have collaborated to create this guide to help you prepare for the Microsoft Azure IoT Developer exam!

## Skills Measured: Provision and Manage Devices

### [Set up the device provisioning service](https://docs.microsoft.com/azure/iot-dps/about-iot-dps?wt.mc_id=eventspg_16482_webpage_reactor)

* [Create a device provisioning service](https://docs.microsoft.com/azure/iot-dps/quick-setup-auto-provision?wt.mc_id=eventspg_16482_webpage_reactor)
* [Create a new enrollment in the device provisioning service](https://docs.microsoft.com/azure/iot-dps/how-to-manage-enrollments?wt.mc_id=eventspg_16482_webpage_reactor)
* [Link an IoT hub to the device provisioning service](https://docs.microsoft.com/azure/iot-dps/quick-setup-auto-provision?wt.mc_id=eventspg_16482_webpage_reactor#link-the-iot-hub-and-your-device-provisioning-service)

### [Manage the device lifecycle](https://docs.microsoft.com/azure/iot-hub/iot-hub-device-management-overview?wt.mc_id=eventspg_16482_webpage_reactor)

* [Provision a device by using the device provisioning service](https://docs.microsoft.com/azure/iot-dps/how-to-manage-enrollments?wt.mc_id=eventspg_16482_webpage_reactor)
* [Deprovision an auto-enrollment](https://docs.microsoft.com/azure/iot-dps/how-to-unprovision-devices?wt.mc_id=eventspg_16482_webpage_reactor)
* [Decommission (disenroll) a device](https://docs.microsoft.com/azure/iot-dps/how-to-revoke-device-access-portal?wt.mc_id=eventspg_16482_webpage_reactor)

### [Manage IoT devices by using IoT Hub](https://docs.microsoft.com/azure/iot-hub/iot-hub-device-management-overview?wt.mc_id=eventspg_16482_webpage_reactor)

* [Manage devices list in the IoT Hub device registry](https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry?wt.mc_id=eventspg_16482_webpage_reactor)
* [Modify device twin tags and properties](https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-device-twins?wt.mc_id=eventspg_16482_webpage_reactor)
* [Specify a set of devices to manage by using IoT Hub Automatic Device Management](https://docs.microsoft.com/azure/iot-hub/iot-hub-automatic-device-management?wt.mc_id=eventspg_16482_webpage_reactor)
* [Implement and manage configuration on a set of devices by using IoT Hub Automatic Device Management](https://docs.microsoft.com/azure/iot-hub/iot-hub-automatic-device-management?wt.mc_id=eventspg_16482_webpage_reactor)
* [Control access to device functionality by using module identities and module twins](https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-module-twins?wt.mc_id=eventspg_16482_webpage_reactor)

### [Manage IoT devices by using Azure IoT Central](https://docs.microsoft.com/azure/iot-central/core/overview-iot-central-operator?wt.mc_id=eventspg_16482_webpage_reactor)

* [Create and manage device templates by using Azure IoT Central and Digital Twins Definition Language (DTDL)](https://docs.microsoft.com/azure/iot-central/core/howto-set-up-template?wt.mc_id=eventspg_16482_webpage_reactor)
* [Configure rules, actions, and commands in Azure IoT Central](https://docs.microsoft.com/azure/iot-central/core/howto-configure-rules?wt.mc_id=eventspg_16482_webpage_reactor)
* [Add, enroll, and manage devices by using Azure IoT Central](https://docs.microsoft.com/azure/iot-central/core/howto-manage-devices?wt.mc_id=eventspg_16482_webpage_reactor)
* [Manage Azure IoT Central applications, including security, tenants, customization, and visualizations](https://docs.microsoft.com/azure/iot-central/core/overview-iot-central-admin?wt.mc_id=eventspg_16482_webpage_reactor)
* [Manage data integration, including data ingress, data export, and data transformation](https://docs.microsoft.com/azure/iot-central/core/howto-map-data?wt.mc_id=eventspg_16482_webpage_reactor)
* [Configure and manage Azure IoT Central jobs](https://docs.microsoft.com/azure/iot-central/core/howto-manage-devices-in-bulk?wt.mc_id=eventspg_16482_webpage_reactor)
* [Manage Azure IoT Central by using APIs](https://docs.microsoft.com/azure/iot-central/core/overview-iot-central-api-tour?wt.mc_id=eventspg_16482_webpage_reactor)

*NOTE: In most cases, exams do NOT cover preview features, and some features will only be added to an exam when they are GA (General Availability).*

## Microsoft Learn - Related Learning Paths

### [Provision IoT devices at scale by using the Device Provisioning Service](https://docs.microsoft.com/learn/paths/provision-iot-devices-scale-use-device/?wt.mc_id=eventspg_16482_webpage_reactor) (5 Modules)

Learn about the Device Provisioning Service properties and capabilities, device attestation mechanisms, device provisioning lifecycle tasks, and you will implement device enrollment (and disenrollment) using individual and group enrollment processes.

### [Manage IoT devices by using IoT Hub and apps](https://docs.microsoft.com/learn/paths/use-iot-hub-apps-manage-iot-devices/?wt.mc_id=eventspg_16482_webpage_reactor) (5 Modules)

Learn about device management patterns and the capabilities for device management, including bulk device management, that can be implemented using features of IoT Hub and by developing code.

### [Build low touch IoT solutions by using Azure IoT Central](https://docs.microsoft.com/learn/paths/build-low-touch-iot-solutions-by-using-azure-iot-central/?wt.mc_id=eventspg_16482_webpage_reactor) (4 Modules)

Learn about the Azure IoT Central application platform and the support that it provides to companies with limited budgets and technical resources who are interested in developing, managing, and maintaining IoT solutions.

## Other Helpful Resources

* [Azure IoT Blogs](https://azure.microsoft.com/blog/topics/internet-of-things/?wt.mc_id=eventspg_16482_webpage_reactor)
* [Azure IoT Hub Pricing](https://azure.microsoft.com/pricing/details/iot-hub/?wt.mc_id=eventspg_16482_webpage_reactor)
* [Azure IoT Reference Architecture](https://docs.microsoft.com/azure/architecture/reference-architectures/iot?wt.mc_id=eventspg_16482_webpage_reactor)
* [Best practices for device configuration within an IoT solution](https://docs.microsoft.com/azure/iot-hub/iot-hub-configuration-best-practices)
* [Export IoT data to Azure Data Explorer](https://docs.microsoft.com/azure/iot-central/core/howto-export-to-azure-data-explorer?wt.mc_id=eventspg_16482_webpage_reactor)
* [How to deprovision devices that were previously auto-provisioned](https://docs.microsoft.com/azure/iot-dps/how-to-unprovision-devices?wt.mc_id=eventspg_16482_webpage_reactor)
* [How to disenroll a device from Azure IoT Hub Device Provisioning Service](https://docs.microsoft.com/azure/iot-dps/how-to-revoke-device-access-portal)
* [How to provision a single simulated device](https://docs.microsoft.com/azure/iot-dps/quick-create-simulated-device-symm-key?wt.mc_id=eventspg_16482_webpage_reactor)
* [How to provision for multitenancy](https://docs.microsoft.com/azure/iot-dps/how-to-provision-multitenant?wt.mc_id=eventspg_16482_webpage_reactor)
* [How to provision legacy devices using Symmetric key attestation](https://docs.microsoft.com/azure/iot-dps/how-to-legacy-device-symm-key?wt.mc_id=eventspg_16482_webpage_reactor)
* [How to reprovision devices](https://docs.microsoft.com/azure/iot-dps/how-to-reprovision?wt.mc_id=eventspg_16482_webpage_reactor)
* [How to roll X.509 device certificates](https://docs.microsoft.com/azure/iot-dps/how-to-roll-certificates?wt.mc_id=eventspg_16482_webpage_reactor)
* [Import and export IoT Hub device identities in bulk](https://docs.microsoft.com/azure/iot-hub/iot-hub-bulk-identity-mgmt?wt.mc_id=eventspg_16482_webpage_reactor)
* [Invoke a direct method on a device](https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-direct-methods?wt.mc_id=eventspg_16482_webpage_reactor)
* [IoT Hub Device Provisioning Service concepts](https://docs.microsoft.com/azure/iot-dps/concepts-service?wt.mc_id=eventspg_16482_webpage_reactor)
* [Microsoft Tech Community - IoT](https://techcommunity.microsoft.com/t5/internet-of-things-iot/ct-p/IoT?wt.mc_id=eventspg_16482_webpage_reactor) - Blogs and conversation spaces
* [Schedule jobs on multiple devices](https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-jobs?wt.mc_id=eventspg_16482_webpage_reactor)
* [Transform data externally for IoT Central](https://docs.microsoft.com/azure/iot-central/core/howto-transform-data?wt.mc_id=eventspg_16482_webpage_reactor)
* [YouTube - Microsoft IoT Developers](https://www.youtube.com/channel/UCL7wy-iy_V76xxPnrIzGOZQ?wt.mc_id=eventspg_16482_webpage_reactor)

Happy studies!