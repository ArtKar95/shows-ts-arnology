import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ShowsActionTypes, ShowsTypes } from "./showsActionTypes";
import { AppStateType } from "../store";

const apiUrl = "http://api.tvmaze.com";
//urish papka ete action creatornery mekic avel en
type ThunkType<T extends Action> = ThunkAction<
  Promise<void> | void,
  AppStateType,
  unknown,
  T
>;

let wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const searchItems = (value: string): ThunkType<ShowsTypes> => {
  return async (dispatch) => {
    try {
      if (value) {
        dispatch({ type: ShowsActionTypes.LOADING });
        const response = await axios.get(`${apiUrl}/search/shows?q=${value}`);
        dispatch({
          type: ShowsActionTypes.GET_SHOWS_SUCCESS,
          payload: response?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: ShowsActionTypes.FAILURE,
        payload: error.response.data.error,
      });
    }
  };
};

export const handleCollapse = (data: any): ThunkType<ShowsTypes> => {
  return async (dispatch) => {
    dispatch({ type: ShowsActionTypes.LOADING });

    await wait(1000);
    dispatch({
      type: ShowsActionTypes.COLLAPSE,
      payload: data,
    });
  };
};

export const starItems = (name: string): ThunkType<ShowsTypes> => {
  return async (dispatch) => {
    dispatch({ type: ShowsActionTypes.LOADING });

    await wait(1000);
    dispatch({
      type: ShowsActionTypes.STAR_CHANGER,
      payload: name,
    });
  };
};

export const removeItem = (id: number): ThunkType<ShowsTypes> => {
  return async (dispatch) => {
    dispatch({ type: ShowsActionTypes.LOADING });

    await wait(1000);
    dispatch({
      type: ShowsActionTypes.DELETE_SHOW_SUCCESS,
      payload: id,
    });
  };
};

export const getShow = (id: number): ThunkType<ShowsTypes> => {
  return async (dispatch) => {
    dispatch({ type: ShowsActionTypes.LOADING });

    const response = await axios.get(`${apiUrl}/shows/${id}`);
    dispatch({
      type: ShowsActionTypes.GET_SHOW_SUCCESS,
      payload: response.data,
    });
  };
};

export const removeItems = (genre: string): ThunkType<ShowsTypes> => {
  return (dispatch) => {
    dispatch({ type: ShowsActionTypes.LOADING });
    dispatch({
      type: ShowsActionTypes.DELETE_SHOWS_SUCCESS,
      payload: genre,
    });
  };
};
