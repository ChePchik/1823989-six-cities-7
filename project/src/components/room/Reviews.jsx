import React from 'react';
import PropTypes from 'prop-types';

export default function ReviewsItem(props) {
  const { review } = props;
  /* eslint no-console: 0 */
  console.log(review);

  return (
    <ul className='reviews__list'>
      {review.map((item) => (
        <li className="reviews__item" key={item}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={item.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {item.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: `${item.rating * 20}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {item.comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{item.date}</time>
          </div>
        </li>
      ))}

    </ul>
  );
}

ReviewsItem.propTypes = {
  // review: PropTypes.shape({
  //   comment: PropTypes.string.isRequired,
  //   date: PropTypes.string.isRequired,
  //   id: PropTypes.number.isRequired,
  //   rating: PropTypes.number.isRequired,
  //   user: PropTypes.shape({
  //     avatarUrl: PropTypes.string.isRequired,
  //     id: PropTypes.number.isRequired,
  //     isPro: PropTypes.bool.isRequired,
  //     name: PropTypes.string.isRequired,
  //   }),
  // }),
  review: PropTypes.arrayOf(PropTypes.object),

};
