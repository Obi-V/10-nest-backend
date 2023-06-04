# Backend en nest

### Advertencia
A partir de este proyecto la cosa se complica muchísimo y no recomiendo verlo si no tienes ni idea de cruds, backend, JWT y funciones asíncronas.  
  
Por falta de tiempo obviamente no estoy documentando y comentando todo como debería paso a paso y didácticamente.  
  

Solo recomiendo el proyecto para personas más avanzadas y que tengan ganas de trastearlo.  
De hecho solo actualmente solo tiene dos enpoints que funcionan, una actividad interesante sería ver su funcionamiento y que completases los demás. Puede ser un reto pero no imposible :D

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
## Variables de Entorno
Debes copiar el `.env.template` y renombrarlo a `.env` con tu URL, el .env original está en git ignore por lo que no podrás descargarlo, pero en este caso he dejado la misma URL porque supuestamente vamos a usar la misma con el mismo puerto (27017), si quieres cambiar algo deberías cambiar la URL del `.env`.  
  
Una vez que ya lo tengamos todo ya podemos usar el backend con el comando:  
```
npm run start:dev
```

## Documentación
Dejo algunos enlaces de documentación que nos pueden ayudar:  

**Documentación oficial de nestjs**
```
https://docs.nestjs.com/
```
**Página de atajos del curso que estoy siguiendo**
```
https://devtalles.com/files/nest-cheatsheet.pdf
```

**Podeis ver también la página del profesor del curso y encontrar otros cursos que podrían resultar interesantes**
```
https://cursos.devtalles.com/
```