#!/bin/sh -x

pandoc -s -f markdown --filter pandoc-citeproc --bibliography MyLibrary.json debuggingyourbrain.yaml all-chapters.md \
-o printed/debuggingyourbrain.epub --css=epub.css # --epub-embed-font='fonts/*.ttf'

pandoc -s -f markdown --filter pandoc-citeproc --bibliography MyLibrary.json debuggingyourbrain.yaml all-chapters.md \
-t latex -o printed/debuggingyourbrain.pdf
