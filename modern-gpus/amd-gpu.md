# AMD GPUs

## Native AMD GPUs

### **Navi 20 series**
#### Highest Supported OS: Current/Big Sur(11.4+)
#### Initial Supported OS: Big Sur (11.4)

As of Big Sur 11.4 and up these cards are now natively supported.

* RX 6600 XT
* RX 6700 XT
* RX 6800
* RX 6800 XT
* RX 6900 XT

Radeon Pro:

* Radeon Pro W6800
* Radeon Pro W6600

Needed kexts:

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)


### **Navi 10 Series**

#### Highest Supported OS: Current/Big Sur(11)
#### Initial Supported OS: Catalina(10.15)

Currently, as of 10.15.1, Apple has finally added RDNA and Navi support!

Supported Cards:

* RX 5500
* RX 5500 XT
* RX 5600
* RX 5600 XT
* RX 5700
* RX 5700 XT
* RX 5700 XT 50th Anniversary Edition

Radeon Pro:

* Radeon Pro W5500
* Radeon Pro W5700

Note: Most Navi cards currently require the boot argument `agdpmod=pikera` to get proper display out, also keep in mind DisplayPort can be a hit or miss as WhateverGreen needs to be adapted. See here for more info: [RX5700XT: No dual monitor with WEG](https://github.com/acidanthera/bugtracker/issues/617)

Needed kexts:

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

**Important note for MSI Navi users**: 

* Apple currently has a VBIOS bug which crashes installers if an MSI Navi card is present, see here for more details: [Installer not working with 5700XT #901](https://github.com/acidanthera/bugtracker/issues/901)
* MSI's Polaris and Vega line are not affected by this bug

### **Vega 20 series**
#### Highest Supported OS: Current/Big Sur(11)
#### Initial Supported OS: Mojave(10.14.5)

So all Vega based GPUs are natively supported in macOS with Vega 20 GPUs starting in Mojave. While natively supported, it's recommended to still have WhateverGreen.kext installed as this helps with proper framebuffer connections and fixes other odd issues like proper ACPI mapping and such

Supported Cards:

* Radeon VII

Needed kexts:

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Vega 10 series**
#### Highest Supported OS: Current/Big Sur(11)
#### Initial Supported OS: High Sierra(10.13)

Just like with Vega 20, Vega 10 GPUs are natively supported in macOS though these card's support starts in High Sierra. Similar to Vega 20, it's recommended to still have WhateverGreen.kext installed as this helps with proper framebuffer connections and fixes other odd issues like proper ACPI mapping and such.

And for those who want to overclock/undervolt, check out [PyVega](https://github.com/corpnewt/PyVega)

The only brand of GPUs to **avoid with Vega 10 are XFX**. The reason being is VBIOS communication issues which can't be easily solved with a reference BIOS due to how Vega's powerplay table interacts between the OS and GPU.

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

### **Polaris 10 and 20 series**
#### Highest Supported OS: Current/Big Sur(11)
#### Initial Supported OS: Sierra(10.12)

Regarding Polaris, basically every model of card is supported as long as it’s running either a Polaris or Baffin core(lower end cards like the RX550 run a Lexa core meaning no support in macOS).

The only brand of GPU **you should** **avoid with the Polaris series would be XFX, PowerColour, HIS and VisionTek** as many users have had issues with these cards with viewing Clover and macOS booting but other users have found fixes/workarounds(though nothing consistent). This seems to be caused by having an odd VBIOS that doesn't communicate well with macOS and the only real solution is flashing another VBIOS which is not ideal for most users.

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
* RX 550 (only the Baffin-based [512SP models](https://www.techpowerup.com/gpu-specs/radeon-rx-550-512sp.c3740) or [640SP models](https://www.techpowerup.com/gpu-specs/radeon-rx-550-640sp.c3083))

Radeon Pro:

* WX 5100
* WX 4100
* E9550

Needed kexts:

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **R7/R9**
#### Highest Supported OS: Current/Big Sur(11)
#### Initial Supported OS: Yosemite(10.10)

R7/R9 is also natively supported in Catalina without too much issue but we cannot guarantee the success of R5 and R7 cards due to not having many reports of success with them. Also, be wary that differing from the reference design of these cards have many more issues that require a lot of work to get them to run properly. Sapphire cards are your best bet
Also, the R9 280x/380x are a hit or miss on compatibility.

Supported cards:

* R9 Fury X
* R9 Fury
* R9 Nano
* R9 390(FakeID needed)
* R9 290X/390X
* R9 290/390(FakeID needed)
* R9 280x/380x (Hit or miss)
* R9 280/380(FakeID needed)
* R9 270X/370X
* R7 270/370(FakeID needed)
* R7 265
* R7 260x/360x
* R9 260/360(FakeID may be required depending on model)
* R9 255
* R7 250X
* R7 250(FakeID needed)
* R7 240(FakeID needed)

Needed kexts

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `radpg=15`: Required for HD 7730/7750/7770/R7 250/R7 250X GPU initialization)
* `-raddvi` boot flag: Fixes DVI, required for 290X, 370, etc
* InjectAMD: While deprecated, some users require this for proper initialization, avoid unless absolutely necessary
* [Applying a FakeID Guide](https://dortania.github.io/Getting-Started-With-ACPI/Universal/spoof.html)

### **HD 8000 Series(8xxx)**
#### Highest Supported OS: Current/Big Sur(11)
#### Initial Supported OS: Mountain Lion(10.8)

* HD 8740
* HD 8760
* HD 8770
* HD 8850
* HD 8870
* HD 8890
* HD 8950
* HD 8970

### **HD 7000 Series(7xxx)**
#### Highest Supported OS: Current/Big Sur(11)
#### Initial Supported OS: Mountain Lion(10.8)

* Dual AMD FirePro D300
* Dual AMD FirePro D500
* Dual AMD FirePro D700
* FirePro W5100(FakeID needed)
* FirePro W7000
* FirePro W9000
* HD 7700
* HD 7730
* HD 7750
* HD 7770
* HD 7790
* HD 7850
* HD 7870
* HD 7870 XT
* HD 7950
* HD 7970
* HD 7990

Needed kexts

* [lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `radpg=15`: Required for HD 7730/7750/7770/R7 250/R7 250X GPU initialization)
* InjectAMD: While deprecated, some users require this for proper initialization, avoid unless absolutely necessary

## Unsupported AMD GPUs

### **Lexa Series**
#### Highest Supported OS: None

While these GPUs may share the same family name as the Polaris GPUs, these cards are drastically different meaning no support in any version of macOS. Similar to Navi and unsupported Nvidia GPUs, you'll need to disable the Lexa GPU due to how the Vesa drivers that unsupported GPUs run off of break sleep and other functions in macOS. Please refer to the [Disabling unsupported GPUs Guide](https://www.reddit.com/r/hackintosh/comments/bu1wf8/how_to_disable_your_unsupported_gpu_for_macos/)

Unsupported Cards:

* WX 3100
* WX 2100
* RX 550X
* RX 550 (all [512 SP](https://www.techpowerup.com/gpu-specs/radeon-rx-550.c2947) models)
* RX 540X
* RX 540

### **AMD APUs (ALL VARIANTS)**
#### Highest Supported OS: None

The integrated GPU found on lower end AMD CPUs have unfortunately never had official support with community support quite lacking. While possible to get a display out with some work, graphics acceleration is basically impossible making these APUs more of a hazard to macOS.

Unsupported APUs:

* Vega 11(Zen)
* Vega 8(Zen)
* GCN 3(Excavator Gen 2, Steamroller)
* GCN 2(Excavator Gen 1, Puma, Puma +)

