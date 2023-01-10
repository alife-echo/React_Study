import React, { FormEventHandler, MouseEventHandler, useState } from "react"
import imgCheck from '../icons/check.png'
import imgDelete from '../icons/delete.png'
export const Form = () => {
   const [task,setTask] = useState('')
   const [item,setItem] = useState<any[]>([])
   const getValue = (event:React.ChangeEvent<HTMLInputElement>) => {
       setTask(event.target.value)
   }
   const sendTask = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() //evitar refresh da pagina ao envio do formulario
        if(!task){ // prevenção para que o usuario mande com o campo vazio
         alert('Insira uma tarefa')
         return 
        }
        setItem([...item,{id:Math.random(),task,done:false}]) // coloca no item uma copia dele mesmo é a task
        setTask('') // limpa o campo apos o envio
      
   }
     const deleteItem = (id:number) => {
         setItem(item.filter(t=> t.id !== id)) //coloco no array os ids que não são iguais ao clicado
   }  
   console.log(item)

   return ( 
      <div className="flex align-middle flex-col">
         <form onSubmit={sendTask}>
          <input 
            type='text'  
            className="mb-5  text-xl outline-none" 
            placeholder="Insira sua Tarefa"
            onChange={getValue}
            value={task}
          ></input>
          <button className=" ml-1" type="submit"><img src={imgCheck} alt = 'imagem checada'/></button>
         </form>
         <ul>
             {item.map((item,index)=> {
                 return (
                 
                     <div className="flex justify-between" key={index}>      
                        <li className="text-lg hover:line-through cursor-pointer" value={item.id} onClick={()=>{deleteItem(item.id)}}>{item.task}</li>
                        <button className=" cursor-pointer" value={item.id} onClick={()=>{deleteItem(item.id)}}><img src={imgDelete} alt='imagem delete'></img></button>
                     </div>
               
                 )
             })}
         </ul>
      </div>
   )    
}