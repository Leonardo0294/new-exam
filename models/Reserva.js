const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const Reserva = sequelize.define(
  "Reserva",
  {
    quienrealiza: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigoreserva: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechadevuelo: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    numerodeboleto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    tableName: "reservas",
  }
);

(async () => {
  await Reserva.sync();
})();

module.exports = Reserva;
