import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import "./TeamCard.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import agent from "./images/avatartest.png";
import medical from "./images/medical.png";
import lead from "./images/leader.png";
import advance from "./images/shield.png";
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import { FilledInput } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '50%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatarCurrent: {
    backgroundColor: '#1282a2',
  },
  avatarComplete: {
    backgroundColor: '#cccccc',
  },
  textCurrent: {
    color: '#1282a2',
  },
  textComplete: {
    color: '#cccccc',
  },
  cardComplete: {
    border: '2px solid #3a3a3a',
    color: 'white',
    backgroundColor: 'rgb(25,25,25) !important',
    minWidth: '48%'
  },
  cardCurrent: {
    color: 'white',
    backgroundColor: 'rgb(25,25,25) !important',
    minWidth: '48%',
    border: '2px solid #1282a2'
  },
  textColor: {
      color: 'white'
  },
  navy: {
     backgroundColor: "#001f54",
     color: 'white' 
  },
  blue: {
     backgroundColor: "#034078",
     color: 'white' 
  },
  teal: {
     backgroundColor: "#1282a2",
     color: 'white' 
  },
  standard: {
     backgroundColor: "rgb(25,25,25)",
     color: 'white' 
  },
  blackBlue: {
     backgroundColor: "#0a1128",
     color: 'white' 
  },
}));

export default function TeamCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [navy, setNavy] = React.useState(false);
  const [blue, setBlue] = React.useState(false);
  const [teal, setTeal] = React.useState(false);
  const [standard, setStandard] = React.useState(false);
  const [blackBlue, setBlackBlue] = React.useState(false);
  const [flip, setFlip] = React.useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const switchActive = () => {
      setActive(!active);
  }
  const switchNavy = () => {
      setNavy(!navy);
      setBlue(false);
      setTeal(false);
      setStandard(false);
      setBlackBlue(false);
  }
  const switchBlue = () => {
      setBlue(!blue);
      setNavy(false);
      setTeal(false);
      setStandard(false);
      setBlackBlue(false);
  }
  const switchTeal = () => {
      setTeal(!teal);
      setBlue(false);
      setNavy(false);
      setStandard(false);
      setBlackBlue(false);
  }
  const switchStandard = () => {
      setStandard(!standard);
      setBlue(false);
      setTeal(false);
      setNavy(false);
      setBlackBlue(false);
  }
  const switchBlackBlue = () => {
      setBlackBlue(!blackBlue);
      setBlue(false);
      setTeal(false);
      setStandard(false);
      setNavy(false);
  }

  return (
    <Card className={(active ? classes.cardCurrent : classes.cardComplete)} id="team-card">
      <CardHeader className={classes.textColor} style={{borderBottom:'1px solid white'}}
        avatar={
          <Avatar aria-label="recipe" className={active ? classes.avatarCurrent : classes.avatarComplete}>&nbsp;
          </Avatar>
        }
        title={props.name}
      />
      <CardContent id="team-card-content">
          {props.members.map(member => (
            <div id="member-list" className={(navy ? classes.navy : (blue ? classes.blue : (teal ? classes.teal : (standard ? classes.standard : (blackBlue ? classes.blackBlue : null)))))}>
              <section className="name-position">
                <img className="member-avatar" src={member.position==="Agent" ? agent : (member.position==="Lead" ? lead : (member.position==="Medic" ? medical : (member.position==="Advance Lead" ? advance : null)))} alt="avatar"/>
                <h4>{`${member.first_name.toUpperCase()} ${member.last_name.toUpperCase()} - ${member.position.toUpperCase()}`}</h4>
              </section>
              <p className="more-info">{member.email}</p>
            </div>
          ))}
      </CardContent>
      <CardActions disableSpacing style={{position:'relative', height:'3.4rem', borderTop:'1px solid white'}}>
        <IconButton onClick={switchActive} aria-label="add to favorites">
            { active ?
            <div className="textBlue"><CheckIcon/></div>
            :
            <div className="textGrey"><MoreHorizIcon/></div>}
        </IconButton>
        <div className="color-choices">
            <button style={{outline:'none'}} onClick={switchStandard} className="color-circle" id="standard"></button>
            <button style={{outline:'none'}} onClick={switchBlackBlue} className="color-circle" id="black-blue"></button>
            <button style={{outline:'none'}} onClick={switchNavy} className="color-circle" id="dark-navy"></button>
            <button style={{outline:'none'}} onClick={switchBlue} className="color-circle" id="dark-blue"></button>
            <button style={{outline:'none'}} onClick={switchTeal} className="color-circle" id="teal"></button>
        </div>
      </CardActions>
    </Card>
  );
}
