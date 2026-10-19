# NVIDIA GPUs

:::warning

NVIDIA GPUs are not natively supported by modern versions of macOS. However, a community-developed driver, [NullMoth NVIDIA Driver](https://github.com/nullmoth/nvidia-macos-driver), provides experimental support for newer NVIDIA GPUs on macOS.

This driver is not an official Apple or NVIDIA driver. It is still under active development, and functionality, stability, and application compatibility vary. We do not recommend purchasing an NVIDIA GPU specifically for use with macOS.

:::

## Unsupported NVIDIA GPUs

### **Kepler Series (GTX 6xx, 7xx)**

#### Highest Supported OS: Big Sur (11)

#### Initial Supported OS: Mountain Lion (10.8)

As of Monterey beta 7, Kepler is unsupported. It is still supported in macOS Big Sur. Users have reported issues with the GTX 650 Ti, 660, 660 Ti but this is caused by a driver issue on Apple’s end by not supporting the GK106 core (or quite poorly as the issue seems to be memory leakage which also affects real Macs). Another issue with this generation is lower end products marketed as first generation Kepler are actually using a Fermi core but have identical counterparts running Kepler cores as well(GF 116 vs GK 107 found in the GT 640). **AND PLEASE NOTICE THAT GTX 745, 750, and Ti VARIANTS ARE NOT INCLUDED, THEY'RE NOT KEPLER.**

Supported cards:

700 Series:

* GTX Titan (GK110 Maxwell core)
* GTX Titan Black (GK110 Maxwell core)
* GTX Titan Z (One of the few dual GPU cards supported in macOS, but only one core will be in use)
* GTX 780 Ti
* GTX 780
* GTX 770
* GTX 760 Ti
* GTX 760
* GT 740 (GK107 variant)
* GT 730 (GK208 variant)
* GT 720
* GT 710 (GK208 variant)

600 Series:

* GTX 690 (Another dual GPU card compatible with macOS, but only one core will be in use)
* GTX 680
* GTX 670
* GTX 660 Ti
* GTX 660 (Must be running a GK104 core, not GK106)
* GTX 650 (GK107 core)
* GT 640 (GK107/GK208 core)
* GT 635
* GT 630 (GK107/GK208 core)

Quadro:

* Quadro K6000
* Quadro K5200
* Quadro K5000
* Quadro K4200
* Quadro K2000D
* Quadro K2000
* Quadro K600
* Quadro K420
* Quadro 410
* NVS 510

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `shikigva=40` boot flag: Swaps boardID to iMac14,2 for better Nvidia Support and whitelists patches

### **Lovelace Series (RTX 40xx)**

#### Highest Supported OS: None

Unfortunately no support in any version of macOS as no drivers were ever written even for High Sierra. Not much else to add.

These cards include:

* RTX 4090
* RTX 4080
* RTX 4070 Ti
* RTX 4070

Workstation:

* RTX 6000 Ada Generation

Data Center:

* L40

### **Hopper Series (H)**

#### Highest Supported OS: None

Unfortunately no support in any version of macOS as no drivers were ever written even for High Sierra. Not much else to add.

These cards include:

* H100

### **Ampere Series (RTX 30xx)**

#### Highest Supported OS: None

Unfortunately no support in any version of macOS as no drivers were ever written even for High Sierra. Not much else to add.

These cards include:

* RTX 3090
* RTX 3080 Ti
* RTX 3080
* RTX 3070 Ti
* RTX 3070
* RTX 3060 Ti
* RTX 3060
* RTX 3050

### **Turing Series (RTX 20xx, GTX 16xx)**

#### Highest Supported OS: None

Unfortunately no support in any version of macOS as no drivers were ever written even for High Sierra. Not much else to add.

These cards include:

* Titan RTX
* RTX 2080 Ti
* RTX 2080 SUPER
* RTX 2080
* RTX 2070 SUPER
* RTX 2070
* RTX 2060 SUPER
* RTX 2060
* GTX 1660 Ti
* GTX 1660 SUPER
* GTX 1660
* GTX 1650 SUPER
* GTX 1650

Quadro:

* Quadro RTX 8000
* Quadro RTX 6000
* Quadro RTX 5000
* Quadro RTX 4000

### **Volta Series (V)**

#### Highest Supported OS: High Sierra 17G3025 (10.13.6)*

#### Initial Supported OS: High Sierra 17G3025 (10.13.6)*

It turns out that NVIDIA actually released one version of the Web Drivers with Volta support: [387.10.10.15.15.108](https://github.com/dortania/PatcherSupportPkg/blob/master/Universal-Binaries/WebDriver-387.10.10.10.40.140/WebDriver-387.10.10.15.15.108.pkg). However, this version was reported as unstable for some users and NVIDIA pulled it soon afterward. Ever since, no further versions of the Web Drivers have been released with Volta support. Because of the reported bugginess and that NVIDIA has pulled these drivers, we're going to treat them as unsupported.

These cards include:

* Titan V
* Titan V CEO Edition

Quadro:

* Quadro GV100

::: tip Note

Some users have reported that version 387.10.10.15.15.108 of the Web Drivers may support all versions of High Sierra. However, since NVIDIA only released it for 17G3025, we are only specifying that version explicitly.

:::

### **Kepler Series(GK106 Variants)**

GPUs running the GK106 core have the unfortunate consequence of having a serious issue regarding VRAM leakage. This means that there's a high chance of distortion and overall instability when running these GPUs, which unfortunately has no real solution as even installing the Web Drivers has no effect. A list of GPUs with this core can be found [here](https://www.techpowerup.com/gpu-specs/nvidia-gk106.g186).

Second generation Kepler:

* GT 740 (GK106 variant)

First generation Kepler:

* GTX 660
* GTX 650 Ti
* GTX 650
* GTX 645

Quadro:

* K4000

### **Fermi rebranded(GF108, GF117 and GF119)**

#### Highest Supported OS: High Sierra (10.13.6)

#### Initial Supported OS: Lion (10.7)

Since NVIDIA can't comply to any naming conventions, they decided to make some 600/700 series cards based on the older and incompatible Fermi architecture. These cards include:

* GT 730 (GF108 variant)
* GT 720A
* GT 710 (GF119 variant)
* GT 705
* GT 640 (GF108 and GF116)
* GT 630 (GF108 variant)
* GT 620
* GT 610

### **Pascal Series (GTX 10xx)**

#### Highest Supported OS: High Sierra (10.13.6)

#### Initial Supported OS: Sierra (10.12.4)

Well pretty sure most users know what going on with Pascal and Maxwell, but I’ll just mention it quickly here. No support for these cards in Mojave and up, but macOS Sierra and High Sierra do support these cards with NVIDIA's somewhat shoddy drivers and Lilu + WhateverGreen. Make sure to update to build 17G14042 from the App Store before installing the Web Drivers on High Sierra.

Supported cards:

* GTX Titan X (GP 102-400 Pascal core)
* GTX Titan Xp (GP 102-450 Pascal core)
* GTX 1080 Ti
* GTX 1080
* GTX 1070 Ti
* GTX 1070
* GTX 1060( **Note**: GP104/GDDR5X variants are not supported by the Web Drivers)
* GTX 1050 Ti
* GTX 1050
* GT 1030
* GT 1010 (should theoretically work, but unverified)

Quadro:

* Quadro GP100
* Quadro P6000
* Quadro P5000
* Quadro P4000
* Quadro P2000
* Quadro P1000
* Quadro P620
* Quadro P600
* Quadro P400

Needed kexts:

* [Nvidia's Web Drivers](https://images.nvidia.com/mac/pkg/387/WebDriver-387.10.10.10.40.140.pkg)
* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `shikigva=40` boot flag: Swaps boardID to iMac14,2 for better Nvidia Support and whitelists patches
* `nvda_drv_vrl=1` boot flag: Used for enabling the Web Drivers

### **Maxwell Series (GTX 9xx, 745, 750/Ti)**

#### Highest Supported OS: High Sierra (10.13.6)

#### Initial Supported OS: Yosemite (10.10.0)

Same idea as Pascal, though the naming scheme is a bit odd as the GTX 745, 750 and 750 Ti are all Maxwell based even though they’re being marketed with the Kepler line so be wary when buying

Supported cards:

* GTX Titan X (GM200 Maxwell core)
* GTX 980 Ti
* GTX 980
* GTX 970
* GTX 960
* GTX 950
* GTX 750 Ti
* GTX 750
* GTX 745

Quadro:

* Quadro M6000
* Quadro M5000
* Quadro M4000
* Quadro M2000
* Quadro K2200
* Quadro K1200
* Quadro K620

Needed kexts:

* [NVIDIA's Web Drivers](https://images.nvidia.com/mac/pkg/387/WebDriver-387.10.10.10.40.140.pkg)
* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

## Non-Native NVIDIA GPUs

### Turing and newer (GTX 16xx, RTX 20xx/30xx/40xx/50xx)

NVIDIA Turing and newer GPUs are not natively supported by macOS. However, the community-developed [NullMoth NVIDIA Driver](https://github.com/nullmoth/nvidia-macos-driver) implements a custom graphics driver stack that enables GPU acceleration on compatible system.

The project uses NVIDIA's open GPU kernel modules alongside a custom Metal driver and a Mesa NVK-based Vulkan backend. It aims to provide Metal acceleration and support for other graphics APIs.

::: warning

**This is not native GPU support, and not all features are functional.** You should not be considered a drop-in replacement for a natively supported AMD GPU.

Consult the project's documentation and release notes for the latest compatibility information before attempting installation.

Known limitations include, but are not limited to:

- **FairPlay DRM and protected media:** Compatibility with DRM-protected streaming services has not been established. Protected playback may fail even when ordinary video playback works.
- **Hardware video encoding and decoding:** Do not assume that NVENC, NVDEC, or their integration with macOS VideoToolbox is fully supported. Codec acceleration and application compatibility remain limited and may vary by workload.
- **Application compatibility:** Some games, browsers, and graphics applications may exhibit rendering errors, reduced performance, or other issues.
- **Display output:** HDMI/DisplayPort audio, certain external GPU configurations, and some laptop internal displays may not work correctly.
- **Stability:** Some hardware configurations may experience boot failures, display corruption, or other driver-related issues.

Check the project's [known issues and troubleshooting documentation](https://github.com/nullmoth/nvidia-macos-driver) before installing the driver. Back up your OpenCore configuration and ensure that you can boot without the NVIDIA driver before making changes.

:::

### **Turing Series (RTX 20xx, GTX 16xx)**

#### Highest Supported OS: Current/Tahoe (26)

Turing series graphics cards are not natively supported by macOS. However, there is a WIP driver, NullMoth NVIDIA Driver provide experimental support for Metal acceleration. It is not fully functional: please see its website for more information.

Supported Cards:

* Titan RTX
* RTX 2080 Ti
* RTX 2080 SUPER
* RTX 2080
* RTX 2070 SUPER
* RTX 2070
* RTX 2060 SUPER
* RTX 2060
* GTX 1660 Ti
* GTX 1660 SUPER
* GTX 1660
* GTX 1650 SUPER
* GTX 1650

Quadro:

* Quadro RTX 8000
* Quadro RTX 6000
* Quadro RTX 5000
* Quadro RTX 4000

### **Ampere Series (RTX 30xx)**

#### Highest Supported OS: Current/Tahoe (26)

Ampere series graphics cards are not natively supported by macOS. However, there is a WIP driver, NullMoth NVIDIA Driver provide experimental support for Metal acceleration. It is not fully functional: please see its website for more information.

These cards include:

* RTX 3090
* RTX 3080 Ti
* RTX 3080
* RTX 3070 Ti
* RTX 3070
* RTX 3060 Ti
* RTX 3060
* RTX 3050

### **Lovelace Series (RTX 40xx)**

#### Highest Supported OS: Current/Tahoe (26)

Lovelace series graphics cards are not natively supported by macOS. However, there is a WIP driver, NullMoth NVIDIA Driver provide experimental support for Metal acceleration. It is not fully functional: please see its website for more information.

These cards include:

* RTX 4090
* RTX 4080 Ti
* RTX 4080
* RTX 4070 Ti
* RTX 4070
* RTX 4060 Ti
* RTX 4060
* RTX 4050

Workstation:

* RTX 6000 Ada Generation

Data Center:

* L40

### **Blackwell Series (RTX 50xx)**

#### Highest Supported OS: Current/Tahoe (26)

Blackwell series graphics cards are not natively supported by macOS. However, there is a WIP driver, NullMoth NVIDIA Driver provide experimental support for Metal acceleration. It is not fully functional: please see its website for more information.

These cards include:

* RTX 5090
* RTX 5080 Ti
* RTX 5080
* RTX 5070 Ti
* RTX 5070
* RTX 5060 Ti
* RTX 5060
* RTX 5050

Extras:

* `shikigva=40` boot flag: Swaps boardID to iMac14,2 for better Nvidia Support and whitelists patches
* `nvda_drv_vrl=1` boot flag: Used for enabling the Web Drivers
