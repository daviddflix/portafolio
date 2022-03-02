const { Router } = require('express');
const { Actividad_Turistica, Country, Actividad } = require('../db');
const { Op } = require('sequelize');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// const dataInfo = async () => {
//   const info = await axios.get('https://restcountries.com/v3/all')
 
//   const data = await info.data.map(el => {
//            return { 
//            name: el.name.common,
//            cca3: el.cca3,
//            capital: el.capital,
//            region: el.region,
//            subregion : el.subregion,
//            area: el.area,
//            population: el.population,
//            contiente: el.continents.toString(),
//            flags: el.flags[1],
//        }
//    })
  S
// return data 
// }



router.get('/countries', async (req, res) => {
    const {name} = req.query
    // const info = await dataInfo() //info de la api
    
    // try {
    //     const data = await Country.findAll();// data de la tabla
    //     if(!data.length){
    //         await  Country.bulkCreate(info)
    //       }
    // } catch (error) {
    //     console.log(error)
    // }
  
    if(name){

        try {
  let found = await Country.findAll({where: {name: {[Op.iLike]: '%' + name + '%'}}})  
  res.json(found)
        } catch (error) {
            console.log(error)
        }
    } else{
      res.send(info)
    }
   
})

router.get('/countries/:idPais', async (req, res) => {

   const {idPais} = req.params
   const found = await Country.findByPk(idPais)
   res.send(found)
})



module.exports = router
