#!/bin/bash
echo 'Iniciando proceso de despliegue'
echo 'Descargando...'
git clone https://github.com/alu0100782974/TFGServer.git 
cd TFGServer
echo 'Instalando dependencias...'
npm install
echo 'Creando base de datos...' 
docker run -d --name tfg_db -p 27017:27017 -e MONGODB_USERNAME=angel -e MONGODB_PASSWORD=angel -e MONGODB_DBNAME=tfg frodenas/mongodb 
echo 'Cargando datos...'
sleep 3
node init.js 
echo 'Desplegando...'
node server.js
echo 'Despliegue terminado'
