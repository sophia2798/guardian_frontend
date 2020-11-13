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
    backgroundColor: '#0a1128',
    minWidth: '48%',
    border: '2px solid #1282a2'
  },
  textColor: {
      color: 'white'
  },
}));

export default function TripCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const switchActive = () => {
      setActive(!active);
  }

  return (
    <Card className={active ? classes.cardCurrent : classes.cardComplete } id="team-card">
      <CardHeader className={classes.textColor}
        avatar={
          <Avatar aria-label="recipe" className={active ? classes.avatarCurrent : classes.avatarComplete}>&nbsp;
          </Avatar>
        }
        title="TEAM ALPHA"
      />
      <CardContent id="team-card-content">
          <div className="member-list">
              <h3>MEMBER 1 - ROLE</h3>
          </div>
          <div className="member-list">
              <h3>MEMBER 2 - ROLE</h3>
          </div>
          <div className="member-list">
              <h3>MEMBER 3 - ROLE</h3>
          </div>
          <div className="member-list">
              <h3>MEMBER 4 - ROLE</h3>
          </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={switchActive} aria-label="add to favorites">
            { active ?
            <div className="textBlue"><CheckIcon/></div>
            :
            <div className="textGrey"><ClearIcon/></div>}
        </IconButton>
      </CardActions>
    </Card>
  );
}
