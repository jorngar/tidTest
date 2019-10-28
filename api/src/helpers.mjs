import {atleticoImages, POSITIONS_STRING} from '../constants/team_constants'


export const getPlayer = (playerId, teams) => {
  let player;
  let team = teams.find(t => {
    player = t.players.find(p => p.id === playerId)
    return player
  })
  if (player && team) {
    return {player, teamId: team.id}
  }

  return false
};

export const getAllPlayersFromTeams = (teams) => {
  let allPlayers = [];
  teams.forEach(singleTeam => {
    singleTeam.players.map(player => {
      allPlayers.push(playerConstructor(player, singleTeam))
    })
  });
  return allPlayers;
};

export const playerConstructor = (player, team) => {
  //Set url property to img
  if (player.url) {
    Object.defineProperty(player, 'img',
      Object.getOwnPropertyDescriptor(player, 'url'));
    delete player['url'];
  }
  else if(team.id === '3' && !player.img){
    Object.defineProperty(player, 'img',
      Object.getOwnPropertyDescriptor(atleticoImages, player.id));
  }
  //Map position id to string
  else if (typeof player.position === "number") {
    player['position'] = POSITIONS_STRING[player.position];
  }
  //Add teamId from parent object
  Object.defineProperty(player, 'teamId',
    Object.getOwnPropertyDescriptor(team, 'id'));
  //Remove non wanted properties
  delete player['price'];
  return player;
}


