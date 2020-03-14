# Laptop dGPUs

## Understanding what discrete laptop GPUs work

This is a little subsection to talk about how you can find out if your dGPU would work in macOS.

## What in the world is a MUX chip?

So a MUX chip is a multiplexer which handles how the iGPU and dGPU are routed to the internal display, with the dGPU always being hooked up-to the external outputs like HDMI and DisplayPort. This is what real MacBooks have for their graphics switching.

> So where's the issue with normal laptops?

Most laptops on the market _don't_ have this chip, instead opting for a software based solution like Nvidia Optimus where it will actually make a virtual window and reroute the dGPUs signal into the iGPU. This creates a delay and uses up more battery as you're running 2 GPUs at the same time, so Apple's solution is the most ideal but unfortunately costs more and is more complex to engineer. And the other solution means that there would need to be a lot of driver support on macOS for Optimus Support\(which there is none of\). [A bit more techincal info on the matter](https://www.reddit.com/r/hackintosh/comments/6omyzc/nvidia_optimus_really_never_going_to_happen_for/dkj20xt/)

> So how do I find out if my laptop has a MUX chips?

This is the difficult part as most laptop vendors won't even mention it at all anywhere even if they have one, easiest way to tell is if the display outs are directly tied to the dGPU. Mainly Alienware and Razer include such chips but most manufacturers opt for the lower price software solution for both AMD and Nvidia GPUs.

Luckily for us, the GPU passthrough site has a decent sized list with which GPUs have a MUX and how they work

* [Notebook Compatibility List](https://gpu-passthrough.com)

![MUX Configurations](https://media.discordapp.net/attachments/573338411503714324/653771022696185895/LaptopGPUs.png)

