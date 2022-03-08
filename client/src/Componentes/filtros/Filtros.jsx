import { useDispatch } from 'react-redux';
import { filterByContinent, filterByPopulation } from '../../redux/actions';
import m from './Filtros.module.css'
 
export function Filtros({handleAz}){

 

    const dispatch = useDispatch()

    const handleContinent = (e) => {
        e.preventDefault();
        dispatch(filterByContinent(e.target.value))
    }

    const handlePopulation = (e) => {
        e.preventDefault();
        dispatch(filterByPopulation(e.target.value))
    }


     return(
      <div className={m.main_container}>
     <div>
     <label>A - Z Filter</label>
      <select onChange={handleAz}>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
      </select>
    </div>
         <div className={m.container}>
         <label>Filter by Activity</label>
      <select >
          <option value=""></option>
          <option value="">Ski</option>
          <option value="">Skateboard</option>
          <option value="">Snowboard</option>
          <option value="">Biking</option>
          <option value="">Football</option>
          <option value="">Rafting</option>
      </select>
             </div>
         <div>
         <label>Filter by Continent</label>
      <select onChange={handleContinent}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
      </select>
             </div>
         <div> 
         <label>Population Filter</label>
      <select onChange={handlePopulation}>
          <option value="All">All</option>
          <option value='1000000'>1 - 1 millon</option>
          <option value="1000001">1 millon - 50 millon</option>
          <option value="50000000">50 millon - 400 millon</option>
          <option value="1000000000">400 millon 0 mas</option>
      </select>
      </div>
      </div>
     )
}