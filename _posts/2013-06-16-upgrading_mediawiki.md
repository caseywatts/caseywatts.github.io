---
layout: post
title: Upgrading Mediawiki
tagline: Nobody expects a smooth upgrade
tags:
---

I've just spent quite a bit of time doing an upgrade for the STC MediaWiki instance. This post
might be a little rambly. That reflects the mind of someone doing
intense troubleshooting for hours.

For the most part, their [upgrade guide](http://www.mediawiki.org/wiki/Manual:Upgrading) was wonderful, and thorough, and had well documented some errors.

## ERROR
The error I was stuck on happened when I would run `update.php` to migrate the database, which gave the error:

```
...bach conversion of user_options: PHP Fatal error:  Class 'DOMDocument' not found in /var/www/html/wiki/includes/LocalisationCache.php on line 542
```

When accessing it via the web, I get an "HTTP Error 500 (Internal Server Error)" at every point now that I've upgraded the files. Looking at the log files on the server helped a lot. Apparently, the crippling error was:

```
PHP Fatal error:  Class 'DOMDocument' not found in /var/www/html/wiki/includes/LocalisationCache.php on line 542
```

(Sometimes I also got errors from extensions I didn't intend to have
enabled, from copying over the old LocalSettings.php and forgetting to
toggle them off.)

## Solution maybe?
[MediaWiki's documentation](http://www.mediawiki.org/wiki/Manual:Errors_and_symptoms#Fatal_error:_Class_.27DOMDocument.27_not_found_in_xxxxxxxx.2FPreprocessor_DOM.php_on_line_nnn) documentation shows a similar error and the
fix for it, but no dice.

I can't `sudo yum install php-xml`

Adding the silly line `$wgParserConf['preprocessorClass'] = 'Preprocessor_Hash';` doesn't do
anything.

From running `phpinfo();` on the server it looks like xml is enabled. I don't have access to install the package again.



## Database Crawling
And once it crashed, I had to reload the database or nothing else would work, of course. It took a good 15 minutes each time I had to.

- I could not upgrade 1.18.0 => 1.21.0
- I could not upgrade 1.18.0 => 1.20.0
- I could upgrade 1.18.0 => 1.19.0 => 1.20.0, but not all the way to
  1.21.0

## The Solution!
I don't have one yet. It might be having a more privileged admin install that package
`php-xml`?
