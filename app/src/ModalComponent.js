import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import Fab from "@material-ui/core/es/Fab/Fab";
import Typography from "@material-ui/core/es/Typography/Typography";


function ModalComponent(props) {
  const {open, handleClose, pichichis, handlePichichis} = props;
  return (
    <div style={{maxWidth: 500, maxHeight: '90%'}}>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{overflow: 'auto'}}>
        <DialogContent>
          <DialogContentText style={{whiteSpace: 'pre-wrap'}}>
            {pichichis}
          </DialogContentText>
          <Fab variant='outlined'
               style={{fontSize: 18, border: '1px solid black', textTransform: 'none', height: 30}}
               disableRipple
               onClick={handleClose}>
            <Typography style={{fontSize: 10}}>
              Cancelar
            </Typography>
          </Fab>
          <Fab variant='outlined'
               style={{fontSize: 18, border: '1px solid black', textTransform: 'none', height: 30, marginLeft:20}}
               disableRipple
               onClick={handlePichichis}>
            <Typography style={{fontSize: 10}}>
              Ordenar por goles
            </Typography>
          </Fab>
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
}

export default ModalComponent;