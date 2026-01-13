const express = require('express');
const Department = require('../models/Department');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET api/departments
// @desc    Get all departments
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/departments
// @desc    Create a department
// @access  Private (admin)
router.post('/', auth, async (req, res) => {
  const { name, abbreviation, description } = req.body;

  try {
    const newDept = new Department({ name, abbreviation, description });
    const dept = await newDept.save();
    res.json(dept);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;