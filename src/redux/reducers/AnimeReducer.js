import { SET_LIST_LOADER, SET_ANIME_DETAILS_LOADER, FETCH_ANIME, FETCH_ANIME_DETAILS, SET_ANIME_ID, SET_NEWS_LOADER, FETCH_NEWS_BY_ID } from "../ActionTypes";

const initialState = {
    animeList: [],
    isAnimeListLoading: false,
    animeDetails: {},
    isAnimeDetailsLoading: false,
    animeId: null,
    isNewsLoading: false,
    news: {}
}

const animeReducer = (state = initialState, action) => {
    switch(action.type){
    case SET_LIST_LOADER: return {
        ...state,
        isAnimeListLoading: action.payload
    }    
    case FETCH_ANIME: return {
        ...state,
        animeList: action.payload
    };
    case FETCH_ANIME_DETAILS: return {
        ...state,
        animeDetails: action.payload
    };
    case SET_ANIME_DETAILS_LOADER: return {
        ...state,
        isAnimeDetailsLoading: action.payload
    };
    case SET_ANIME_ID: return {
        ...state,
        animeId: action.payload
    }
    case SET_NEWS_LOADER: return {
        ...state,
        isNewsLoading: action.payload
    }
    case FETCH_NEWS_BY_ID: return {
        ...state,
        news: action.payload
    }
    default: return state
    }
}

export default animeReducer;