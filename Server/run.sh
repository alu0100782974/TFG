#!/bin/bash
cd /
mongod
mongo < /init.js
cd /server
#node server.js &