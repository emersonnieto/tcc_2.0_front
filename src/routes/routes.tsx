import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashborad from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />   
      <Route path="/dashboard" element={<Dashborad />} />
    </Routes>
  </Router>
);

export default AppRoutes;
