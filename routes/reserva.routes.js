const router = require("express").Router();

const {
  crearReserva,
  obtenerReserva,
  obtenerReservas,
  actualizarReserva,
  eliminarReserva,
} = require("../controllers/reserva.controllers");

// ==========================================
// Rutas para renderizar las vistas de reservas
// ==========================================

router.get("/reservas/", async (req, res) => {
  return res.render("reservas/lista_reservas");
});

router.get("/reservas/nuevo", async (req, res) => {
  return res.render("reservas/nuevo_reservas");
});

router.get("/reservas/editar/:id", async (req, res) => {
  return res.render("reservas/editar_reservas", { id: req.params.id });
});

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Ruta para obtener los datos de todos las reservas
router.get("/api/reservas/", obtenerReservas);

// Ruta para obtener los datos de UN solo reservas
router.get("/api/reservas/:id", obtenerReserva);

// Actualizar datos de un reservas
router.put("/api/reservas/:id", actualizarReserva);

// Nuevo reservas
router.post("/api/reservas/", crearReserva);

// Eliminar reservas
router.delete("/api/reservas/:id", eliminarReserva);

module.exports = router;
