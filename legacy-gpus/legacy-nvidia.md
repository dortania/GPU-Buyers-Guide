# Legacy Nvidia

So what's this section for? Well a decent chunk of users have been wondering what the highest supported OS would be for their GPU if Mojave/Catalina isn't supported. While this isn't a definitive list it'll be more as a jumping off point as it's easier to say what architecture is supported instead of what OS is supported. The GPUs listed have **theoretical** support but keep in mind that they're not guaranteed unless shipped in a [Mac Pro](https://support.apple.com/en-lamr/HT201805) with even that being flaky. Also keep in mind that this list will likely change as I further deeper into old drivers to see what PCI IDs are even supported

Also to note: InjectNvidia may be required for these GPUs, for OpenCore users you'll need to create some [EFI Strings](http://forum.netkas.org/index.php?topic=222.0)

And for those wondering, it is possible to run Mojave or even Catalina with these GPUs with a bit of work. Do keep in mind stability is not guaranteed and requires you to modify the macOS file system. Try at your own risk: [source](https://www.insanelymac.com/forum/topic/339035-pre-release-macos-catalina/?page=21&tab=comments#comment-2677545)

## **Fermi series (4xx, 5xx)**
### Highest Supported OS: High Sierra

Something to note with Fermi GPUs is while they may be supported in macOS High Sierra users have experienced issues with stability. If you're experiencing instability as well you'll want to downgrade to Sierra

500 series:

* GTX 570

400 series:

* GTX 470


## **Tesla series (1xx, 2xx, 3xx)**
### Highest Supported OS: High Sierra

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

## **GeForce 9 (9xxx)series**
### Highest Supported OS: High Sierra

* 9800 GT
* 9600 GT
* 9400 GT
* 9300 GT

## **GeForce 8 (8xxx)series**
### Highest Supported OS: High Sierra

* GeForce 8800

Quadro:

* FX 5600

## **GeForce 7 (7xxx)series**
### Highest Supported OS: Lion

Reason for this is due to the kexts only being 32bit

* 7600 GT
* 7300 GT

Quadro: 

* FX 4500

## **GeForce 6 (6xxx)series**
### Highest Supported OS: Lion

* 6600 GT 