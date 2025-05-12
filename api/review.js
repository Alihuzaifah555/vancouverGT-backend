const dbConnect = require('../../utils/db');
const Review = require('../../models/Review');
module.exports = async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        await dbConnect(); // connect to DB
        const reviews = await Review.find().sort({ createdAt: -1 }); // latest on top
        res.status(200).json(reviews);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }

