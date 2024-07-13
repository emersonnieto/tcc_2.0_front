import React from 'react';
import AppRoutes from './routes/routes';
import Header from './components/header/Header';
import Dashborad from './pages/dashboard/Dashboard';
import './App.css';
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
