import React, { useEffect } from "react";
import { useState } from "react";
import { Todo, storageElements } from './helpers/todo_List'
const App = () => {
  const [todoContent, setTodoContent] = useState<string>('')
  const [show, setShow] = useState(false)

  const captureText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(event.target.value)
  }
  const todoList = () => {
    Todo(todoContent)
    setShow(true)
  }
  useEffect(() => {
    captureText()
  }, [todoContent])
  return (
    <>
      <div className="box_Todo">
        <input onChange={captureText} type="text" className="inputElement inText" />
        <div className="buttons">
          <input onClick={todoList} type="button" className="inButton inputElement properties show" value='ENVIAR &#10003;' />
          <input type="button" className="inputElement inButton properties" value='EXCLUIR &#10005;' />
          <input type="button" className="inputElement inButton properties" value='GRAVAR &#9851;' />
        </div>
      </div>
      <div className="elementsTodo">
        {show &&
          storageElements.map((item, index) => {
            index++
            return (
              <ul>
                <li key={index}>{index}.{item}</li>
              </ul>
            )

          })
        }
      </div>
    </>
  )

}
export default App