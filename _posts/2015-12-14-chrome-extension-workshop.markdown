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



## C. Bookmarklets
Take your find-and-replace code from earlier, and make it into a bookmarklet!

### What is a Bookmarklet?
A **bookmark** normally takes you to a new web page. A **bookmarklet** is a bookmark that runs javascript on the current page instead of taking you to a new page. To declare that it is a bookmarklet, the "location" it points to starts with `javascript:`.

This guide will walk you through creating your first bookmarklet. For a more thorough guide check out the great website [Bookmarklets - Browser Power](http://subsimple.com/bookmarklets/index.php).

Some bookmarklets are pretty cool. Become a spaceship that shoots and destroys elements on the webpage you're on with [Kick Ass](http://kickassapp.com/). Or make pages rainbow and sparkly with [Cornify](http://www.cornify.com/).

### Scenario & Goal

> I'm feeling very clever. I've got this sweet line of javascript that replaces "cloud" with "butt". My mom would LOVE this, but she doesn't computer very well. I'm afraid to show her the Developer Console and have her type/paste this in. But she IS pretty good at bookmarks, she knows just how to click those!

Goal: Take a short javascript script and put it into a bookmarklet.


### Use a Pre-Made One

Install this bookmarklet

Make a new bookmark in your browser (right-click on the [bookmarks bar](https://support.google.com/chrome/answer/95745?hl=en) and click `Add Page...`)
  - For the "Name" you might put "Pinker".
  - Copy the code block below, paste this into the "Location" of a new bookmark.

```
javascript:(function(){document.body.style.background = 'pink';})();
```


Navigate to google and click the bookmarklet. Voila!


### Make Your Own

To make a bookmarklet we have three steps:

1. Write some javascript code that you want in a bookmarklet (using the console)
2. Put `javascript:` in front of the code
3. Wrap everything in an [IIFE](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression) so the page doesn't freak out

Here is our cloud-to-butt function:
```
document.body.innerHTML = document.body.innerHTML.replace(/cloud/g, "butt").replace(/Cloud/g, "Butt");
```

Try just putting `javascript:` in front of it
```
javascript:document.body.innerHTML = document.body.innerHTML.replace(/cloud/g, "butt").replace(/Cloud/g, "Butt");
```

> You can debug bookmarklets much faster if you use the Location bar - see "Quicker Debugging" below for caveats.

Partway there! The page did SOMETHING but it seemed to refresh and then the CSS/images didn't load! :(

We can get around this by putting this in an [Immediately Invoked Functional Expression](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression). You don't have to understand this completely to be a bookmarkleteer. Using an IIFE is one way to avoid having a return value, see [Rules for Bookmarklets (Browser Power](http://subsimple.com/bookmarklets/rules.php) and [Tips - Encapsulation (Browser Power)](http://subsimple.com/bookmarklets/tips.php#Encapsulation).

Here are two example ways to write a standard IIFE:
```javascript
(function(){})();
// or
function(){}();
```

Here's the general template I always use:
```
javascript:(function(){CONTENTGOESHERE})();
```

Try it with your cloud to butt code!
```
javascript:(function(){
  document.body.innerHTML = document.body.innerHTML.replace(/cloud/g, "butt").replace(/Cloud/g, "Butt");
})();
```



### Quicker Debugging - Location Bar
Editing the bookmarklet "location" every time you have a code change can be tedious. You can save some time while debugging if you use the Location bar. If it works when you paste into the location bar, it should work as a saved bookmarklet.

Try pasting this:
```
javascript:(function(){
  document.body.innerHTML = document.body.innerHTML.replace(/cloud/g, "butt").replace(/Cloud/g, "Butt");
})();
```

> You'll have to retype `javascript:` at the front of what you paste.

The trouble with the location bar is that it strips "javascript:" from the front of whatever you paste. This probably keeps most people safe from copy-pasting code from the internet willy nilly, but you're writing your own. Hopefully you trust yourself :)



### Editing bookmarklets
When you save a bookmarklet, the browser will remove newlines. If you want to edit a bookmarklet it might be really ugly. You have at least two options:

1. Save a copy of the bookmarklet in a text file on your computer (and in github!)
2. Use a tool like [JSBeautifier](http://jsbeautifier.org/) to make it look nice again. It will put in new lines, indentation, and syntax highlight for you. (but be careful! If you press back in your browser the code is lost. I recommend using this to beautify your code, then that you edit it in a text editor.)

### References & More Resources
- [Bookmarklets - Browser Power](http://subsimple.com/bookmarklets/index.php) - the most thorough guide I've found
- [Bit.ly Bookmarklet](https://bitly.com/a/tools)
  - [short explanation](- https://www.mattcutts.com/blog/javascript-bookmarklet-basics/)
- [SquareFree Collection of useful Bookmarklets](https://www.squarefree.com/bookmarklets/)
- [Pocket Bookmarklet](http://help.getpocket.com/customer/portal/articles/483627-using-the-pocket-bookmarklet)


## D. Chrome Extension
Chrome is, by far, the easiest browser to make extensions for. [Google's documentation](https://developer.chrome.com/extensions) for this is pretty good and thorough!

### First Extension

#### Setup
1. Make a folder `cloudtobutt` somewhere on your computer (in a `code` folder? or on your `desktop`? up to you!)
2. Save your js script in that folder as `cloudtobutt.js`
3. Make a file named `manifest.json` and copy-paste in an example:

  ```
  {
    "name": "CloudToButt",
    "version": "0.0.1",
    "manifest_version": 2,
    "description": "Converts clouds to butts. Demo for NewHaven.io Chrome Extension Workshop.",
    "content_scripts": [{
      "matches": ["http://*/*", "https://*/*"],
      "js": ["cloudtobutt.js"]
    }]
  }
  ```
4. Load the extension into Chrome: https://developer.chrome.com/extensions/getstarted#unpacked
5. Workflow: edit a file, reload in browser (see below), see if it worked, repeat!


#### Files & Folders

- `unpacked` extension = folder with our files in it
  - `manifest.json` explains what this extension is called, what version it is, what files it uses when, etc
  - your `.js` files, maybe `.css` and `.html` files
  - any libraries you use, as something like `jQuery.js`
- `.crx` = we upload a `.zip` of our folder to `https://developer.chrome.com/webstore/publish`, and Google converts it to this `.crx` package, and it becomes available on the Chrome Webstore!


### Workflow

#### Reload Extension

Either:

1. Go to `chrome://extensions` and click "reload" next to your extension
2. Go to `chrome://extensions` and refresh the page (cmd+r)

> `chrome://extensions` is also located in the "hamburger icon" menu under "more tools"


#### Debugging

- just to see if code is being loaded you could put `alert('lol code is working!');` in your `.js` file
- for more thorough debugging tips, check out Google's guide: https://developer.chrome.com/extensions/tut_debugging



### Powerups

#### List of Powerups
- I want to change what's on a page
  - That's a "content script". See [Content Scripts](https://developer.chrome.com/extensions/content_scripts) for more details.
- What if I want something shared between tabs?
  - "Background page"! Also good for long-running processes or complex code.
- What if I want a button in the top right?
  - That's a "browser action"
- What if I want an icon in the URL bar?
  - That's a "page action"
- I want to give options!
  - Try an "options page"! (more below)
- How do I change the "New Tab" page?
  - How about an "[override](https://developer.chrome.com/extensions/override)" page?
- I want to make a standalone app. Maybe access the shell and do fancy things!
  - You can make a "Chrome App" - same idea as an extension



#### Options Page

Check out the Chrome documentation [Options page](https://developer.chrome.com/extensions/options) for a full explanation on how to use an options page.

The key concept is "Local Storage". Modern web browsers all have an amount of hard drive space they can use to store information, and extensions can use this space too! Here's an example for Chrome:

  ```javascript
    // our app doesn't use this right now, but we might theoretically
    // have it use the options "wordFrom" and "wordTo" in our content script
    // here's how to set those options in the storage

    var wordFrom = "cloud"; // this might come from the options page itself
    var wordTo = "butt"; // this might come from the options page itself
    chrome.storage.sync.set({
      changeWordFrom: wordFrom,
      changeWordTo: wordTo
    }, CALLBACKFUNCTION);
  ```

> You don't have access to storage by default, unless you request it. See [Storage API](https://developer.chrome.com/apps/storage) for details on how to rquest it.

> `chrome.storage.sync` can contain one javascript object which can contain any number of things - including other objects

> This is an asynchronous function. Only after data is set/retrieved the `callback` function will be executed. In this example, we may want to say "SUCCESS" on the page when we're done! See https://developer.chrome.com/extensions/overview#apis

> The non-Chrome-API `localStorage` might work across browsers as a way to access Local Storage, try it: https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage#localStorage


### Sharing

#### Tampermonkey / Greasemonkey
These are like lightweight, ad-hoc browser-extension generators. You install one of these extensions and they help you make "extensions" super-quickly. It's great if you just want a quick script for yourself (and maybe your developer friends). It's often quicker to get a short "userscript" up and running than to create a full browser extension.

- [TamperMonkey](http://tampermonkey.net/) - Chrome
- [GreaseMonkey](http://www.greasespot.net/) - Firefox

#### Sharing Your Extension
tl;dr: Chrome Webstore is the best (but some $), sharing source code works but eh, and third-party hosting feels sketchy.

- To put it on the Chrome Webstore you'll have to register as a developer and pay a registration fee to Google. This is by far the best option if you want to share the extension with many people.
- Alternatively, you could just send the folder to someone and have them install it as a developer (like above).
- There are some third-party hosting options. Check out how `crossrider.com` does it!



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
