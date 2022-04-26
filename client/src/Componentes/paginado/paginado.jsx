import s from  './paginado.module.css'
import Pagination from '@mui/material/Pagination';

export function Paginado({paginado, countriesPerPage, countries, currentPage}){

    

     const pageNumbers = []
     

     for (let i = 1; i < Math.ceil(countries/countriesPerPage); i++) {
          pageNumbers.push(i)
          
     }

     return(

          <nav className={s.container}>
          <Pagination defaultValue={currentPage} count={pageNumbers.length} variant="outlined" onChange={(e, v) => paginado(v)} shape="rounded" color="secondary"/>
          </nav>
     
          //  <ul>
          //       {
          //            pageNumbers && pageNumbers.map(number => {
          //                return(
          //                     <div className={s.container} key={number}>
          //                     <li className={s.li} >
          //                     <button className={s.boton}  onClick={ () => paginado(number)}>{number}</button>
          //                   </li>
          //                     </div>
                             
          //                )
          //            })
          //       }
          //  </ul>
   
     )
}