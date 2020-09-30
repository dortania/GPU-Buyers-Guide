# KVM Configurations

For users who plan to boot with a KVM(Kernel Virtual Machine) configuration should pay attention to the below:

A very important thing to note with GCN-based AMD GPUs is that they experience what is known as the "reset bug". What this refers to is when you shut down the macOS VM, the GPU can enter a bad state that requires the host itself to reboot. Unfortunately while AMD still hasn't released a proper fix for this, there are some options available(Note they are not 1 size fits all, so they may require some tinkering on your end):

* [Vega 10/12 Fix](https://forum.level1techs.com/t/vega-10-and-12-reset-application/145666)
  * Currently there is no fix for Vega 20 based GPUs
* [Navi 10 Fix](https://forum.level1techs.com/t/navi-reset-kernel-patch/147547)

And regarding how to avoid GPUs with this issue, we recommend the following:

* Try to follow as close to reference design GPUs
  * Sapphire makes AMD's reference GPUs so they're the go-to vendor
* Avoid OEMs who commonly make heavily modified VBIOS
  * XFX, PowerColor, HIS and VisionTek are the main brands to avoid
* Any 7950/70 or 280/X that supports UEFI boot
* Any 7850/70 or 270/X that supports UEFI boot
* Any FirePro Card Based on CGN 1.0 that supports UEFI boot
  * FirePro W7000, 8000, 9000, and D300, 500, 700 Cards
* Any RX 4XX/5XX Sapphire card
  * There's still issues with regular Polaris GPUs so pay close attention