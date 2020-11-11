import React from "react"
import { Link } from "gatsby"
import firebase from 'firebase';
import * as firebaseui from 'firebaseui'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Nav from '../components/nav'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Plates(props){

    const classes = useStyles();

    return(
        <>
        <Nav />
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    test
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}