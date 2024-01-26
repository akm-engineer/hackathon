import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Products';
import Category from './components/Categories';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route
            path="/products"
            element={<ProtectedRoute element={<Product />} />}
          />
          <Route
            path="/category"
             element={<Category />} 
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
