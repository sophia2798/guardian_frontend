import React from 'react';
import Card from "../../card-components/TeamCards/TeamCard";
import "./Teams.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#111',
    border: '3px solid #cccccc',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px'
  },
}));

function Teams() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [blur, setBlur] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
      setBlur(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setBlur(false);
    };


    return (
        <div className="team-container" style={blur ? {filter:'blur(2px)'} : null}>
            <div className="team-header">
                <h1>TEAMS</h1>
                <button onClick={handleOpen} id="add-team">+</button>
                <form>
                    <input type="text" placeholder="SEARCH TEAMS"/>
                    <button id="team-search-submit"><SearchIcon/></button>
                </form>
            </div>
            <div className="team-cards-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Modal
            aria-labelledby="transition-modal-title"
            style={{outline:0}}
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
                <Fade in={open}>
                <div className={classes.paper} style={{fontFamily:"'Work Sans', sans-serif"}}>
                    <h2 id="transition-modal-title">CREATE A NEW TEAM</h2>
                    <div id="transition-modal-description">
                        <form>
                            <label className="modal-label" htmlFor="team-name">TEAM NAME</label>
                            <input type="text" id="team-name" className="modal-input" placeholder="NAME"/>
                            <input id="create-team-submit" type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default Teams
