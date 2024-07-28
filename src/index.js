// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import ThemeSwitcher from './ThemeSwitcher';
import './index.css';

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <ThemeSwitcher />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
