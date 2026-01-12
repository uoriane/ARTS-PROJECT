import React from 'react';

const Home = () => (
  <div className="container mt-5">
    <div className="row mb-5">
      <div className="col-lg-10 mx-auto">
        <h1 className="display-4 fw-bold text-primary mb-3">
          🎯 Audit Recommendation Tracking System
        </h1>
        <p className="lead text-muted">
          Welcome to ARTS! Track recommendations across RRA departments. See real-time implementation status below.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">📊 Overall Status</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <span className="badge bg-success me-2">●</span>
                    <strong>Fully Implemented:</strong> 45
                  </li>
                  <li className="mb-3">
                    <span className="badge bg-warning me-2">●</span>
                    <strong>Partially Implemented:</strong> 12
                  </li>
                  <li className="mb-3">
                    <span className="badge bg-danger me-2">●</span>
                    <strong>Not Implemented:</strong> 4
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <span className="badge bg-secondary me-2">●</span>
                    <strong>Beyond Control:</strong> 1
                  </li>
                  <li className="mb-3">
                    <span className="badge bg-info me-2">●</span>
                    <strong>Not Applicable:</strong> 3
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Home;