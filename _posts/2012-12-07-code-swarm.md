---
layout: post
category : programming
tags : [github, tools]
tagline: Visualizes code collaboration from git repositories
---

##See It In Action


###Rails
####[Code Swarm - Rails](http://vimeo.com/2979844)

Apparently, in 2008 Rails switched to github. I see that pretty clearly :)

###STC
####[Code Swarm - STC Shifts](http://vimeo.com/55079451)
####[Code Swarm - STC Reservations](https://vimeo.com/55080278)
STC usually only works in the summer. Sometimes Adam tweaks things during the year. Some people import more libraries than others.


##Getting it working

I have a [full gist](https://gist.github.com/4234178) that describes how I set it up; just a quick summary here.

I cloned this, and set up the prerequisites according to the README:

{% highlight html %}
https://github.com/rictic/code_swarm
{% endhighlight %}

This commit broke everything for me, so reverted it. I don't know enough python to come up with a better solution, but I put a note on their wiki page
{% highlight html %}
https://github.com/rictic/code_swarm/commit/f15334b162bd0f3f939f3879fbec1935bd094c8c
{% endhighlight %}


Then I ran the command `code_swarm` in the directory of my project.

Beautiful video appeared!

###Getting Video Out
Then I edited the .config file (after running it once) so that it would record frames

`# Save each frame to an image?
TakeSnapshots=true`

Then I followed these instructions to create the video (using ffmpeg, because that's what I had already):
http://code.google.com/p/codeswarm/wiki/GeneratingAVideo

`ffmpeg -f image2 -r 24 -i %05d.png -sameq ./out.mov -pass 2`

###Built-in command for video
It looks like there's a command `code_swarm_video` that would generate a
video more easily, but it requires `mencoder` which I never got working.

Would this be easier if I just got mencoder working? Or would it be better to write-in a ffmpeg alternative?
