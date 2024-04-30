const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // Defino el modelo
    const User = sequelize.define('category', {

      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
         },
      name: {
        type: DataTypes.STRING(50), // Tamaño máximo de 50 caracteres
        allowNull: false,
      },

    });

    
    }