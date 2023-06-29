//Imports
const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();

// Middlewares
app.use(cors()); // Habilitar CORS para permitir solicitudes desde otros dominios
app.use(express.json()); // Parsear el cuerpo de las solicitudes como JSON

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./routes/reserva.routes"));

// Error 404 - Ruta no encontrada
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Starting the server
const port = process.env.PORT || 4000; // Utilizar el puerto definido en las variables de entorno, o el puerto 3000 por defecto
app.listen(port, () => console.log(`Server running on port ${port}`));

sequelize.authenticate()
  .then(() => {
    console.log("Conexión a base de datos exitosa");
  })
  .catch((error) => console.log("Error al conectar a base de datos", error));

// Routes
app.use("/", require("./routes/reserva.routes"));
