import { SEARCH_MOVIE_START, SEARCH_DETAIL_MOVIE_START } from "../../consts/actionTypes";

export const searchMovie = payload => ({

type: SEARCH_MOVIE_START,
payload

})

export const searchDetailMovie = payload => ({

    type: SEARCH_DETAIL_MOVIE_START,
    payload
    
    })