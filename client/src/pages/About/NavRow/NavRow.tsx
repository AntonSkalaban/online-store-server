import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GlobalFilterValues, updateGlobalState } from '../../../store/GlobalFilterSlice';
import './style.css';

interface NavRowProps {
  category: string;
  brand: string;
  title: string;
}

export const NavRow = ({ category, brand, title }: NavRowProps) => {
  const dispatch = useDispatch();

  const hanldeNavLinkClick = (value: GlobalFilterValues) => {
    dispatch(updateGlobalState(value));
  };

  return (
    <div className="about__nav">
      <NavLink to={`/`} onClick={() => hanldeNavLinkClick({ category: [category] })}>
        {category}
      </NavLink>
      {'>'}
      <NavLink to={`/`}>{brand}</NavLink>
      {'>'}
      <p>{title}</p>
    </div>
  );
};
