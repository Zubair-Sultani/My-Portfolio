import mongoose from 'mongoose';

const connectDatabase = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is required in environment variables');
  }

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000
  });

  console.log('Connected to MongoDB');
};

export default connectDatabase;
