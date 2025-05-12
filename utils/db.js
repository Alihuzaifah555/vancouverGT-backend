import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/vancouvergt';

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

export default dbConnect;
