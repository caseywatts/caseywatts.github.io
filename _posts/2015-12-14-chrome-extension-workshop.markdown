---
layout: post
title: "Chrome Extension Workshop"
date: "2015-12-14"
---

Also check out
[Chrome Extension Workshop - Examples]({% post_url 2015-12-14-chrome-extension-workshop--examples %})


# Content

## A. Warmup

You should know some javascript before coming to this workshop. If you can google and copy-paste that will get you most of the way there, but you should at least understand the commands you’re typing. You definitely don’t have to be able to write this sort of thing from memory.


Before coming to this workshop make sure you know how to:

1. **CSS** Use javascript to change how the page looks, changing styles (CSS).
  - To make sure you know this, try to use the Chrome Developer Console to turn Facebook's main navigation bar pink.
  - https://developer.chrome.com/devtools/docs/elements-styles
2. **REGEX** Use javascript "regular expression" just to do a simple find-and-replace
  - use this regex tool: http://regexpal.com/
3. **LOOPS** Loop over an array in javascript
  - like in any of these examples: http://www.learn-js.org/en/Loops



## B. Console
This part of the workshop should be done in groups of 2-3 people. Use javascript to do a find-and-replace on the entire page, in the [Chrome Developer Console](https://developer.chrome.com/devtools/docs/console).

### Goals
1. Find-and-replace in your own string
  - example string "What string should I write?"
  - find "I"
  - replace with "you"
  - result is "What string should you write?"
2. Get the entire page ("body") as a string.
3. On a webpage about the Black Stars (like [this one](http://www.ghanaweb.com/GhanaHomePage/blackstars/)) find all instances of "Black Stars" and replace them with "THE BEST FOOTBALL TEAM IN THE WORLD".
4. Replace the current HTML of the page with the find-and-replace'd version.
5. Did your way replace the first instance of "Black Stars" or all of them? Make it do all of them! :)

### Solution Guide
Try to complete this challenge above on your own before looking at this. If you get stuck, ask people around you for guidance first. Once you've completed it you should check over the guide to make sure you understand everything that's happened. There's also a challenge at the bottom of the guide!
- [Find and Replace - Guide](https://gist.github.com/caseywatts/6275b94178792b7ea7cd)



## C. Bookmarklet
Take your find-and-replace code from earlier, and make it into a bookmarklet!

Follow this guide:
- [Making Bookmarklets - Guide](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1)



## D. Chrome Extension
Time to take the code from earlier and make it into a Chrome Extension!
- [Chrome Extensioning - Guide](https://gist.github.com/caseywatts/99e7412e9bc6ae858fd1)




## Misc FAQ

### Can I use `jQuery`?

Environment | How
---- | ----
Developer Console | Yes. If it's already on the page, or if you import it with something like [jQuerify](http://www.learningjquery.com/2006/12/jquerify-bookmarklet/)
Bookmarklet | Sort of. Bookmarklets have to be short. Importing a library or other js file is possible, but more difficult. See [Script Inclusion (Browser Power)](http://subsimple.com/bookmarklets/tips.php#Script Inclusion) and [Bookmarklets with jQuery](http://www.smashingmagazine.com/2010/05/make-your-own-bookmarklets-with-jquery/).
Chrome Extension | Absolutely! Just include jQuery in your package.


### Can I use `underscore.js` for this?

Same rules as above


### Can I use `some_other_javascript_package` for this?

Same rules as above
