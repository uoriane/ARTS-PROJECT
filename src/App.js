import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import Home from './pages/Home';
import AuditRecommendationEntry from './src/pages/AuditRecommendationEntry';
import DepartmentDashboard from './src/pages/DepartmentDashboard';
import Reporting from './pages/Reporting';
import UserManagement from './src/pages/UserManagement';
import Help from './pages/Help';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Notifications />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry" element={<AuditRecommendationEntry />} />
          <Route path="/dashboard" element={<DepartmentDashboard />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;