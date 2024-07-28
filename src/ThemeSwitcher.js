// src/ThemeSwitcher.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={handleToggle}>
        Toggle Theme ({theme})
      </button>
    </div>
  );
};

export default ThemeSwitcher;
