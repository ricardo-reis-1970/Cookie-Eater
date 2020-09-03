# Cookie Eater

**This is a Google Chrome Extension!** This means it only works on Chrome.

## Motivation

Don't you just hate it when cookies get in your way? You're browsing some web site and -- all of a sudden -- you're either blocked because of monthly limit policies, or your browser is _assuming_ previously saved values and that's not really what you want right now.

Either way, you end up doing this _tour de cookie cleaning_, whi in my case is always accompanied by a good measure of swearing and punching inanimate objects.

This is an unpacked Chrome Extension, meaning you can't just download it from the Chrome Extensions marketplace. Furthermore, being an (incredibly modest) open source contribution, source is thus made visible so that you can check that nothing is beind done without your knowledge.

As a life-long knowledge transfer practitioner, I would like to think that looking at how easy it is to develop a Google Chrome Extension might encourage you to go along and do some yourself.

## Architecture

Chrome extensions can be made up to up to 3 components:
background
: headless code that runs as a service.
content
: (optional) code that runs in the context of the page being displayed.
popup
: (optional) mini HTML page that appears when the extension button is pressed.

This extension only runs a background component. This adds an event handler to clicks on the extension button. Upon clicking on this, the URL of the current tab is read and all cookies from its domain are selected and deleted.

## Installation

Download or clone this repo to your machine. Then, in Chrome, open the ⋮ menu > More tools > Extensions. Or just go to a new tab and navigate to `chrome://extensions/`.

Once there, on the right end of the top blue navbar, you should have a on/off button with the label **Developer mode**. Switch it on. immediately below the navbar, on your left, a menu appears with the options **Load unpacked**, **Pack extension** and **Update**.

Click on **Load unpacked**, navigate to the folder where you downloaded this extension and click **Select Folder**. The extension is now installed in your browser.

If you are like me and have too many extensions, this might not have made its way into your extensions tray, typically to the right of the URL text box. In that case, you could click on the Extensions icon and pin this extension to the tray.

## Operation

Whenever you're in a site where cookies are being imposed, all you need to do is click the extension icon and all cookies in that domain will be immediately purged.

## Limitations

- This is a very _Boolean_ application. For the current domain, _all_ cookies will be removed. Or _none_, if you don't press the button.
- You can only purge the cookies for the domain of the current tab. In order to purge a domain, the current tab must be on that site.

# Disclaimer
To my knowledge, no harm could possibly come from using this extension, but I'm not here to feed your greedy legal suit claims. So, here it goes:
- you downloaded this because you felt like; nobody twisted your arm;
- you installed it because it thought like a good idea; again, _your idea_;
- if you had some login information stored in a cookie, you hadn't memorise it and you went on and deleted it with this extension, I cannot help you;
- the code is in clear text in the file `background.js`. It could literally be a long single line of text; if you can't read it and understand it clearly, suit yourself;
- `{...<every EULA you ever read>}`

To your knowledge, I am using this extension constantly and it already saved me hours of mouse fiddling and years of mental health. Enjoy!

# License, maintenance and contributions
I'm the onely maintainer of this project. It might be further developed, but it had a purpose and it achieved it. Ideas are always welcome.

You're most welcome to copy the code and modify/extend it. Although some recognition for all that (one line of) code would be welcome, it's really neither required nor expected. In the end, you're the one having to live with yourself.