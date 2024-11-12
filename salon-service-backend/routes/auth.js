const express = require('express');
const { check } = require('express-validator'); // For input validation
const router = express.Router();
const { signUp, signIn } = require('../controllers/authController');

// POST /signup
router.post(
  '/signup',
  [
    // Validate the inputs
    check('username').not().isEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Please provide a valid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  signUp
);

// POST /signin
router.post('/signin', signIn);

module.exports = router;
