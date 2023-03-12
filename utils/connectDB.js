import mongoose from 'mongoose';

const connectDB = async () => mongoose.connect(process.env.DB_URI);

export default connectDB;