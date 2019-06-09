# Catalina-GPU-Buyers-Guide

So it's that time of year again, a new version of macOS has been released and the age-old question will be asked once again:

**What GPUs are supported with macOS 10.15 Catalina?**

Well you've come to the right place, I'll give a quick rundown on the situation and go into more detail on exact GPUs we recommend. While this is named the Catalina GPU Buyers guide, this has info for High Sierra, Mojave and Catalina. And for those interested, you can find my old Mojave GPU Buyer's Guide [here](https://www.reddit.com/r/hackintosh/comments/b91vf5/mojave_gpu_buyers_guide/)


# A quick refresher with Nvidia and WebDrivers

Well currently as of the time of writing, we've gone a full OS cycle without official drivers from Nvidia for their Maxwell, Pascal or Turing GPUs. What this means is that users of these GPUs have no support for either Mojave or Catalina so are stuck with macOS 10.13 High Sierra. Who's to blame? Well it's 2 giant, egotistical companies who both refuse to work together so the blame can go both ways. Do keep in mind that the WebDrivers have a VRAM leakage issue that they've yet to address, so a theory to why Apple refuses Nvidia drivers in macOS may be due to how Nvidia refuses to hand over the driver stack. Think it's a coincidence that both AMD and intel have open-sourced drivers? Welll, either way, it doesn't change the fact there's no support. 

Users with Kepler based GPUs are in the clear though, they utilize Apple's native drivers

# So if my GPU is natively supported, why do i need Lilu and WhateverGreen?

