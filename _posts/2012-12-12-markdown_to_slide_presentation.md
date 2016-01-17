---
layout: post
title: Markdown to Slide Presentation
tagline: Every once in a while I look around for this. It's not quite here yet.
tags: [tools]
---

HTML-based slideshows are becoming quite sophisticated. Powerful, yet simple to write. The future of presentations certainly lives in HTML, not `.ppt`. There are some markdown-based HTML-slideshow generators, but they tend to be weaker, limited by the syntax. But I want the best of both!

If I could choose whatever HTML Framework, I'd choose the beautiful [Reveal.js](http://lab.hakim.se/reveal-js/).
If I had to write a presentation using markdown right now, I'd use [Remark](http://gnab.github.com/remark/).

I have a coder's crush on the HTML slideshow framework [Reveal.js](http://lab.hakim.se/reveal-js/), and I want it to compile to it from markdown. It looks so good. So good. [Remark](http://gnab.github.com/remark/) is a markdown-slide-compiler based on the [Deck.js](http://imakewebthings.com/deck.js/) HTML slideshow framework. I'm not in love with it, but it looks like it works okay once set up.


## My Goal

Take notes like usual => Those notes magically become a presentation.

Specifically:
1. I want to take notes using markdown 
2. I want those notes to generate a presentation. With minimal effort.
3. I'm not picky about the output as long as it's presentable and portable. If it's HTML, it shouldn't have dependencies. If it has a PDF option that's okay too.

We have to start with a good HTML slideshow framework, then we can generate content for it based on a simpler (markdown-based) syntax.


### Framework-enhanced Markdown

To have markdown compile to a presentation, we'd need a few textual representations of things that are going on in a slideshow. This is where it gets tricky. Ways it's currently done, or could potentially be done:

1. Slide separator. Two ways currently done:
    1. de facto standard is `----` the `<hr>` tag. I like that.
    2. The other option is with a string, like `!SLIDE`
2. Slide attributes. These should be declared with the slide declaration. It should be based on HTML class. If the class is `titleslide`:
    1. `----.titleslide` or `----titleslide`
    2. `!SLIDE .titleslide` or `!SLIDE.titleslide`
    3. Slide attributes at the top of each slide, in key-value pairs (see Remark.js)
3. Presenter notes. Associated with each slide.
    1. `.notes:` keyword, anywhere in the slide. Only accepts a short string comfortably.
    2. Really, there's no reason why notes shouldn't also have markdown in them. Not sure how to best write these.
4. Slide nesting. It's an advanced feature that Reveal.js does well. This is harder to do, and not totally necessary. If I wanted to implement it, I might be okay with something header-based like this:
    1. Reserve `# <h1>` and `## <h2>` for slide titles. CSS is the same for default template.
    2. `## <h2>` is always 'nested' slidewise under its parent `# <h1>`. 
    3. Most slides are content within a `## <h2>`. `# <h1>` content before the first `## <h2>` can be its own slide.
    4. Other suggestions?



## Frameworks Written in HTML

[This post](http://www.sitepoint.com/5-free-html5-presentation-systems/)
lists quite a few nice options. The blogger's favorite is Reveal.js for
good reason, and shows others as well.
[This other post](http://www.impressivewebs.com/html-slidedeck-toolkits/) lists even more options, a lot are similar.

### [Reveal.js](https://github.com/hakimel/reveal.js/)
Reveal.js is my favorite too! It's really pretty, really simple, and it has features I didn't realize I'd value. But now I'm frustrated that other frameworks don't have them.

I like its
- progress bar
- zoom-out view
- nested slides
- simple eye-candy transitions

[rvl.io](http://www.rvl.io) is really pretty too. It's easy enough and shiny enough that I'd actually consider making a powerpoint in it! It doesn't have collaboration built-in though, so it's not quite appropriate for my work unfortunately.

### [Impress.js](https://github.com/bartaz/impress.js/)
The Prezi of HTML presentations. Not at all what I'm looking for; I want
super-simple.

### [Deck.js](https://github.com/imakewebthings/deck.js)
This seems powerful, but I'm kinda scared of it. It's not as friendly as Reveal.js.

But when it's wrapped by Remark.js (below) it seems okay.



## Frameworks Written in Modified Markdown 
This is the interface I want!

### [Remark.js](http://github.com/gnab/remark)

Remark seems so clever! The more I look at it, the more I like it. But it's not perfect, and it could be presented better.

It's great, but it's missing things (because Deck.js is missing things?)
1. Presenter Notes
3. Progress Bar
4. Zoom-out view
2. Nested Slides

It doesn't come with any good default templates. Have to create your own CSS styling. The sample presetation is a decent start I guess.

Its more advanced features aren't well-documented. I don't understand the "template" situation, but I appreciate the two-dash `--` abbreviation to have things appear incrementally, that's a nice feature.

Separating slides with a `----` (markdown `<hr>` tag) is a good idea, I totally support that.

I like the syntax for within-slide classing things. Like putting part of the slide on the right half of the screen using `.rightside[content]` (assuming my CSS does that to the rightside class).

### [Landslide](https://github.com/adamzap/landslide#notes)

The way landslide does notes is okay; based on a keyword `.notes:`

### [Markdown Presenter](http://www.splinter.com.au/markdown-presentations/)

I also like separating slides using a `!` bang paragraph, that's a nice idea. It's neat and clean. `!` is used by markdown for images, but this is distinct enough to be useful.

### [KeyDown](https://github.com/infews/keydown)
I have mixed feelings about the syntax to declare a slide and give it attributes `!SLIDE classname`.

I like that attributes are right in the declaration line. I like that
notes get their own slides.

But it feels arbitrary - I don't like that it's not based on markdown at all, that it's 100% 'locked into' this framework.


### If I Wrote One

I want to hold to standards whenever I can.
- New Slide: The newslide standard `----` is good, I accept that as a standard.
- Slide Attributes: Remark-style slide properties such as `name: agenda` are okay. And probably useful for other things too.
- Slide Attributes: Putting slide attributes on the same line as the `----` would be okay too. (but maybe markdown doesn't compile that?)
- Speaker Notes: I think we could requisition `!` to separate the speaker notes section.

A few slides of mine might look like:

    ## Hardware

    1. Hard Drive
    2. RAM
    3. Motherboard

    !
    Average life of a hard drive is &lt;4 years

    ----
    ## Software

    The limits are endless

    ----
    #Questions?


