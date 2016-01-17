---
layout: post
title: Bus GPSsing
tagline: National Day of Civic Hacking
tags:
---

## Intro - How the Challenge Happened

### National Day of Civic Hacking & NewHaven.io

The National Day of Civic Hacking ([Hack for Change](https://hackforchange.org/)), was happening this weekend and we decided to put together our own event to contribute: [Code for Connecticut](https://hackforchange.org/events/codeforconnecticut/) ([Meetup Event](http://www.meetup.com/newhavenio/events/183166802/) and [Second Meetup Event]())

### Doug & CT Transit

The city of New Haven came to our event hoping to find an affordable way to track our city's bus lines. Many solutions have been developed over the past few years, but they are all prohibitively expensive. The city of New Haven believed that with a bit of creativity and skill, we could use consumer technology to build something _to improve our city._

This challenge seemed like a perfect fit for our second National Weekend of Civic Hacking event that was already in the works, so as a group we agreed to take it on. We added it as an official challenge to the Hack for Change website. We also had individuals pledge prize money for the teams that made the most progress.

### The Challenge

First, how can we inexpensively put a GPS hardware unit on a bus? Then how can we get that realtime GPS data to people who want to know when their bus is arriving? This will probably involve GTFS data and the Roadify app Connecticut has already purchased.

Doug Hausladen, Transportation Director of New Haven, received approval to pilot a project that puts GPS on one small bus route in New Haven. The [Commuter Connection](http://www.cttransit.com/Uploads_Schedules/nh_CC_sched(6).pdf) is the green bus, the line between the New Haven Green and Union Station. CT Transit preliminarily agreed to install whatever solution we developed as a proof-of concept. They require that the drivers do not need to touch or interact with the unit.

## High-Level Plan

With some research and conversation we decided to break down the problem into functional parts.

1.  Receive GPS Signal
2.  Transmit GPS data to a server, likely in NMEA format
3.  Convert raw GPS data (NMEA) to the GTFS-Realtime format
4.  Publish a GTFS-Realtime feed of the data
5.  Front End / Data Visualization
6.  Pilot this on the **Commuter Connection** bus line.

<img src="{{site.url}}/assets/images/bus_gps_diagram.JPG">

_High-level diagram of the components needed for realtime GPS bus visualization. Light blue numbers are parts we intend to accomplish. The dark blue number is already being accomplished by CT Transit's chosen visualization software (Roadify). Sketched by Casey Watts._

## Data Formats To Know About

### NMEA
GPSs often transmit information by the standard format NMEA (National Marine Electronics Association, their data format). `NMEA` is an open format used by many different industries for anyone that wants to use a GPS device to track something. This is often used for phones and boats and aviation.

The NMEA standard is established and commonly used, and there is plenty of information online. The best information we found was on [these](http://www.gpsinformation.org/dale/nmea.htm) [old](http://aprs.gids.nl/nmea/) [websites](http://gpsd.berlios.de/NMEA.txt).

### GTFS and GTFS-Realtime
`GTFS` (General Transit Feed Specification) is a standard format for describing transit routes, and timings. This is a standard format used by Google Maps and other map applications to display transit information. `GTFS-Realtime` is a separate standard - a way of defining system alerts and GPS vehicle positions associated with GTFS defined routes. For an example, San Francisco's BART offers [both their GTFS and GTFS Realtime feed](http://www.bart.gov/schedules/developers/open.aspx) so that anyone can write their own app to monitor BART's system status. New Haven already uses and shares [GTFS](http://www.cttransit.com/about/developers/gtfsdata/Main.asp) information, but does not have GTFS-Realtime information anywhere because busses don't have GPS yet.

Many frontends exist that can accept GTFS-realtime feeds. Connecticut already uses Roadify for GTFS, and is ready to use GTFS-Realtime if we can provide a feed (more details below).

## Hardware

We need a GPS to identify the current location of a bus and communicate this to a server.

### Hardware Options

There are so many options available online - below is just some of the options we tried. We were hoping for something in NMEA format, and ideally something that could also send a device id so we can identify which bus it is.

*   iPhone

    *   There is an app called [GPS2IP](http://www.capsicumdreams.com/iphone/gps2ip/.) that can stream GPS information from an iPhone in NMEA. This was helpful in our development environment, but not for production use.

*   Android

    *   We tried [Backitude](http://www.gpsies.com/backitude.do?language=en) but it didn't send NMEA data by default.

*   Mobile Browser

    *   Doesn't project in NMEA without work, but we have access to [some GPS information](http://diveintohtml5.info/geolocation.html).

*   Enterprise GPS/Hotspot

    *   We borrowed a [Cradlepoint IBR600](http://cradlepoint.com/products/machine-to-machine-routers#IBR600), and this is very similar to what we would end up putting on the busses themselves. It can transmit NMEA data via a webpage served from its onboard webserver. Like the mobile apps, it can transmit data via cellular network. Verizon sells these devices and cellular network connections for them. In our development environment we just used WiFi.
    *   We also tried a [Sierra Wireless (V4321)](http://www.sierrawireless.com/resources/QtrlyNewsletters/Announcements/EOL_Announcements/PinPointE_EOL.html), donated by New York City MTA. However,  the product has already been end-of-lifed by its vendor and we couldn't even get this device set up for testing. After managing to get the device booted and connected to a Windows computer via USB, it failed to connect to the vendor-provided management software.

### Network Options
Whichever device we go with, it will need to have a cellular connection to get its GPS location data and then transmit it. We can use the local WiFi Network for data transmission for development purposes, but once it's on the bus it will definitely need a cell connection. A large portion of the total cost of this project will likely come from this network subscription. We could probably use any major cell provider in the area, including Verizon and AT&T.

### Take-aways

Using both the Verizon Cradlepoint and an iPhone, we were able to successfully generate a GTFS-Realtime data feed.

Using the Cradlepoint we managed to get the feed connected, but we were not able to test it under movement. The Cradlepoint needs AC power (from the wall), and we didn't have an AC adapter for a vehicle.

Using the iPhone app (GPS2IP) we did manage to determine the traveling speed of the phone. (It turns out Zack can run really fast through the hallways of SeeClickFix :-)!)

As we continue this project, one of our next steps is to test an enterprise device (Cradlepoint) in vehicle movement while communicating over the cell network.


## Server

Once we had a GPS receiver broadcasting its NMEA data (iPhone/Cradlepoint), we read that NMEA data from a server we put up. Our server would connect to the GSP device's internal web server, retrieve the data, and convert the raw NMEA data to GTFS-realtime format.

### NMEA to GTFS-Realtime Conversion
Our [NMEA to GTFS realtime translation code](https://github.com/parejkoj/pygtfs_realtime) is up on GitHub! We used Google's GTFS Realtime and PyNMEA2 to bridge this `NMEA => GTFS Realtime` gap. Now that we have a basic GTFS Realtime feed our next step is to pass that along to a visualization system.

The GTFS-realtime standard allows you to include information like service notices, schedule changes, alert messages, and other data. So what you'll build into your GTFS-realtime data depends on how much information you want to put through the feed. For this project we chose to focus on vehicle location. The additional features can be implemented by including information from other sources and potentially real time calculations.

### Which device's data is this?
NMEA doesn't contain information about which vehicle is sending the signal, so we need a way to determine this. This might be determined by IP address if it is static. The commercial GPS units (like Cradlepoint) could also send a vehicle id along  with the NMEA information, but we'd have to manage a mapping to specific busses on our server.

### Transmit via protocol buffers
GTFS-realtime is communicated as [protocol buffers](https://code.google.com/p/protobuf/), a predefined message format similar to XML or JSON. Protocol buffers are significantly more compact than other forms because it is turned directly into 1's and 0's instead of being passed as text like JSON or XML are.  Commonly used languages (including Java, C, Ruby, and Python), each have a library to convert data representations to and from protocol buffers. Protocol buffers are more effective in this situation because the large volume of GPS data being transmitted is very expensive, and this reduces the cost.

To generate our messages we plug-in our NMEA data.

[The ProtoBuf.js library](https://github.com/dcodeIO/ProtoBuf.js/wiki/ProtoBuf.js-vs-JSON) has a great comparison:

Sample JSON

*   {"type":"ping","time":123456789}

Sample Protocol Buffer

*   <0A 05 08 95 9A EF 3A>

## Frontend/Visualization

We tried spending some time on visualization of our data, but could not get anything functional by the end of the event.


### Roadify
Connecticut currently has a contract with [Roadify](http://www.roadify.com/index.html), which is a commercial solution for providing visualization of GTFS and GTFS-Realtime data. Roadify provides mobile apps and web apps to display information on monitors or other displays. We didn't have a developer license at this hackathon to try out our GTFS-Realtime feed, but we plan to get that from the city.

### OneBusAway
The most promising alternative that we came across for testing purposes was [OneBusAway](https://github.com/OneBusAway). It is an open source platform for sharing GTFS-Realtime data with web and mobile device clients. However, multiple attempts to compile the OneBusAway GitHub project failed. This wasn't our highest priority, since CT has already chosen a commercial vendor (Roadify).

## What We Will Do Next

At our followup [Civic Hack Night Meetup](http://www.meetup.com/newhavenio/events/186330032/), we put together a plan on how to move the project closer to completion.

### Data Gathering

*   Get access to another cradlepoint-like device for testing (or something cheaper from Amazon that only does what we need: positioning)
*   Find a way to test this device under movement in a vehicle
*   Find a way to send bus ID with NMEA data format (which at a glance doesn't seem to support ID)
*   Figure out how to send position data to our NMEA to GTFS translation server

### Data Transforming

*   Find a place to host the NMEA to GTFS translation server and run the server

### Frontend Display

*   Get a developer licensed version of Roadify to work with
*   Question: "How does real time data feed into using Roadify? It feeds into the "Departures" tab, but does it also integrate into directions as well? Or is the directions component strictly based off of Google Maps Transit direction service?"

## Special Thanks

We would like to thank Zack Beatty for organizing the event, Doug Hausladen for bringing us a problem that we could work on for our city, CT Transit for agreeing to work with us on the experiment, all of the participants for their hard work over the course of the day

### Participants
This is an incomplete <li></li>st of participants (we didn't have people sign in like they might have, oops!).

* Zack Beatty
* Joel Colucci
* Bradley Dice
* Nick Gauthier
* Anshul Goel
* Doug Hausladen
* Julie Heffernan
* Kedar Khire
* Jason Kim
* Joe Martin
* Loide Marwanga
* Dennis Merenguelli
* Zach Morek
* Victor Mutai
* John Parejko
* Charles Proctor
* Tucker Severson
* Joseph Tyman 
* Casey Watts
* Gary Wright
* Steven Young
* Matt Zagaja

## More Resources

* NMEA
    * [What Is NMEA](http://gpsd.berlios.de/NMEA.txt)
    * NMEA Parsing Libraries: [pynmea2](https://github.com/Knio/pynmea2) and its predecessor [pynmea](https://code.google.com/p/pynmea/) (Python)
    * [Java Marine API for NMEA](http://www.java2s.com/Open-Source/Java_Free_Code/API/Download_marine_api_Free_Java_Code.htm) (Java)
* GTFS and GTFS-Realtime
    * [What is GTFS-Realtime Tutorial](https://developers.google.com/transit/gtfs-realtime/)
    * Randomly-selected transit GTFS-realtime feed for testing: [BART](http://www.bart.gov/schedules/developers/open.aspx)
    * Validation - [Add your transit data to Google Maps](http://maps.google.com/help/maps/mapcontent/transit/participate.html)
    * GPS to GTFS-Realtime: [gps2gtfs](http://cbick.github.io/gps2gtfs/html/index.html) (Python)
* Protocol Buffers
    * Protocol Buffer Basics: [Python - Protocol Buffers — Google Developers](https://developers.google.com/protocol-buffers/docs/pythontutorial)
    * gtfs-realtime.proto - [Transit — Google Developers](https://developers.google.com/transit/gtfs-realtime/gtfs-realtime-proto)
    * [Google protocol buffers vs json vs XML - Stack Overflow](https://stackoverflow.com/questions/14028293/google-protocol-buffers-vs-json-vs-xml)
    * [5 Reasons to Use Protocol Buffers Instead of JSON For Your Next Service - Code Climate Blog](http://blog.codeclimate.com/blog/2014/06/05/choose-protocol-buffers/)   
