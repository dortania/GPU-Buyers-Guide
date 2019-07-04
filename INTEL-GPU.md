# Intel's Integrated Graphics

So I'll be going over the compatible iGPUs present in intel's CPUs, the main thing to note is that you'll need to apply the FrameBuffer patch to your system to get things to work properly. [Please refer to this post for more info on Framebuffer patching as it goes in depth on how to get your system running](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271). We will also be excluding iGPUs present in Pentiums, Celerons and Atom CPUs as these generally have never been supported natively and require quite a bit of extra work to get them working


**Westmere i3/5/7-xxx Highest Supported OS: High Sierra 10.13.6**

Unfortunately, Mojave dropped support for these iGPUs but luckily we can actually get these iGPUs working by using old kexts(though no Metal support so things are a bit iffy). I won't link any of the files myself so do be wary when downloading kexts off the internet

* HD Graphics (yup, that's all they called them)

Files needed:

* GPUSupport.framework
* OpenGL.framework

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

**Sandy Bridge i3/5/7-2XXX Highest Supported OS: High Sierra 10.13.6(With a bit of work, current/Catalina)**

Unfortunately, Mojave dropped support for these iGPUs but luckily we can actually get these iGPUs working by using old kexts(though no Metal support so things are a bit iffy). I won't link any of the files myself so do be wary when downloading kexts off the internet. Intial supported introduced with macOS 10.7 and is not supported by the [Intel framebuffer patch](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)

Supported iGPUs:

* HD 2000
* HD 3000

Framebuffer
* AAPL,snb-platform-id (desktop): 
   * 0x00030010 (default)
      * 10000300 (hex swapped)
* AAPL,snb-platform-id (laptop): 
   * 0x00010000 (default)
      * 00000100 (hex swapped)

Files needed for HD 2000:

* AppleIntelHDGraphicsFB.kext
* AppleIntelHDGraphicsGA.plugin
* AppleIntelHDGraphicsGLDriver.bundle
* AppleIntelHDGraphicsVADriver.bundle

Files needed for HD 3000:

* AppleIntelHD3000Graphics.kext
* AppleIntelHD3000GraphicsGA.plugin
* AppleIntelHD3000GraphicsGLDriver.bundle
* AppleIntelHD3000GraphicsVADriver.bundle
* AppleIntelSNBGraphicsFB.kext
* AppleIntelSNBVA.bundle

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel FrameBuffer Patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)


**Ivy Bridge i3/5/7-3XXX Highest Supported OS: Current/Catalina**

Regarding the HD 4000, it's completely native with Catalina. The HD 2500 on the other hand only has partial support in Mojave for quick sync features as hardware acceleration is [unsupported](https://olarila.com/forum/viewtopic.php?t=7714) so you will need a compataible GPU for display purposes. Intial supported introduced with macOS 10.8

Supported iGPUs:

* HD 2500
* HD 4000

Framebuffer:

* AAPL,ig-platform-id (desktop):
   * 0x0166000A (default)
      * 0A006601 (hex swapped)
   * 0x01620005
      * 05006201 (hex swapped)
* AAPL,ig-platform-id (laptop): 
   * 0x01660003 (default)
      * 03006601 (hex swapped)
   * 0x01660009
      * 09006601 (hex swapped)
   * 0x01660004
      * 04006601 (hex swapped)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel FrameBuffer Patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)


**Haswell i3/5/7-4XXX Highest Supported OS: Current/Catalina**

Most iGPUs are supported here, only one to be concerned about is the HD4400 which requires either a spoofed DeviceID with WhateverGreen or a modfied APCI path. Intial supported introduced with macOS 10.9

Supported iGPUs:

* HD 4200
* HD 4400(FakeID required for this iGPU)
* HD 4600
* HD 5000
* HD 5100
* HD P4600(Theoretically)
* HD P4700(Theoretically)

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
* [Intel FrameBuffer Patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)


**Broadwell i3/5/7-5XXX Highest Supported OS: Current/Catalina**

All iGPUs are supported here, no issues to report. Intial supported introduced with macOS 10.10.2

Supported iGPUs:

* HD 5300
* HD 5500
* HD 5600
* HD 6000
* HD 6100
* HD 6200
* HD P5700(Theoretically)
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
* [Intel FrameBuffer Patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)


**Skylake i3/5/7-6XXX Highest Supported OS: Current/Catalina**

All iGPUs are supported here, no issues to report. Intial supported introduced with macOS 10.11.4

Supported iGPUs:

* HD 510
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
* [Intel FrameBuffer Patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)


**Kabylake i3/5/7-7XXX Highest Supported OS: Current/Catalina**

Most iGPUs are supported here excluding the HD 610 present in the Pentium G4560, initial support was introduced with macOS 10.12.6

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
* [Intel FrameBuffer Patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)


**Kabylake refresh/ Coffeelake i3/5/7-8XXX/9XXX Highest Supported OS: Current/Catalina**

All iGPUs are supported here, though pay attention as the [i3 8100 and 8350k use a different UHD 630(184 shader units vs 192)](https://en.wikipedia.org/wiki/Intel_Graphics_Technology#Kaby_Lake_Refresh_/_Amber_Lake_/_Coffee_Lake_/_Whiskey_Lake) than the rest of the CPU family which requires spoofing for support in High Sierra(generally wanted for headless rendering on a Maxwell/Pascal GPUs). Intial supported introduced with macOS 10.13.6

* UHD 610
* UHD 620
* UHD 630
* Iris Plus 655

Framebuffer:
* AAPL,ig-platform-id (desktop): 
   * 0x3EA50000 (default) 
      * 0000A53E (hex swapped)
   * 0x3E9B0007 (recommended)
      * 07009B3E (hex swapped)
   * 0x3E920003 (Headless)
      * 0300923E (hex swapped)
* AAPL,ig-platform-id (laptop): 
   * 0x3EA50009 (default)
      * 0900A53E (hex swapped)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel FrameBuffer Patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)
