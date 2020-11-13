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
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import avatar from "./avatartest.png";

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
    border: '2px solid #cccccc',
    color: 'white',
    backgroundColor: 'rgb(25,25,25)',
    minWidth: '48%'
  },
  cardCurrent: {
    color: 'white',
    backgroundColor: 'rgb(25,25,25)',
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
     color: 'black' 
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
      console.log(navy);
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
      <CardHeader className={classes.textColor}
        avatar={
          <Avatar aria-label="recipe" className={active ? classes.avatarCurrent : classes.avatarComplete}>&nbsp;
          </Avatar>
        }
        title={props.name}
      />
      <CardContent id="team-card-content" className={(navy ? classes.navy : (blue ? classes.blue : (teal ? classes.teal : (standard ? classes.standard : (blackBlue ? classes.blackBlue : null)))))}>
          {props.members.map(member => (
            <div className="member-list">
              <img className="member-avatar" src={avatar} alt="avatar"/>
              <h4>{`${member.first_name.toUpperCase()} ${member.last_name.toUpperCase()} - ${member.position.toUpperCase()}`}</h4>
            </div>
          ))}
      </CardContent>
      <CardActions disableSpacing style={{position:'relative'}}>
        <IconButton onClick={switchActive} aria-label="add to favorites">
            { active ?
            <div className="textBlue"><ClearIcon/></div>
            :
            <div className="textGrey"><CheckIcon/></div>}
        </IconButton>
        <div className="color-choices">
            <button onClick={switchStandard} className="color-circle" id="standard"></button>
            <button onClick={switchBlackBlue} className="color-circle" id="black-blue"></button>
            <button onClick={switchNavy} className="color-circle" id="dark-navy"></button>
            <button onClick={switchBlue} className="color-circle" id="dark-blue"></button>
            <button onClick={switchTeal} className="color-circle" id="teal"></button>
        </div>
      </CardActions>
    </Card>
  );
}
