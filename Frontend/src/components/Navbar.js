import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ background: "#003366", color: "#fff", padding: "1em" }}>
    <Link to="/">Home</Link> |{" "}
    <Link to="/entry">Enter Recommendation</Link> |{" "}
    <Link to="/dashboard">Dashboard</Link> |{" "}
    <Link to="/reporting">Reports</Link> |{" "}
    <Link to="/users">User Management</Link> |{" "}
    <Link to="/help">Help</Link>
  </nav>
);
export default Navbar;