# Conexiones Pool de PostgreSQL con Node.js

Este repositorio complementa el post [Conexiones Pool de PostgreSQL con Node.js](https://smcodes.com/blog/conexiones-pool-de-postgresql-con-node-js/), donde se explica detalladamente cómo implementar y utilizar un pool de conexiones en PostgreSQL utilizando Node.js.

En este proyecto, encontrarás el código fuente que acompaña al post, lo cual te permitirá seguir los ejemplos y practicar los conceptos explicados en el post.

## Tabla de contenido

- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contacto](#contacto)
- [Licencia](#licencia)

## Requisitos previos

Antes de comenzar con la instalación, asegúrate de tener instalados los siguientes programas en tu máquina:

- **Node.js**: [Descargar e instalar Node.js](https://nodejs.org/)
- **PostgreSQL**: [Descargar e instalar PostgreSQL](https://www.postgresql.org/download/)

## Instalación

1. Clona este repositorio a tu máquina local:

```bash
git clone https://github.com/migueddev/pg-pool-connect-nodejs.git
```
2. Navega al directorio del proyecto:

```bash
cd pg-pool-connect-nodejs
```

3. Instala las dependencias:
```bash
npm install
``` 

## Uso

Para ejecutar el proyecto, asegúrate de que tienes un servidor PostgreSQL en ejecución y que la configuración de la base de datos está correctamente ajustada. 

> Debes cambiar los parámetros por los valores de tu base de datos.

```Javascript
// Instancia una conexión pool de la base de datos
const pool_connect = new DBConnection(
  "postgres", // Nombre de base de datos
  "localhost", // Host de la base de datos
  5432, // Puerto de la base de datos
  "postgres", // Usuario de base de datos
  "password", // Contraseña del usuario de la base de datos
  0, // Mínimo número de conexiones
  2 // Máximo número de conexiones
);
```
Luego puedes ejecutar el proyecto con el siguiente comando:
```bash
node index.js
``` 

## Contacto

Conéctate conmigo en:

- [LinkedIn](https://www.linkedin.com/in/miguel-duran-romero/)
- [GitHub](https://github.com/migueddev)

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.
Consulta el archivo [LICENSE](./LICENSE)
