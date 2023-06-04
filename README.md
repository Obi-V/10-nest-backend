# Backend en nest

## Instalaciones necesarias
Necesario: `MongoDBCompass`( Base de datos no relacional),
`Docker Desktop` (Ejecutar aplicaciones como si fuera una máquina virtual)
y `Postman/insomnia` (Para hacer las pruebas de peticiones al back)


## Paquetes por comando

**Instalar el paquete de nest de manera global**  
```
$ npm i -g @nestjs/cli  
```  

**Crear un nuevo proyecto nest**  

```
$ nest new project-name  

```
## Docker  

En docker vamos a buscar la imagen de **mongo** en la barra de búsqueda y buscamos la **versión 5.0.16**.  
  
  Deberíamos crear el archivo **docker-compose.yml**, configuración para conectar la base de datos mongo, yo no lo he puesto en el git ignore así que debería ya configurado aparecer al descargar el proyecto, pero estaría bien echarle un vistazo (Sin tocar nada porque una tabulación puede arruinarlo todo).  
    
    Para montar el yml usamos el siguiente comando:
```
docker compose up -d

```

Copiar el `.env.template` y renombrarlo a `.env` con tu URL
