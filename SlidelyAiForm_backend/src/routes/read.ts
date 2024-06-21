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

router.get('/', (req, res) => {
  const { index } = req.query;

  if (typeof index !== 'string' || isNaN(Number(index))) {
    return res.status(400).json({ error: 'Invalid index provided.' });
  }

  const submissionIndex = Number(index);

  if (fs.existsSync(dbPath)) {
    const dbFile = fs.readFileSync(dbPath, 'utf-8');
    const data: Submission[] = JSON.parse(dbFile) as Submission[];

    if (submissionIndex >= 0 && submissionIndex < data.length) {
      return res.json(data[submissionIndex]);
    } else {
      return res.status(404).json({ error: 'Submission not found.' });
    }
  } else {
    return res.status(404).json({ error: 'No submissions found.' });
  }
});
