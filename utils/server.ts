import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import next from 'next';
import { config } from "../config/config.ts";

//* filepath: /Users/ethan/Portfolio/email_builder/config/config.ts
// safety check for config
if (!config) {
    throw new Error('Config is not defined');
}

const app = express();
const server = createServer(app);

//* filepath: /Users/ethan/Portfolio/email_builder/utils/server.ts
const nextApp = next({ dev: process.env.NODE_ENV !== 'production', dir: '../' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve Next.js pages
  app.all('*', (req, res) => {
    return handle(req, res);
  });

  const { port, url } = config;
  server.listen(port, () => console.log(`🚀 Server running at ${url}`));

  process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
});