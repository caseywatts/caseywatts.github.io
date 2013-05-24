---
layout: post
title: Google Drive = Web Publishing
tagline: simple HTML webpage publishing gets easier and easier. For HTML presentations?
tags: [tools]
---


>Update 3/6/2013: You must have the folder published as "Public On The Web". Just "Anyone With The Link" won't work anymore.


See [This Blog Post](http://googleappsdeveloper.blogspot.com/2012/11/announcing-google-drive-site-publishing.html) where I discovered the trick.

You can host a web page on google drive now. You can even host relative assets, etc and google drive does a good job of finding them.

One stumbling point I had: If you need assets, you have to use the root **folder's** long identifying string. Not the specific HTML file's string.

###Hosting solution for markdown presentations?
I'd love a way to use markdown to generate HTML presentations. If I were to use a markdown-generated HTML presentation, I'd probably want to host it somewhere. Probably exactly where I edit it in the first place. In my google drive!

###I took a shot at it
So I hosted a folder of "presentations" I may potentially give:
<https://googledrive.com/host/0B4pzqThqXEKfdlVkSlBSaVNwQkE/>

###Hesitations
1. Image embedding is manual by filename - ick. That's not going away either.
2. Remark.js default styling is horrible. I tried to emulate reveal.js but it's hard.
