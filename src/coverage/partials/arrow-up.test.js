import React from 'react';
import ReactDOM from 'react-dom';
import ArrowUp from '../../partials/arrow-up';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArrowUp />, div);
});
