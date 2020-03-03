# Legacy Nvidia

So what's this section for? Well a decent chunk of users have been wondering what the highest supported OS would be for their GPU if Mojave/Catalina isn't supported. While this isn't a definitive list it'll be more as a jumping off point as it's easier to say what architecture is supported instead of what OS is supported. The GPUs listed have **theoretical** support but keep in mind that they're not garunteed unless shipped in a [Mac Pro](https://support.apple.com/en-lamr/HT201805) with even that being flacky. Also keep in mind that this list will likely change as I furthur deeper into old drivers to see what PCI IDs are even supported

Also to note: InjectNvidia may be required for these GPUs

And for those wondering, it is possible to run Mojave or even Catalina with these GPUs with a bit of work. Do keep in mind stability is not garunteed and requires you to modify the macOS file system. Try at your own risk: [source](https://www.insanelymac.com/forum/topic/339035-pre-release-macos-catalina/?page=21&tab=comments#comment-2677545)

**Fermi series \(4xx, 5xx\) Highest Supported OS: High Sierra**

Something to note with Fermi GPUs is while they may be supported in macOS High Sierra users have experienced issues with stabilty. If you're expericing instabilty as well you'll want to downgrade to Sierra

**Tesla series \(1xx, 2xx, 3xx\) Highest Supported OS: High Sierra**

Similar to Fermi, these GPUs are supported by High Sierra but don't generally experience the same issues that Fermi does in High Sierra

300 series:

* GT 340
* GT 330
* GT 320

200 series:

* GTX 285
* GTX 280
* GTX 275
* GTX 260
* GT 240
* GT 230
* GT 220

100 series:

* GT 140
* GT 130
* GT 120

**GeForce 9 \(9xxx\) series Highest Supported OS: High Sierra**

**GeForce 8 \(8xxx\) series Highest Supported OS: High Sierra**

* 8800 GT

**GeForce 7 \(7xxx\) series Highest Supported OS: Lion**

Reason for this is due to the kexts only being 32bit

* 7300 GT

