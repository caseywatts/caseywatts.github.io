#!/bin/sh -x

pandoc -o debuggingyourbrain.epub \
-f markdown_github+yaml_metadata_block \
debuggingyourbraincoverepub.txt \
all-chapters.md

pandoc -o debuggingyourbrain.pdf \
-f markdown_github+yaml_metadata_block \
-t latex debuggingyourbraincover.latex \
all-chapters.md