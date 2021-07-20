import React from 'react';
import PropTypes from 'prop-types';
import Reviews from '../../components/Reviews/Reviews';
import Comment from '../../components/Comment/Comment';
// import Maps from '../maps/Maps';
import Recommend from '../../container/Recommendation/Recommend';

export default function Room(props) {
  /* eslint no-console: 0 */
  const { offer, offers, reviews } = props;
  const { isPremium, price, title, type, rating, goods, maxAdults, bedrooms, host, description, images } = offer;
  console.log(reviews);
  // console.log(props);
  return (
    <main className='page__main page__main--property'>
      <section className='property'>
        <div className='property__gallery-container container'>
          <div className='property__gallery'>
            {images.map((picter) => (
              <div className='property__image-wrapper' key={picter}>
                <img className='property__image' src={picter} alt='Photo studio' />
              </div>
            ))}
          </div>
        </div>
        <div className='property__container container'>
          <div className='property__wrapper'>
            {isPremium ? (
              <div className='property__mark'>
                <span>Premium</span>
              </div>
            )
              : ''}
            <div className='property__name-wrapper'>
              <h1 className='property__name'>
                {title}
              </h1>
              <button className='property__bookmark-button button' type='button'>
                <svg className='property__bookmark-icon' width='31' height='33'>
                  <use xlinkHref='#icon-bookmark'></use>
                </svg>
                <span className='visually-hidden'>To bookmarks</span>
              </button>
            </div>
            <div className='property__rating rating'>
              <div className='property__stars rating__stars'>
                <span style={{ width: `${rating * 20}%` }}></span>
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='property__rating-value rating__value'>{rating}</span>
            </div>
            <ul className='property__features'>
              <li className='property__feature property__feature--entire'>
                {type}
              </li>
              <li className='property__feature property__feature--bedrooms'>
                {bedrooms} Bedrooms
              </li>
              <li className='property__feature property__feature--adults'>
                Max {maxAdults} adults
              </li>
            </ul>
            <div className='property__price'>
              <b className='property__price-value'>&euro; {price}</b>
              <span className='property__price-text'>&nbsp;ночь</span>
            </div>
            <div className='property__inside'>
              <h2 className='property__inside-title'>Что входит</h2>
              <ul className='property__inside-list'>
                {goods.map((name) => (
                  <li className='property__inside-item' key={name}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className='property__host'>
              <h2 className='property__host-title'>Meet the host</h2>
              <div className='property__host-user user'>
                <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                  <img className='property__avatar user__avatar' src={host.avatarUrl} width='74' height='74' alt='Host avatar' />
                </div>
                <span className='property__user-name'>
                  {host.name}
                </span>
                <span className='property__user-status'>
                  {host.isPro ? 'Pro' : ''}
                </span>
              </div>
              <div className='property__description'>
                <p className='property__text'>
                  {description}
                </p>
                {/* <p className='property__text'>
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p> */}
              </div>
            </div>
            <section className='property__reviews reviews'>
              <h2 className='reviews__title'>Отзывы &middot; <span className='reviews__amount'>{reviews.length}</span></h2>
              <Reviews review={reviews} />

              <Comment offers={offers} />
            </section>
          </div>
        </div>
        {/* <Maps /> */}
      </section>

      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>Other places in the neighbourhood</h2>
          <Recommend offers={offers} />

        </section>
      </div>
    </main>
  );
}

Room.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    goods: PropTypes.string.isRequired,
    maxAdults: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
  }),
  reviews: PropTypes.arrayOf(PropTypes.object),
  offers: PropTypes.arrayOf(PropTypes.object),
};

