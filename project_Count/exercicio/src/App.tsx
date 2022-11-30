import React from "react";
import { useState } from "react";

const App = () => {
  const [numbers, setNumbers] = useState<number>(0)
  const [name, setName] = useState<string>('')
  const plusNumber = () => {
    setNumbers(numbers + 1)
  }
  const decreaseNumber = () => {
    if (numbers <= 0) {
      alert('Numero não pode ser menor que zero')
    }
    else {
      setNumbers(numbers - 1)
    }
  }
  return (
    <div>
      <p>{numbers}</p>
      <button onClick={plusNumber}>Aumentar</button>
      <button onClick={decreaseNumber}>Diminuir</button>
    </div>
  )
}

export default App