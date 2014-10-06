---
layout: page
title: Casey Watts
tagline: Systems Optimizer
---
{% include JB/setup %}

Casey Watts likes to `optimize systems`.

He likes `technology`, `singing`, `dancing`, and `blowing bubbles`. He loves helping people `collaborate` together more effectively.

----
{% for post in site.posts limit:10 %}
<a href='{{ BASE_PATH }}{{ post.url }}'>
<span class='datesnip'>{{ post.date | date_to_string }}</span>
<span class='posttitle'>
{{ post.title }}
</span>
<span class='postsubtitle'>
  {{ post.tagline }}
</span>
</a>

----
{% endfor %}


<a href="archive.html" class="btn btn-large">
More Posts
</a>
