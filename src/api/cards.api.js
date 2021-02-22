import axiosInstance from "./interceptor";

export const CardsApi = {
  getCards: () => axiosInstance.get("/cards")
};
