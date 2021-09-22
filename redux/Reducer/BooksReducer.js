import * as t from "../Types";

const initialState = {
  chekbox: -1,
  chekbox2: -1,
  index: -1,

  phonesdata: [],
  filterdata: [],
  chooseData: [],

  newdata: [],
  newFilter: [],
  savedata: [],
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CHEKED:
      return { ...state, chekbox: action.payload };
    case t.SEND:
      return { ...state, newdata: action.payload };
    case t.CHEKED2:
      return { ...state, chekbox: action.payload };
    case t.SEND_FILTER:
      return {
        ...state,
        newFilter: action.payload,
      };

    case t.SAVE_PRODUCT:
      if (action.payload == "" || action.payload == 0) {
        return { ...state };
      } else {
        return {
          ...state,
          savedata: action.payload,
        };
      }
    case "A":
      return { ...state, index: action.payload };
    case t.CHOOSE_DATA:
      return { ...state, chooseData: action.payload };
    default:
      return state;
  }
};

export default BooksReducer;
