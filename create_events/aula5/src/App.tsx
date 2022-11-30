import React from 'react'
import { useState } from 'react'
const App = () => {
  const [numero, setNumero] = useState(0)
  const [name, setName] = useState('')
  const showName = () => {
    /* alert('Botão Clicado') */
    setName('Álife')
    setNumero(numero + 1)
  }


  return (
    <>
      O número é : {numero}
      Seu nome é : {name}
      <input type="text" name="" id="inText" placeholder='Digite aqui' />
      <button onClick={showName}>Clique aqui</button>
    </>
  )
}

export default App