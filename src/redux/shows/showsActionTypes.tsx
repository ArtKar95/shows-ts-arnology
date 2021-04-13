export enum ShowsActionTypes {
  LOADING = "SHOWES/LOADING",
  FAILURE = "SHOWES/FAILURE",
  GET_SHOWS_SUCCESS = "SHOWES/GET_SHOWES_SUCCESS",
  COLLAPSE = "SHOWES/COLLAPSE",
  STAR_CHANGER = "SHOWES/STAR_CHANGER",
  DELETE_SHOW_SUCCESS = "SHOWES/DELETE_SHOW_SUCCESS",
  GET_SHOW_SUCCESS = "SHOWES/GET_SHOW_SUCCESS",
  DELETE_SHOWS_SUCCESS = "SHOWS/DELETE_SHOWs_SUCCESS",
}

interface ILoading {
  type: ShowsActionTypes.LOADING;
}

interface IFalure {
  type: ShowsActionTypes.FAILURE;
}

interface IGetShowsSuccess {
  type: ShowsActionTypes.GET_SHOWS_SUCCESS;
  payload: Array<any>;
}

type CollapseType = {
  toggleCollapse: string;
  type: string;
};

interface ICollapse {
  type: ShowsActionTypes.COLLAPSE;
  payload: CollapseType;
}

interface IStarChanger {
  type: ShowsActionTypes.STAR_CHANGER;
  payload: string;
}

interface IDeleteShowSuccess {
  type: ShowsActionTypes.DELETE_SHOW_SUCCESS;
  payload: number;
}

interface IGetShowSuccess {
  type: ShowsActionTypes.GET_SHOW_SUCCESS;
  payload: any;
}

interface IDeleteShowsSuccess {
  type: ShowsActionTypes.DELETE_SHOWS_SUCCESS;
  payload: string;
}

export type ShowsTypes =
  | ILoading
  | IFalure
  | IGetShowsSuccess
  | ICollapse
  | IStarChanger
  | IDeleteShowSuccess
  | IGetShowSuccess
  | IDeleteShowsSuccess;


  //1111111111
