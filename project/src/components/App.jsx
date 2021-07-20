import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import All from './home/All';
import Header from './components/Header/Header';

import Home from './page/Home/Home';
import Favorites from './page/Favorites/Favorites';
import Room from './page/Room/Room';

function NotFound() {
  return (
    <div className='not_found'>
      <h1 className='display-4'>404</h1>
      <p>Контенит не доступен в вашем регионе</p>
      <p style={{ fontSize: '10px' }}>шутка, просто страница не доступна</p>
    </div>
  );
}

function EmptyFound() {
  return (
    <div>
      <h1 className='display-4'>Пустая страница</h1>
    </div>
  );
}

function App(props) {
  const { offers, reviews } = props;

  return (
    <Router>
      <Switch>
        <Route path='/'>
          <div className='page page--gray page--main'>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/favorites'>
                <Favorites />
              </Route>
              <Route path='/offer/:id'
                render={({ match }) => {
                  const { id } = match.params;
                  const [currentOffer] = offers.filter((data) => data.id === Number(id));

                  return <Room offer={currentOffer} offers={offers} reviews={reviews} />;
                }}
              >
              </Route>

            </Switch>
          </div>
        </Route>
        <Route exact path='/login' component={EmptyFound} />
        <Route component={NotFound} />
      </Switch >
    </Router >
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
});

export default connect(mapStateToProps)(App);
