import React from 'react'
import Header from './components/header'
import Photo from './components/Photo'
import Capture from './components/Capture_Url'


const App = () => {

  return (
    <div>
      <Header title='Bolsonaro leva facada na bunda' />
      <Header subtitle='Candidato a presidencia da republica foi atacado na manha de domingo em passeatas eleitorais' />
      {/* <Photo url='http://pm1.narvii.com/6525/124188607d353af57a218ec5033ece65729c65b5_00.jpg' legend='Edward Kenway' /> */}
      <Photo>
        <figure>
          <img src='http://pm1.narvii.com/6525/124188607d353af57a218ec5033ece65729c65b5_00.jpg'></img>
          <figcaption>Edward Kenway</figcaption>
        </figure>
      </Photo>
      <Capture url='https://economia.awesomeapi.com.br/json/last/USD-BRL' />
    </div>
  )
}
export default App

//prop == atributo == propriedade