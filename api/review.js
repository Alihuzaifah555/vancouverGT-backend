import dbConnect from '../../utils/db.js';
import Review from '../../models/Review.js';
module.exports = async function handler(req, res) {
    console.log('Request received:');
    if (req.method === 'GET') {
      try {
        await dbConnect(); // connect to DB
        const reviews = await Review.find().sort({ createdAt: -1 }); // latest on top
        res.status(200).json({
            message: 'Hello from the API!',
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }

