import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonAppBar from './Navbar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItems } from '../store/cartSlice';

function Cartdetails() {
    const dispatch=useDispatch()
    const products=useSelector(state=>state.cart)
     const Remove=(item)=>{
        dispatch(removeItems(item.id))
     }
    return (
        <div>
            <ButtonAppBar/>
            <Grid container spacing={3}>
                {products.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="product image"
                                height="140"
                                image={item.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small" onClick={()=>Remove(item)}>Remove Cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Cartdetails;
