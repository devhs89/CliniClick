import mongoose, {ConnectOptions} from 'mongoose';
import dotenv from 'dotenv';

export default () => {
  // Load .env file contents into process.env
  dotenv.config();

  // Mongoose Settings
  mongoose.set({strictQuery: false});

  // Get Database Credentials
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbName = process.env.DB_NAME;

  // Connect to MongoDB
  const connStr = `mongodb+srv://${dbUser}:${dbPassword}@main-cluster.knrutim.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  return mongoose.connect(connStr, {useNewUrlParser: true} as ConnectOptions);
};