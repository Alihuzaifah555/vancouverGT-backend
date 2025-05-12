const dbConnect = require('../utils/db');
const Review = require('../models/reviews');

module.exports = async function handler(req, res) {
  // ✅ CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Change to your frontend origin in production
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization'
  );

  // ✅ Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      await dbConnect(); // connect to DB

      const { name, review, rating } = req.body;

      if (!name || !review || typeof rating !== 'number') {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const newReview = new Review({ name, review, rating });
      const savedReview = await newReview.save();

      res.status(201).json({ success: true, data: savedReview });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
