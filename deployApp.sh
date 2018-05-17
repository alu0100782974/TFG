#!/bin/bash
echo 'Iniciando proceso de despliegue'
echo 'Descargando...'
git clone https://github.com/alu0100782974/TFGMobile.git 
cd TFGMobile
echo 'Instalando dependencias...'
npm install
echo 'Desplegando App en localhost:8100...'
ionic serve
echo 'Despliegue terminado'
