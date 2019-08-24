# AMD Boot Arguments

* `shikigva=40` + `shiki-id=Mac-7BA5B2D9E42DDD94`
   * Swaps boardID with iMacPro1,1
   * Allows for Polaris and Vega GPUs to handle all types of rendering, useful for SMBIOS which expect an iGPU for 

* `radpg=15`
   * Fixes initilization for HD 7730/7750/7770/R7 250/R7 250X

* `-raddvi`
   * Fixes DVI `connector-type` for  290X, 370, etc

* `-radvesa`
   * Forces GPU into VESA mode(no GPU acceleration), useful for debugging

# Nvidia Boot Arguments

* `nv_disable=1`
   * A boot flag that refuses to die, **STOP USING IT**. Used for enabling Nvidia's WebDrivers pre-macOS Sierra but no longer works as it was moved to an NVRAM variable instead, use `NvidiaWeb` under `System Parameters` in your config.plist

* `shikigva=40`
   * Swaps boardID with iMac14,2
   * Useful for systems 

* `shikigva=1`

* `shikigva=4`

* `shikigva=12`

* `agdpmod=vit9696

# Intel Boot Arguments

* `-wegnoegpu`
   * disables all GPUs excluding the iGPU, most relavant for users with Nvidia wanting to run Mojave+
   
* `-igfxnohdmi`

* `-cdfon`

* `-igfxvesa`

* 

