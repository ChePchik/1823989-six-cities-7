import { CURRENT_CITY, LIST_OFFERS } from './types';
// REVIEWS, GET_CITY

export const getListOffers = (places, city) => ({
  type: LIST_OFFERS,
  payload: places.filter((place) => place.city.name === city),
});

export const getCurrentCity = (payload) => ({
  type: CURRENT_CITY,
  payload,
});
// export const getCity = (payload) => ({
//   type: GET_CITY,
//   payload,
// });
// export const getReviews = (payload) => ({
//   type: REVIEWS,
//   payload,
// });
