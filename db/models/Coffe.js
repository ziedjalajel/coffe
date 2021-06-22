module.exports = (sequelize, DataTypes) =>
  sequelize.define("Coffe", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 3,
      validate: {
        min: 2,
        max: 10,
      },
    },
  });
