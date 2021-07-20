import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';

export default function SentenceList(props) {
  const { offers } = props;
  /* eslint no-console: 0 */
  console.log(offers);
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((item, id) => (
        <Card key={item.id} item={item} typeCard={'cities'} />
      ))}
    </div>
  );
}

SentenceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};
