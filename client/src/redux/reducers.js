import { FILTERAZ, FILTER_ACT, FILTER_CONTINENT, FILTER_POPULATION, GET_All, GET_COUNTRY, GET_DETAILS } from "./actions"

const InicialState ={
    paises : [],
    detalle: {},
    paises_2 : []
}


 const rootReducer = (state = InicialState, action) => {
     console.log(action)
     if(action.type === GET_COUNTRY){
         return{
             ...state,
             paises: action.payload,
         }
     } if(action.type === GET_DETAILS){
         return {
             ...state,
             detalle: action.payload
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

        const data = action.payload === "All"? act: act.filter(function(el) {
            for (let i = 0; i < el.activities.length; i++) {
                if(el.activities[i].nombre === action.payload){
                    return el
                } 
            }
           
        })
        const filterAct = act.filter(el => {
            return el.activities.filter(el => action.payload === el.nombre)
        })
        console.log('act',data)

         return{
             ...state,
             paises: data
         }
     }
     
     else{
       return  {...state}
     }

}

export default rootReducer