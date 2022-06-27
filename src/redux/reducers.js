import {GET_DATA} from './actions'

const InicialState ={
    data: []
}


 const rootReducer = (state = InicialState, action) => {
   
     if(action.type === GET_DATA){
         return{
             ...state,
            data: action.payload
         }
     }  else{
       return  {...state}
     }

}

export default rootReducer