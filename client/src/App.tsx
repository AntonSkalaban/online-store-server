import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Main } from './pages/Main/Main';
import { About } from './pages/About/About';
import { Cart } from './pages/Cart/Cart';
import { NotFound } from './pages/NotFound/NotFound';
import React from 'react';
import './App.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about/:id" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
