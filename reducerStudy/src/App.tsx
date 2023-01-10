import { useReducer } from "react"
type reducerState = {
   count : number
}
type reducerAction = {
   type:string
}
const initialState  = {count : 0}
//a função reducer sempre vai precisar de dois parametros
//reducer função(valorAtual,ação) 
  const reducer = (state:reducerState,action:reducerAction) =>{
     switch(action.type){
      case 'ADD':
         return {...state,count:state.count+1}
         break
      case 'DEL':
        if(state.count > 0) {
          return {...state,count:state.count-1}
       }
        break
      case 'RESET':
        return initialState
     }
     
     return state
  }  
const App = () => {
  //reducer = pode ser usado para lidar com lista de valores,altera objetos
  //state = informações
  //dispatch = função
  //useReducer(função,valorInicial)
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
     <div className="p-5">
        Contagem:{state.count}
        <br></br>
        <button className="" onClick={()=>{dispatch({type:'ADD'})}}>Adicionar</button>
        <button className="p-3" onClick={()=>{dispatch({type:'DEL'})}}>Deletar</button>
        <button className="p-3" onClick={()=>{dispatch({type:'RESET'})}}>Resetar</button>
     </div>
   )
}

export default App