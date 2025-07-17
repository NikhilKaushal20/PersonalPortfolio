import { Handler } from '@netlify/functions';
import express from 'express';
import { registerRoutes } from '../../server/routes';
import serverless from 'serverless-http';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up routes
const setup = async () => {
  await registerRoutes(app);
  return serverless(app);
};

export const handler: Handler = async (event, context) => {
  const serverlessApp = await setup();
  return serverlessApp(event, context);
};