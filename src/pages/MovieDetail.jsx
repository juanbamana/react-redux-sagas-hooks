import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import { searchDetailMovie } from '../redux/actions/search'
import { MovieResult } from '../components/MovieResults';
import { movieResult } from '../redux/selectors';

export const MovieDetail = () => {

  const { id } = useParams();
  const movie = useSelector(state => movieResult(state))
  const dispatch = useDispatch()
  useEffect(() => {

      dispatch(searchDetailMovie({ id }))
    

  }, [])


  return (
    <Container>

<Typography variant='h3'>{movie && movie.Title}</Typography>
<img src={movie && movie.Poster} alt={movie && movie.Title}/>
<Typography><strong>Actores</strong> {movie && movie.Actors}</Typography>
<Typography><strong>Director</strong> {movie && movie.Director}</Typography>
<Typography><strong>Pais</strong> {movie && movie.Country}</Typography>
<Typography><strong>Clasificacion</strong> {movie && movie.Rated}</Typography>
<Typography><strong>Premios</strong> {movie && movie.Awards}</Typography>
<Typography><strong>Sinopsis</strong> {movie && movie.Plot}</Typography>


    </Container>
  )
}
