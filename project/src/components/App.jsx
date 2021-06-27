import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import All from './home/All';
import Header from './header/Header';

import Home from './home/Home';
import Favorites from './favorites/Favorites';
import Room from './room/Room';

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

export default function App(props) {
  const { offers, reviews } = props;

  return (
    <Router>
      <Switch>
        <Route path='/'>
          <div className='page page--gray page--main'>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Home offers={offers} />
              </Route>
              <Route exact path='/favorites'>
                <Favorites offers={offers} />
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
