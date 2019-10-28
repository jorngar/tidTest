import './App.css'
import React, {PureComponent} from 'react'
import {Fab, Grid, Typography} from '@material-ui/core'
import PlayerCard from "./PlayerCard";
import ModalComponent from "./ModalComponent";

const domain = 'http://localhost:3001'

//TODO: reduce class complexity
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      teams: [],
      players: [],
      pichichis: [],
      avatarSize: 280,
      modalOpen: false,
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
    fetch(`${domain}/pichichis`)
      .then(response => {
        return response.json();
      })
      .then(pichichis => {
        this.setState({pichichis})
      });
  }

  handleModal = () => {
    if (this.state.modalOpen === false) {
      this.setState({modalOpen: true})
    }
    else {
      this.setState({modalOpen: false})
    }
  }

  handlePichichi = (pichichis, players) => {
    let pichichiStats = []
    pichichis.map(pichichi => {
      players.forEach(player => {
        if (pichichi.playerId === player.id && pichichi.goals) {
          pichichiStats.push(player.name + ': '+pichichi.goals + '\n')
        }
      })
    })
    return pichichiStats;
  }

  render() {
    const {players, teams, modalOpen, pichichis} = this.state
    return <div className="App">
      <div style={{position: 'absolute', right: '50%', top: '50%'}}>
        <ModalComponent open={modalOpen} handleClose={this.handleModal}
                        pichichis={this.handlePichichi(pichichis, players)}/>
      </div>
      <header className="App-heading App-flex">
        <Fab variant='outlined'
             style={{fontSize: 18, border: '1px solid black', textTransform: 'none', height: 30}}
             disableRipple
             onClick={this.handleModal}>
          <Typography style={{fontSize: 10}}>
            Pichichis
          </Typography>
        </Fab>
      </header>
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