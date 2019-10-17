# AMD GPUs

## Native AMD GPUs

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

The only brand of GPUs to **avoid with Vega 10 are XFX and Sapphire**. The reason being is VBIOS communication issues which can't be easily solved with a reference BIOS due to how Vega's powerplay table interacts between the OS and GPU. Sapphire Vega support seems to have been mostly resolved with the advent of macOS 10.14.5 but do note that there were issues that can come back in the future.

Supported Cards:

* Vega 64 Liquid
* Vega 64
* Vega 56

Radeon Pro:

* Vega Frontier Edition
* Radeon Pro WX 9100
* Radeon Pro WX 7100

Needed kexts:

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)


**Radeon 400/500 series \(Polaris\) Highest Supported OS: Current/Catalina**

Regarding Polaris, basically every model of card is supported as long as it’s running a Polaris core\(lower end cards like the RX550 run a Lexa core meaning no support in macOS\).

The only brand of GPU **you should** **avoid with the Polaris series would be XFX and PowerColour** as many users have had issues with these cards with viewing Clover and macOS booting but other users have found fixes/workarounds\(though nothing consistent\). This seems to be caused by having an odd VBIOS that doesn't communicate well with macOS and the only real solution is flashing another VBIOS which is not ideal for most users.

Supported cards:

400 Series:

* RX 480
* RX 470D
* RX 470
* RX 460

500 Series:

* RX 590
* RX 580X
* RX 580
* RX 570X
* RX 570
* RX 560X
* RX 560

Radeon Pro:

* WX 5100
* WX 4100
* WX 2100

Needed kexts:

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

**GCN 3 and older based Cards**

Regarding GCN 3 and older, cards from these generations theoretically will have support for Metal in Catalina but due to how fragmented some of the product stack became meant that some cards may not have support. Generally, HD 7XXX series of GPUs and up are metal compatible but I’ll only list GPUs that have been proven to work.

**Radeon R9 3xx \(Fiji\) Current/Catalina**

Fiji is also natively supported in Catalina without much issue but we cannot guarantee the success of R5 and R7 cards due to not having many reports of success soon them. Also, be wary that differing from the reference design of these cards have many more issues that require a lot of work to get them to run properly

Supported cards:

* R9 Fury X
* R9 Fury
* R9 Nano
* R9 390\(FakeID needed\)
* R9 290X/390X
* R9 290/390\(FakeID needed\)
* R9 280x/380x
* R9 280/380\(FakeID may be required depending on model\)
* R9 270X/370X
* R7 270/370\(FakeID may be required depending on model\)
* R7 265
* R7 260x/360x
* R9 260/360\(FakeID may be required depending on model\)
* R7 250
* R7 240

Needed kexts

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:


* `radpg=15`: Required for HD 7730/7750/7770/R7 250/R7 250X GPU initiaization)
* `-raddvi` boot flag: Fixes DVI, required for 290X, 370, etc
* InjectAMD: While deprecated, some users require this for proper initialization, avoid unless absolutely necessary

## Unsupported AMD GPUs

**Navi 10 Series \(RX 5000\) Highest Supported OS: None**

Currently, as of 10.15.1 Developer beta 2, Apple has updated the GPU framework to support RDNA and fortunately drivers have been added for Navi !

Soon to be Cards:

* RX 5700
* RX 5700 XT
* RX 5700 XT 50th Anniversary Edition

Note: 5500 series hasn't been added yet as I have yet to check validity with the PCI ID match in the drivers. Once done I will update this portion

**Lexa Series \(RX 500\) Highest Supported OS: None**

While these GPUs may share the same family name as the Polaris GPUs, these cards are drastically different meaning no support in any version of macOS. Similar to Navi and unsupported Nvidia GPUs, you'll need to disable the Lexa GPU due to how the Vesa drivers that unsupported GPUs run off of break sleep and other functions in macOS. Please refer to the [Disabling unsupported GPUs Guide](https://www.reddit.com/r/hackintosh/comments/bu1wf8/how_to_disable_your_unsupported_gpu_for_macos/)

Unsupported Cards:

* WX 3100
* RX 550X
* RX 550
* RX 540X
* RX 540

**AMD APUs \(ALL VARIENTS\) Highest Supported OS: None**

The integrated GPU found on lower end AMD CPUs have unfortunatly never had offical support with community support quite lacking. While possible to get a display out with some work, graphics acceleration is basically imposiible making these APUs more of a hazard to macOS

Unsupported APUs:

* Vega 11\(Zen\)
* Vega 8\(Zen\)
* GCN 3\(Escavator Gen 2, Steamroller\) 
* GCN 2\(Escavator Gen 1, Puma, Puma +\)

