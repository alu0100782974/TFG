#!/bin/bash
echo 'Iniciando proceso de despliegue'
git clone https://github.com/alu0100782974/TFGWeb.git 
cd TFGWeb
echo 'Instalando dependencias...'
npm install
echo 'Desplegando web en localhost:4200...'
ng serve 
echo 'Fin del paso 2'
echo 'Despliegue terminado'
