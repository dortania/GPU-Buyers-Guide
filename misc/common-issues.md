# Common GPU issues

## Black Screen on Navi

The issue is due to some differences in the x6000 framework that WhateverGreen has yet to be adapted to, to get around this you need the boot-arg `agdpmod=pikera`

## GPU Acceleration issues when mixing different PCIe generation devices

This is most common when running X570 with PCIe 3.0 GPUs like the Radeon VII but can be seen reversed with B450 with Navi GPUs. It's a bug in AMD's firmware with automatic PCI link speed configuration, to get around this you need to force the GPU link speed in the BIOS instead of automatic. Intel firmware do not experience these issues

## Stuck on or near `IOConsoleUsers: gIOScreenLock...`

So some things to verify:

* macOS only works correctly with UEFI capable GPUs(GTX 7XX/2013+)
* CSM cannot be enabled, similar idea with UEFI
* Forcing PCIe 3.0 link speed is also critical on AMD

## DRM Broken

**Intel GPU Users**
* No fix, this is due to differences in Apple's iGPU firmware

**AMD and Nvidia GPU Users**
* See WhateverGreen's [DRM Chart](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md)

## Broken GPU Acceleration on R7/R9 GPUs

See [GPU Spoofing Guide](https://khronokernel.github.io/Getting-Started-With-ACPI/Universal/spoof.html) on how to fix accleration
