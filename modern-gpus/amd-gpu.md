# AMD GPUs

:::tip INFO

Pro/workstation cards, as well as OEM or niche cards, may be missing on this list. If they have a consumer equivalent or use the same core as a consumer card, they should work (albeit possibly needing a fake ID).

:::

<!-- TODO: Device ID table should include both known and unknown IDs -->

* :white_check_mark: Verified: Works out of the box with confirmed reports
* :ballot_box_with_check: Verified (spoof): Confirmed to work with a fake ID
* :warning: Unverified: Should work (possibly with a fake ID), but no confirmed reports
* :x: Unsupported: Does not work
* :question: Unknown: No information available

## Native AMD GPUs

### Navi 23 series

| Support Status                       ||
| --------------- | ------------------- |
| Latest Support  | Current/Sonoma (14) |
| Initial Support | Monterey (12.1)     |

As of 12.1, Apple has added Navi 23 support.

|Card Name|Device ID|Status|Notes|
|---|---|---|---|
|RX 6600|`73FF`|:white_check_mark: Verified| |
|RX 6600 XT|`73FF`|:white_check_mark: Verified| |
|RX 6650 XT|`73EF`|:ballot_box_with_check: Verified|Spoof to RX 6600 XT|
|Radeon Pro W6600|`73E3`|:white_check_mark: Verified| |

<!-- TODO: Device ID table -->

:::tip NOTE

Most Navi 23 cards currently require the boot argument `agdpmod=pikera` to get a display out.

:::

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### Navi 21 series

| Support Status                       ||
| --------------- | ------------------- |
| Latest Support  | Current/Sonoma (14) |
| Initial Support | Big Sur (11.4)      |

As of 11.4, Apple has added Navi 21 support.

Supported Cards:

|Card Name|Device ID|Status|Notes|
|---|---|---|---|
|RX 6800|`73BF`|:white_check_mark: Verified| |
|RX 6800 XT|`73BF`|:white_check_mark: Verified| |
|RX 6900 XT|`73BF`|:white_check_mark: Verified| |
|RX 6900 XT (XTX/XTXH variant)|`73AF`|:ballot_box_with_check: Verified|Spoof to RX 6900 XT<br/>These cards are usually marketed as "Extreme" or "Ultimate" variants.|
|RX 6950 XT|`73A5`|:ballot_box_with_check: Verified|Spoof to RX 6900 XT|
|Radeon Pro W6800|`73A3`|:white_check_mark: Verified| |

:::tip NOTE

Most Navi 21 cards currently require the boot argument `agdpmod=pikera` to get a display out.

:::

<!-- TODO: Device ID table -->

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### Navi 10 series

| Support Status                       ||
| --------------- | ------------------- |
| Latest Support  | Current/Sonoma (14) |
| Initial Support | Catalina (10.15.1)  |

As of 10.15.1, Apple has added RDNA and Navi support.

Supported Cards:

|Card Name|Core|Device ID|Status|Notes|
|---|---|---|---|---|
|RX 5300 OEM|Navi 14|`7340`|:white_check_mark: Verified| |
|RX 5300 XT OEM|Navi 14|?|:question: Unknown|No information on this card|
|RX 5500 OEM|Navi 14|`7340`|:warning: Unverified| |
|RX 5500 XT|Navi 14|`7340`|:white_check_mark: Verified| |
|RX 5600 OEM|Navi 10|`731F`|:white_check_mark: Verified| |
|RX 5600 XT|Navi 10|`731F`|:white_check_mark: Verified| |
|RX 5700|Navi 10|`731F`|:white_check_mark: Verified| |
|RX 5700 XT|Navi 10|`731F`|:white_check_mark: Verified| |
|RX 5700 XT 50th Anniversary Edition|Navi 10|`731F`|:white_check_mark: Verified| |
|Radeon Pro W5500|Navi 14|`7341`|:white_check_mark: Verified| |
|Radeon Pro W5700|Navi 10|`7312`|:white_check_mark: Verified| |

:::tip NOTE

Most Navi 10 and 14 cards currently require the boot argument `agdpmod=pikera` to get proper display out.

:::

<!-- TODO: Device ID table -->

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

**Important note for MSI Navi users**:

* Catalina (10.15) installers and under currently have a VBIOS bug which crashes installers if an MSI Navi card is present. This can be resolved by injecting `ATY,Rom#` in your GPU's DeviceProperties with any value. See here for more details: [Installer not working with 5700XT #901](https://github.com/acidanthera/bugtracker/issues/901)
* MSI's Polaris and Vega line are not affected by this bug.

### Vega 20 series

