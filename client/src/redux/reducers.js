import { GET_All, GET_COUNTRY, GET_DETAILS } from "./actions"

const InicialState ={
    paises : [],
    detalle: {}
   
}


 const rootReducer = (state = InicialState, action) => {
     console.log(action)
     if(action.type === GET_COUNTRY){
         return{
             ...state,
             paises: action.payload
         }
     } if(action.type === GET_DETAILS){
         return {
             ...state,
             detalle: action.payload
         }
     } if (action.type === GET_All){
         return{
             ...state,
             paises: action.payload
   
         }
     }
     
     else{
       return  {...state}
     }

}

export default rootReducer