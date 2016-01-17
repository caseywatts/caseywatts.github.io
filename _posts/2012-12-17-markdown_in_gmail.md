---
layout: post
title: Markdown in Gmail
tagline: can be used thanks to a browser extension "Markdown Here"
tags: [tools]
---

##[Markdown Here](https://github.com/adam-p/markdown-here) is a browser extension.

###Handy!
I send weekly newsletters, and this is a great way to style them with
1. Very basic, likely-compatible HTML.
2. A nice plaintext fallback.

In fact, we already send email with out our 'headers' prepended with `#` just out of habit. The simplest transition!

###Recent History
It looks like `adam-p` started working on it May 2012 (just ~6 months ago) but it's already quite stable and usable by my standards :)

I `code_swarm`ed his project, and he's gone through a couple of programming spurts already, every couple months. It's a pretty active project as they go. 
`adam-p` is keeping up with browser updates admirably :)
I'm comfortable using this in at least the short-term, hopefully for longer!

###One drawback - reverting loses changes
There's one drawback that'll be hard to get used to. If I edit the HTML version and then revert, the changes are lost. To the author's credit, [he notes that](https://github.com/adam-p/markdown-here#notes-and-miscellaneous). And he's brainstormed possible solutions already.

I'm not sure the `HTML => md` options in javascript are mature enough for this venture, but my fingers are crossed!

###Needs better default CSS
It has decent default styling (based off of Mou.app?), but it's not quiite optimized for email.

My first tweak: I'm not happy with the `<li>` padding/margin, so I made it much smaller. 

I'll probably go through tweaking it here and there for a while. Once I'm comfortable maybe I'll suggest improvements to the default :D

##An example from an actual email we've sent
The original email is (almost) completely raw; how we sent it anyway. The conversion is certainly easier to read. And we're not even using any of markdown's features except headers.

####Before
![before](/assets/images/markdown_here_before.png)

####After
![after](/assets/images/markdown_here_after.png)

##Conclusion
I'm excited to use markdown in one more place! Away with GUI formatting!
