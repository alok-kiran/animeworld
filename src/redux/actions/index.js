import { SET_LIST_LOADER, SET_ANIME_DETAILS_LOADER, FETCH_ANIME, FETCH_ANIME_DETAILS, SET_ANIME_ID, SET_NEWS_LOADER, FETCH_NEWS_BY_ID } from "../ActionTypes";
import { getAnimeDetails, getAnimeNewsById, searchAnime } from "../../api";

export const fetchAnimeList = ()=> {
    return async dispatch => {
        try {
          dispatch({
            type: SET_LIST_LOADER,
            payload: true
          });
          const data = await searchAnime();
          dispatch({
            type: FETCH_ANIME,
            payload: data,
          });
        } catch (e) {
            console.error(e)
        }finally{
        dispatch({
            type: SET_LIST_LOADER,
            payload: false
        });
        }
      };
}

export const getAnimeById = (id)=> {
    return async dispatch => {
        try {
          dispatch({
            type: SET_ANIME_DETAILS_LOADER,
            payload: true
          });
          const data = await getAnimeDetails(id);
          dispatch({
            type: FETCH_ANIME_DETAILS,
            payload: data,
          });
        } catch (e) {
            console.error(e)
        }finally{
        dispatch({
            type: SET_ANIME_DETAILS_LOADER,
            payload: false
        });
        }
      };
}


export const getNews = (id)=> {
    return async dispatch => {
        try {
          dispatch({
            type: SET_NEWS_LOADER,
            payload: true
          });
          const data = await getAnimeNewsById(id);
          dispatch({
            type: FETCH_NEWS_BY_ID,
            payload: data,
          });
        } catch (e) {
            console.error(e)
        }finally{
        dispatch({
            type: SET_NEWS_LOADER,
            payload: false
        });
        }
      };
}


export const setAnimeId = id => {
    return dispatch => {
        dispatch({
            type: SET_ANIME_ID,
            payload: id
        })
    }
}