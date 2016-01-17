---
layout: post
title: Using Jekyll
tags:
tagline: "Jekyll is the coder-friendliest blogging software I've found. Git+markdown+MacVIM = :D"
date: Dec 10, 2012
---

## Really liking Jekyll

Jekyll works great for so many things! In particular:

- I enjoy hosting my blog and deploying using git
- I realllly like writing using markdown :)
- I'm totally comfortable modifying CSS, and I can even do that in my favorite text editor VIM!

But I miss:

- Tumblr-style sharing and reblogging. Tumblr doesn't really have a community of code-posts anyway though.


## I Want Github-Flavored CodeBlocks
I really want to write github-style code blocks, so I tried using this plugin

<pre>https://github.com/nono/Jekyll-plugins</pre>

And it worked great locally! But I couldn't get it to run on github pages. The end. :/


## Debugging
If you ever have bad syntax, jekyll won't compile anything. No changes. And it won't even tell you why unless you ask.

If you say please it'll tell you - this line does it:

<pre>
  jekyll --no-server --no-auto
</pre>
