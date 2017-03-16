---
layout: post
title: Yale Browser Searches
tagline: for Chrome, Firefox, and IE
tags: YaleITS
---
Update Feb 21, 2014 - added ITS Website Search.


Related articles:

- [Service Now Tips Revised]({% post_url 2013-07-09-service_now_tips_revised %})
- [Yale Chrome Extensions]({% post_url 2013-07-23-yale_chrome_extensions %})


# Browser Search Engines
You can add a browser search in Chrome and Firefox. Also theoretically in IE. A browser search saves you from going to the page (such as `directory.yale.edu`) and then typing into its search box. Instead, you type directly into a box in your browser.

These extensions are all hosted on github [here](http://github.com/triplingual/yale-opensearch-extensions). Many were made by Trip
Kirkpatrick, some were made by Casey Watts.

To install in Chrome/Firefox just click the link below, and it will be automatically added to your browser!

## Installation & Browser Notes

### Firefox
- In Firefox, the search appears in the search box at the top-right of the browser.

### Chrome
- In Chrome, browser search appears when you you type a short keyword (such as `netid` or `directory.yale.edu`) into the address bar. This can be even faster than using the search box in Firefox/IE.
- The default is the url of the page, which usually works okay. Next to each search is included a recommended shorter keyword you may consider.
- Some searches are for the same URL (phonebook by name vs phonebook by netid), and you'll need to define different keywords for each of those if you want both.

### IE
- These opensearch extensions can theoretically work with IE, but
  something isn't working with them. Currently IE is not compatible.

### Other Browsers
- Safari apparently cannot add custom search engines currently (without an extension to add this feature).
- Other browsers may or may not have this feature, try searching "browsername opensearch" for more information.




## Yale Phonebook (by Name)
<a onclick="window.external.AddSearchProvider('https://raw.github.com/triplingual/yale-opensearch-extensions/master/yale-directory-name.xml');" href="#">Add Yale Directory Search By Name</a>

Look up someone in the phonebook, by name

- recommended Chrome keyword: `ph`



## Yale Phonebook (by NetID)
<a onclick="window.external.AddSearchProvider('https://raw.github.com/triplingual/yale-opensearch-extensions/master/yale-directory.xml');" href="#">Add Yale Directory Search By NetID</a>

Look up someone in the phonebook, by netid

- recommended Chrome keyword: `netid`


## Yale ITS Orgchart
<a onclick="window.external.AddSearchProvider('https://raw.github.com/triplingual/yale-opensearch-extensions/master/yale-its-orgchart.xml');" href="#">Add Yale ITS Orgchart Search</a>

Look up someone in the ITS Organization Chart, by name or group

- recommended Chrome keyword: `org`


## Yale ITS Website
<a onclick="window.external.AddSearchProvider('https://raw.github.com/triplingual/yale-opensearch-extensions/master/yale-its-website.xml');" href="#">Add Yale ITS Website Search</a>

Look up something on the ITS Website

- recommended Chrome keyword: `its`


## Service Now Global Search
<a onclick="window.external.AddSearchProvider('https://raw.github.com/triplingual/yale-opensearch-extensions/master/yale-service-now-global.xml');" href="#">Add Yale Service Now Search</a>

You can search just about anything in Service Now using this - the last digits of an incident, a full incident string, a KB article number, words that appear in a KB article, etc


- recommended Chrome keyword: `sn`

NetID searching in Service Now is tricky though, regardless of using a browser search. Service Now can't currently find "all tickets" for a netid using the global search. Sometimes the global search can find some records, but only if the NetID was recorded in a work note or another field. For a reliable search, you have to search in each module separately for `client.netid`.

Frames: This will open a page without the normal Service Now frames. I like this a lot, but I realize many people wouldn't. I haven't found a way to make a browser search open the page with frames in tact.

## Other Yale Opensearch Extensions
These (and the ones above) are all hosted on [GitHub](github.com/triplingual/yale-opensearch-extensions). Trip Kirkpatrick made the majority of these, and I helped with some.

- <a onclick="window.external.AddSearchProvider('https://raw.github.com/triplingual/yale-opensearch-extensions/master/yale-library-eli-scholar.xml');" href="#">Add Yale Library Eli Scholar Search</a>

- <a onclick="window.external.AddSearchProvider('https://raw.github.com/triplingual/yale-opensearch-extensions/master/yale-university-new-orbis.xml');" href="#">Add Yale Orbis Search</a>

- <a onclick="window.external.AddSearchProvider('https://raw.github.com/triplingual/yale-opensearch-extensions/master/yale.xml');" href="#">Add Yale.edu Search</a>

- <a onclick="window.external.AddSearchProvider('https://raw.github.com/triplingual/yale-opensearch-extensions/master/yufind.xml');" href="#">Add YUFind Search</a>
