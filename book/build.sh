#!/bin/sh -x

pandoc -s -f markdown --filter pandoc-citeproc --bibliography MyLibrary.json debuggingyourbraincover.latex all-chapters.md \
-t latex -o printed/debuggingyourbrain.pdf

pandoc -s -f markdown --filter pandoc-citeproc --bibliography MyLibrary.json debuggingyourbraincover.latex all-chapters.md \
-o printed/debuggingyourbrain.epub