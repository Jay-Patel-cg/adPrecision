import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Landing Page</div>} />
      <Route path="/auth" element={<div>Auth Page</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
