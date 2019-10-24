import reactSvg from './react.svg'
import './App.css'

import React, { PureComponent } from 'react'
const domain = 'http://localhost:3001'

class App extends PureComponent {
  state = {
    teams: [],
    players: []
  }

  componentDidMount() {
    fetch(`${domain}/teams`)
      .then(response => {
        return response.json();
      })
      .then(teams => {
        this.setState({ teams })
      });
    fetch(`${domain}/players`)
      .then(response => {
        return response.json();
      })
      .then(players => {
        this.setState({ players })
      });
  }

  render() {
    const { players } = this.state
    console.log(players)
    return <div className="App">
      {/*
          TODO ejercicio 2
          Debes obtener los players en lugar de los equipos y pintar su nombre.
          Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores
          y una lista con sus nombres.
          ** Los comentarios de los ejercicios no los borres.
        */}
      <h3>Los jugadores:</h3>
      <ul>
        {/*
            TODO ejercicio 3
            Vamos a pasar a darle diseño. Crea el diseño propuesto en el readme con los requerimientos que se necesite.
            Guiate por las imágenes.
           */}
        {players.map(player => <li>{player.name}</li>)}
      </ul>
    </div>
  }
}

export default App
