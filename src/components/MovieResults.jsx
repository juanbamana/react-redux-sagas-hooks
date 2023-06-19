import React from 'react'
import { Card, Grid, Typography, Button } from '@mui/material'
import './MovieResults.css'

import { useNavigate } from 'react-router-dom';

export const MovieResults = ({Title, Year, Type, imdbID, Poster}) => {

    const navigate = useNavigate();

const handleSeeMovie = () => {

navigate(`/movie/${imdbID}`)  

}
    return (

        <Card className='cardContainer'>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className='poster'/>
                </Grid>
                <Grid item>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color='primary' variant='contained' onClick={handleSeeMovie}>Ver mas</Button>
                </Grid>
            </Grid>

        </Card>
    )
}

