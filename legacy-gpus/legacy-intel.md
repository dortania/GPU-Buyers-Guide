# Legacy Intel

## **Sandy Bridge 2XXX**
### Highest Supported OS: High Sierra (10.13.6)
### Initial Supported OS: Snow Leopard (10.6)

Unfortunately, Mojave dropped support for these iGPUs, but luckily we can actually get these iGPUs working by using old kexts (though no Metal support so things are a bit iffy). The [OpenCore Legacy Patcher](https://github.com/dortania/OpenCore-Legacy-Patcher/issues/348) is the best way to add support for these GPUs. However, OCLP is geared towards real Macs and while it will work on Hackintoshes, there is no official support. Initial support was introduced with macOS 10.6 and is not supported by the [Intel framebuffer patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)

Supported iGPUs:

* HD 2000 (Can only be used for Quick Sync tasks, no full acceleration)
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
* [Intel Framebuffer Patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)


## **Westmere i3/5/7-xxx**
### Highest Supported OS: High Sierra (10.13.6)
### Initial Supported OS: Snow Leopard (10.6)

Unfortunately, Mojave dropped support for these iGPUs, but luckily we can actually get these iGPUs working by using old kexts (though no Metal support so things are a bit iffy). The [OpenCore Legacy Patcher](https://github.com/dortania/OpenCore-Legacy-Patcher/issues/348) is the best way to add support for these GPUs. However, OCLP is geared towards real Macs and while it will work on Hackintoshes, there is no official support.

* HD Graphics (yup, that's all they called them)

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)


## **4th Gen GMA**
### Highest Supported OS: Lion (10.7)
### Initial Supported OS: Leopard (10.5)

Native (Lion):

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
### Highest Supported OS: Lion (10.7)
### Initial Supported OS: Tiger (10.4)

Native (Lion):

* GMA 950

With a bit of work (Snow Leopard):

* GMA 900


Unsupported:

* GMA 3150
  * Partialy supported, see here: [Legacy GPU Patching](https://dortania.github.io/OpenCore-Post-Install/gpu-patching/legacy-intel/)
* GMA 3100
