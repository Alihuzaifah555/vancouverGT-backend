const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://syedalihuzaifahbukhari:XYlJ62HeYzcpGXg1@vancouvergt.4ygrve5.mongodb.net/vancouvergt';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      console.log('✅ Connected to MongoDB');
      return mongoose;
    }).catch(err => {
      console.error('❌ MongoDB connection error:', err);
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = dbConnect;


// XYlJ62HeYzcpGXg1
// syedalihuzaifahbukhari