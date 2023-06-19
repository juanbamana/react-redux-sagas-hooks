import {put, call, takeLatest} from 'redux-saga/effects'
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_SUCCESS, SEARCH_DETAIL_MOVIE_SUCCESS, SEARCH_DETAIL_MOVIE_ERROR, SEARCH_DETAIL_MOVIE_START} from '../../consts/actionTypes'
import {apiCall} from '../api'


export function* searchMovie({payload}){

try {

    const results = yield call(apiCall, `&s=${payload.movieName}`, null, null, 'GET');
    yield put({type: SEARCH_MOVIE_SUCCESS, results});

} catch (error) {
    yield put({type: SEARCH_MOVIE_ERROR, error})
    
}

}

export function* searchDetailMovie({payload}){

    try {
    
        const movie = yield call(apiCall, `&i=${payload.id}`, null, null, 'GET');
        yield put({type: SEARCH_DETAIL_MOVIE_SUCCESS, movie});
    
    } catch (error) {
        yield put({type: SEARCH_DETAIL_MOVIE_ERROR, error})
        
    }
    
    }
    

export default function* search(){
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
    yield takeLatest(SEARCH_DETAIL_MOVIE_START, searchDetailMovie);

}