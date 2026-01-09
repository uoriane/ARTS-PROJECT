import React from 'react';

const Home = () => (
  <div>
    <h1>Audit Recommendation Tracking System (ARTS)</h1>
    <p>Welcome to ARTS! Track recommendations across RRA departments. See real-time implementation status below.</p>
    <div>
      <h3>Overall Status</h3>
      <ul>
        <li><span style={{ color: "green" }}>●</span> Fully Implemented: 45</li>
        <li><span style={{ color: "yellow" }}>●</span> Partially Implemented: 12</li>
        <li><span style={{ color: "red" }}>●</span> Not Implemented: 4</li>
        <li><span style={{ color: "purple" }}>●</span> Beyond Control: 1</li>
        <li><span style={{ color: "blue" }}>●</span> Not Applicable: 3</li>
      </ul>
    </div>
  </div>
);
export default Home;