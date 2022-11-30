import React from "react";
import './Botao.css'
type Props = {
  textButton: string
}
const Botao = ({ textButton }: Props) => {
  return (
    <div className="square" style={{}}>
      <button className="botao">{textButton}</button>
      <p className="legend">Legenda</p>
    </div>
  )
}
export default Botao