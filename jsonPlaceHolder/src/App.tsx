import React, { useEffect, useState } from "react";
import { PostItem } from "./components/PostItem";
import { BlogTypesBody } from "./helpers/blog";
import { PostForm } from "./components/PostForm";
const App = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<BlogTypesBody[]>([])
  const getPosts = async () => {
    try {
      setLoading(true)
      let respose = await fetch('https://jsonplaceholder.typicode.com/posts')
      let json = await respose.json()
      setPosts(json)
      setLoading(false)
    }
    catch (e) {
      setPosts([])
      console.log('Erro de requisição', e)
      setLoading(false)
    }
  }
  const sendPost = async (title: string, body: string) => {
    if (title && body) {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        let json = await response.json()
        console.log(json)
        if (json.id) {
          alert('Post Adicionado com sucesso')
        }
      }
      catch (e) {
        console.log(e)
      }
    }
    else {
      alert('Preencha os campos corretamente')
    }
  }
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className="w-full flex  flex-col items-center bg-[#37393E]">
      <PostForm onSubmit={sendPost}></PostForm>
      {loading &&
        <h3>Carregando...</h3>
      }
      {!loading && posts.length > 0 &&
        posts.map((item, index) => {
          return (
            <PostItem data={item} key={index}></PostItem>
          )
        })
      }
      {!loading && posts.length === 0 &&
        <div>Não há posts para exibir</div>
      }
    </div>
  )
}
export default App