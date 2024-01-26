// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useAuth();

  return user ? <Route {...rest} element={element} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
