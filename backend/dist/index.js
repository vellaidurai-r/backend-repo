"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const cors_1 = require("hono/cors");
const node_server_1 = require("@hono/node-server");
const users_1 = __importDefault(require("./routes/users"));
const app = new hono_1.Hono();
// Enable CORS for frontend
app.use('*', (0, cors_1.cors)({
    origin: 'http://localhost:5173',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type'],
}));
// Health check route
app.get('/api/health', (c) => {
    return c.json({ status: 'ok', message: 'Backend is running' });
});
// Use users router
app.route('/api', users_1.default);
// Start server
const port = 3000;
(0, node_server_1.serve)({
    fetch: app.fetch,
    port,
}, (info) => {
    console.log(`✅ Server running on http://localhost:${info.port}`);
});
exports.default = app;
