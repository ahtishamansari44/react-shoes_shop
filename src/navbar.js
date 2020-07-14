import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles, AppBar, Tabs,Tab, IconButton, Badge, Grid, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Shoes from './shoes.json'
import {CartContext} from './cartContext'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

}));

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cate = Object.keys(Shoes);

  let {cart} = useContext(CartContext)

    return (
<div className={classes.root}>
<AppBar position="fixed">
<Grid container spacing={0}>
<Grid item xs={2}>
<Typography style={{textAlign: 'center', marginTop: 9}} variant="h5">Shoes Shop</Typography>
</Grid>
<Grid item xs={8}>
<Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered> 
          <Link className='myLink' to='/'>{ <Tab label="Home" />}</Link>
          {cate.map((cat, ind) => {
                          return (
                              <Link className='myLink' key={ind} to={`/category/${cat}`} >{ <Tab label={Shoes[cat].name} />}</Link>
                          )
                      }
                      )}

        </Tabs>
          </Grid>
          <Grid item xs={2}>
            <Link to="/cart" className="myLink" >
          <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        </Link>
        </Grid>
        </Grid>
       
      </AppBar>
    </div>
    )
}

export default Navbar
