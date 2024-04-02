const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // Defino el modelo
    const User = sequelize.define('user', {
      name: {
        type: DataTypes.STRING(50), // Tamaño máximo de 50 caracteres
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING(50), // Tamaño máximo de 50 caracteres
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(100), // Tamaño máximo de 100 caracteres
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255), // Tamaño máximo de 255 caracteres
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(15), // Tamaño máximo de 15 caracteres
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATEONLY, // Tipo de dato para fecha sin hora
        allowNull: false,
      },
    });

    
    }