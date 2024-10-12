import express from 'express';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('BillTracker API');
});

createConnection({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'billtracker',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: false,
})
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => console.log(error));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
