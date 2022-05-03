import { SearchBar } from "../SearchBar/searchbar";
import { useContext, useState } from "react";
import { Buscador, Close, ContainerRutas, Link, LinkLogo, Logo, MainContainer, Menu, MobileIcon, Wrapper } from "./styles";
import FilterContext from "../Context/filterContext";
import { FaFilter } from 'react-icons/fa';

export function Nav(){ 


     const { filter, setFilter }= useContext(FilterContext)
     console.log('valor filtr>', filter)
     const [show, setShow] = useState(false)
     


  const showRoutes = () => {
     setShow(!show)
  }




     return(

<MainContainer>
  <Wrapper>

     <LinkLogo to='/'>
     <Logo/>
     </LinkLogo>

<FaFilter onClick={() => setFilter(!filter)}/>
    <Menu open={show} >
    
          <Close onClick={showRoutes}/>

          <ContainerRutas>
               <Link to='/form' exact>
               Create Activity
               </Link>
          </ContainerRutas>
     
          <ContainerRutas>
               <Link to='/home'>
               Home
               </Link>
          </ContainerRutas>

    </Menu>
  
  <Buscador>
     <SearchBar/>
  </Buscador>

  <MobileIcon onClick={showRoutes}/>
  </Wrapper>
 </MainContainer>


     )
}