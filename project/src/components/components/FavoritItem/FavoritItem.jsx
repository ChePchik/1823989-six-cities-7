import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

export default function FavoritItem(props) {
  const { city, filtreItem } = props;
  /* eslint no-console: 0 */
  console.log(filtreItem);
  console.log(city);
  return (
    <ul className='favorites__list'>
      <li className='favorites__locations-items'>
        <div className='favorites__locations locations locations--current'>
          <div className='locations__item'>
            <a className='locations__item-link' href='#'>
              <span>{city}</span>
            </a>
          </div>
        </div>

        <div className='favorites__places'>
          {filtreItem.map((item) =>
            <Card key={item.id} item={item} typeCard={'favorites'} />)}
        </div>
      </li>

    </ul>
  );
}

FavoritItem.propTypes = {
  filtreItem: PropTypes.arrayOf(PropTypes.object),
  city: PropTypes.arrayOf(PropTypes.object),
};
