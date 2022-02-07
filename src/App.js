import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import MapPage from './pages/MapPage';
import AlarmPage from './pages/AlarmPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/alarm" element={<AlarmPage />} />
    </Routes>
  );
};

export default App;
