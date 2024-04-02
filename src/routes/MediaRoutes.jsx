import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';

const MediaRoutes = ({ children }) => {
  const isTable = useMediaQuery({ query: '(min-width: 768px)' });
  if (!isTable) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default MediaRoutes;
