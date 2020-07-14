import React  from 'react'
import Shoes from '../shoes.json'
import { Link } from 'react-router-dom'
import bannerImg from '../images/banner.jpg'
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


const Home = () => {
    const classes = useStyles();
    // console.log(Shoes)
    // console.log(Object.keys(Shoes))
    // console.log(Shoes["man"])
    // const item = Shoes["man"].items;
    // console.log(item)
    // console.log(Object.keys(item))
    // console.log(Object.keys(item["ND-WF-0003"]))
    const cate = Object.keys(Shoes);

    return (

        <div className={classes.root}>
          <Grid container spacing={4} style={{marginTop: 40}}>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.paper}>
               <img src={bannerImg} className="bannerImg" alt="banner" />
              </Paper>
            </Grid>
            {cate.map((cat, ind)=>{
              return (<Grid item xs={12} sm={4}>
                 <Link key={ind} to={`/category/${cat}`}>
                <Paper className={`${classes.paper} mycss`}><img src={Shoes[cat].img} alt={cat} className="catImg"/>
              <Typography variant="h4" className="catHead">{Shoes[cat].name}</Typography>               
                </Paper>
                </Link>
              </Grid>)
            })}
                                
          </Grid>
        </div>
      );
}

export default Home;