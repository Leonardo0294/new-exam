const reservaCtrl = {};
const bcrypt = require("bcrypt");
const Reserva = require("../models/Reserva");

// Controlador para crear nueva reserva
reservaCtrl.crearUsuario = async (req, res) => {
  const { quienreserva, codigoreserva, fechadevuelo, numerodeboleto } =
    req.body;

  try {
    // Se verifica si la reserva ya existe
    const existeReserva = await Reserva.findOne({
      where: {
        email,
      },
    });

    if (existeReserva) {
      throw {
        // throw siempre debe ejecutarse dentro de un try catch
        status: 400,
        message: "La reserva ya existe",
      };
    }

    const nuevaReserva = new Usuario({
      username,
      email,
      password,
    });

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    nuevaReserva.password = await bcrypt.hash(password, salt);

    // Guardar reserva en la base de datos
    const reservaCreada = await nuevaReserva.save();

    if (!reservaCreada) {
      throw {
        message: "Error al hacer la reserva ",
      };
    }

    return res.status(201).json({
      message: "Reserva creada exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al crear la reserva",
    });
  }
};

reservaCtrl.obtenerReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const reserva = await Reserva.findByPk(id);

    if (!usuario) {
      throw {
        status: 404,
        message: "No se ha encontrado la reserva",
      };
    }

    return res.json(reserva);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message,
    });
  }
};

// Controlador para obtener todas las reservas
reservaCtrl.obtenerReservas = async (req, res) => {
  try {
    const reservas = await reservas.findAll({
      where: {
        estado: true,
      },
    });

    if (!reservas) {
      throw {
        status: 404,
        message: "No se encontraron reservas",
      };
    }

    return res.status(200).json(reservas);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al obtener las reservas",
    });
  }
};

reservaCtrl.actualizarReserva = async (req, res) => {
  const { id } = req.params;

  const { email, username } = req.body;

  try {
    const reservaActualizada = await Reserva.update(
      {
        email,
        username,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!reservaActualizada) {
      throw {
        status: 400,
        message: "No se pudo actualizar la reserva",
      };
    }

    return res.json({
      message: "Reserva actualizada correctamente",
      reservaActualizada,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message:
        error.message || "Error de servidor, contacte al area de sistemas",
    });
  }
};

// Ctrl para eliminar una reserva de forma lógica
reservaCtrl.eliminarReserva = async (req, res) => {
  const { id } = req.params;

  try {
    // Se cambia el estado del registro a false para indicar que la reserva fue eliminada
    const usuarioReserva = Reserva.update(
      {
        estado: false,
      },
      {
        where: {
          id,
          estado: true,
        },
      }
    );

    // Si la BD devuelve false, significa que no eliminó
    if (!reservaEliminada) {
      throw {
        status: 400,
        message: "Error al eliminar usuario",
      };
    }

    // Si pasa la validación
    return res.json({
      message: "Usuario eliminado con éxito",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 5000).json({
      message:
        error.message || "Error de servidor, contacte al área de sistemas",
    });
  }
};

module.exports = reservaCtrl;
