import {
  SET_ISLOADING,
  CLEAR_ISLOADING,
  SET_CARDS,
  SET_CURRENTCARD,
  SET_POPUPMESSAGE,
  CLEAR_POPUPMESSAGE,
} from "./actions";

import { combineReducers } from "redux";

const initialState = {
  isLoading: false,
  cards: [],
  currentPic:
    "https://images.unsplash.com/photo-1620573083867-730048a6cb33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODM0MTB8MHwxfHNlYXJjaHwxfHxkdWNrc3xlbnwwfHx8fDE2NTkxOTQ5NDE&ixlib=rb-1.2.1&q=80&w=400",
  popupMessage: "",
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ISLOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_ISLOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };

    case SET_CURRENTCARD:
      return {
        ...state,
        currentPic: action.payload,
      };
    case SET_POPUPMESSAGE:
      return {
        ...state,
        popupMessage: action.payload,
      };
    case CLEAR_POPUPMESSAGE:
      return {
        ...state,
        popupMessage: "",
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  main: mainReducer,
});
