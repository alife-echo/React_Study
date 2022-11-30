import styled from "styled-components";

type ButtonProps = {
  bg: string,
  small?: boolean
}

export const Botao = styled.button<ButtonProps>`
  font-size:${(props) => props.small ? '15px' : '30px'};
  background-color:${(props) => props.bg}
`
type bgContainer = {
  bgContainer: string
}
export const Container = styled.div<bgContainer>`
  max-width:40%;
  margin:auto;
  background-color:${(props) => props.bgContainer};
  color:white;
  padding:20px;
  
  span{
    font-weight:bold;
    font-size:1.5rem;
  }

  .link{
    color:white;
    font-size:1.5rem;
    background-color:green;
    &:hover{
      color:red;
    }
  }
  @media(max-width:800px){
     background-color:green;
     display:flex;
     flex-direction:column;

     span{
      color:white;
     }
  }
`