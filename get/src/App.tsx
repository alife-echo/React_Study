import { useEffect, useState } from "react"
import { Movie } from "./types/movie"
const App = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  const loadMovies = async () => {
    setLoading(true)
    fetch('https://api.b7web.com.br/cinem').then((response) => {
      console.log(typeof (response.json))
      return response.json()
    }).then((json) => {
      setMovies(json)
    }).catch((e) => {
      setLoading(false)
      setMovies([])

    })

  }

  /*  const loadMovies = async () => {
     //get
     try {
       setLoading(true) // enquanto a requisição acontece, coloque o loading como true
       let response = await fetch('https://api.b7web.com.br/cinema/')
       let json = await response.json()
       setLoading(false) // depois que a requisição aconteceu, coloque loading false
       setMovies(json)
 
     }
     catch (e) { //se houve um erro de requisição
       alert('Erro! Tente mais tarde')
       setMovies([])
       setLoading(false)
     }
  */

  /*   fetch('https://api.b7web.com.br/cinema/').then((response) => {
      console.log(typeof (response.json))
      return response.json()
    }).then((json) => {
      setMovies(json)
    }) */
  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <div className=" ml-5">

      {loading &&
        <div> Carregando...</div>}
      {!loading && movies.length > 0 &&
        <>
          <div> Total de  Filmes: {movies.length}</div>
          <div></div>
          <div className='grid grid-cols-5'>
            {

              movies.map((item, index) => {

                return (
                  <div key={index} className='hover:scale-110 duration-200 ease-in m-5'>
                    <figure>
                      <img src={item.avatar} className='w-1/1' style={{ width: 200 }} ></img>
                      <figcaption className="text-base  text-black">{item.titulo}</figcaption >
                    </figure>
                  </div>
                )
              })}
          </div>
        </>
      }
      {!loading && movies.length == 0 &&
        <h1>Tente Mais tarde</h1>
      }
    </div>
  )
}
export default App

// https://api.b7web.com.br/cinema