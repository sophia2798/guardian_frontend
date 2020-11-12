import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import "./TripCard.css";
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
    backgroundColor: '#0a1128',
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

export default function TripCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [complete, setCompleted] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const setComplete = () => {
      setCompleted(!complete);
  }

  return (
    <Card className={complete ? classes.cardCurrent : classes.cardComplete }>
      <CardHeader className={classes.textColor}
        avatar={
          <Avatar aria-label="recipe" className={complete ? classes.avatarCurrent : classes.avatarComplete}>&nbsp;
          </Avatar>
        }
        title="SEATTLE, WA"
        subheader="12/14/2020 - 12/20/2020"
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
        title="Seattle Skyline"
      />
      <CardActions disableSpacing>
        <IconButton onClick={setComplete} aria-label="add to favorites">
            { complete ? <CheckIcon/> : <ClearIcon/> }
        </IconButton>
      </CardActions>
    </Card>
  );
}
