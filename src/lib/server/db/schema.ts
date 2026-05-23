import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export * from './auth.schema';

export const testimonials = sqliteTable('testimonials', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	position: text('position'),
	message: text('message').notNull(),
	avatar: text('avatar')
});

export const gallery = sqliteTable('gallery', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	imageUrl: text('image_url')
});

export const contactMessages = sqliteTable('contact_messages', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	email: text('email').notNull(),
	phone: text('phone'),
	subject: text('subject').notNull(),
	message: text('message').notNull(),
	address: text('address'),
	seen: integer('seen', { mode: 'boolean' }).default(false),
	createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
});
