import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips(props) {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      {
        props.type==='normal'?
        props.values.map((element)=><ChipNormal values={element}/>)
        :
        props.type==='tag'?
        props.values.map((element)=><ChipTag values={element}/>)
        :
        null
      }
      {/* <Chip label={props.values[0].title}  onClick={props.onClick}/>
      
      <Chip label="Clickable Link" component="a" href={props.values[0].link} clickable />
      
      <Chip label="Deletable primary" onDelete={handleDelete} color="primary" /> */}
      
    </div>
  );
}

export const ChipNormal = (props) => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <>
    <Chip label={props.values.title} onDelete={handleDelete} color="primary" />
    </>
  );
}

export const ChipTag = (props) => {
  return (
    <>
    {
      props.values.disable?
      <Chip label={props.values[0].title}  onClick={props.onClick}/>
      :
      <Chip label="Clickable Link" component="a" href={props.values[0].link} clickable />
    }
    
    </>
  );
}