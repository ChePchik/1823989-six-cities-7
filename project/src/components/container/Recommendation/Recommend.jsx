import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';

export default function Recommend(props) {
  const { offers } = props;
  const selectOffers = offers.slice(0, 3);

  /* eslint no-console: 0 */
  return (
    <div className="near-places__list places__list">
      {selectOffers.map((item) => <Card key={item.id} item={item} typeCard={'near'} />)}
    </div>
  );
}

Recommend.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};
