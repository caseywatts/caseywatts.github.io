---
layout: post
title: Chrome DevTools
tagline: Exciting New Features
tags:
---

## Chrome DevTools Exciting New Features
I use Chrome DevTools all the time. They're always adding features, but I usually end up using it in the same way I always have. I just did a run-through of new features, and there are way more than I'd realized :D
https://developer.chrome.com/devtools/docs/javascript-debugging

1. "Black Box" files: Did you know you could tell chrome devtools to "black box" a file like `Backbone.js` so you won't see its internal calls polluting the stack trace? wow :smile:
https://developer.chrome.com/devtools/docs/javascript-debugging#blackboxing

2. Pause on caught-exceptions: Did you knoww that you could have devtools pause (like `debugger;` does) on even **caught-exceptions**? whoaa
https://developer.chrome.com/devtools/docs/javascript-debugging#pause-on exceptions

3. Force element state - if you right click on a DOM node in the Elements tab of the inspector you can force something to look like it's in hover state o0o
Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.

4. Breakpoint on XHR with string-matching: We could say "stop on any XHR request that contains `/users/update_specific_route_name_thing` oh my :simple_smile:
https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-on-xhr

5. Quick-open
  - Find text in all files = `cmd`+`opt`+`f`. (Find in current file is normal `cmd`+`f`).
  - Open file, fuzzily by name = `ctrl`+`g`, like `ctrl`-`t` or fuzzy-p.
  - Within a long file you can jump to a `member` with `cmd`+`shift`+`p`.

6. `cmd` + `u` is "soft undo" - it sorta jumps back to where you were if that was the last action, or does an undo if that was the last action. It feels a little like `ctrl`+`o` in vim.

7. `console.assert(someCondition)` - you can have it raise an error+stacktrace if the condition isn't true.
  - Sortaa like sugar for `if(someCondition) {debugger();}` if you're `pause`ing on errors.
  - Sortaa like sugar for `if(someCondition) {console.trace();}` if you don't care that it throws an error.
https://developer.chrome.com/devtools/docs/javascript-debugging#console-assert

8. JS Pretty Print is built into the source tab whoaa - the `{ }` symbol in the bottom left while editing any `source` file

9. JS Snippets are their own phenomenon worth checking out. Use DevTools Snippets to save small scripts, bookmarklets, and utilities so that they're always available to you while debugging in the browser.
   - Use Snippets to run small scripts from any page.
   - Run portions of Snippets in the Console with the "Evaluate in Console" feature.
   - Map Snippets to external files with Workspaces.
   - Remember that popular features from the Sources panel, like breakpoints, also work with Snippets.
[Using JavaScript Snippets | Web Tools - Google Developers](https://developers.google.com/web/tools/chrome-devtools/debug/snippets/?hl=en)

10. Run Snippets
  -`cmd`+`enter` while in a snippet runs tho whole thing, probably like you'd expect
  - If you highlight some js in a snippet and press `ctrl`+`shift`+`e`, it'll evaluate it in the console. (it'll copy-paste it to the console and press enter).

11. Edit History in `Sources`: If you edit a file in the `Sources` tab, it keeps a log of every change, and you can go back to any previous edit and even back to the future again. Right-click in the editor pane, `Local Modifications...` (oh ah is that just snippets or all files? all "local files"?)

12. The color picker in chrome devtools is better than the extensions I used to use. It's got the eyedropper tool built in, AND it automatically slurps up some colors from the page for you to choose from in a palette :simple_smile:
You get it open by editing a color value, click on the colored-square.

13. Continue out of the breakpoint (unpause): `cmd`+`\`
