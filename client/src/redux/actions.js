const axios = require('axios').default;

export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_DETAILS = 'GET_DETAILS'
export const  GET_All = ' GET_All'
export const POST = 'POST'

export function getCountries (title){

    if(title){
       return async function (dispatch){
          try {
               const res = await axios.get(`http://localhost:3001/countries?name=${title}`);
               return dispatch({ type: GET_COUNTRY, payload: res.data });
           } catch (err) {
               return console.error(err);
           }
               
       } 
    }
    
 }

 export function getDetail(idPais){
    return async function (dispatch){
       const data = await fetch(`http://localhost:3001/countries/${idPais}`)
       const info = await data.json()
       return dispatch({ type: GET_DETAILS, payload: info })
    }        
 }

 export function getAll (){
  return async function (dispatch){
         try {
              const res = await axios.get(`http://localhost:3001/countries`);
              return dispatch({ type: GET_All, payload: res.data });
          } catch (err) {
              return console.error(err);
          }
              
      } 
   
   
} 



 export function postAcitvity (nombre, dificultad, duracion, temporada, countries){
   return async function (dispatch){
          try {
               const res = await axios.post(`http://localhost:3001/activity`, {
                  nombre, dificultad, duracion, temporada, countries
               });
                return res
           } catch (err) {
               return console.error(err);
           }
               
       } 
    
    
 } 
 



