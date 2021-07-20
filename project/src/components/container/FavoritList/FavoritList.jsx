import React from 'react';
import PropTypes from 'prop-types';
import FavoritItem from '../../components/FavoritItem/FavoritItem';

export default function FavoritList(props) {
  const { favoritesList } = props;
  const offersCity = [...new Set(favoritesList.map((offer) => offer.city.name))];

  /* eslint no-console: 0 */
  // console.log(favoritesList);
  return (
    <ul className="favorites__list">
      {offersCity
        .map((city) => {
          const filtreItem = favoritesList.filter((place) => place.city.name === city);
          // console.log(filtreItem, 111);
          return <FavoritItem key={city} city={city} filtreItem={filtreItem} />;
        })}
    </ul>
  );
}

FavoritList.propTypes = {
  favoritesList: PropTypes.arrayOf(PropTypes.object),
};
