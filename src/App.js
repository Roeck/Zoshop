import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home';
import Navbar from './routes/Navbar/Navbar';
import Auth from './routes/Auth/Auth';
import Shop from './routes/Shop/Shop';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;