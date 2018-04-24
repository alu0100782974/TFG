
	DESPLIEGUE:

	instrucciones de docker: 
		-docker run -d --name tfg -p 3001:3001 -p 8181:8181 mongo
		-docker exec -it tfg sh
		(dentro de la mongo shell)
		-mongo
		-copiar init.js y enter
		-levantar server
		-encender clientes
		-conectarse a la maquina desde el movil