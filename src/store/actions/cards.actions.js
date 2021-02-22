import { createRequestTypes, createActionTypes } from "utils/redux";

export const GET_CARDS = createRequestTypes("GET_CARDS");
export const SWIPE_CARD = createRequestTypes("SWIPE_CARD");

export const getCards = createActionTypes(GET_CARDS);
export const swipeCard = createActionTypes(SWIPE_CARD);
