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
const getReviewsFromDB = async (req, res) => {
  try {
    const reviews = await Review.find({ id: req.params.id })
      .sort({ createdAt: -1 }); // Sort by newest first
    res.json({
      message: 'Reviews fetched successfully',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export default async function handler(req, res) {
  if (req.method === 'GET') {
    const reviews = await getReviewsFromDB(); // Your logic
    res.status(200).json(reviews);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
