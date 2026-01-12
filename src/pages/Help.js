import React from 'react';

const Help = () => (
  <div className="container mt-5">
    <div className="row mb-4">
      <div className="col-lg-10 mx-auto">
        <h2 className="display-5 fw-bold text-primary mb-3">❓ Help & Support</h2>
        <p className="lead text-muted">Find answers to common questions and get support</p>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="accordion" id="helpAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#help1">
                📋 How to enter recommendations
              </button>
            </h2>
            <div id="help1" className="accordion-collapse collapse show" data-bs-parent="#helpAccordion">
              <div className="accordion-body">
                <p>Follow these steps to enter a new audit recommendation:</p>
                <ol>
                  <li>Navigate to "Add Recommendation" from the menu</li>
                  <li>Fill in the audit information and finding details</li>
                  <li>Assign responsible department and staff</li>
                  <li>Set implementation timeline and click Submit</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#help2">
                🔐 Role permissions
              </button>
            </h2>
            <div id="help2" className="accordion-collapse collapse" data-bs-parent="#helpAccordion">
              <div className="accordion-body">
                <p>Different user roles have different permissions:</p>
                <ul>
                  <li><strong>Auditor:</strong> Can enter and view recommendations</li>
                  <li><strong>Director:</strong> Can approve recommendations</li>
                  <li><strong>Department Focal:</strong> Responsible for implementation</li>
                  <li><strong>Admin:</strong> Full system access</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#help3">
                📊 Exporting reports
              </button>
            </h2>
            <div id="help3" className="accordion-collapse collapse" data-bs-parent="#helpAccordion">
              <div className="accordion-body">
                <p>Export your data and reports in various formats:</p>
                <ul>
                  <li>Excel format for data analysis</li>
                  <li>PDF format for printing and sharing</li>
                  <li>Filter data before exporting</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#help4">
                📞 Contact System Administrator
              </button>
            </h2>
            <div id="help4" className="accordion-collapse collapse" data-bs-parent="#helpAccordion">
              <div className="accordion-body">
                <p>For technical issues or feature requests:</p>
                <p><strong>Email:</strong> admin@rra.rw</p>
                <p><strong>Phone:</strong> +250 788 123 456</p>
                <p><strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Help;