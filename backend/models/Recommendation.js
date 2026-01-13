const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  auditType: { type: String, enum: ['internal', 'external', 'qms_internal', 'qms_external'], required: true },
  auditDetails: { type: String, required: true },
  findings: { type: String, required: true },
  recommendation: { type: String, required: true },
  correctiveActions: { type: String },
  timeline: { type: Date },
  responsibleParty: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  focalPerson: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  status: { type: String, enum: ['not_implemented', 'partially_implemented', 'fully_implemented', 'beyond_control', 'not_applicable'], default: 'not_implemented' },
  evidence: [{ type: String }], // URLs or file paths
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  validatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, comment: String, date: { type: Date, default: Date.now } }],
}, { timestamps: true });

module.exports = mongoose.model('Recommendation', recommendationSchema);