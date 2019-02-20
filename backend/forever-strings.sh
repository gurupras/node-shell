#!/bin/bash
# Get the location of this bash script regardless of where it is invoked from
# https://stackoverflow.com/a/246128/1761555
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

while true
do
  source ${DIR}/strings.sh
  sleep 0.3
done
