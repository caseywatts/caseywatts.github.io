#!/bin/sh -x

while inotifywait -qqre modify all-chapters.md; do
 ./build.sh
done