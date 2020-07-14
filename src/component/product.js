import React, {useContext} from 'react'
import Shoes from '../shoes.json'
import { Link, useParams } from 'react-router-dom'
import { makeStyles, Grid, Typography, Card, CardContent, CardMedia, IconButton, CardActions, CardActionArea } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {CartContext} from '../cartContext'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 40,
    },
    root1: {
        maxWidth: 345,
      },
      media: {
        height: 200,
      },
      myMargin: {
        left: 180,
      },

  }));


const Product = () => {
    const classes = useStyles();

    const { type } = useParams();
    let prod = Shoes[type].items;
    let items = Object.keys(prod)
    
    let {addCart} = useContext(CartContext)

    return (
        <div className={classes.root}>
          <Typography style={{textAlign:'center', marginBottom: 20, marginTop: 20}} variant="h3" component="h3">{Shoes[type].name}</Typography>
          <Grid container spacing={4}>
              { items.map((item, ind)=>{
                return (
              <Grid key={ind} item xs={12} sm={6} md={4} lg={3}>
              <Card>
              <Link className="myLink" to={`/category/${type}/${item}`}>
              <Card>
              <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={prod[item].img}
                    title={item}
                    />
                    <CardContent>
                    <Typography variant="h5" component="h5">
                        {prod[item].name}
                    </Typography>
                    <Typography variant="h6" component="h5">
                        Rs - {prod[item].price}
                    </Typography>
                    </CardContent>
                    </CardActionArea>      
                </Card>                
                </Link>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {Shoes[type].name}
                    </Typography>
                    <IconButton className={classes.myMargin} aria-label="show 4 new mails" color="inherit" onClick={(e)=>{e.preventDefault(); addCart({name: prod[item].name, price: prod[item].price, img: prod[item].img, category: type, key: Date.now()})}} >
                       <AddShoppingCartIcon />
                       </IconButton>
                  </CardActions>
                  </Card>
              </Grid>
              )
              })}
          </Grid>
        </div>
      );
}

export default Product;