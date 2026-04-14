import { Hono } from 'hono';
import { db } from '../db/index';
import { users } from '../db/schema';

const usersRouter = new Hono();

// POST route to create a new user
usersRouter.post('/users', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email } = body;

    if (!name || !email) {
      return c.json({ error: 'Name and email are required' }, 400);
    }

    const newUser = await db.insert(users).values({
      name,
      email,
    }).returning();

    return c.json({ success: true, data: newUser[0] }, 201);
  } catch (error) {
    return c.json({ error: 'Failed to create user' }, 500);
  }
});

// GET route to fetch all users
usersRouter.get('/users', async (c) => {
  try {
    const allUsers = await db.select().from(users);
    return c.json({ success: true, data: allUsers });
  } catch (error) {
    return c.json({ error: 'Failed to fetch users' }, 500);
  }
});

export default usersRouter;