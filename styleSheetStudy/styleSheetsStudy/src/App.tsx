import { useState } from "react";
import Botao from "./components/Botao";
const App = () => {
  const handleClick = () => {

  }
  return (
    <div>
      {/*   <button className="botao" onClick={handleClick}>Dá uma apertadinha aqui no pai</button> */}
      <Botao textButton="Dá uma apertadinha aqui no pai"></Botao>
    </div>
  )
}
export default App
