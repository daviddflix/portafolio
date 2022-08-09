const axios = require('axios').default;

export const GET_DATA = 'GET_DATA'



export function getData (payload){

  
       return async function (dispatch){
          try {                            
               const res = await axios.get(`https://countriesa-d.herokuapp.com/countries?name=${payload}`); 
                 dispatch({ type: GET_DATA, payload: res.data });  
           } catch (error) {
               console.log('error in getData', error)
           }
               
       
    }
    
 }

 


