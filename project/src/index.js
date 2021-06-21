import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const data = [
  {
    id:0,
    isPremium: true,
    price: 120,
    picter: 'img/apartment-01.jpg',
  },
  {
    id:1,
    isPremium: false,
    price: 80,
    picter: 'img/apartment-02.jpg',
  },
  {
    id:2,
    isPremium: false,
    price: 132,
    picter: 'img/apartment-03.jpg',
  },
  {
    id: 3,
    isPremium: true,
    price: 180,
    picter: 'img/apartment-01.jpg',
  },
  {
    id: 4,
    isPremium: false,
    price: 80,
    picter: 'img/room.jpg',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      data = {data}
    />
  </React.StrictMode>,
  document.getElementById('root'));
