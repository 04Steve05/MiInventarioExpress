# MiInventarioExpress

**Nombre:** Jefferson Steve Tutillo Acero  
**Materia:** Aplicaciones Web  
**Universidad:** Universidad Politécnica Salesiana  

## Descripción

Aplicación web de gestión de productos con autenticación de usuarios y chat en tiempo real, desarrollada con Node.js, Express, MongoDB y Socket.io.

## Funcionalidades

- Registro y listado de productos con imagen
- Crear, editar y eliminar productos (CRUD)
- Carga de imágenes con validación de tipo y tamaño
- Autenticación de usuarios con login y logout
- Contraseñas encriptadas con bcrypt
- Sesiones de usuario con express-session
- Validación de formularios con express-validator
- Vistas dinámicas con Handlebars
- Chat en tiempo real entre usuarios autenticados con Socket.io
- Diseño responsivo

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas + Mongoose
- Multer
- express-session + bcrypt
- express-validator
- Handlebars
- Socket.io

## Instrucciones de instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/04Steve05/MiInventarioExpress.git
cd MiInventarioExpress
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
MONGODB_URI=
SESSION_SECRET=
PORT=3000
```
.env en el archivo .zip
### 4. Iniciar el servidor

```bash
npm start o npm run dev
```

Abrir el navegador en `http://localhost:3000`

## Usuarios de prueba

| Email | Contraseña |
|-------|------------|
| admin@inventario.com | 1234 |
| usuario@inventario.com | 1234 |
