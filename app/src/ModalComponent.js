import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import Fab from "@material-ui/core/es/Fab/Fab";
import Typography from "@material-ui/core/es/Typography/Typography";


function ModalComponent(props) {
  const {open, handleClose} = props;
  return (
    <div style={{maxWidth: 500, maxHeight: '90%'}}>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{overflow: 'auto'}}>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur vel lorem sit amet consectetur.
            Aenean quis imperdiet augue, sed finibus augue. Aenean a augue blandit, varius lectus eu, consectetur arcu.
            Vestibulum non pretium lectus, quis lobortis libero. Cras sagittis arcu non efficitur tempor. Cras sit amet
            dapibus nibh. Nam et tincidunt velit. Cras ullamcorper dolor libero, ut mattis felis varius in. Proin ut
            fringilla enim, nec lobortis sapien. Donec dictum ornare eros ut venenatis. Sed rutrum nulla in lacus
            vestibulum, non porta mauris viverra.
            <br/>
            Quisque blandit ullamcorper molestie. Pellentesque ligula dolor, ultricies sit amet aliquam ut, tristique ut
            diam. Mauris aliquam leo sed nunc molestie, a scelerisque magna consequat. Duis eu enim a eros molestie
            mollis sed fringilla neque. Suspendisse varius aliquet nunc. Nulla et finibus nisl, vel finibus orci. Morbi
            efficitur tristique eros, at feugiat sapien porta et. Nam diam dolor, ultricies a convallis volutpat,
            blandit eget elit. Ut in tincidunt nunc. Sed augue ex, blandit id nisl non, mollis pharetra leo. Cras
            molestie mollis tellus a malesuada. Aenean accumsan neque vel commodo lacinia. Donec malesuada libero
            sapien, at fringilla tellus consectetur vel. Donec eget congue metus, ac vestibulum leo. Phasellus nec
            dictum nisi. Suspendisse et aliquet lorem.
            <br/>
            Suspendisse a ante ipsum. Suspendisse mattis suscipit nulla, quis rhoncus nisl congue vitae. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Fusce rhoncus accumsan posuere.
            Nunc ipsum elit, semper sed vulputate ac, euismod eget eros. Nullam elit erat, tristique eget urna id,
            tincidunt posuere lacus. Vivamus bibendum vulputate tortor congue blandit. Duis fermentum placerat
            facilisis.
          </DialogContentText>
          <Fab variant='outlined'
               style={{fontSize: 18, border: '1px solid black', textTransform: 'none', height: 30}}
               disableRipple
               onClick={handleClose}>
            <Typography style={{fontSize: 10}}>
              Cancelar
            </Typography>
          </Fab>
        </DialogContent>
      </Dialog>
    </div>
  );
}

ModalComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default ModalComponent;