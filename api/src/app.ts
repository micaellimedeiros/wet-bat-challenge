import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import quotesRoutes from './routes/quotesRoutes';

const app: Application = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

app.use('/api', quotesRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.stack });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Quotes API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
