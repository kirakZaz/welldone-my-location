import express from 'express'
import categories from './categories'
const route = express.Router();
route.use(
    '/api',
    [categories]
);