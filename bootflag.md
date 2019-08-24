This little section here is a short explainer on some of the more commonly useful boot flags used for getting your GPU working. Do note, most of these bootflags are from [WhateverGreen](https://github.com/acidanthera/WhateverGreen) so refer to their [FAQ](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/) for a complete list of boot flags. And for a list of all `shikigva boot arguments`, see [here](https://github.com/acidanthera/WhateverGreen/blob/master/WhateverGreen/kern_shiki.hpp#L35-L74)


# AMD Boot Arguments

* `shikigva=40` + `shiki-id=Mac-7BA5B2D9E42DDD94`
   * Swaps boardID with iMacPro1,1
   * Allows for Polaris and Vega GPUs to handle all types of rendering, useful for SMBIOS which expect an iGPU

* `radpg=15`
   * Fixes initilization for HD 7730/7750/7770/R7 250/R7 250X

* `-raddvi`
   * Fixes DVI `connector-type` for  290X, 370, etc

* `-radvesa`
   * Forces GPU into VESA mode(no GPU acceleration), useful for troubleshooting

* `agdpmod=vit9696`
   * Disables `board-id` check, may be needed for when screen turns black after finishing booting

# Nvidia Boot Arguments

* `nvda_drv=1`
   * A boot flag that refuses to die, **STOP USING IT**. Used for enabling Nvidia's WebDrivers pre-macOS Sierra but no longer works as it was moved to an NVRAM variable instead, use `NvidiaWeb` under `System Parameters` in your config.plist

* `nv_disable=1`
   * Forces GPU into VESA mode(no GPU acceleration), useful for troubleshooting and when having issues installing Nvidia's WebDrivers

* `shikigva=40`
   * Swaps boardID with iMac14,2
   * Useful for SMBIOS that don't expect a Nvidia GPU

* `shikigva=1`
   * Needed when you're wanting to use your iGPU's display out along with the dGPU, allows the iGPU to handle hardware decoding even when not using a connector-less framebuffer

* `shikigva=4`
   * Needed to support hardware accelerated video decoding on systems that are newer than Haswell, may need to be used with `shikigva=12` to patch the needed processes 

* `agdpmod=vit9696`
   * Disables `board-id` check, may be needed for when screen turns black after finishing booting

* `agdpmod=pikera`
   * Swaps `board-id` for `board-ix`, needed for disabling string comparison which is useful for non-iMac13,2/iMac14,2 SMBIOS

# Intel Boot Arguments

* `-wegnoegpu`
   * disables all GPUs excluding the iGPU, most relavant for users with Nvidia wanting to run Mojave+
   
* `-igfxnohdmi`
   * Disables DisplayPort to HDMI Audio Conversion

* `-cdfon`
   * Performs numerous patches required for enabing HDMI 2.0

* `-igfxvesa`
   * Forces GPU into VESA mode(no GPU acceleration), useful for troubleshooting
