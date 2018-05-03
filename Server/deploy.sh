#!/bin/bash
git clone https://github.com/alu0100782974/TFGServer.git
cd TFGServer
npm install
docker run -d --name tfg_db -p 27017:27017 -e MONGODB_USERNAME=angel -e MONGODB_PASSWORD=angel -e MONGODB_DBNAME=tfg frodenas/mongodb
sleep 3
node init.js
node server.js
