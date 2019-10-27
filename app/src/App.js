import './App.css'
import React, {PureComponent} from 'react'
import {Grid} from '@material-ui/core'
import PlayerCard from "./PlayerCard";

const domain = 'http://localhost:3001'

//TODO: reduce class complexity
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      teams: [],
      players: [],
      avatarSize: 280,
      cardStyle: 'regularCard'
    }
  }

  componentDidMount() {
    fetch(`${domain}/teams`)
      .then(response => {
        return response.json();
      })
      .then(teams => {
        this.setState({teams})
      });
    fetch(`${domain}/players`)
      .then(response => {
        return response.json();
      })
      .then(players => {
        this.setState({players})
      });
  }

  render() {
    const {players, teams} = this.state
    console.log(teams)
    return <div className="App">
      <div className="App-teams App-flex"> {
        /*
                  TODO ejercicio 2
                  Debes obtener los players en lugar de los equipos y pintar su nombre.
                  Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores
                  y una lista con sus nombres.
                  ** Los comentarios de los ejercicios no los borres.
                */
      }
        <h3>Jugadores:</h3>
        <Grid container justify="center" alignItems="center">
          {/*
            TODO ejercicio 3
            Vamos a pasar a darle diseño. Crea el diseño propuesto en el readme con los requerimientos que se necesite.
            Guiate por las imágenes.
           */}
          {players.map(player =>
            //TODO move styles into a separate js file and export this class using withStyles or similar or just to css file
            <Grid item xs={12} sm={6} lg={4}>
              <PlayerCard player={player} teams={teams}/>
            </Grid>)}
        </Grid>
      </div>
    </div>
  }
}

export default App