| Support Status                       ||
| --------------- | ------------------- |
| Latest Support  | Current/Sonoma (14) |
| Initial Support | Mojave (10.14.5)    |

All Vega based dedicated GPUs are natively supported in macOS with Vega 20 GPUs starting in Mojave.

Supported Cards:

|Card Name|Device ID|Status|Notes|
|---|---|---|---|
|Radeon VII|`66AF`|:white_check_mark: Verified| |
|Radeon Pro VII|`66A1`|:warning: Unverified| |

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### Vega 10 series

| Support Status                       ||
| --------------- | ------------------- |
| Latest Support  | Current/Sonoma (14) |
| Initial Support | High Sierra (10.13) |

Just like with Vega 20, Vega 10 GPUs are natively supported in macOS, though these cards' support starts in High Sierra.

And for those who want to overclock/undervolt, check out [PyVega](https://github.com/corpnewt/PyVega)

The only brand of GPUs to **avoid with Vega 10 is XFX**. The reason is VBIOS communication issues which can't be easily solved with a reference BIOS due to how Vega's powerplay table interacts with the OS and GPU.

Supported Cards:

|Card Name|Device ID|Status|Notes|
|---|---|---|---|
|RX Vega 56|`687F`|:white_check_mark: Verified| |
|RX Vega 64|`687F`|:white_check_mark: Verified| |
|RX Vega 64 Limited Edition|`687F`|:white_check_mark: Verified| |
|RX Vega 64 Liquid Cooling|`687F`|:warning: Unverified| |
|Radeon Pro WX 8100|`6868`|:warning: Unverified| |
|Radeon Pro WX 8200|`6868`|:white_check_mark: Verified| |
|Radeon Pro WX 9100|`6861`|:white_check_mark: Verified| |
|Radeon Vega Frontier Edition|`6863`|:white_check_mark: Verified| |
|Radeon Vega Frontier Edition Watercooled|`6863`|:warning: Unverified| |

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Polaris 10 and 20 series**

| Support Status                       ||
| --------------- | ------------------- |
| Latest Support  | Current/Sonoma (14) |
| Initial Support | Sierra (10.12.6) |

:::tip INFO

It is unknown if Lexa support was available in 10.12.6 or if it was added in a future version.

:::

Regarding Polaris, almost every model of card is supported as long as it’s running either a Ellesmere or Baffin core. Lower end cards like the RX 550 may run a Lexa core, meaning that spoofing the GPU to a Baffin core RX 550 is required. The only cards that are *not* supported are the RX 580 2048SP and RX 590 GME.

The only brands **you should avoid with the Polaris series would be XFX (460/560 models), PowerColor, HIS and VisionTek** as many users have had bootloader and macOS boot issues. Other users have found fixes/workarounds, though nothing consistent. This seems to be caused by having an odd VBIOS that doesn't communicate well with macOS and the only real solution is flashing another VBIOS, which is not ideal for most users.

:::tip INFO

This is a non-exhaustive list, as there are many Polaris 10 and 20 cards. For a device not listed here, check the device ID and compare it to the list below.

Additionally, a few cards may have device IDs that are uncommon. If your card's device ID does not match what is listed in the table, you may need to spoof the device ID.

:::

|Card Name|Core|Device ID|Status|Notes|
|---|---|---|---|---|
|RX 460|Baffin (Polaris 11)|`67EF`|:white_check_mark: Verified| |
|RX 470|Ellesmere (Polaris 10)|`67DF`|:white_check_mark: Verified| |
|RX 470D|Ellesmere (Polaris 10)|`67DF`|:warning: Unverified| |
|RX 480|Ellesmere (Polaris 10)|`67DF`|:white_check_mark: Verified| |
|Radeon 540|Lexa (Polaris 12)|`699F`|:warning: Unverified|Spoof to RX 550 (Baffin), may need `no-gfx-spoof`.|
|Radeon 550|Lexa (Polaris 12)|`699F`|:warning: Unverified|Spoof to RX 550 (Baffin), may need `no-gfx-spoof`.|
|Radeon 550X|Lexa (Polaris 23)|`6987`|:warning: Unverified|Spoof to RX 550 (Baffin), may need `no-gfx-spoof`.|
|RX 550|Lexa (Polaris 12)|`699F`|:ballot_box_with_check: Verified|Spoof to RX 550 (Baffin), may need `no-gfx-spoof`.<br/>Has 512SP variant only|
|^^|Baffin (Polaris 11)|`67FF`|:white_check_mark: Verified|Has 512SP and 640SP variants|
|RX 550X|Lexa (Polaris 23)|`699F`|:warning: Unverified| Spoof to RX 550 (Baffin), may need `no-gfx-spoof`.|
|RX 560|Baffin (Polaris 21)|`67FF`<br/>Some models `67EF`|:white_check_mark: Verified| |
|RX 560D|Baffin (Polaris 21)|`67EF`|:warning: Unverified| |
|RX 560X|Baffin (Polaris 21)|`67FF`<br/>Some models `67EF`|:warning: Unverified| |
|RX 560 XT|Ellesmere (Polaris 10)|`67DF`|:warning: Unverified| |
|RX 570|Ellesmere (Polaris 20)|`67DF`|:white_check_mark: Verified| |
|RX 570X|Ellesmere (Polaris 20)|`67DF`|:warning: Unverified| |
|RX 580|Ellesmere (Polaris 20)|`67DF`|:white_check_mark: Verified| |
|RX 580 2048SP|Ellesmere (Polaris 20)|`6FDF`|:x: Unsupported|Some have reported success with [modifying the VBIOS](https://www.tonymacx86.com/threads/making-an-amd-rx580-2048sp-graphics-card-work-on-hackintosh.328087/) or flashing an RX 570 VBIOS.|
|RX 580X|Ellesmere (Polaris 20)|`67DF`|:warning: Unverified| |
|RX 590|Ellesmere (Polaris 30)|`67DF`|:white_check_mark: Verified| |
|RX 590 GME|Ellesmere (Polaris 20)|`6FDF`|:x: Unsupported|Some have reported success with [flashing a RX 580 BIOS](https://www.reddit.com/r/hackintosh/comments/15zqrx7/comment/jy5x17u/).|
|RX 640|Lexa (Polaris 23)|`6987`|:warning: Unverified|Spoof to RX 550 (Baffin), may need `no-gfx-spoof`.|
|Radeon Pro Duo Polaris|Ellesmere (Polaris 10)|`67C4`|:warning: Unverified| |
|Radeon Pro WX 2100|Lexa (Polaris 12)|`6995`|:warning: Unverified|Spoof to WX 4100, may need `no-gfx-spoof`.|
|Radeon Pro WX 3100|Lexa (Polaris 12)|`6985`|:white_check_mark: Verified|Spoof to RX 550 (Baffin) or WX 4100, may need `no-gfx-spoof`.|
|Radeon Pro WX 3200|Lexa (Polaris 23)|`6981`|:white_check_mark: Verified|Spoof to RX 550 (Baffin) or WX 4100, may need `no-gfx-spoof`.|
|Radeon Pro WX 4100|Baffin (Polaris 11)|`67E3`|:white_check_mark: Verified| |
|Radeon Pro WX 5100|Ellesmere (Polaris 10)|`67C7`|:white_check_mark: Verified| |
|Radeon Pro WX 7100|Ellesmere (Polaris 10)|`67C4`|:white_check_mark: Verified| |

<!--

|Device ID|Support Status|
|---|---|
|`67C4`|Native|
|`67C7`|Native|
|`67DF`|Native|
|`67E3`|Native|
|`67EF`|Native|
|`67FF`|Native|
|`6981`|Spoof required|
|`6985`|Spoof required|
|`6987`|Spoof required|
|`6995`|Spoof required|
|`699F`|Spoof required|
|`6FDF`|Unsupported|

-->

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `-radcodec`: Allows spoofed GPUs to use the HW video encoder
* [Renaming GPUs (Fake ID)](https://dortania.github.io/Getting-Started-With-ACPI/Universal/spoof.html)

### **R7/R9**

#### Highest Supported OS: Monterey (12)

#### Initial Supported OS: Yosemite (10.10)

R7/R9 is also natively supported without too much issue, but we cannot guarantee the success of R5 and R7 cards due to few reports of success with them. Also, be wary that differing from the reference design of these cards has many more issues that require a lot of work to get them to run properly. Sapphire cards are your best bet. Also, the R9 280X/380X are hit or miss on compatibility.

Supported cards:

* R9 Fury X
* R9 Fury
* R9 Nano
* R9 390 (Fake ID needed)
* R9 290X/390X
* R9 290/390 (Fake ID needed)
* R9 280X/380X (Hit or miss)
* R9 280/380 (Fake ID needed)
* R9 270X/370X
* R7 270/370 (Fake ID needed)
* R7 265
* R7 260X/360X
* R9 260 (Fake ID may be required depending on model)
* R9 255
* R7 250X
* R7 250 (Fake ID may be needed to HD 7750)

Needed kexts

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `radpg=15`: Required for HD 7730/7750/7770/R7 250/R7 250X GPU initialization
* `-raddvi` boot flag: Fixes DVI, required for 290X, 370, etc
* InjectAMD: While deprecated, some users require this for proper initialization, avoid unless absolutely necessary
* [Renaming GPUs (Fake ID)](https://dortania.github.io/Getting-Started-With-ACPI/Universal/spoof.html)
* Some XFX cards need earlier VBIOS versions to be flashed to be compatible; only 280X confirmed to need it so far

### **HD 8000 Series (8xxx)**

#### Highest Supported OS: Monterey (12)

#### Initial Supported OS: Mountain Lion (10.8)

* HD 8740
* HD 8760
* HD 8770
* HD 8850
* HD 8870
* HD 8890
* HD 8950
* HD 8970

Needed kexts

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `radpg=15`: Required for HD 8740/8760 initialization
* InjectAMD: While deprecated, some users require this for proper initialization, avoid unless absolutely necessary

### **HD 7000 Series (7xxx)**

#### Highest Supported OS: Monterey (12)

#### Initial Supported OS: Mountain Lion (10.8)

* Dual AMD FirePro D300
* Dual AMD FirePro D500
* Dual AMD FirePro D700
* FirePro W5100 (Fake ID needed)
* FirePro W7000
* FirePro W9000
* HD 7730
* HD 7750
* HD 7770
* HD 7790
* HD 7850
* HD 7870
* HD 7870 XT
* HD 7950
* HD 7970
* HD 7990

Needed kexts

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `radpg=15`: Required for HD 7730/7750/7770/R7 250/R7 250X GPU initialization
* InjectAMD: While deprecated, some users require this for proper initialization, avoid unless absolutely necessary

## Non-Native AMD GPUs

:::warning

As these cards are not supported by the native drivers, we do not recommend purchasing them for use with macOS.

:::

### Navi 22 series

#### Highest Supported OS: Current/Sonoma (14)

Navi 22 series graphics cards are not natively supported by macOS. However, there is a WIP kext, NootRX, that aims to patch the AMD graphics drivers to support Navi 22. It is not fully functional: please see its website for more information.

Supported Cards:

* RX 6700
* RX 6700 XT
* RX 6750
* RX 6750 XT
* RX 6750 GRE

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [NootRX.kext](https://chefkissinc.github.io/applehax/nootrx/)

### Vega APUs

AMD Vega APUs are not natively supported by macOS. However, there is a WIP kext, NootedRed, that aims to patch the AMD graphics drivers to support Vega APUs. It is not fully functional: please see its website for more information.

Supported iGPUs:

* Vega 3
* Vega 6
* Vega 8
* Vega 9
* Vega 10
* RX Vega 10
* RX Vega 11
* Radeon Graphics (Vega)

These iGPUs can be found in Raven Ridge, Picasso, Renoir, Cezanne, and Barcelo APUs.

Needed kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [NootedRed.kext](https://chefkissinc.github.io/applehax/nootedred/)

## Unsupported AMD GPUs

### Navi 3x series

Navi 3x series (including Navi 31, Navi 32, and Navi 33) graphics cards remain unsupported at the time of writing. As Apple is no longer making Intel Macs and Apple silicon Macs do not support third-party GPUs, it is unlikely that support for these cards will be added in the future.

Unsupported cards include:

* RX 7600
* RX 7600 XT
* RX 7700 XT
* RX 7800 XT
* RX 7900 GRE
* RX 7900 XT
* RX 7900 XTX
* Radeon Pro W7500
* Radeon Pro W7600
* Radeon Pro W7700
* Radeon Pro W7800
* Radeon Pro W7900

### Navi 24 series

While Navi 21 and Navi 23 are already supported, Navi 24 remains unsupported at the time of writing. As Apple is no longer making Intel Macs and Apple silicon Macs do not support third-party GPUs, it is unlikely that support for these cards will be added in the future. NootRX may add support for Navi 24 cards in the future, but they are currently unsupported.

Unsupported cards include:

* RX 6300
* RX 6400
* RX 6500 XT
* Radeon Pro W6300
* Radeon Pro W6400

### AMD APUs (GCN 1-3 and Navi variants)

The integrated GPUs found on mobile and lower end desktop AMD CPUs have unfortunately never had official support with community support quite lacking. While possible to get a display out with some work, graphics acceleration is basically impossible.

Unsupported APUs:

* AMD Radeon Graphics (Zen 4, 5)
* GCN 3 (Excavator Gen 2, Steamroller)
* GCN 2 (Excavator Gen 1, Puma, Puma +)
