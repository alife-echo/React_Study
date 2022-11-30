import React from "react";
import { useState } from "react";
const App = () => {
  /* const [hoverColor, setHoverColor] = useState(false)  // usando valores booleanos
  const [padding, setPadding] = useState(false) */        // usando valores booleanos
  const [hoverColor, setHoverColor] = useState('red')
  const [padding, setPadding] = useState(10)
  const swapColor = () => {
    /* setHoverColor(true) // normal
    setPadding(true)  */  // normal
    /* setHoverColor(!hoverColor) // toggle 
    setPadding(!padding)  */      // toggle

    if (hoverColor == 'blue') {
      setHoverColor('red')
      setPadding(10)
    }
    else {
      setHoverColor('blue')
      setPadding(20)
    }

  }
  return (
    <div>
      {/* <button onClick={swapColor} style={{ backgroundColor: hoverColor ? "blue" : "red", padding: padding ? 20 : 10, transition: '0.2s' }}>Clique aqui</button> */}

      <button onClick={swapColor} style={{ backgroundColor: hoverColor, padding: padding, transition: '0.2s' }}>Clique aqui</button>

    </div>
  )
}
export default App