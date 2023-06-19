import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pages } from '../../types';
import './style.css';

export const Nav = () => {
  const setActive = ({ isActive }: { isActive: boolean }) => {
    return { color: isActive ? 'blue' : 'gray' };
  };

  return (
    <nav className="nav">
      <NavLink to="/" style={setActive}>
        {Pages.Main}
      </NavLink>
      <NavLink to="/about" style={setActive}>
        {Pages.About}
      </NavLink>
      <NavLink to="/cart" style={setActive}>
        {Pages.Cart}
      </NavLink>
    </nav>
  );
};
