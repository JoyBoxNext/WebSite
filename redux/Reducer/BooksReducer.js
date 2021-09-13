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
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CHEKED:
      return { ...state, chekbox: action.payload };

    case t.CHEKED2:
      return { ...state, chekbox: action.payload };

    //product
    case t.PHONES_DATA:
      return { ...state, phonesdata: action.payload };

    case t.BOOKS_DATA:
      return {
        ...state,
        filterdata: action.payload,
        baraxolkaFilterdata: action.payload2,
      };

    case t.SAVE_PRODUCT:
      return {
        ...state,
        saveProduct: action.payload,
        baraxolkaSaveProduct: action.payload,
      };

    //baraxolka
    case t.BARAXOLKA_DATA:
      return { ...state, baraxolkaData: action.payload };

    case t.BARAXOLKABOOKS_DATA:
      return { ...state, baraxolkaFilterdata: action.payload };

    case t.BARAXOLKASAVE_PRODUCT:
      return { ...state, baraxolkaSaveProduct: action.payload };
    case "A":
      return { ...state, index: action.payload };

    default:
      return state;
  }
};

export default BooksReducer;
