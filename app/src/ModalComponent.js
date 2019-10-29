import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import Fab from "@material-ui/core/es/Fab/Fab";
import Typography from "@material-ui/core/es/Typography/Typography";
import Select from "@material-ui/core/es/Select/Select";


function ModalComponent(props) {
  const {open, handleClose, pichichis, handlePichichis, teamList, playersByTeam, reloadApi} = props;
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedTeamNAme, setSelectedTeamName] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [transfer, setTransfer] = useState({teamId: '', playerId: ''})
  const [errorMessage, setErrorMessage] = useState('');

  const domain = 'http://localhost:3001'

  const handleTeamChange = event => {
    setSelectedTeam(event.target.value)
    setSelectedTeamName(event._targetInst.memoizedProps.children)
    setTransfer({...transfer, teamId: event.target.value})
  }

  const handlePlayerChange = event => {
    setSelectedPlayer(event.target.value)
    setTransfer({...transfer, playerId: event.target.value})
  }

  const handleTransfer = () => {
    console.log(transfer)
    fetch(`${domain}/transfer`, {
      method: 'POST',
      body: JSON.stringify(transfer),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

    })
      .then(response => {
        return response.json();
      })
      .then(transfer => {
        console.log(transfer)
        if (transfer.error) {
          setErrorMessage(transfer.message)
        }
        else{
          reloadApi()
        }
      })
  }

  return (
    <div style={{maxWidth: 500, maxHeight: '90%'}}>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{overflow: 'auto'}}
        disableEnforceFocus>
        <DialogContent>
          {pichichis ?
            <DialogContentText style={{whiteSpace: 'pre-wrap'}}>
              {pichichis}
            </DialogContentText> :
            <div>
              <Select
                style={{minWidth: 100, margin: 10}}
                value={selectedTeam}
                onChange={handleTeamChange}>
                {teamList.map(team => {
                  return <option value={team.id}>{team.name}</option>
                })}
              </Select>
              <Select
                style={{minWidth: 100, margin: 10}}
                value={selectedPlayer}
                onChange={handlePlayerChange}>
                {playersByTeam.filter(player => player.teamId !== selectedTeam).map(player => {
                  return <option value={player.id}>{player.name}</option>
                })}
              </Select>
              <br/>
              {selectedTeam !== '' ?
                <Typography style={{fontSize: 30}}>
                  {teamList.map(team => {
                    if (team.name === selectedTeamNAme) {
                      return team.money
                    }
                    else{

                    }
                  })}
                </Typography> : null}
            </div>
          }
          <Fab variant='outlined'
               style={{fontSize: 18, border: '1px solid black', textTransform: 'none', height: 30}}
               disableRipple
               onClick={handleClose}>
            <Typography style={{fontSize: 10}}>
              Cancelar
            </Typography>
          </Fab>
          <Fab variant='outlined'
               style={{fontSize: 18, border: '1px solid black', textTransform: 'none', height: 30}}
               disableRipple
               onClick={handleTransfer}>
            <Typography style={{fontSize: 10}}>
              Aceptar
            </Typography>
          </Fab>
          {errorMessage ?
            <Typography style={{fontSize: 30}}>
              {errorMessage}
            </Typography> : null
          }
          {pichichis ?
            <Fab variant='outlined'
                 style={{fontSize: 18, border: '1px solid black', textTransform: 'none', height: 30, marginLeft: 20}}
                 disableRipple
                 onClick={handlePichichis}>
              <Typography style={{fontSize: 10}}>
                Ordenar por goles
              </Typography>
            </Fab> : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

ModalComponent.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  pichichis: PropTypes.string,
  handlePichichis: PropTypes.func,
  teamList: PropTypes.array,
  playersByTeam: PropTypes.array,
  handleTransfer: PropTypes.func,
  reloadApi: PropTypes.func,
}

export default ModalComponent;