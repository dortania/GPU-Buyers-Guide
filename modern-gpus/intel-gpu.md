# Intel GPUs

So we'll be going over the compatible iGPUs present in Intel's CPUs. The main thing to note is that you'll need to apply the framebuffer patches to your system to get things to work properly. [Please refer to this post for more info on framebuffer patching as it goes in depth on how to get your system running](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md). We will also be excluding iGPUs present in Pentiums, Celerons and Atom CPUs as these generally have never been supported natively and require quite a bit of extra work to get them working (to be more specific, GT1 based iGPUs don't work, Apple only uses GT2 and up in their Macs).

**DRM Issues**: With Haswell and newer iGPUs, DRM is outright broken on them with macOS Catalina. This includes iTunes Movies, Apple TV+, Amazon Prime and Netflix, the only fix is getting a supported dGPU, preferably Polaris or newer.

More info:

* [WhateverGreen's DRM Chart](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md)

## Native Intel iGPUs

### **Ivy Bridge 3XXX**
#### Highest Supported OS: Big Sur (11)
#### Initial Supported OS: Lion (10.7)

The HD4000 is supported natively up to macOS Big Sur, with support dropped in macOS Monterey. The HD 2500, on the other hand, only has partial support in Mojave for quick sync features. As the HD 2500 does not support hardware acceleration, you will need a compatible dGPU for display purposes.

Supported iGPUs:

* HD 2500
* HD 4000
* HD P4000

Framebuffer:

* AAPL,ig-platform-id (desktop):
  * 0x0166000A (default)
    * 0A006601 (hex swapped)
  * 0x01620005
    * 05006201 (hex swapped)
* AAPL,ig-platform-id (laptop):
  * 0x01660004 (Recommended, 1600x900 screens or higher)
    * 04006601 (hex swapped)
  * 0x01660009 (Alternative, eDP or autodetect)
    * 09006601 (hex swapped)
  * 0x01660003 (1366x768 screens)
    * 03006601 (hex swapped)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel Framebuffer Patching guide](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Haswell 4XXX**
#### Highest Supported OS: Current/Monterey (12)
#### Initial Supported OS: Mountain Lion (10.8)

Most iGPUs are supported here, only one to be concerned about is the HD 4400, which requires either a fake ID with WhateverGreen or a modified APCI path.

Supported iGPUs:

* HD 4200
* HD 4400 (HD 4600 Fake ID required for this iGPU)
* HD 4600
* HD 5000
* HD 5100
* HD P4600 (Theoretically)
* HD P4700 (Theoretically)

Framebuffer:

* AAPL,ig-platform-id (desktop): 
  * 0x0D220003 (default)
    * 0300220D (hex swapped)
* AAPL,ig-platform-id (laptop): 
  * 0x0A160000 (default)
    * 0000160A (hex swapped)
  * 0x0A260005 (recommended)
    * 0500260A (hex swapped)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel Framebuffer Patching guide](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Broadwell 5XXX**
#### Highest Supported OS: Current/Monterey (12)
#### Initial Supported OS: Yosemite (10.10.2)

All iGPUs are supported here, no issues to report.

Supported iGPUs:

* HD 5300
* HD 5500
* HD 5600
* HD 6000
* HD 6100
* HD 6200
* HD P5700 (Theoretically)
* Iris Pro P6300

Framebuffer:

* AAPL,ig-platform-id (desktop): 
  * 0x16220007 (default)
    * 07002216 (hex swapped)
* AAPL,ig-platform-id (laptop): 
  * 0x16260006 (default)
    * 06002616 (hex swapped)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel Framebuffer Patching guide](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Skylake 6XXX**
#### Highest Supported OS: Current/Monterey (12)
#### Initial Supported OS: El Capitan (10.11.4)

All iGPUs are supported here, no issues to report.

Supported iGPUs:

* HD 515
* HD 520
* HD 530
* HD P530
* Iris 540
* Iris 550
* Iris Pro 580
* Iris Pro P555
* Iris Pro P580

Framebuffer:

* AAPL,ig-platform-id (desktop): 
  * 0x19120000 (default)
    * 00001219 (hex swapped)
  * 0x19120001 (Headless)
    * 01001219 (hex swapped)
* AAPL,ig-platform-id (laptop): 
  * 0x19160000 (default)
    * 00001619 (hex swapped)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel Framebuffer Patching guide](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Kaby Lake 7XXX**
#### Highest Supported OS: Current/Monterey (12)
#### Initial Supported OS: Sierra (10.12.6)

Most iGPUs are supported here, excluding the HD 610 present in the Pentium G4560.

Supported iGPUs:

* HD 615
* HD 620
* HD 630
* Iris Plus 640
* Iris Plus 650

Framebuffer:

* AAPL,ig-platform-id (desktop): 
  * 0x59160000 (default)
    * 00001659 (hex swapped)
  * 0x59120003 (Headless)
    * 03001259 (hex swapped)
* AAPL,ig-platform-id (laptop): 
  * 0x591B0000 (default)
    * 00001B59 (hex swapped)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel Framebuffer Patching guide](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Kaby Lake refresh/Coffee Lake/Comet Lake 8XXX/9XXX**
#### Highest Supported OS: Current/Monterey (12)
#### Initial Supported OS: High Sierra(10.13.6)

All iGPUs are supported here, though pay attention as the [i3-8100 and i3-8350K use a different UHD 630 (184 shader units vs 192)](https://en.wikipedia.org/wiki/Intel_Graphics_Technology#Kaby_Lake_Refresh_/_Amber_Lake_/_Coffee_Lake_/_Whiskey_Lake) than the rest of the CPU family which requires spoofing for support in High Sierra.

Supported:

* UHD 615
* UHD 617
* UHD 620
* UHD 630
* Iris Plus 645
* Iris Plus 655

Framebuffer:

* AAPL,ig-platform-id (desktop): 
  * 0x3EA50000 (default)
    * 0000A53E (hex swapped)
  * 0x3E9B0007 (desktop, recommended)
    * 07009B3E (hex swapped)
  * 0x3E920003 (Headless)
    * 0300923E (hex swapped)
* AAPL,ig-platform-id (laptop): 
  * 0x3EA50009 (default)
    * 0900A53E (hex swapped)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel Framebuffer Patching guide](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Ice Lake 10XXX**
#### Highest Supported OS: Current/Monterey (12)
#### Initial Supported OS: Catalina(10.15.4)

All iGPUs present here have support starting in macOS 10.15.4.

Supported:

* Iris Plus G7
* Iris Plus G4

Framebuffer:

* AAPL,ig-platform-id (laptop):
  * 0x8A520000 (default)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel FrameBuffer Patching guide](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

## Unsupported Intel iGPUs


All GPUs listed here are GT1-based, meaning no support whatsoever.

### **Braswell**
#### Highest Supported OS: None

Unsupported:

* HD 400
* HD 405

### **Skylake**
#### Highest Supported OS: None

Unsupported:

* HD 510

### **Apollo Lake**
#### Highest Supported OS: None

Unsupported:

* HD 500
* HD 505

### **Kaby Lake**
#### Highest Supported OS: None

Unsupported:

* HD 610

### **Kaby Lake refresh/Coffee Lake/Comet Lake 8XXX/9XXX**
#### Highest Supported OS: None

Unsupported:

* UHD 610

### **Gemini Lake**
#### Highest Supported OS: None

Unsupported:

* UHD 600
* UHD 605
