import { CURRENT_CITY, LIST_OFFERS, REVIEWS, GET_CITY } from './types';


export const getListOffers = (places, city) => ({
  type: LIST_OFFERS,
  payload: '',

});
export const getCurrentCity = (payload) => (dispatch) => {
  /* eslint no-console: 0 */
  console.log(222222222);
  console.log(payload);
  dispatch({
    type: CURRENT_CITY,
    payload,
  });
  // return ({
  //   type: CURRENT_CITY,
  //   payload,
  // }
  // );
};

// export const getCurrentCity = (payload) => ({
//   type: CURRENT_CITY,
//   payload,
// });
export const getCity = (payload) => ({
  type: GET_CITY,
  payload,
});
export const getReviews = (payload) => ({
  type: REVIEWS,
  payload,
});
