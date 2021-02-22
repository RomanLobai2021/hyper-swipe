import { call, put, takeLatest } from "redux-saga/effects";
import { CardsApi } from "api/cards.api";
import { GET_CARDS, getCards } from "store/actions/cards.actions";

function* getCardsWorker() {
  try {
    const liked = new Set(JSON.parse(localStorage.getItem("liked")) || []);
    const disliked = new Set(
      JSON.parse(localStorage.getItem("disliked")) || []
    );

    const { data } = yield call(CardsApi.getCards);
    const cards = data.filter(
      item => ![...liked, ...disliked].includes(item.id)
    );
    yield put(getCards.success(cards));
  } catch (e) {
    yield put(getCards.failure(e.data));
  }
}

function* cardsSaga() {
  yield takeLatest(GET_CARDS.REQUEST, getCardsWorker);
}

export default cardsSaga;
