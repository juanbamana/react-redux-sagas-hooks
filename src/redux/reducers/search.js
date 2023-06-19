import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_SUCCESS, SEARCH_DETAIL_MOVIE_SUCCESS, SEARCH_DETAIL_MOVIE_ERROR, SEARCH_DETAIL_MOVIE_START} from '../../consts/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE_START:
            return { ...state, isSLoading: true };
            break;
        case SEARCH_MOVIE_ERROR:
            return { ...state, isSLoading:false, movieResults:null };
            break;

        case SEARCH_MOVIE_SUCCESS:
            return { ...state, isSLoading:false, movieResults: action.results.data};
            break;
            case SEARCH_DETAIL_MOVIE_START:
            return { ...state, isSLoading: true, movieResult:null };
            break;
        case SEARCH_DETAIL_MOVIE_ERROR:
            return { ...state, isSLoading:false, movieResult:null };
            break;

        case SEARCH_DETAIL_MOVIE_SUCCESS:
            return { ...state, isSLoading:false, movieResult: action.movie.data};
            break;
        default:
            return { ...state };
    }
}