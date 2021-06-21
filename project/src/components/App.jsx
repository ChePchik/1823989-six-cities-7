import React from 'react';
import PropTypes from 'prop-types';
import Home from './home/Home';

export default function App(props) {
  const {data} = props;

  return (
    <Home data = {data} />
  );
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
