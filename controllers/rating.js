const Review = require('../models/reviews');

// Create Review
exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Reviews by Product
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ id: req.params.id })
      .sort({ createdAt: -1 }); // Sort by newest first
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

