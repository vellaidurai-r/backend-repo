"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const index_1 = require("../db/index");
const schema_1 = require("../db/schema");
const usersRouter = new hono_1.Hono();
// POST route to create a new user
usersRouter.post('/users', async (c) => {
    try {
        const body = await c.req.json();
        const { name, email } = body;
        if (!name || !email) {
            return c.json({ error: 'Name and email are required' }, 400);
        }
        const newUser = await index_1.db.insert(schema_1.users).values({
            name,
            email,
        }).returning();
        return c.json({ success: true, data: newUser[0] }, 201);
    }
    catch (error) {
        return c.json({ error: 'Failed to create user' }, 500);
    }
});
// GET route to fetch all users
usersRouter.get('/users', async (c) => {
    try {
        const allUsers = await index_1.db.select().from(schema_1.users);
        return c.json({ success: true, data: allUsers });
    }
    catch (error) {
        return c.json({ error: 'Failed to fetch users' }, 500);
    }
});
exports.default = usersRouter;
