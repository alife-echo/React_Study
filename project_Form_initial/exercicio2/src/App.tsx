import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const save_Name = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const save_LastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }
  const save_Age = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value))
  }
  return (
    <div id="box">
      <label htmlFor="inName">Nome:</label>
      <input type='text' id='inName' onChange={save_Name}></input>
      <label htmlFor="inLastName">Sobrenome:</label>
      <input type='text' id='inLastName' onChange={save_LastName}></input>
      <label htmlFor="inAge">Idade:</label>
      <input type='text' id='inAge' onChange={save_Age}></input>

      <p>Nome: {name}</p>
      <p>Sobrenome: {lastName} </p>
      <p>Idade: {age}</p>
    </div>
  )
}

export default App