import { CURRENT_CITY, LIST_OFFERS, REVIEWS, GET_CITY } from './types';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { city } from '../mocks/city';

const initialState = {
  currentCity: 'Paris',
  city,
  offers,
  reviews,
};
/* eslint no-console: 0 */

// export default function (state = initialState, action) {
const reducer = (state = initialState, action) => {

  console.log(action.type, 'action.type');
  console.log(action, 'action');
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case CURRENT_CITY:
      console.log(33333);
      console.log(action);
      console.log(action.payload);
      return {
        ...state,
        currentCity: action.payload,
      };
    case LIST_OFFERS:
      return {
        ...state,
        city: action.payload,
      };
    case REVIEWS:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
export { reducer };
