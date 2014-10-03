---
layout: post
title: Knowledge Management
tagline: software options at Yale
tags:
---


## Knowledge Management Software Options
Once I did a thorough comparison of wiki-like options available, [here's a spreadsheet comparing these options](https://docs.google.com/a/yale.edu/spreadsheet/ccc?key=0AopzqThqXEKfdEZwLTdPTHpBVk1FRGVLRHAybTN1U0E&usp=drive_web#gid=0).  Mediawiki is the most robust, but also the most difficult to set up and maintain (see below). Drupal and Wordpress are other options that are hosted by Yale, but they are not my favorite for knowledge management. 


## Yale ITS Hosting Options
- ITG MediaWiki - Instructional Technology Group (itg@yale.edu) hosts mediawiki instances for Yale people. Their service they don't use CAS login, users have to be added by email address. If you think it would be useful for them to host CAS-login wikis, let them know! They would need to make the CAS Login MediaWiki extension more robust (see below), and they can only do that if there's significant interest (email itg@yale.edu).
- [EliApps Sites](https://sites.google.com/a/yale.edu/) - EliSites (google sites) are a really easy option, but only if members have eliapps accounts or you don't mind adding personal gmail accounts. You can have a sidebar with collabsable menus such that you can organize/nest content.
- [Yale Wordpress](http://commons.yale.edu/) is often used for static sites, and may have a wiki plugin. Its primary use case is more for publishing information more than as a living, constantly-updated knowledge system.
- [Yale Drupal](http://yalesites.yale.edu) is often used for static sites, and may have a wiki plugin. Its primary use case is more for publishing information more than as a living, constantly-updated knowledge system.
- [ITS Confluence](http://isa.its.yale.edu/confluence/) is another wiki-like service on campus. Its specialty is that it can have sub-sites - our one instance of Confluence can have many sites, one or more for each group, with group-specific permissions. However, Confluence is an internal ITS service, I'm not sure it is open to anyone at Yale.

## External Hosting Options
Mediawiki is the software that runs Wikipedia, and it is free and open source! 

Any hosting service that gives you access to install php software on the server can have MediaWiki installed on it. YaleWiki is hosted externally (on nearlyfreespeech.net) and Haven Free Clinic is hosted externally too (on bargainvault.com).

I am sure there are services that will host a mediawiki instance for you too, but I haven't investigated that recently. Some are run by ads, others you can pay for to be ad-free.

## Mediawiki
[YaleWiki](http://yalewiki.org), the STC Wiki (private), and the HAVEN Free Clinic wiki (private) all use Mediawiki. You can set up a Mediawiki instance on your own by following this guide. For YaleWiki (on nearlyfreespeech.net) I did the installation over `ssh`, but Haven Free Clinic (on bargainvault.com) I did it by their GUI (CPanel). Both were relatively straightforward.
http://www.mediawiki.org/wiki/Manual:Installation_guide

Mediawiki has a ton of extensions you could install, you can see the list here
http://www.mediawiki.org/wiki/Category:Extensions_by_category

If you'd like to use the CAS NetID login, here is the extension we use for that. There is a "whitelist" of permitted netids in a text file on the server. Anyone whose netid is on the list would have access, anyone who is not on the list would not have access.
http://www.mediawiki.org/wiki/Extension:CASAuthentication