This is a question comes up quite a bit in the hackintosh community, and for good reason as why in the world would these GPUs work out of box on a mac and not a hackintosh? Well the reason being is that PCs and Macs have different internal wiring and so the ACPI layouts in a PC don't work well with Macs in different senarios. To get around this, we use [WhateverGreen](https://github.com/acidanthera/WhateverGreen/releases) and it's commanion [Lilu](https://github.com/acidanthera/Lilu/releases) to patch different parts of our hackintosh like renaming devices, assisting in framebuffer connections, patching audio connectors, allowing modifications to aty_config, aty_properties, cail_properties via ACPI and so many more. With such a large feature set and developed by someone who knows what they're doing, there's no reason not to use it

# So what GPU should I buy?


So there’s still 2 routes for discrete GPUs you can go, either AMD or Nvidia(Yes, there’s actually natively supported Nvidia cards in Catalina). So I’ll be going over what GPUs are compatible and what features/drawbacks they hold.

Things to remember:

* macOS does not support either SLI, Crossfire or GPUs will multiple main cores(like the Radeon Pro Duo). This may change with the release of the Radeon Pro Vega II Duo in the Mac Pro
* Getting audio through HDMI/DisplayPort may require extra work with both AppleALC.kext and some other IO-REG edits
* GPU Overclocking is limited to Vega 10 GPUs with [PyVega](https://github.com/corpnewt/PyVega)
* Running a supported GPU with an unsupported GPU can have weird consequences as unsupported GPUs run off VESA drivers which have the issue in which it can break sleep and other functions in macOS. Please refer to the [Disabling unsupported GPUs Guide](https://www.reddit.com/r/hackintosh/comments/bu1wf8/how_to_disable_your_unsupported_gpu_for_macos/) for more info

# AMD GPUs

**Vega 20 series Highest Supported OS: Current/Catalina**

So all Vega based GPUs are natively supported in macOS with Vega 20 GPUs starting in Mojave. While natively supported, it's recommended to still have WhateverGreen.kext installed as this helps with proper framebuffer connections and fixes other odd issues like proper ACPI mapping and such

Supported Cards:

* Radeon VII

Needed kexts:

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)


**Vega 10 series Highest Supported OS: Current/Catalina**

Just like with Vega 20, Vega 10 GPUs are natively supported in macOS though these card's support starts in High Sierra. Similar to Vega 20, it's recommended to still have WhateverGreen.kext installed as this helps with proper framebuffer connections and fixes other odd issues like proper ACPI mapping and such.

And for those who want to overclock/undervolt, check out [PyVega](https://github.com/corpnewt/PyVega)

The only brand of GPUs to **avoid with Vega 10 are XFX and Sapphire**. The reason being is VBIOS communication issues which can't be easily solved with a reference BIOS due to how Vega's powerplay table interacts between the OS and GPU.

Supported Cards:

* Vega 56
* Vega 64
* Vega 64 Liquid
* Vega Frontier Edition
* Radeon Pro WX 9100
* Radeon Pro WX 7100

Needed kexts:

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

**Radeon 400/500 series (Polaris) Highest Supported OS: Current/Catalina**

Regarding Polaris, basically every model of card is supported as long as it’s running a Polaris core(lower end cards like the RX550 run a Lexa core meaning no support in macOS).

The only brand of GPU **you should** **avoid with the Polaris series would be XFX and ASRock** as many users have had issues with these cards with viewing Clover and macOS booting but other users have found fixes/workarounds(though nothing consistent). This seems to be caused by having an odd VBIOS that doesn't communicate well with macOS and the only real solution is flashing another VBIOS which is not ideal for most users.

Supported cards:

* RX 460/560/X
* RX 470/570/X
* RX 470D
* RX 480/580/X
* RX 590
* WX 2100
* WX 3100
* WX 4100
* WX 5100


Needed kexts:

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)


**GCN 3 and older based Cards**

Regarding GCN 3 and older, cards from these generations theoretically will have support for Metal in Catalina but due to how fragmented some of the product stack became meant that some cards may not have support. Generally, HD 7XXX series of GPUs and up are metal compatible but I’ll only list GPUs that have been proven to work.

**Radeon R9 3xx (Fiji) Current/Catalina**

Fiji is also natively supported in Catalina without much issue but we cannot guarantee the success of R5 and R7 cards due to not having many reports of success soon them. Also, be wary that differing from the reference design of these cards have many more issues that require a lot of work to get them to run properly

Supported cards:

* R7 240
* R7 250
* R9 260/360
* R7 260x/360x
* R7 265
* R7 270/370
* R9 270X/370X
* R9 280/380
* R9 280x/380x
* R9 290/390(FakeID needed)
* R9 290X/390X
* R9 390(FakeID needed)
* R9 Nano
* R9 Fury
* R9 Fury X

Needed kexts

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

# Unsupported AMD GPUs

**Navi Series (RX 5000) Highest Supported OS: None**

Currently as of writing, Apple has not released any Navi based drivers for macOS. Because of this, you'll need to block out the GPU if you want to use another GPU as VESA drivers that unsupported GPUs runs off of break sleep and other functions in macOS. Please refer to the [Disabling unsupported GPUs Guide](https://www.reddit.com/r/hackintosh/comments/bu1wf8/how_to_disable_your_unsupported_gpu_for_macos/)

Unsupported Cards:

* RX 5700

**Lexa Series (RX 400/500) Highest Supported OS: None**

While these GPUs may share the same family name as the Polaris GPUs, these cards are drastically different meaning no support in any version of macOS. Similar to Navi and unsupported Nvidia GPUs, you'll need to disable the Lexa GPU due to how the Vesa drivers that unsupported GPUs run off of break sleep and other functions in macOS. Please refer to the [Disabling unsupported GPUs Guide](https://www.reddit.com/r/hackintosh/comments/bu1wf8/how_to_disable_your_unsupported_gpu_for_macos/)

Unsupported Cards:

* RX 540/X
* RX 550/X


# Native nVidia GPUs

**Kepler Series (GTX 6xx, 7xx) Highest Supported OS: Current/Catalina**

Currently the only 100% native Nvidia architecture that works with Catalina. Users have reported issues with the GTX 650Ti, 660, 660ti but this is caused by a driver issue on Apple’s end by not supporting the GK106 core(or quite poorly as the issue seems to be memory leakage which also affects real Macs). Another issue with this generation is lower end products marketed as first generation Kepler are actually using a Fermi core but have identical counterparts running Kepler cores as well(GF 116 vs GK 107 found in the GT 640). **AND PLEASE NOTICE THAT  GTX 745, 750 and ti VARIANTS ARE NOT INCLUDED, THEY'RE NOT KEPLER**

Supported cards:

Kepler Gen 2:

* GTX Titan (GK 110 Maxwell core)
* GTX Titan Black(GK 110 Maxwell core)
* GTX Titan Z (One of the few dual GPU cards supported in MacOs)
* GTX 780/Ti
* GTX 770
* GTX 760/Ti
* GT 740
* GT 730(GK208 variant)
* GT 720
* GT 710

Kepler Gen 1:

* GTX Titan (GK 110 Maxwell core)
* GTX Titan Black(GK 110 Maxwell core)
* GTX Titan Z (One of the few dual GPU cards supported in MacOs, unfortunately was never truly utilized)
* GTX 690(Another dual GPU card compatible with macOS)
* GTX 680
* GTX 670
* GTX 660Ti
* GTX 660(MUST BE RUNNING A GK 104 core, NOT GK 106)
* GTX 650(GK 107 core)
* GT 640(Kepler edition, GK 107/208 core)
* GT 630(Kepler edition, GK 107/208 core)

Quadro:

* Quadro 410
* Quadro K420
* Quadro K600
* Quadro K2000/D
* Quadro K4000/D
* Quadro K4200
* Quadro K5000
* Quadro K5200
* Quadro K6000

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)


# Unsupported nVidia GPUs

**Turing Series (GTX 20xx, 16xx) Highest Supported OS:NONE**

Unfortunately, no support in any version of macOS as no drivers were ever written even for High Sierra. Not much else to add.

These cards include:

* Titan RTX
* RTX 2080/Ti
* RTX 2070
* RTX 2060
* GTX 1660/Ti
* GTX 1650/Ti

Quadro:

* Quadro RTX 4000
* Quadro RTX 5000
* Quadro RTX 6000
* Quadro RTX 8000


**Volta Series Highest Supported OS:NONE**

The same idea as Turing, no drivers were ever written

These cards include:

* Titan V
* Titan V CEO Edition

Quadro:

* Quadro GV100


**Pascal Series (GTX 10xx) Highest Supported OS: High Sierra 10.13.6**

Well pretty sure most users know what going on with Pascal and Maxwell but I’ll just mention it quickly here. No support for these cards in Mojave/Catalina but macOS High Sierra 10.13.6 do support these cards with the combination of Nvidia’s somewhat shotty drivers and Lilu+WhateverGreen

Supported cards:

* GTX Titan X(GP 102-400 Pascal core)
* GTX Titan Xp(GP 102-450 Pascal core)
* GTX 1080/Ti
* GTX 1070/Ti
* GTX 1060
* GTX 1050/Ti
* GT 1030

Quadro:

* Quadro P400
* Quadro P600
* Quadro P620
* Quadro P1000
* Quadro P2000
* Quadro P4000
* Quadro P5000
* Quadro P6000
* Quadro GP100

Needed kexts:

* [Nvidia’s Web drivers](https://www.nvidia.com/download/driverResults.aspx/125379/en-us)
* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)


**Maxwell Series (GTX 9xx, 745, 750 and ti variant) Highest Supported OS: High Sierra 10.13.6**

Same idea as Pascal, though the naming scheme is a bit odd as the GTX 745, 750 and 750ti are all Maxwell based even though they’re being marketed with the Kepler line so be wary when buying

Supported cards:

* GTX Titan X(GM 200 Maxwell core)
* GTX 980/ti
* GTX 970
* GTX 960
* GTX 950
* GTX 750/ti
* GTX 745

Quadro:

* Quadro K620
* Quadro K1200
* Quadro K220
* Quadro M2000
* Quadro M4000
* Quadro M5000
* Quadro M6000
* NVS 510

Needed kexts:

* [Nvidia’s Web drivers](https://www.nvidia.com/download/driverResults.aspx/125379/en-us)
* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
