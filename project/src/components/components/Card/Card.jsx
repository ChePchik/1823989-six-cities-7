import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PlaceCard(props) {
  /* eslint no-console: 0 */
  // console.log(props.item);
  // console.log(typeof props.item);
  const { item: { id, isPremium, price, previewImage, title, type, rating } } = props;
  const { typeCard } = props;
  const sk = {
    favorites: '__',//favorites__card place-card
    near: '-places__',//near-places__card place-card
    cities: '__place-', //cities__place-card place-card
  };
  // console.log(sk[typeCard], 'typeCard');
  // console.log(sk, 'typeCard');
  return (
    <article className={`${typeCard}${sk[typeCard]}card place-card`}>
      {isPremium ? <div className='place-card__mark'><span>Premium</span></div> : ''}
      <div className={`${typeCard}__image-wrapper place-card__image-wrapper`}>
        <a href='#'>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt='Place' />
        </a>
      </div>
      <div className={`${typeCard}__card-info place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  typeCard: PropTypes.string.isRequired,
};

export default PlaceCard;
