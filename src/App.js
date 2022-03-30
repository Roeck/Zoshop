import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Routes/Home/Home';
import Navbar from './components/Routes/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';

const Shop = () => {
  return (
    <h1>Shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;