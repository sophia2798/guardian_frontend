import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./TripCard.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';


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
}));

export default function TripCard(props) {
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
    <Card className={complete ? classes.cardCurrent : classes.cardComplete } id="root-trip-card">
      <CardHeader className={classes.textColor}
        avatar={
          <Avatar aria-label="recipe" className={complete ? classes.avatarCurrent : classes.avatarComplete}>&nbsp;
          </Avatar>
        }
        title={props.title}
        subheader={`${props.start} - ${props.end}`}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
      />
      <CardActions disableSpacing>
        <IconButton onClick={setComplete} aria-label="add to favorites">
            { complete ?
            <div className="textBlue"><CheckIcon/></div>
            :
            <div className="textGrey"><MoreHorizIcon/></div>}
        </IconButton>
      </CardActions>
    </Card>
  );
}