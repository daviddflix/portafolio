const { Router } = require('express');
const { Activities, Country, actividad } = require('../db');
const { Op } = require('sequelize');
// const Activiadad = require('../models/Activiadad');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




router.get('/countries', async (req, res) => {
    const {name} = req.query
    let found = await Country.findAll({where: {name: {[Op.iLike]: '%' + name + '%'}}})  
  
    if(name){
        try {
           found? res.send(found): res.sendStatus(404)
           
        } catch (error) {
            console.log(error)
        }
    } else{
        try {
            let Total = await Country.findAll()
          res.json(Total)
        } catch (error) {
            console.log(error)
        }
        
    }
   
})

router.get('/countries/:idPais', async (req, res) => {

   const {idPais} = req.params
   try {
    const found = await Country.findByPk(idPais, {include: Activities})
    found? res.json(found) : res.sendStatus(404)

   } catch (error) {
       console.log(error)
   }
  
})

router.post('/activity', async (req, res) => {
    const {nombre, dificultad, duracion, temporada, countries} = req.body
try {
    if(nombre && dificultad && duracion){
        const [activity, created] = await Activities.findOrCreate({
            where: {nombre: nombre},
            defaults: {
                nombre: nombre,
                dificultad: dificultad,
                duracion: duracion,
                // temporada: temporada
            }
            
          });
          await activity.setCountries(countries)
          res.json(activity)
          console.log(created)
    }
    
    
} catch (error) {
    console.log(error)
}

})



module.exports = router
