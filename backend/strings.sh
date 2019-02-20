#!/bin/bash
# Taken from https://stackoverflow.com/a/38392147/1761555
TXT='the quick brown fox jumped over the lazy dog.'
WORDS=( $TXT )
for WORD in "${WORDS[@]}"; do
    let "i=$RANDOM % 256"
    echo -en "\e[38;5;${i}m$WORD \e[0m";
done;
echo
