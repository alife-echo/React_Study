import React from "react";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false)
  const showElementClick = () => {
    if (show == true) {
      setShow(false)
    }
    else {
      setShow(true)
    }
    /* ou */
    /*   setShow(!show) */
  }
  return (
    <div>
      <button onClick={showElementClick}>{show === true ? 'Ocultar' : 'Mostrar'}</button>
      {show === true &&
        <div>
          Bla bla bla ....
        </div>
      }
    </div>
  )
}

export default App;