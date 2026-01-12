import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    // Simulate login
    alert('Login successful!');
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">🔐 Login</h3>
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  {error}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setError('')}
                  ></button>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
            <div className="card-footer text-center text-muted small">
              <p className="mb-0">Demo: Use any username/password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;