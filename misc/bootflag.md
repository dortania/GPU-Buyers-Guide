# Boot Flags

This little section here is a short explainer on some of the more commonly useful boot flags used for getting your GPU working. Do note, most of these boot-flags are from [WhateverGreen](https://github.com/acidanthera/WhateverGreen) so refer to their [FAQ](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/) for a complete list of boot flags. And for a list of all `shikigva boot arguments`, see [here](https://github.com/acidanthera/WhateverGreen/blob/master/WhateverGreen/kern_shiki.hpp#L35-L74) and DRM boot-flags can be found here: [WhateverGreen's DRM chart](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md)

## AMD Boot Arguments

* `shikigva=40` + `shiki-id=Mac-7BA5B2D9E42DDD94`
  * Swaps boardID with iMacPro1,1
  * Allows for Polaris, Vega and Navi GPUs to handle all types of rendering, useful for SMBIOS which expect an iGPU
  * See here for more info: [Fixing DRM](https://dortania.github.io/OpenCore-Post-Install/universal/drm.html#testing-hardware-acceleration-and-decoding)
* `radpg=15`
  * Fixes initialization for HD 7730/7750/7770/R7 250/R7 250X
* `-raddvi`
  * Fixes DVI `connector-type` for  290X, 370, etc
* `-radvesa`
  * Forces GPU into VESA mode(no GPU acceleration), useful for troubleshooting
  * Apple's built in version of this flag is `-amd_no_dgpu_accel`
* `agdpmod=vit9696`
  * Disables `board-id` check, may be needed for when screen turns black after finishing booting
* `agdpmod=pikera`
  * Renames `board-id` to `board-ix` effectively disabling boardID checks, this is based off of Pike.R.A's work [here](https://pikeralpha.wordpress.com/2015/11/23/patching-applegraphicsdevicepolicy-kext/)
  * This is also required for all Navi GPUs due to the difference in framework with the x6000 drivers

## Nvidia Boot Arguments

* `nvda_drv=1`
  * A boot flag that refuses to die, **STOP USING IT**. Used for enabling Nvidia's WebDrivers pre-macOS Sierra but no longer works as it was moved to an NVRAM variable instead. 
     * For Clover, use `NvidiaWeb` under `System Parameters` in your config.plist. 
     * For OpenCore, use `NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82 -> nvda_drv: <31>` in your config.plist.
  * The WebDrivers in Sierra and High Sierra also support another boot argument called `nvda_drv_vrl=1`, this will actually do the same thing as `nvda_drv=1` did in previous versions
* `nv_disable=1`
  * Forces GPU into VESA mode(no GPU acceleration), useful for troubleshooting and when having issues installing Nvidia's WebDrivers. This is a macOS flag so WEG is not needed.
* `shikigva=40`
  * Swaps boardID with iMac14,2
  * Useful for SMBIOS that don't expect a Nvidia GPU, however WhateverGreen should handle patching by itself
* `shikigva=1`
  * Needed when you're wanting to use your iGPU's display out along with the dGPU, allows the iGPU to handle hardware decoding even when not using a connector-less framebuffer
* `shikigva=4`
  * Needed to support hardware accelerated video decoding on systems that are newer than Haswell, may need to be used with `shikigva=12` to patch the needed processes 
* `agdpmod=vit9696`
  * Disables `board-id` check, may be needed for when screen turns black after finishing booting
* `agdpmod=pikera`
  * Swaps `board-id` for `board-ix`, needed for disabling string comparison which is useful for non-iMac13,2/iMac14,2 SMBIOS

## Intel Boot Arguments

* `-wegnoegpu`
  * disables all GPUs excluding the iGPU, most relevant for users with Nvidia wanting to run Mojave+
* `-igfxnohdmi`
  * Disables DisplayPort to HDMI Audio Conversion
* `-cdfon`
  * Performs numerous patches required for enabling HDMI 2.0 support
* `-igfxvesa`
  * Forces GPU into VESA mode(no GPU acceleration), useful for troubleshooting
* `igfxonln=1`
  * Forces all displays online, useful for resolving screen wake issues in 10.15.4+ on Coffee and Comet Lake
* `igfxfw=2`
  * Enables loading Apple's GUC firmware for iGPUs, requires a 9th Gen chipset or newer(ie Z390)
  * See here for more info: [Fixing DRM](https://dortania.github.io/OpenCore-Post-Install/universal/drm.html#testing-hardware-acceleration-and-decoding)

