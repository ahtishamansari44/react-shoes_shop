import React, { useContext } from 'react'
import Shoes from '../shoes.json'
import { useParams } from 'react-router-dom'
import { makeStyles, Paper, Grid, Typography, Button } from '@material-ui/core';
import {CartContext} from '../cartContext'


const useStyles = makeStyles((theme) => ({
 
    root: {
      flexGrow: 1,
      padding: 40,
      marginTop: 40,
    },
    paper: {
      padding: theme.spacing(1),
      height: 500,
    },
    bImg: {
        height: 500,
    },
    pd: {
        marginTop: 12,
        marginBottom: 16,
    }
  }));


const SingleProduct = () => {
    const classes = useStyles();

    let { type, id } = useParams();
    console.log(type);
    console.log(id);
    const prod = Shoes[type].items[id];
    console.log(prod.img)

    let {cart, addCart} = useContext(CartContext)
    
   function handleCart(e){
     e.preventDefault();
      addCart({
        name: prod.name,
        img: prod.img,
        price: prod.price,
        category: type,
        key: Date.now()
      })
    }

    return (
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={5}>
              <Paper elevation={0} className={classes.paper}>
               <img src={prod.img} className={`${classes.bImg} bannerImg`} alt={id} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <Paper elevation={0} className={classes.paper}>
              <Typography variant="h4"  component="h3">{prod.name}</Typography>
              <Typography variant="h5" className={classes.pd} component="h4">Rs - {prod.price}</Typography>
              <Typography variant="body1" className={classes.pd} color="textSecondary" component="p">
                {type}
              </Typography>
              <hr />
              <Typography variant="h6" className={classes.pd} component="h5">Product Detail</Typography>
              <Typography variant="body1" className={classes.pd} color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Typography>
              <hr />
              <Button onClick={handleCart} variant="contained" className={classes.pd} color="secondary">
               Add To Cart
              </Button>
              </Paper>
            </Grid>
 
          </Grid>
        </div>
      );
}

export default SingleProduct;