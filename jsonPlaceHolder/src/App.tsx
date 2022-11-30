import React, { useEffect } from "react";
import { useState } from "react";
import { BlogTypesBody } from './helpers/blog'
const App = () => {
  const [posts, setPosts] = useState<BlogTypesBody[]>([])
  const [loading, setLoading] = useState(false)
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
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className="w-full flex  flex-col items-center mt-3">
      {loading &&
        <h3>Carregando...</h3>
      }
      {!loading &&
        posts.map((item) => {
          return (
            <>
              <div key={item.id} className='w-2/5  mt-5'>
                <h2>{item.title}</h2>
                <div>{item.body}</div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}
export default App