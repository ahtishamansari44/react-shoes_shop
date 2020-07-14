import React  from 'react'
import { makeStyles, Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft: 16,
      paddingRight: 16,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
    },
  }));


const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid container spacing={4} style={{marginTop: 200}}>
              <Grid item xs={12} sm={4}>  
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} className={classes.paper}>
                <Typography variant="h1">404</Typography>               
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
              </Grid>
                                
          </Grid>
        </div>
      );
}

export default NotFound;