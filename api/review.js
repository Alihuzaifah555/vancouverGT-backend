const dbConnect = require('../../utils/db');
const Review = require('../../models/Review');
module.exports = async function handler(req, res) {
    res.status(200).json({ message: 'API is working!' });

  }

