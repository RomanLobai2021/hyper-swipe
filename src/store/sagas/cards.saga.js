import { call, put, takeLatest, select, takeEvery } from "redux-saga/effects";
import { CardsApi } from "api/cards.api";
import {
  GET_CARDS,
  getCards,
  SWIPE_CARD,
  swipeCard
} from "store/actions/cards.actions";
import { LIKE } from "constants/cards";

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

function* swipeCardWorker({ payload: { id, dir } }) {
  const liked = new Set(JSON.parse(localStorage.getItem("liked")) || []);
  const disliked = new Set(JSON.parse(localStorage.getItem("disliked")) || []);

  if (dir === LIKE) liked.add(id);
  else disliked.add(id);

  const { cards } = yield select(state => state.cards);
  const filterCards = cards.filter(card => card.id !== id);

  localStorage.setItem("liked", JSON.stringify([...liked]));
  localStorage.setItem("disliked", JSON.stringify([...disliked]));

  yield put(swipeCard.success(filterCards));
}

function* cardsSaga() {
  yield takeLatest(GET_CARDS.REQUEST, getCardsWorker);
  yield takeEvery(SWIPE_CARD.REQUEST, swipeCardWorker);
}

export default cardsSaga;
