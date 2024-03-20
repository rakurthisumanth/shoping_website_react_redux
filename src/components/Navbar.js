import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {  Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function ButtonAppBar() {
    const products=useSelector(state=>state.cart)
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/products'>
            <Typography>
            Products
          </Typography>
            </Link>
         
          </Typography>
          <Link to='/card'>
          <Button color="inherit">MY Bag :{products.length}</Button>
          </Link>
        </Toolbar>
      </AppBar>
  );
}
