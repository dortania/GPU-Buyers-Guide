# Introduction

## Catalina-GPU-Buyers-Guide

**Disclaimer: I mention Turing, Pascal and Maxwell to help educate users on what versions of macOS they're supported on but if you accidentally fell on this page thinking your RTX card is supported, please read carefully**

![](https://i.imgur.com/2Wa6ugV.jpg)

* [A quick refresher with Nvidia and WebDrivers](./#A-quick-refresher-with-Nvidia-and-WebDrivers)
* [So if my GPU is natively supported, why do i need Lilu and WhateverGreen?](./#so-if-my-GPU-is-natively-supported-why-do-i-need-Lilu-and-WhateverGreen)
* [So what are my options?](./#so-what-are-my-options)
* [Can I run an unsupported GPU in my hack?](./#can-I-run-an-unsupported-GPU-in-my-hack)
* [Native AMD GPUs](amd-gpu.md)
  * Vega 20 series
  * Vega 10 series
  * Radeon 400/500 series \(Polaris\)
  * GCN 3 and older based Cards
* [Unsupported AMD GPUs](amd-gpu.md#Unsupported-AMD-GPUs)
  * Navi 10 Series
  * Lexa Series
  * AMD APUs
* [Native nVidia GPUs](nvidia-gpu.md)
  * Kepler Series
* [Unsupported nVidia GPUs](nvidia-gpu.md#Unsupported-nVidia-GPUs)
  * Turing Series
  * Pascal Series
  * Maxwell Series
* [Intel’s Integrated Graphics](intel-gpu.md)
  * Westmere i3/5/7-xxx
  * Sandy Bridge i3/5/7-2XXX
  * Ivy Bridge i3/5/7-3XXX
  * Haswell i3/5/7-4XXX
  * Broadwell i3/5/7-5XXX
  * Skylake i3/5/7-6XXX
  * Kabylake i3/5/7-7XXX
  * Kabylake refresh/ Coffeelake i3/5/7-8XXX/9XXX
* [What GPU To Get](what-gpu-to-get.md)
  * GPUs To Avoid
  * Fanless GPUs\(0 DB\)
  * Single Slot GPUs
  * Half-height GPUs
  * The most powerful GPUs
  * Cheapest Hackintosh GPUs
  * Overall best Hackintosh GPUs

So it's that time of year again, a new version of macOS has been released and the age-old question will be asked once again:

**What GPUs are supported with macOS 10.15 Catalina?**

Well you've come to the right place, I'll give a quick rundown on the situation and go into more detail on exact GPUs we recommend. While this is named the Catalina GPU Buyers guide, this has info for High Sierra, Mojave and Catalina. And for those interested, you can find my old Mojave GPU Buyer's Guide [here](https://www.reddit.com/r/hackintosh/comments/b91vf5/mojave_gpu_buyers_guide/)

## A quick refresher with Nvidia and WebDrivers

![WebDrivers](.gitbook/assets/webdrivers%20%281%29.gif)

Well currently as of the time of writing, we've gone a full OS cycle without official drivers from Nvidia for their Maxwell, Pascal or Turing GPUs. What this means is that users of these GPUs have no support for either Mojave or Catalina so are stuck with macOS 10.13 High Sierra. Who's to blame? Well it's 2 giant, egotistical companies who both refuse to work together so the blame can go both ways. Do keep in mind that the WebDrivers have a VRAM leakage issue that they've yet to address, so a theory to why Apple refuses Nvidia drivers in macOS may be due to how Nvidia refuses to hand over the driver stack. Think it's a coincidence that both AMD and intel have open-sourced drivers? Well, either way, it doesn't change the fact there's no support.

Users with Kepler based GPUs are in the clear though, they utilize Apple's native drivers

## So if my GPU is natively supported, why do i need Lilu and WhateverGreen?

This is a question comes up quite a bit in the Hackintosh community, and for good reason as to why in the world would these GPUs work out of the box on a mac and not a Hackintosh? Well, the reason being is that PCs and Macs have different internal wiring and so the ACPI layouts in a PC don't work well with Macs in different scenarios. To get around this, we use [WhateverGreen](https://github.com/acidanthera/WhateverGreen/releases) and it's companion [Lilu](https://github.com/acidanthera/Lilu/releases) to patch different parts of our Hackintosh like renaming devices, assisting in framebuffer connections, patching audio connectors, allowing modifications to aty\_config, aty\_properties, cail\_properties via ACPI and so much more. With such a large feature set and developed by someone who knows what they're doing, there's no reason not to use it

## So what are my options?

So there’s still 2 routes for discrete GPUs you can go, either AMD or Nvidia\(Yes, there’s actually natively supported Nvidia cards in Catalina\). So I’ll be going over what GPUs are compatible and what features/drawbacks they hold.

Things to remember:

* macOS does not support either SLI, Crossfire or GPUs will multiple main cores\(like the Radeon Pro Duo\). This may change with the release of the Radeon Pro Vega II Duo in the Mac Pro
* Getting audio through HDMI/DisplayPort may require extra work with both AppleALC.kext and some other IO-REG edits
* GPU Overclocking is limited to Vega 10 GPUs with [PyVega](https://github.com/corpnewt/PyVega)
* Running a supported GPU with an unsupported GPU can have weird consequences as unsupported GPUs run off VESA drivers which have the issue in which it can break sleep and other functions in macOS. Please refer to the [Disabling unsupported GPUs Guide](https://github.com/khronokernel/How-to-disable-your-unsupported-GPU-for-MacOS) for more info

## Can I run an unsupported GPU in my hack?

So something to keep in mind when running an unsupported GPU in macOS is will fall back on VESA drivers when no real drivers are present. These are very simple, CPU based drivers that are used as a stop-gap while you wait to install the correct drivers but many baisc functions of macOS are broken when running this way including sleep and general stability. And since these GPUs have no drivers even outside of Apple, we need some way to stop the unsupported GPU from being recognized in macOS. So what do we do? Well I'm glad you ask. With my patent pending [How to disable your unsupported GPU for macOS Guide](https://github.com/khronokernel/How-to-disable-your-unsupported-GPU-for-MacOS/blob/master/README.md), even a simpleton like you can experience the glories of Mojave and beyond!

> But can I render macOS on my iGPU but use the video outs on my unsupported GPU?

Unfortunately not, and the reason being is actually quite similar to how Nvidia's Optimus technology functions. You would first need a way to grab/encode the iGPU's signal, send it towards the discrete GPU, then have said GPU decode the signal and display it. One small problem, decoding the signal would require proper GPU acceleration which your unsupported GPU doesn't have. So you will need to use your motherboard's video out ports no matter what

