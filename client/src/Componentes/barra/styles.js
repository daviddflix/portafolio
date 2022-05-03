import styled from 'styled-components'
import { BiWorld} from 'react-icons/bi'
import { NavLink } from "react-router-dom";
import { FaList} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

export const  MainContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: darkslategrey;
    
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  display: inline-flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
        width: 100%;
        height: 100%;
        max-width: 1300px;
        display: flex;
        margin: auto;
        justify-content: space-around;
        align-items: center;
    }

`;

export const LinkLogo = styled(NavLink)`
    
   
    @media screen and (max-width: 600px) {
       display: block;
       
}
`;

export const Logo = styled(BiWorld)`
      
    width: 40px;
    height: 40px;
    color: green;

    &:hover{
        color: #29bf12;
    }
    
`;

export const Close = styled(AiFillCloseCircle)`
      
  display: none;

  @media screen and (max-width: 600px) {
       display: block;
       width: 30px;
       height: 30px;
       color: red;
       position: absolute;
       top: 10px;
       right: 10px;
}
    
`;


export const Menu = styled.ul`

display: flex;
list-style: none;

   @media screen and (max-width: 600px){
       position: absolute;
       top: 44px;
       /* border: 2px solid black; */
       width: 100%;
       height: 90vh;
       z-index: 1;
       left: ${({open}) => open? "0" : "-100%"} ;
       transition: 0.5s all ease;
       display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        flex-direction: column;
        background-color: #14213d;
    
   }
`;


export const ContainerRutas = styled.li`
  
 

  @media screen and (max-width:600px){
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 50px;
     
    }
`;

export const Link = styled(NavLink)`
    
    transition: 0.5s all ease;
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    height: 100%;
    padding: 10px;
    margin: 1rem;
    border-radius: 5px;
  
    &:hover{
        transition: 0.5s all ease;
        background-color: #29bf12;
        color: black;
    }

    @media screen and (max-width:600px){
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        flex-direction: column;
        color: #fff;
        border-radius: 5px;
        background-color: black;
      
       
    }


`;

export const Buscador = styled.div`
  position: relative;
  left: 1rem ;

  @media screen and (max-width:600px){
    position: relative;
    left: 0 ;

       
    }

`;


export  const MobileIcon = styled(FaList)`

    display: none;
    width: 20px;
    height: 20px;
    z-index: 2;


    @media screen and (max-width: 600px) {
        display: block;
        position: relative;
        right: 1.2rem;
}

@media screen and (max-width: 450px) {
        display: block;
        position: relative;
        right: .9rem;
}

&:active{
        background-color: black;
        color: #fff;
        border-radius: 5px;
    }
`;


export const FilterIcon = styled.div`
    display: none;

    @media screen and (max-width: 600px) {
        display: inline;
        position: relative;
        right: 7.2rem;
        bottom: 2.3rem
}

&:active{
       
        background-color: black;
        color: #fff;
        border-radius: 5px;
        
    }
 
`;