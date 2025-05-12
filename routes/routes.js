const express = require('express');
const router = express.Router();
//import controllers
const { createReview, getReviews } = require('../controllers/rating');

router.post('/reviews', createReview);
router.get('/reviews', getReviews);

module.exports = router;