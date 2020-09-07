# Legacy Intel

## **Sandy Bridge i3/5/7-2XXX**
### Highest Supported OS: High Sierra(10.13.6)
### Initial Supported OS: Snow Leopard(10.6)

Unfortunately, Mojave dropped support for these iGPUs but luckily we can actually get these iGPUs working by using old kexts(though no Metal support so things are a bit iffy). I won't link any of the files myself so do be wary when downloading kexts off the internet. Intial supported introduced with macOS 10.7 and is not supported by the [Intel framebuffer patch](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)

Supported iGPUs:

* HD 2000(Can only be used for Quicksync tasks, no full acceleration)
* HD 3000
* HD P3000

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


## **Westmere i3/5/7-xxx**
### Highest Supported OS: High Sierra(10.13.6)
### Initial Supported OS: Snow Leopard(10.6)

Unfortunately, Mojave dropped support for these iGPUs but luckily we can actually get these iGPUs working by using old kexts(though no Metal support so things are a bit iffy). I won't link any of the files myself so do be wary when downloading kexts off the internet

* HD Graphics (yup, that's all they called them)

Files needed:

* GPUSupport.framework
* OpenGL.framework

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)


## **4th Gen GMA**
### Highest Supported OS: Lion(10.7)
### Initial Supported OS: Leopard(10.5)

Native(Lion):

* GMA X3100

Unsupported:

* GMA X4500HD
* GMA X4500
* GMA 4500MHD
* GMA 4500
* GMA X3500
* GMA X3000
* GMA 3000

## **3rd Gen GMA**
### Highest Supported OS: Lion(10.7)
### Initial Supported OS: Tiger(10.4)

Native(Lion):

* GMA 950

With a bit of work(Snow Leopard):

* GMA 900

Required files:

* ElliottAppleIntelGMA950LegacyEnabler.kext
* AppleIntelIntegratedFramebuffer.kext

[Source](https://www.insanelymac.com/forum/topic/284885-guide-1068-on-a-dell-optiplex-gx280/)

Unsupported:

* GMA 3150
* GMA 3100

