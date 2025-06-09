# Nombre del Proyecto: IMAGE VALIDATOR CONTENT  

## Descripción  

Este proyecto es un microservicio diseñado para validar imágenes de uso es libre. Su función principal es verificar si el contenido de las imágenes es apropiado, utilizando inteligencia artificial para detectar contenido no apto. 

## Tecnologías Utilizadas  

- **Express.js**: Framework web para Node.js.  
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **CANVAS**: Libreria para el formateo de la imagen
- **NSFWJS**: Libreria para la validacion del contenido de la imagen.

## Instalacion

npm i

## Configuración  
Para ejecutar la aplicación en tu entorno local, asegúrate de tener instalado [Node.js](https://nodejs.org/)

### Variables de Entorno para el backend  

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:  

```env  
PORT=4000  
```

### Ejecucion del proyecto

npm run dev

### Api 
- **ruta-post**: "http://localhost:4000/api/rest/route/server/upload/image".
- **form-body**: "image" tipo file
