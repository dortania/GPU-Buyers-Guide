# What GPUs to avoid

With GPUs to avoid it's a bit of a mixed bag - the specific brand to avoid 100% is Powercolor, HIS and VisionTek regardless of what core they runs. They're the most common GPUs to have instability issues and many users will outright not get any video out past the Clover boot-screen making a macOS install virtually impossible. XFX should also be avoided if you can, because people also have trouble with it, although most XFX cards will work with CSM/legacy mode turned off (XFX cards have an issue with VBIOS, but the UEFI VBIOS is fine.)(Though it is possible to get the XFX RX 460/560 working with a VBIOS flash, it's risky and not recommended). And while Sapphire may be the best brand for Polaris GPUs, Vega GPUs are quite a bit of a different story. While many have working systems with Sapphire Vega, a good chunk of users also experience instability and issues with macOS functioning correctly. **Update**: With the advent of macOS 10.14.5, support for Sapphire Vega has been greatly improved. But do note that these issues were quite serious so tread lightly as all the kinks may not have been truly resolved

Most 550s will **not** work except for some models like [Sapphire Pulse 550 640 SP](https://www.sapphiretech.com/en/consumer/pulse-rx-550-2g-g5-1), as most other 550s are Lexa core, while 640 SP variants are Polaris. See below for more info

::: details Baffin vs Lexa Breakdown

As mentioned above, RX 550 models come in 2 flavours known as Baffin and Lexa. The former is officially supported in macOS however the latter is not. Here we have a simple breakdown explaining how to determine which GPU is Baffin and which is Lexa even if OEMs do not openly mention.


**Specification differences**:


* **Old Lexa Core (incompatible)**:

  * Stream Processors 512 (CUs 8)
  * Memory Speed 1750MHz (7000Mz effective)
  * Reference Clock 1183MHz

* **Newer Baffin Core (compatible)**

  * Stream Processors 640 (CUs 10)
  * Memory Speed 1500MHz (6000Mz effective)
  * Reference Clock 1071MHz

**PCI ID Differences**:

* Cards with the [Device ID of 0x67ff](https://devicehunt.com/view/type/pci/vendor/1002/device/67FF) should be supported OOB
  * Device ID 0x699f = RX 550 512SP
  * Device ID 0x67ff Rev FF = RX 550 640SP
  * Device ID 0x67ff Rev CF = RX 560

[Credit to cat2devnull for gathering such information](https://github.com/dortania/bugtracker/issues/129)

:::

And for those who are wondering why this list contradicts [Tonymacx86's buyers guide](https://www.tonymacx86.com/buyersguide/building-a-customac-hackintosh-the-ultimate-buyers-guide/#AMD_Graphics_Cards), remember that their bottom line is to get users to buy hardware through their affiliate program. This is also the same website that recommended Pascal GPUs [5 months after Mojave's release](https://web.archive.org/web/20190213211919/https://www.tonymacx86.com/buyersguide/building-a-customac-hackintosh-the-ultimate-buyers-guide/), would you really trust a website that's neither kept up-to date and offers _shivers_ the [beast tools](https://github.com/khronokernel/Tonymcx86-stance)?

**Important note for MSI Navi users**: 

* 10.15.X installers and under currently have a VBIOS bug which crashes installers if an MSI Navi card is present. This can be resolved by injecting `ATY,Rom#` in your GPU's DeviceProperties with any value. See here for more details: [Installer not working with 5700XT #901](https://github.com/acidanthera/bugtracker/issues/901)
* MSI's Polaris and Vega line are not affected by this bug

## Powercolor
### **AVOID VEGA AND POLARIS MODELS**

* [PowerColor Red Devil RX VEGA 56/64](https://www.powercolor.com/product?id=1511340918)
* [PowerColor Red Dragon/Devil RX 580](https://www.powercolor.com/products?id=1492658578&type=1493173705)
* [PowerColor Red Dragon RX 560/570](https://www.powercolor.com/products?id=1492658578&type=1493173679)

## XFX
### **AVOID VEGA AND 590/560/460 MODELS**

* [XFX Reference RX Vega 56/64](http://xfxforce.com/en-us/products/amd-radeon-vega#*)
* [XFX Vega 56 Double Dissipation](http://xfxforce.com/en-us/products/amd-radeon-vega/amd-radeon-rx-vega-56-hbm2-8gb-3xdp-hdmi-double-dissipation-rx-vegaldff6)
* [XFX RX 590 Fatboy](http://xfxforce.com/en-us/products/amd-radeon-rx-500-series#*)
* [XFX RX 580/570](http://xfxforce.com/en-us/products/amd-radeon-rx-500-series#*)
* [XFX RX 560](http://xfxforce.com/en-us/products/amd-radeon-rx-500-series#*)
* [XFX RX 460](http://xfxforce.com/en-us/products/amd-radeon-rx-400-series#*)

## HIS
### **AVOID ALL MODELS**

* [HIS RX 580 IceQ X² OC](http://www.hisdigital.com/gb/product2-943.shtml)
* [HIS RX 570 IceQ X² OC](http://www.hisdigital.com/gb/product2-945.shtml)
* [HIS RX 560 iCooler OC](http://www.hisdigital.com/un/product2-958.shtml)

## VisionTek
### **AVOID ALL MODELS**

* [VisionTek RX 590 OC Limited Edition](https://www.visiontek.com/radeon-rx-590-oc-limited-edition.html)
* [VisionTek OCPC RX 580](https://www.visiontek.com/ocpc-radeon-rx-580-8gb-gddr5-metallic-shroud.html)
* [VisionTek RX 560 Overclocked](https://www.visiontek.com/radeon-rx-560-2gb-gddr5-oc.html)

