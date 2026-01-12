import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand fw-bold">
        🎯 ARTS
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/entry" className="nav-link">Add Recommendation</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/reporting" className="nav-link">Reports</Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-link">Help</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;