import React from 'react';

const dummyData = [
  { id: "AF001", department: "DTD", status: "Fully Implemented" },
  { id: "AF002", department: "CSD", status: "Partially Implemented" },
  //...
];

const getColor = status =>
  status === "Fully Implemented" ? "green"
    : status === "Partially Implemented" ? "orange"
    : status === "Not Implemented" ? "red"
    : status === "Beyond Control" ? "purple"
    : "blue";

const DepartmentDashboard = () => (
  <div>
    <h2>Department/Division/Unit Dashboard</h2>
    <table style={{ width: "100%", border: "1px solid #ccc", marginTop: "1em" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Department</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {dummyData.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.department}</td>
            <td><span style={{ color: getColor(row.status) }}>{row.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default DepartmentDashboard;