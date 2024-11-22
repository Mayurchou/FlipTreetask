import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from './store/store';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductList from './components/ProductList';
import AddToCart from './components/AddToCart';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<AddToCart />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
