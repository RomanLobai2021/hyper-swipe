import { createRequestTypes, createActionTypes } from "utils/redux";

export const GET_CARDS = createRequestTypes("GET_CARDS");

export const getCards = createActionTypes(GET_CARDS);
