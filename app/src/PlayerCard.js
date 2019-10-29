import React, {Component} from 'react';
import './App.css'
import {Avatar, Button, Card, Typography} from '@material-ui/core'
import PropTypes from 'prop-types';

const domain = 'http://localhost:3001'

class PlayerCard extends Component {
  constructor() {
    super();
    this.state = {
      avatarSize: 280,
      cardStyle: 'regularCard',
      shieldStyle: 'regularShield'
    }
    this.responsiveStyle = this.responsiveStyle.bind(this);
  }

  componentDidMount() {
    this.responsiveStyle();
    window.addEventListener('resize', this.responsiveStyle)
  }

  responsiveStyle() {
    if (window.innerWidth < 601) {
      this.setState({avatarSize: 60, cardStyle: 'smallCard', shieldStyle: 'smallShield'})
    }
    else {
      this.setState({avatarSize: 280, cardStyle: 'regularCard', shieldStyle: 'regularShield'})
    }
  }

  shieldHandler(player, teams) {
    let shield = '';
    teams.map(team => {
      if (player.teamId === team.id) {
        shield = team.shield.replace('//', '')
      }
    })
    return shield;
  }

  render() {
    const {avatarSize, cardStyle, shieldStyle} = this.state
    const {player, teams, handleClick} = this.props;
    return (
      <Card className={cardStyle}>
        {shieldStyle === 'regularShield' ?
          <img src={'https://' + this.shieldHandler(player, teams)} className={shieldStyle}/> : null}
        <Button
          onClick={handleClick}
          style={{display: 'none'}}
          id="click-avatar"
        />
        <label htmlFor="click-avatar">
          <Avatar alt={player.name} src={player.img ? player.img : null}
                  style={{margin: 5, width: avatarSize, height: avatarSize}}/>
        </label>
        <div style={{flexDirection: 'column'}}>
          <Typography style={{display: 'inline-block', paddingLeft: '2%', minWidth: 300}} noWrap>
            {player.name}
            <Typography style={{fontWeight: 'bold', display: 'inline-block', paddingLeft: '2%'}}>
              {player.position}
            </Typography>
          </Typography>
          <Typography style={{paddingLeft: '2%', fontSize: 14}}>{teams.map(team => {
            if (player.teamId === team.id) {
              return team.name
            }
          })}</Typography>
        </div>
        {shieldStyle === 'smallShield' ?
          <img src={'https://' + this.shieldHandler(player, teams)} className={shieldStyle}/> : null}
      </Card>
    )
  }
}

PlayerCard.propTypes = {
  player: PropTypes.object.isRequired,
  teams: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default PlayerCard;