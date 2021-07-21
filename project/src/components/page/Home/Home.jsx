import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SentenceList from '../../container/SentenceList/SentenceList';
import Maps from '../../components/Maps/Maps';
import CityList from '../../container/CityList/CityList';

function Home(props) {
  const { offersSelect, currentCity } = props;
  return (
    <div className='page page--gray page--main'>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <CityList />
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className="places__found">{offersSelect.length} {offersSelect.length === (1 || 0) ? 'place' : 'places'} to stay in {currentCity}</b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex='0'>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li
                    className='places__option places__option--active'
                    tabIndex='0'
                  >
                    Popular
                  </li>
                  <li className='places__option' tabIndex='0'>
                    Price: low to high
                  </li>
                  <li className='places__option' tabIndex='0'>
                    Price: high to low
                  </li>
                  <li className='places__option' tabIndex='0'>
                    Top rated first
                  </li>
                </ul>
              </form>
              <SentenceList offers={offersSelect} />

            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Maps points={offersSelect} />

              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Home.propTypes = {
  offersSelect: PropTypes.arrayOf(PropTypes.object),
  currentCity: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offersSelect: state.offersSelect,
  currentCity: state.currentCity,
});

export default connect(mapStateToProps)(Home);
