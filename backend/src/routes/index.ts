import { Hono } from 'hono';

const app = new Hono();

// Example route
app.get('/api/health', (c) => {
  return c.json({ status: 'ok' });
});

// Add more routes here

export default app;