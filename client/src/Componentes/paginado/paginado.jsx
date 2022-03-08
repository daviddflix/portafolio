import s from  './paginado.module.css'
export function Paginado({paginado, countriesPerPage, countries}){

    

     const pageNumbers = []
   

     for (let i = 1; i < Math.ceil(countries/countriesPerPage); i++) {
          pageNumbers.push(i)
          
     }

     return(
     
           <ul>
                {
                     pageNumbers && pageNumbers.map(number => {
                         return(
                              <div className={s.container} key={number}>
                              <li className={s.li} >
                              <button className={s.boton} onClick={ () => paginado(number)}>{number}</button>
                            </li>
                              </div>
                             
                         )
                     })
                }
           </ul>
   
     )
}