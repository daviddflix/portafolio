const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('activities', {
    nombre: {type: DataTypes.STRING},
    dificultad: {type: DataTypes.INTEGER, defaultValue: 0, validate: {min:0, max:5}},
    duracion: {type: DataTypes.INTEGER},
    // temporada: {type: DataTypes.ENUM(["Verano", "Otoño", "Invierno","Primavera"])}
  })
};
