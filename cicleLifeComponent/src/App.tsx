
import { useEffect, useState } from "react"

const ElementDiv = () => {
  return (
    <div style={{ backgroundColor: 'blue', width: '100%', padding: 10 }} >
      ELEMENTO
    </div>
  )
}
const App = () => {
  const [nome, setNome] = useState<string>('Álife')  // 1 estagio criação
  const handleClick = () => {
    setNome('Pedro')
  }

  useEffect(() => { // quando o componenete é criado, as minhas states por padrão são executadas
    // caso eu não tenha nada no [], se eu tiver alguma variavel no [] ele vai monitorar as alterações nela é executar uma função, nesse caso o alert('executou')
    alert('Executou!')
  }, [nome]) // quando o nome mudar executa a função alert
  return ( /* 2 estagio rederização e alteração */
    <div className="pai">
      {/*    ciclo de vida(criado na memoria,rederização e alteração,morte) */}
      Nome:{nome}
      <button onClick={handleClick} >clique aqui</button>
    </div>
  )
}
export default App