import {  FILTERAZ, FILTER_ACT, FILTER_CONTINENT, FILTER_POPULATION, GET_ACTS, GET_All, GET_COUNTRY, GET_DETAILS } from "./actions"

const InicialState ={
    paises : [],
    detalle: {},
    paises_2 : [],
    acts: [],
    isLoading : false,
    filterIcon : true
}


 const rootReducer = (state = InicialState, action) => {
   
     if(action.type === GET_COUNTRY){
         
         return{
             ...state,
             paises: action.payload
         }
     } if(action.type === GET_DETAILS){
         return {
             ...state,
             detalle: action.payload,
             isLoading: true
         }
     } if (action.type === GET_All){
         return{
             ...state,
             paises_2: action.payload,
             paises: action.payload
   
         }
     } if(action.type === FILTER_CONTINENT){
         const filterContinent = action.payload === "All"? state.paises_2 : state.paises_2.filter(el => el.continente === action.payload)
         return{
             ...state,
             paises: filterContinent
         }
     } if (action.type === FILTER_POPULATION){
        const filterPopulation = action.payload === '1000000'? 
        state.paises_2.filter(el =>  el.population < action.payload): action.payload === '1000001'? 
        state.paises_2.filter(el => (el.population > action.payload && el.population <= '50000000')): action.payload === '50000000'?
        state.paises_2.filter(el => el.population > action.payload && el.population < '400000000'): state.paises_2.filter(el => el.population > action.payload)
            
    

         return{
             ...state,
             paises: action.payload === 'All'? state.paises_2: filterPopulation
         }
     } 
     if(action.type === FILTERAZ){

        const filterAZ = action.payload === 'asc'? state.paises.sort((a,b) => (a.name > b.name ? 1 : -1)): state.paises.sort((a, b) => (a.name > b.name ? -1 : 1))      
         return{
             ...state,
             paises:  filterAZ
         }
     } 
     if(action.type === FILTER_ACT){
         const act = state.paises_2.filter(el => el.activities.length)

        const data = action.payload === "All"? act: act.filter(el =>  {
           for (let i = 0; i < el.activities.length; i++) {
               if(action.payload === el.activities[i].nombre){
                   return el
               }
               
           }
           return null
        } )
        console.log(data)
        
         return{
             ...state,
             paises: data
         }
     }
     if(action.type === GET_ACTS){
    
             return{
                ...state,
                acts: action.payload
             }
     }
     
     else{
       return  {...state}
     }

}

export default rootReducer