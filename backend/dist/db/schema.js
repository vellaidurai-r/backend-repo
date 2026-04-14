"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.comments = exports.posts = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name').notNull(),
    email: (0, pg_core_1.text)('email').notNull().unique(),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
exports.posts = (0, pg_core_1.pgTable)('posts', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    title: (0, pg_core_1.text)('title').notNull(),
    content: (0, pg_core_1.text)('content').notNull(),
    userId: (0, pg_core_1.serial)('user_id').references(() => exports.users.id),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
exports.comments = (0, pg_core_1.pgTable)('comments', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    content: (0, pg_core_1.text)('content').notNull(),
    postId: (0, pg_core_1.serial)('post_id').references(() => exports.posts.id),
    userId: (0, pg_core_1.serial)('user_id').references(() => exports.users.id),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
exports.test = (0, pg_core_1.pgTable)('testing', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    education: (0, pg_core_1.text)('education').notNull(),
});
