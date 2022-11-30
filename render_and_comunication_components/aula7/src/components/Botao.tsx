import React from "react";
type Props = {
  text: string,
  clickFn: (txt: string) => void
}
const Botao = ({ text, clickFn }: Props) => {
  const handleClickPropArgument = () => {
    return clickFn('Comunicação filho para pai com argumento')
    /* clickFn não retorna nada por isso preciso de outra funçao para retornar clickfn */
  }
  return (          /* executanto outra funcao que executa clickFn por dentro */
    <button onClick={handleClickPropArgument}>{text}</button>
  )
}

export default Botao