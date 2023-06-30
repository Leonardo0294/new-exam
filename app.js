//Imports
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const port = process.env.PORT || 3500; // Utilizar el puerto definido en las variables de entorno, o el puerto 3000 por defecto
const router = require("express").Router();
const { sequelize } = require("./database");

const app = express();


// Middlewares
app.use(cors()); // Habilitar CORS para permitir solicitudes desde otros dominios
app.use(express.json()); // Parsear el cuerpo de las solicitudes como JSON

app.use(express.static(path.join(__dirname, "public")));

// Configuración de rutas
app.use(require("./routes/reserva.routes"));
app.use(require("./routes/usuario.routes"));
app.use(require("./routes/index.routes"));

// Error 404 - Ruta no encontrada
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Configuración de motor de plantillas EJS
app.set('view engine', 'ejs');

// Starting the server

//Conexion a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a base de datos exitosa");
  })
  .catch((error) => console.log("Error al conectar a base de datos", error));

// 404 - Not found
app.use((req, res, next) => {
    res.write(`<div>
        <h1>404 - Ruta no encontrada</h1>
        <hr>
        <p>La pagina que intentas buscar no existe</p>
        <p>Redireccionando a la página de inicio...</p>
        <script>
        (
          () => setTimeout(() => {
            window.location.href='http://localhost:${port}/tareas';
           }, 3000)           
        )();
        </script>
    </h1>`)
});


// Servidor en escucha de peticiones
app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));