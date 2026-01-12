import React from 'react';

const Sidebar = () => (
  <aside style={{ background: "#eee", padding: "1em", width: "200px", float: "left" }}>
    <ul>
      <li>CG Office</li>
      <li>DTD</li>
      <li>CSD</li>
      {/* ... other divisions */}
    </ul>
  </aside>
);
export default Sidebar;