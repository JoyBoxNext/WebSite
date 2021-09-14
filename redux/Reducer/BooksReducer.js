import * as t from "../Types";

const initialState = {
  chekbox: -1,
  chekbox2: -1,
  index: -1,

  phonesdata: [],
  filterdata: [],
  saveProduct: [],

  baraxolkaData: [],
  baraxolkaFilterdata: [],
  baraxolkaSaveProduct: [],

  rightData: [],
  rightFilter: [],
  rightSideProduct: [],

  homeData: [],
  homeFilter: [],
  homeProduct: [],

  chooseData: [],
  chooseFilter: [],
  chooseProduct: [],

  newsData: [],
  newsFilter: [],
  newsProduct: [],

  notebookData: [],
  notebookFilter: [],
  notebookProduct: [],
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CHEKED:
      return { ...state, chekbox: action.payload };

    case t.CHEKED2:
      return { ...state, chekbox: action.payload };

    case t.BOOKS_DATA:
      return {
        ...state,
        filterdata: action.payload,
        baraxolkaFilterdata: action.payload2,
        rightFilter: action.payload3,
        homeFilter: action.payload4,
        chooseFilter: action.payload5,
        newsFilter: action.payload6,
        notebookFilter: action.payload7,
      };

    case t.SAVE_PRODUCT:
      return {
        ...state,
        saveProduct: action.payload,
        baraxolkaSaveProduct: action.payload2,
        rightSideProduct: action.payload3,
        homeProduct: action.payload4,
        chooseProduct: action.payload5,
        newsProduct: action.payload6,
        notebookProduct: action.payload7,
      };

    //product
    case t.PHONES_DATA:
      return { ...state, phonesdata: action.payload };

    //baraxolka
    case t.BARAXOLKA_DATA:
      return { ...state, baraxolkaData: action.payload };

    //rightdata
    case t.RIGHT_DATA:
      return { ...state, rightData: action.payload };

    //homeData
    case t.HOME_DATA:
      return { ...state, homeData: action.payload };

    //chooseData
    case t.CHOOSE_DATA:
      return { ...state, chooseData: action.payload };

    //news
    case t.NEWS_DATA:
      return { ...state, newsData: action.payload };

    //notebook
    case t.NOTEBOOK_DATA:
      return { ...state, notebookData: action.payload };

    //A
    case "A":
      return { ...state, index: action.payload };

    default:
      return state;
  }
};

export default BooksReducer;
