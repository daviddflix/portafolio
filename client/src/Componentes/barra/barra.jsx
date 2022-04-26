import { SearchBar } from "../SearchBar/searchbar";
import { useState } from "react";
import { Buscador, ContainerRutas, Link, LinkLogo, Logo, MainContainer, Menu, MobileIcon, Wrapper } from "./styles";


export function Nav(){ 


     
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

    
    <Menu open={show} >
    
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