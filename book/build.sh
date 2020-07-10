#!/bin/sh -x

pandoc -o printed/debuggingyourbrain.epub \
-f markdown_github+yaml_metadata_block \
debuggingyourbraincoverepub.txt \
all-chapters.md

pandoc -o printed/debuggingyourbrain.pdf \
-f markdown_github+yaml_metadata_block \
-t latex debuggingyourbraincover.latex \
all-chapters.md