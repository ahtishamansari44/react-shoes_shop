import React, {useContext}  from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, ListItemAvatar, Avatar, ListItem, Paper, Grid, Typography, List, IconButton, ListItemText, ListItemSecondaryAction, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {CartContext} from '../cartContext'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft: 16,
      paddingRight: 16,
      marginTop: 32,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      
    },
    myText: {
        textAlign: 'right',
        paddingRight: 32,
    },
  }));
 

const Cart = () => {
    const classes = useStyles();
    // console.log(Shoes)
    // console.log(Object.keys(Shoes))
    // console.log(Shoes["man"])
    // const item = Shoes["man"].items;
    // console.log(item)
    // console.log(Object.keys(item))
    // console.log(Object.keys(item["ND-WF-0003"]))
    // const cate = Object.keys(Shoes);
    let {cart, deleteCart} = useContext(CartContext)
    let amount = cart.map(item => item.price)
    let subTotal = amount.reduce((acc, item)=>(acc+=item),0)
    let shipping = subTotal ? 200 : 0;
    let total = subTotal ? subTotal+200 : 0;

    return (
        <div className={classes.root}>
          <Grid container spacing={4} style={{marginTop: 40}}>
            <Grid item xs={12} sm={12} md={8}>
              <Paper elevation={3} className={classes.paper}>
              <div className={classes.demo}>
            <List >

              {cart.map((item, ind) => {
                return (
                  <Paper variant="outlined" className={classes.paper}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar alt={item.name} src={item.img} style={{height: 80, width: 80, marginRight: 30}}>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                    <Typography variant="h6">{item.name}</Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography variant="h6">Rs - {item.price}</Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete" onClick={(e)=>{ e.preventDefault(); deleteCart(item.key)}} >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
           </Paper>
                )
              })}

            </List>
          </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Paper elevation={3} className={classes.paper}>
               <Paper variant="outlined" className={classes.paper}>
               <Typography variant="h5">Summary</Typography>
               <hr style={{marginBottom: 10, marginTop: 10}} />
            <List >
            <ListItem>
            <ListItemText>
               <Typography variant="h6">Quantity</Typography>
            </ListItemText>
            <ListItemText>
            <Typography className={classes.myText} variant="body1">{cart.length}</Typography> 
                </ListItemText> 
            </ListItem>
            <ListItem>
            <ListItemText>
               <Typography variant="h6">Order SubTotal</Typography>
            </ListItemText>
            <ListItemText>
            <Typography className={classes.myText} variant="body1">Rs - {subTotal}</Typography> 
                </ListItemText> 
            </ListItem>
            <ListItem>
            <ListItemText>
               <Typography variant="h6">Shipping</Typography>
            </ListItemText>
            <ListItemText>
            <Typography className={classes.myText} variant="body1">Rs - {shipping}</Typography> 
                </ListItemText> 
            </ListItem>
            <ListItem>
            <ListItemText>
               <Typography variant="h6">Total</Typography>
            </ListItemText>
            <ListItemText>
               <Typography className={classes.myText} variant="body1">Rs - {total}</Typography> 
                </ListItemText> 
            </ListItem>
            </List>
              <Button variant="contained" style={{marginTop: 20, marginBottom: 20}} color="secondary">
              <Link to="/order" style={{textDecoration: 'none', color: 'white'}} >Check Out</Link>
              </Button>
            
               </Paper>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
}

export default Cart;