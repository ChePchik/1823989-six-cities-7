import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CityItem from '../../components/CityItem/CityItem';
import {
  getCurrentCity,
  getListOffers
} from '../../../store/action';
function CityList(props) {
  const { city, offers, currentCity } = props;

  /* eslint no-console: 0 */
  console.log(currentCity, 'currentCit');
  console.log(offers, 'offers');
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className="locations__list tabs__list"
          onClick={(e) => {
            e.preventDefault();
            console.log('onClick');
            if (e.target.closest('li')) {
              const nameCity = e.target.closest('li').dataset.city;
              getCurrentCity(nameCity);
              getListOffers(offers, nameCity);
            }
          }}
        >
          {city.map((cityItem) => <CityItem key={cityItem} cityItem={cityItem} currentCity={currentCity} />)}
        </ul>
      </section>

    </div>
  );
}

CityList.propTypes = {
  city: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
  // getCurrentCity: PropTypes.func,
  // getListOffers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  city: state.city,
  currentCity: state.currentCity,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentCity: (data) => dispatch(getCurrentCity(data)),
  getListOffers: (places, city) => dispatch(getListOffers(places, city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
