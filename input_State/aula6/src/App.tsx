import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState<string>('')
  const receiveName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    console.log(typeof (event.target.value))
  }
  return (
    <div>
      <input type='text' onChange={receiveName}></input>
      <hr></hr>
      Seu nome é:{name}
    </div>
  )
}
export default App