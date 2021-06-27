import React from 'react';
import PropTypes from 'prop-types';
import FavoritFooter from './FavoritFooter';
import FavoritList from './FavoritList';

export default function Favorites(props) {
  const { offers } = props;
  const favoritesList = offers.filter(({ isFavorite }) => isFavorite);
  /* eslint no-console: 0 */
  console.log(favoritesList);

  return (
    <div className='page'>

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <FavoritList favoritesList={favoritesList} />
          </section>
        </div>
      </main>
      <FavoritFooter />
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};
