---
layout: post
title: Service Now Tips
tagline: to streamline your ticket-tracking life
tags:
---

Most of these tricks I discovered by clicking around in Service Now.

The most important lesson I've learned is that `Everything in Service Now is a button` - even things that don't look like buttons. Even when the cursor doesn't change to a finger. Click everything!


##Tricks in Service Now's Interface

###Labels
- Labels allow you to "star" or "flag" incidents, so you can come back to them later.
- They indicate when a ticket has changed since you last opened it with a number `(1)`
- They are personal; no sharing
- See the [service now wiki page](http://wiki.servicenow.com/index.php?title=Creating_and_Using_Labels) to see how these work.

###Magic Labels
- SN can make a list for you of the "Most Recent Labels" you've opened.
- See the [service now wiki page](http://wiki.servicenow.com/index.php?title=Activating_Most_Active_and_Most_Recent_Labels) to set this up

###Personal Templates
- When you need to repeat a set of actions to an incident, a template can help "stamp" the set of fields for you
- Usually you'll want to use a Knowledge Base article which auto-stamps a template, but personal 
- To apply or create a template, **right-click on the top bar** of a ticket (e.g. "Incident... Assign to me... Save & Stay")

###Calendar View
- To view


###Filtering Long Work Notes
- Some work notes get long; the "Activity Formatter" can be used to show only certain fields.
- STC normally hides "email" and "description", which would otherwise fill the page.
- See the [service now wiki page](http://wiki.servicenow.com/index.php?title=Activity_Formatter) for screenshots. It's the `>>` button next to "Activity"
- It can also toggle on and off, by pressing the siphon icon.


###Show More Rows
You can by default show up to 200 rows. On any tabulated page:
- Incidents => Show => 200 rows per page

###Autocomplete Fields
In any autocomplete field in service now, you can type `**` to see all of the available options.

This can be useful for short lists, such as "Assigned To" within a small Assignment Group.


###Custom Fields
Service Now does not support custom fields. As a workaround:

- Custom text can be inserted in Notes field with use of a template (with KB)
- this is great for consistent info collecting or reminding agent to ask certain questions

Sample Description:

You can search check boxes by doing a text search.

<pre>
◈ WORK STATUS ◈ 
[ ] Needs io work 
[ ] Waiting for Parts 
[x] Waiting for Student 
[ ] Waiting for MacSpec 
[ ] Waiting for DeCaL 
[ ] Needs Data Backup 

◈ LOCATION ◈ 
[x] With Student 
[ ] io 
[ ] TTO 
Other ============ 
</pre>


Sample Work Notes:

<pre>
Symptoms: 

Troubleshooting Attempted: 

Where will data be backed up: 
</pre>



##Chrome Searches
To set up a chrome search:
1. Right click the address bar in Chrome and click on "Edit search engines."
2. Scroll down until you find a blank field. Enter the following data:

###Service Now 
You can search just about anything in SN using this - the last digits of an incident, a netid, a full incident string, a KB article number, words that appear in a KB article, etc
- standard keyword: `sn`
- url: `https://yale.service-now.com/textsearch.do?sysparm_no_redirect=true&sysparm_search=%s`

###Phonebook
Look up someone in the phonebook
- standard keyword: `ph`
- url: `http://directory.yale.edu/phonebook/index.htm?searchString=%s+return+all`

###Phonebook (NetID)
Look up someone in the phonebook, by netid
- standard keyword: `nid`
- url: `http://directory.yale.edu/phonebook/index.htm?searchString=netid%3D%s`




##Chrome Extensions
All of Casey's extensions: <https://chrome.google.com/webstore/search/casey.s.watts>

###[SN Linker](https://chrome.google.com/webstore/detail/service-now-linker/jflfhdliofpofkcimfbhgienjmjciiem)
On all webpages, links `INC1234567` to link to the INC, and `KB1234567` to the KB article.

###[NetID Linker Extension](https://chrome.google.com/webstore/detail/yale-netid-linker/ldohdglacgliicighkjcbappdgccbdcn)
On all web pages, finds netids and makes them links to the Yale phonebook

###[STC ITIL Terms Extension](https://chrome.google.com/webstore/detail/itil-dictionary-tooltips/mgloibgdcpfmbdbfgihjklicgplpdhdo)
In SN only, dotted-underlines every ITIL term and gives a tooltip definition


##STC-specific Extension
The [STC SN Tweaks](https://chrome.google.com/webstore/detail/stc-service-now-tweaks/bfknjdamonbecfmgdmgpbcinbacfnehd) Extension has a huge number of
modifications. If anyone in Yale ITS would like a subset, Casey would like to extract a standard set applicable to many teams. Highlights are:
1. Web links in work notes are made active

1. Extension to hide lines starting with > character; so email exchanges are shortened
1. Students to be contacted - color coded with status of students being contacted by techs
1. Change background color for some incidents: On Hold purple,
   Resolved green
