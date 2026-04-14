"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const app = new hono_1.Hono();
// Example route
app.get('/api/health', (c) => {
    return c.json({ status: 'ok' });
});
// Add more routes here
exports.default = app;
