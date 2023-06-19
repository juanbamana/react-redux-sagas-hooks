import React, { useState } from 'react'
import { Container, Typography, Card, TextField, Grid, Button } from '@mui/material';
import { MovieIcon } from '../Icons';
import './Home.css'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('')


  const handleSearchtext = (e) => {

    setSearchText(e.target.value)
  }

  const cleanSearchText = (e) => {
    setSearchText('')
  }

  const searchField = (e) => {
    navigate(`/results?movieName=${searchText}`)  }

  return (
    <Container className='container'>

      <Card className='cardContainer'>
        <Grid className='tittleGridContainer'>
          <Grid>

            <label className='tittle'>Bienvenido!</label>

          </Grid>
          <Grid>
            <MovieIcon className='icon'/>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder='Buscar...'
          className='textFieldSearch'
          onChange={handleSearchtext}
          variant='filled' >
        </TextField>
        <Grid className='buttonsContainer'>
          <Button variant='contained' color="secondary" onClick={cleanSearchText}>Limpiar</Button>
          <Button className='searchButton' variant='contained' color='primary' onClick={searchField}>Buscar</Button>
        </Grid>

      </Card>

    </Container>
  )
}
