import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';

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
      <h1 className = 'display-4'>Пустая страница</h1>
    </div>
  );
}

export default function App(props) {
  const {data} = props;

  return (
    <Router>
      <Switch>
	  <Route exact path='/' >
	    <Home data = {data} />
	  </Route>
	  <Route exact path='/login' component={EmptyFound} />
	  <Route exact path='/favorites' component={EmptyFound} />
	  <Route path='/offer/:id' component={EmptyFound} />
	  <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
