#!/bin/bash

# Please run only in the first use: chmod +x run.sh

babel js --out-dir lib
node lib/calculator.js