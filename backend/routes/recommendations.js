const express = require('express');
const Recommendation = require('../models/Recommendation');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET api/recommendations
// @desc    Get all recommendations
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const recommendations = await Recommendation.find().populate('responsibleParty focalPerson department submittedBy reviewedBy validatedBy');
    res.json(recommendations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/recommendations
// @desc    Create a recommendation
// @access  Private
router.post('/', auth, async (req, res) => {
  const { auditType, auditDetails, findings, recommendation, correctiveActions, timeline, responsibleParty, focalPerson, department, status, evidence } = req.body;

  try {
    const newRec = new Recommendation({
      auditType,
      auditDetails,
      findings,
      recommendation,
      correctiveActions,
      timeline,
      responsibleParty,
      focalPerson,
      department,
      status,
      evidence,
      submittedBy: req.user.id,
    });

    const rec = await newRec.save();
    res.json(rec);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/recommendations/:id
// @desc    Update a recommendation
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    let rec = await Recommendation.findById(req.params.id);
    if (!rec) return res.status(404).json({ msg: 'Recommendation not found' });

    rec = await Recommendation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(rec);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/recommendations/:id
// @desc    Delete a recommendation
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let rec = await Recommendation.findById(req.params.id);
    if (!rec) return res.status(404).json({ msg: 'Recommendation not found' });

    await Recommendation.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Recommendation removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;