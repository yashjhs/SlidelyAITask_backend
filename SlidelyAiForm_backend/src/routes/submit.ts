import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../db.json');

export const router = Router();

interface Submission {
  name: string;
  email: string;
  phone: string;
  github_link: string;
  stopwatch_time: string;
}

router.post('/', (req, res) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;

  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newSubmission: Submission = {
    name,
    email,
    phone,
    github_link,
    stopwatch_time,
  };

  let data: Submission[] = [];

  if (fs.existsSync(dbPath)) {
    const dbFile = fs.readFileSync(dbPath, 'utf-8');
    data = JSON.parse(dbFile) as Submission[];
  }

  data.push(newSubmission);

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  res.status(201).json({ message: 'Submission saved successfully!' });
});
