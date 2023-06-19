import React, { useEffect, useState } from 'react'
import { Container, CircularProgress } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string'

import { searchMovie } from '../redux/actions/search'
import { movieResults, isSLoading } from '../redux/selectors'
import { MovieResults } from '../components/MovieResults';

export const Results = () => {
  let location = useLocation();
  let dispatch = useDispatch();
  const movies = useSelector(state => movieResults(state))
  const isLoading = useSelector(state => isSLoading(state))
  const [isLooked, setIsLooked] = useState(false)


  useEffect(() => {

    const { movieName } = queryString.parse(location.search)
    if (movieName && !isLooked) {

      setIsLooked(true)


      dispatch(searchMovie({ movieName }))

    }

  }, [])

  const rendersMovies = () => {

    if (movies) {
      return movies.map((value, index) => <MovieResults key={index} {...value} />)
    } else if (isLoading) {
      <CircularProgress size={100} color='primary' />
    }
    return <div />
  }

  return (
    <Container>{rendersMovies()}</Container>
  )
}
