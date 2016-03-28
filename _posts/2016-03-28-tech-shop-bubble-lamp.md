---
layout: post
title: Bubble Lamp
tagline: Made At TechShop
tags:
---

## Bubble Lamp Alpha
It's certainly not my last bubble-themed lamp :)

### What Is It?
My "Bubble Lamp Alpha" is my first full TechShop project! It's a small, black, wooden table lamp with LED-backlit bubble-shaped holes. It's made of 4 panels, 4 inches wide by 12 inches tall. The panels are joined with a butt joint: wood glue and nails. Each panel has many bubble-holes of various sizes, cut with the ShopBot CNC machine. Behind each bubble-hole is diffusion paper, lit up from the inside with a remote-controlled LED lamp. It looks pretty sweet backlit (insidelit?) with blue, red, or purple.

PHOTO

### So Many Details
These may only be interesting to someone who ~really~ wants to know how it was made. How a person, who is not an entire factory, made a bubble lamp.

I used a lot of resources at the TechShop in Crystal City VA, right outside of DC, on the metro. Notably, their CAD software AutoCad and VCarve, their ShopBot (wood) CNC machine, and their woodshop tools (cutting tools, sanding tools, nailgun, clamps, etc).

#### CAD Preparation Work
I wanted to have the computer do super-accurate circular cuts for me. How would I draw out my design so the computer could cut it?

```
Vector Drawing software => CAD to CNC software => CNC Machine software

Illustrator =(svg)=> VCarve =(CUTthinggy)=> CNC G-code
```

Vector drawing software (like Illustrator, not like Photoshop). Illustrator would be a great choice for vector drawing, but it is expensive to get on my own. Fortunately, TechShop members get AutoCAD.

I started with InkScape (which is like an open source, free Illustrator), and made some panels there. But it's hard to use. Like, you have to use the `control` button on OS X for things that usually use the `command` button. ANd it's in xwindows something something, which is a little laggy?


I watched some youtube videos on how to use AutoCAD. I love the command pallete! I can just think `RECTANGLE` and type that, and it often does what I want :D

LINK TO YOUTUBE TUTORIALS?

By the way, some people told me to just use SketchUp, and it's probably lovely software too. However, it wasn't doing what I needed quickly enough, and AutoCAD did.

My original design was for a 6 foot tall lamp, but I decided that was too ambitious for a first project. I'm not experienced enough with hardware to predict what things could go wrong, so I expected I would make quite a few mistakes. I decided to do something 1/6 the size, a table lamp, and build in a lot of redundancy along the way.



#### ShopBot CNC
Operating the machine was fun lol. It had been a month since I took the class. The UI is the lolz.
There is a random radio button that doesn't change the interface much but changes just about EVERYTHING; I couldn't get it to move.
Had to find buried in a CUT menu that it says "KEYBOARD MOVEMENT"
But Surprise! they had put cute little icons there for me.
Surprise! It /does/ take forever haha. I only cut 5 of the 10 panels I was going to do.
Had to edit the files a couple of times
- preview mode looked like it would cut off of the table
  - had the y axis negative but it needed to be positive (or the other way around?)
- did an air cut like you're supposed to but it wasn't turning like it needed to!
  - turns out I'd exported the wrong file type. We need a kind of file that includes drill rotation speed; our machine can't be manually set outside of the file.
- slower than I'd expected
  - I wanted to print 10 panels for maximum redundancy - but in my 3 hour slot I only had time to print 5 of them. I didn't know until 2 were done.
  - I had to modify the file and re-export when I realized, "starting over" but removing the first 2 panels. Talk about "doing it live"! lol
  - I should have asked the software to estimate how long the run would take (how do I do that?)

#### Woodshop Tools
Now that I have some panels, how should I put them together? I've got extra .5" plywood I can use to prototype joints with.

I tried:
- kraig screws pocket hole
  - they look like THIS (LINK)
  - we even had the right adapter for .5" wood! :D
  - but the material is just too thin,the screw barely held it together. Broke upon picking it up haha
- miter cut
  - they look like THIS (LINK)
  - also the part of the wood we needed to cut was 12", taller than the table saw blade could do.
  - tried it on smaller wood anyway, but our cut wasn't exactly 45 degrees oopsiee (apparently this always happens with miter cuts)
- butt joint, with glue and nails
  - look like THIS (LINK)
  - either of the others would have been stronger joints, but surprisingly the strength of this is sufficient.
  - two panels were 4" and two were 3", so in total the whole thing was 4" by 4" square
  - glue and clamp together the panels to make the shape
  - nailgun them together so they hold better
  - also I had a top layer; same process

Smoothing it out
  - wood filler to fill the (pretty shallow) nail holes, let it dry
  - sand it with the belt sander to get the surfaces flat.
  - round the edges with the belt sander

Paint it black
  - paint roller and paint brush.
  - Wish I'd had
    - a smaller brunch, to get inside the holes
    - A paint stirrer (that wasn't already covered in sawdust lol)
  - lol I made a huge mess I had to clean up (shruggie)
  - luckily my hand fit inside to paint the inside of it

#### Light Panels
- light diffusion paper
  - bought some on amazon (LINK)
  - thought I'd need to glue 4 panes to the inside of the thing
  - tried a rolled up cylinder of the stuff for fun, and it actually looked great! less work, more fancy :)
- lights
  - tried a led lightbulb alone, looks good enough
  - tried led "fairy lights" (christmas lights that look cuter) but they weren't bright enough
  - tried a battery-powered remote-controlled led lamp. The colors are fantastic!

### Inspiration for Future Projects
I could make a very similar bubble lamp out of steel, bending it instead of welding it (or welding just one side?). This would probably be a lot faster to make if it works - less work joining the panels, and less drying time. I need to take the basic Metal Shop class so I can use that equipment / understand metal better. I would be able to powder coat a metal version of this lamp, there are such beautiful colors!



### How classes helped / what else I want to take
- VCarve
etc
need metal shop
