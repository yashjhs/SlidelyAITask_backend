import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import CORS
import { router as pingRouter } from './routes/ping';
import { router as submitRouter } from './routes/submit';
import { router as readRouter } from './routes/read';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use CORS

// Routes
app.use('/ping', pingRouter);
app.use('/submit', submitRouter);
app.use('/read', readRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
