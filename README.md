# Nombre del Proyecto: IMAGE VALIDATOR CONTENT  

## Descripción  

Esta aplicación es un microservicio diseñado para validar imágenes en un entorno de comercio electrónico. Su función principal es verificar si el contenido de las imágenes es apropiado, utilizando inteligencia artificial para detectar contenido no apto. 

## Tecnologías Utilizadas  

- **Express.js**: Framework web para Node.js.  
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.  
- **Cloudinary**: Servicio de gestión y optimización de imágenes.  
- **NSFWJS**: Libreria para la validacion del contenido de la imagen.

## Configuración  

Para ejecutar la aplicación en tu entorno local, asegúrate de tener instalado [Node.js](https://nodejs.org/)

### Variables de Entorno para el backend  

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:  

```env  
PORT=4000  
```

### Ruta api 
-**post**: "http://localhost:4000/api/rest/route/server/upload/image".
-**form-body**: image tipo file