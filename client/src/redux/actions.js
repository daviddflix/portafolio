const axios = require('axios').default;

export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_DETAILS = 'GET_DETAILS'


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