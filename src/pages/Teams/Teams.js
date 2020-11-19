import React from 'react';
import Card from "../../card-components/TeamCards/TeamCard";
import "./Teams.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SearchIcon from '@material-ui/icons/Search';
import TeamSeed from "../../utils/seedTeam.json";
import API from '../../utils/API';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#111',
    border: '3px solid #404040',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px'
  },
}));

function Teams(props) {
    const classes = useStyles();
    const [teams, setTeams] = React.useState(props.teams);
    const [open, setOpen] = React.useState(false);
    const [blur, setBlur] = React.useState(false);
    const [selectTrip, setSelectTrip] = React.useState("");
    const [member, setMember ] = React.useState({ email: "" })

    const handleOpen = (e) => {
      setOpen(true);
      setBlur(true);
      setSelectTrip(e.target.id);
      console.log("selectTrip State", selectTrip)
    };
  
    const handleClose = () => {
      setOpen(false);
      setBlur(false);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("form submit", selectTrip)
    }
    
    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setMember({
        ...member,
        [name]: value,
        });
    };

    return (
        <div className="team-container" style={blur ? {filter:'blur(2px)'} : null}>
            <div className="team-header">
                <h1>TEAMS</h1>
                <form>
                    <input type="text" placeholder="SEARCH TEAMS"/>
                    <button id="team-search-submit"><SearchIcon style={{color:'rgb(41,41,41)'}}/></button>
                </form>
            </div>
            <div className="team-cards-container">
                {teams.map(team => (
                    <Card
<<<<<<< HEAD
                        handleOpen={handleOpen}
                        tripID={team._id}
=======
                        handleOpen= {handleOpen}
>>>>>>> origin
                        key={team._id}
                        name={team.city.toUpperCase()}
                        members={team.users}
                        start={`${team.start_date.substring(5,7)}/${team.start_date.substring(8,10)}/${team.start_date.substring(0,4)}`}
                        end={`${team.end_date.substring(5,7)}/${team.end_date.substring(8,10)}/${team.end_date.substring(0,4)}`}
                    />
                ))}
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
                    <h2 id="transition-modal-title">ADD A NEW MEMBER</h2>
                    <div id="transition-modal-description">
<<<<<<< HEAD
                        <form onSubmit={handleFormSubmit}>
                            <label className="modal-label" htmlFor="team-name">TEAM NAME</label>
                            <input type="text" id="team-name" className="modal-input" placeholder="NAME"/>
=======
                        <form onSubmit ={handleSubmit}>
                            <label className="modal-label" htmlFor="member-email">Members Email</label>
                            <input type="text" onChange={handleInputChange} id="member-email" className="modal-input" placeholder="EMAIL"/>
>>>>>>> origin
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
