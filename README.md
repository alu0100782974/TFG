# Requisitos para desplegar el server:
* docker quickstart terminal (mi versión es la 18.03)
* node (mi version es la 8.11.1)
* git
* Sistema operativo windows 10

## Instrucciones:
* Abrir docker Quickstart terminal pra levantar el servicio antes de realizar el despliegue
* Seleccionar un directorio de trabajo donde descargar el código
* Abrir una terminal bash y ejecutar el script deployServer.sh
* Abrir una terminal bash y ejecutar el script deployWeb.sh
* Abrir una terminal bash y ejecutar el script deployApp.sh. Los datos por defecto en el login
tanto del servidor como de los puertos son los correctos: localhost, 3001 y 8100.

## Consideraciones:
Para el cliente móvil se dispone tambien de la apk. Basta con descargarla y 
pasarla al móvil. En este caso la url del servidor que hay que introducir en el login
debe coincidir con la IP de la máquina, puesto que se realizará la conexión desde fuera.
Para ello ambos dispositivos deben estar conectados en la misma red.
Es posible que sea necesario desactivar el firewall del pc para que acepte conexiones externas.