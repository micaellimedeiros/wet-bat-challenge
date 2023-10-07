import express, { Request, Response, Router, text } from 'express';
import { check, validationResult } from 'express-validator';
import knex from "../database/knex";

const router: Router = express.Router();

router.get('/quotes', async (req: Request, res: Response) => {
  try {
    const quotes = await knex('quotes').select('*');

    console.log(quotes);
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/quotes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const quote = await knex('quotes').select('*').where({ id }).first();

    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.json(quote);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post(
  '/quotes',
  [
    check('departure_location').notEmpty().withMessage('Location is required'),
    check('destination_location').notEmpty().withMessage('Destination is required'),
    check('departure_date').notEmpty().withMessage('Departure is required'),
    check('return_date').notEmpty().withMessage('Return Date is required'),
    check('number_of_travelers').notEmpty().withMessage('Number of travelers is required'),
    check('transportation').notEmpty().withMessage('Transportation is required'),
    check('contact_information').notEmpty().withMessage('Contact Info is required'),

  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    console.log(errors)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const body = req.body;

    console.log(body)

    try {
      const newQuote = await knex('quotes').insert({ ...body });

      console.log(newQuote);

      res.status(201).json({ message: 'Quote created successfully', id: newQuote[0] });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
);

router.delete('/quotes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedCount = await knex('quotes').where({ id }).del();

    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.json({ message: 'Quote deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

export default router;
