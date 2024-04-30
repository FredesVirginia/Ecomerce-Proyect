const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // Defino el modelo
    const User = sequelize.define('product', {

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
      price: {
        type: DataTypes.STRING(50), // Tamaño máximo de 50 caracteres
        allowNull: false,
      },
      stock: {
        type: DataTypes.STRING(100), // Tamaño máximo de 100 caracteres
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT(600), // Tamaño máximo de 100 caracteres
        allowNull: false,
      }, 

      
    });

    
    }