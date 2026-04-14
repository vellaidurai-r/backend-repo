import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import usersRouter from './routes/users';

const app = new Hono();

// Enable CORS for frontend
app.use('*', cors({
  origin: 'http://localhost:5173',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type'],
}));

// Health check route
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', message: 'Backend is running' });
});

// Use users router
app.route('/api', usersRouter);

// Start server
const port = 3000;


serve({
  fetch: app.fetch,
  port,
}, (info) => {
  console.log(`✅ Server running on http://localhost:${info.port}`);
});

export default app;