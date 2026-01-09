import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form style={{ maxWidth: "300px", margin: "2em auto", padding: "2em", background: "#f0f0f0" }}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ width: "100%", marginBottom: "1em" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "1em" }}
      />
      <button type="submit" style={{ width: "100%" }}>Login</button>
    </form>
  );
};
export default Login;