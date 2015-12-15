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
