import express, { Application, Request, Response, NextFunction } from 'express';
import quotesRoutes from './routes/quotesRoutes';

import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

app.use('/api', quotesRoutes);

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({ error: err.stack });
});

app.get('/', (res: Response) => {
  res.send('Quotes API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
