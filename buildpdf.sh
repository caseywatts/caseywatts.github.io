#!/bin/sh
pandoc -o debuggingyourbrain.pdf -f markdown_github+yaml_metadata_block -t latex debuggingyourbraincover.latex _posts/2018-11-25-debugging-your-brain-1.md _posts/2018-12-16-debugging-your-brain-2.md _posts/2019-12-28-debugging-your-brain-3.md _posts/2019-12-28-debugging-your-brain-4.md _posts/2019-12-28-debugging-your-brain-5.md

# pandoc -o chapter5.pdf -f markdown_github+yaml_metadata_block -t latex debuggingyourbraincover.latex _posts/2019-12-28-debugging-your-brain-5.md