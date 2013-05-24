---
layout: page
title: Casey Watts
tagline: Systems Optimizer
---
{% include JB/setup %}

Casey Watts likes to `optimize systems`.

He likes `technology`, `healthcare`, `coding`, `dancing`, `singing`, and `lolling`.

----
{% for post in site.posts limit:5 %}
<a href="{{ BASE_PATH }}{{ post.url }}">
<div class="posttitle">
{{ post.title }}<span class="datesnip">{{ post.date | date_to_string }}</span>
</div>
<div class="postsubtitle">
  {{ post.tagline }}
</div>
</a>
----
{% endfor %}


<a href="archive.html" class="btn btn-large">
More Posts
</a>
