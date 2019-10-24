import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import {getAllPlayersFromTeams, getPlayer} from './helpers'
import {startLog} from "../config/bunyan.config";
import {atletico, barcelona, madrid, pichichis, teamsMap} from '../constants/team_constants'

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/teams', function (req, res) {
  let madridTemp = {...madrid}
  delete madridTemp.players
  let barsaTemp = {...barcelona}
  delete barsaTemp.players
  let atleticoTemp = {...atletico}
  delete atleticoTemp.players
  res.json([
    madridTemp,
    barsaTemp,
    atleticoTemp
  ])
});

app.get('/players', function (req, res) {
  try {
    res.json(getAllPlayersFromTeams([madrid, barcelona, atletico]))
  }
  catch (e) {
    startLog().error(e);
    res.statusCode(500)
  }
});

app.get('/pichichis', function (req, res) {
  res.json(pichichis)
});

app.post('/transfer', function (req, res) {
  let playerId = String(req.body.playerId)
  let teamId = String(req.body.teamId)

  let team = teamsMap[req.body.teamId]

  if (!team) {
    res.json({error: true, code: 1, message: 'team not found'})
    return
  }

  let playerFound = getPlayer(playerId, [madrid, barcelona, atletico])

  let player = playerFound.player

  if (!player) {
    res.json({error: true, code: 2, message: 'player not found'})
    return
  }

  let teamIdPlayer = playerFound.teamId

  if (teamIdPlayer === teamId) {
    res.json({error: true, code: 3, message: 'the player is into this team'})
    return
  }

  if (player.price > team.money) {
    res.json({error: true, code: 4, message: 'insufficients funds'})
    return
  }

  // TODO ejercicio 8
  // añade el código para cambiar de equipo al jugador
  // restar el precio de la transacción al equipo

  res.json({})
});

app.listen(3001, function () {
  startLog().info(' __                                                  ');
  startLog().info('/\\_\\  __  __     __     ___     ___      __    ____ ');
  startLog().info('\\/\\ \\/\\ \\/\\ \\  /\'_ `\\  / __`\\ /\' _ `\\  /\'__`\\ /\',__\\ ');
  startLog().info(' \\ \\ \\ \\ \\_\\ \\/\\ \\L\\ \\/\\ \\L\\ \\/\\ \\/\\ \\/\\  __//\\__, `\\');
  startLog().info(' _\\ \\ \\ \\____/\\ \\____ \\ \\____/\\ \\_\\ \\_\\ \\____\\/\\____/');
  startLog().info('/\\ \\_\\ \\/___/  \\/___L\\ \\/___/  \\/_/\\/_/\\/____/\\/___/ ');
  startLog().info('\\ \\____/         /\\____/                             ');
  startLog().info(' \\/___/          \\_/__/                              ');
  startLog().info('');
  startLog().info('Jugones API listening on port 3001!');
});
