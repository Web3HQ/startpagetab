#!/bin/bash
while read line 1; do
  if [ "${line}" = "ping" ]; then
     echo "Sent by external script: ${line}"
     echo "Received: pong"
fi
done
