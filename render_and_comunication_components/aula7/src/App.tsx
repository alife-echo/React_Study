import React from "react";
import Botao from "./components/Botao";
const App = () => {
  let contentProp = 'Valor do pai passado para o filho'
  /*  const functionFatherToChild = () => {
     alert('Função comum do filho para o pai')
   } */
  const funcionFatherToChildWithArgument = (txt: string) => {
    alert(txt)
  }
  return (
    <div>
      {/* <Botao text={contentProp} clickFn={functionFatherToChild} />  filho para o pai comum*/}
      <Botao text={contentProp} clickFn={funcionFatherToChildWithArgument} />
    </div>
  )
}

export default App