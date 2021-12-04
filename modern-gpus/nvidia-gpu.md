# NVIDIA GPUs

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
#### Highest Supported OS: None

The same idea as Turing, no drivers were ever written

These cards include:

* Titan V
* Titan V CEO Edition

Quadro:

* Quadro GV100

### **Kepler Series(GK106 Variants)**

GPUs running the GK106 core have the unfortunate consequence of having a serious issue regarding VRAM leakage. This means that there's a high chance of distortion and overall instability when running these GPUs, which unfortunately has no real solution as even installing web drivers has no affect. A list of GPUs with this core can be found [here](https://www.techpowerup.com/gpu-specs/nvidia-gk106.g186).

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

Well pretty sure most users know what going on with Pascal and Maxwell, but I’ll just mention it quickly here. No support for these cards in Mojave and up, but macOS Sierra and High Sierra do support these cards with NVIDIA's somewhat shoddy drivers and Lilu + WhateverGreen. Make sure to update to build 17G14042 from the App Store before installing web drivers on High Sierra.

Supported cards:

* GTX Titan X (GP 102-400 Pascal core)
* GTX Titan Xp (GP 102-450 Pascal core)
* GTX 1080 Ti
* GTX 1080
* GTX 1070 Ti
* GTX 1070
* GTX 1060( **Note**: GP104/GDDR5X variants are not supported by the web drivers)
* GTX 1050 Ti
* GTX 1050
* GT 1030
* GT 1010

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
* `nvda_drv_vrl=1` boot flag: Used for enabling the web drivers

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

Extras:

* `shikigva=40` boot flag: Swaps boardID to iMac14,2 for better Nvidia Support and whitelists patches
* `nvda_drv_vrl=1` boot flag: Used for enabling the web drivers
