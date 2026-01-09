import React from 'react';

const dummyUsers = [
  { name: "Jane Auditor", role: "Auditor", department: "DTD" },
  { name: "John Director", role: "Director", department: "-" }
];

const UserManagement = () => (
  <div>
    <h2>User Management</h2>
    <table style={{ width: "100%", border: "1px solid #ccc", marginTop: "1em" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {dummyUsers.map(u => (
          <tr key={u.name}>
            <td>{u.name}</td>
            <td>{u.role}</td>
            <td>{u.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button>Add User</button> <button>Reset Password</button>
  </div>
);
export default UserManagement;