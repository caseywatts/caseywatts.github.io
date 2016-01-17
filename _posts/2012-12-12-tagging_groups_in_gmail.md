---
layout: post
title: Tagging Groups in GMail
tagline: It's possible (but not straightforward) to filter emails that come from a set list of addresses.
tags: tools
---

In my job, I'll never possibly be able to answer all of my emails.
We're two people managing 160+ part-time student employees.
I do prioritize answering students' emails over normal ones, but it's
hard to filter out that many email addresses.

##GMail's Limitations & A Workaround
GMail has a character limit on filters - a blog post said it's somewhere between 1500 and 2000 characters. That's only ~40 emails you can filter at once.

So I created multiple filters that do the same thing.

1. **1000 character chunks** - I took my 4000 character list of student-employee emails, and split it into <span class="tooltiptitle" title="I use vim!">1000 character chunks.</span>
2. **Curly Braces** - GMail gave me a warning about long operations, but it went away when I used curly braces around it. I got the idea from another blog post - I'm being kinda superstitious. It's hard to test this sort of thing.

I then created a label-applying filter (apply label "fromst"), with the following string in the 'from' field:

`{first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu OR first.last@yale.edu}`

To make it even more useful, I thought it deserved to be a "multiple
inbox" with the filter `label:inbox label:fromst`.
