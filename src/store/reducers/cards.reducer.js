import * as CardsActions from "store/actions/cards.actions";

const initialState = {
  loaded: true,
  error: "",
  cards: []
};

export default function CardsReducer(state = initialState, action) {
  switch (action.type) {
    case CardsActions.GET_CARDS.REQUEST:
      return {
        ...state,
        loaded: false
      };

    case CardsActions.GET_CARDS.SUCCESS:
      return {
        ...state,
        loaded: true,
        error: "",
        cards: action.payload
      };

    case CardsActions.GET_CARDS.FAILURE:
      return {
        ...state,
        loaded: true,
        error: action.payload
      };

    default:
      return state;
  }
}
