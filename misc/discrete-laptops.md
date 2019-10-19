# Understanding what discrete laptop GPUs work


**Work in Progress**

This is a little subsection to talk about how you can find out if your dGPU would work in macOS.

# What in the world is a MUX chip?

So a MUX chip is a multiplexer which handles how the iGPU and dGPU are routed to the internal display, with the dGPU always being hooked up-to the external outputs like HDMI and DisplayPort. This is what real MacBooks have for their graphics switching.

> So where's the issue with normal laptops?

Most laptops on the market *don't* have this chip, instead opting for a software based solution like Nvidia Optimus where it will actually make a virtual window and reroute the dGPUs signal into the iGPU. This creates a delay and uses up more battery as you're running 2 GPUs at the same time, so Apple's solution is the most ideal but unfortunately costs more and is more complex to engineer. And the other solution means that there would need to be a lot of driver support on macOS for Optimus Support(which there is none of).

> So how do I find out if my laptop has a MUX chips?

This is the difficult part as most laptop vendors won't even mention it at all anywhere even if they have one, 
