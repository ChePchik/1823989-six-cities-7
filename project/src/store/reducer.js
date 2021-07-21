import { CURRENT_CITY, LIST_OFFERS } from './types';
// REVIEWS, GET_CITY
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { city } from '../mocks/city';

const initialState = {
  currentCity: 'Paris',
  city,
  offers,
  offersSelect: offers.filter((place) => place.city.name === 'Paris'),
  reviews,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case LIST_OFFERS:
      return {
        ...state,
        offersSelect: action.payload,
      };
    // case GET_CITY:
    //   return {
    //     ...state,
    //     currentCity: action.payload,
    //   };
    // case REVIEWS:
    //   return {
    //     ...state,
    //     city: action.payload,
    //   };
    default:
      return state;
  }
}
