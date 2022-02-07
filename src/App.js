import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import MapPage from './pages/MapPage';
import AlarmPage from './pages/AlarmPage';
import AppLayout from './layout/AppLayout';

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/alarm" element={<AlarmPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
