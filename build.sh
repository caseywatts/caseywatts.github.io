#!/bin/sh
sed "s/\/assets/assets/g" _posts/2018-11-25-debugging-your-brain-1.md > _chapters/chapter1.md && \
sed "s/\/assets/assets/g" _posts/2018-12-16-debugging-your-brain-2.md > _chapters/chapter2.md && \
sed "s/\/assets/assets/g" _posts/2019-12-28-debugging-your-brain-3.md > _chapters/chapter3.md && \
sed "s/\/assets/assets/g" _posts/2019-12-28-debugging-your-brain-4.md > _chapters/chapter4.md && \
sed "s/\/assets/assets/g" _posts/2020-03-19-debugging-your-brain-5.md > _chapters/chapter5.md

pandoc -o debuggingyourbrain.epub \
-f markdown_github+yaml_metadata_block \
debuggingyourbraincoverepub.txt \
_chapters/chapter1.md \
_chapters/chapter2.md \
_chapters/chapter3.md \
_chapters/chapter4.md \
_chapters/chapter5.md

pandoc -o debuggingyourbrain.pdf \
-f markdown_github+yaml_metadata_block \
-t latex debuggingyourbraincover.latex \
_chapters/chapter1.md \
_chapters/chapter2.md \
_chapters/chapter3.md \
_chapters/chapter4.md \
_chapters/chapter5.md