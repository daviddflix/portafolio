const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
 
  sequelize.define('actividad_Turistica', {
    Id: {type: DataTypes.UUID},
    nombre: {type: DataTypes.STRING},
    dificultad: {type: DataTypes.INTEGER, defaultValue: 0, validate: {min:0, max:5}},
    duración: {type: DataTypes.INTEGER},
    temporada: {type: DataTypes.ENUM, values: ["Verano", "Otoño", "Invierno","Primavera"]}
  })
};
