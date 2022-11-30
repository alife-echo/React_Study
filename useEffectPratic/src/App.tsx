import { ChangeEvent, useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [name, setName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [fullName, setFullName] = useState<string>('')
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }
  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  }, [name, lastName])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
      <input style={{ padding: 20 }} type="text" placeholder="Digite seu NOME" value={name} onChange={onChangeName} />
      <input style={{ padding: 20, marginTop: 10 }} type="text" placeholder="Digite seu SOBRENOME" value={lastName} onChange={onChangeLastName} />
      <p> Nome Completo:{fullName}</p>
    </div>
  )
}

export default App