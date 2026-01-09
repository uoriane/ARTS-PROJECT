import React, { useState } from 'react';

const departments = [
  "CG Office", "DTD", "CSD", "FIND", "ITDTD", //... etc
];

const types = ["Internal Audit (IA)", "External Audit (EA)", "QMS Internal (QMS/IA)", "QMS External (QMS/EA)"];

const AuditRecommendationEntry = () => {
  const [form, setForm] = useState({
    team: "", auditType: "", reportTitle: "", scope: "",
    findingTitle: "", description: "", recommendation: "", actions: "",
    timeline: "", responsibleDepartment: "", responsibleStaff: "", status: "", auditor: ""
  });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form style={{ background: "#f9f9f9", padding: "2em", borderRadius: "5px" }}>
      <h2>Enter New Audit Recommendation</h2>
      <label>
        Team: <input name="team" value={form.team} onChange={handleChange} />
      </label><br />
      <label>
        Audit Type:
        <select name="auditType" value={form.auditType} onChange={handleChange}>
          {types.map(t => <option key={t}>{t}</option>)}
        </select>
      </label><br />
      <label>
        Report Title: <input name="reportTitle" value={form.reportTitle} onChange={handleChange} />
      </label><br />
      <label>
        Scope: <input name="scope" value={form.scope} onChange={handleChange} />
      </label><br />
      <label>
        Finding Title: <input name="findingTitle" value={form.findingTitle} onChange={handleChange} />
      </label><br />
      <label>
        Description: <textarea name="description" value={form.description} onChange={handleChange} />
      </label><br />
      <label>
        Recommendation: <textarea name="recommendation" value={form.recommendation} onChange={handleChange} />
      </label><br />
      <label>
        Corrective Actions: <textarea name="actions" value={form.actions} onChange={handleChange} />
      </label><br />
      <label>
        Deadline: <input type="date" name="timeline" value={form.timeline} onChange={handleChange} />
      </label><br />
      <label>
        Responsible Department:
        <select name="responsibleDepartment" value={form.responsibleDepartment} onChange={handleChange}>
          {departments.map(d => <option key={d}>{d}</option>)}
        </select>
      </label><br />
      <label>
        Responsible Staff: <input name="responsibleStaff" value={form.responsibleStaff} onChange={handleChange} />
      </label><br />
      <label>
        Status: <input name="status" value={form.status} onChange={handleChange} />
      </label><br />
      <label>
        Auditor in Charge: <input name="auditor" value={form.auditor} onChange={handleChange} />
      </label><br />
      <button type="submit">Submit Recommendation</button>
    </form>
  );
};
export default AuditRecommendationEntry;