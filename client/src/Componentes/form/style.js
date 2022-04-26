import styled from 'styled-components'

const colores = {
    primario : 'blue'
}

export const Input = styled.input`
   padding: 10px ;
   outline: none;
   width: 240px;
  
   
   &:focus{
    border:  solid 2px ${colores.primario};
   }
`;

export const Select = styled.select`
    padding: 10px;
    width: 240px;
    border-color: none;

    &:focus{
    border:  solid 1px ${colores.primario};
   }
`;


export const Boton = styled.button`
        border-radius: 5px;
        padding: 13px 35px 13px 35px;
        background-color: #023e8a;
        color: white;

        &:hover{
            background-color: #0F0F0F;
            color: white;
        }
`;

export const Error = styled.p`
   color: red;
   font-weight: 700;
`;


