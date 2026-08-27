import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../prisma/src/generated/client.ts';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error('DATABASE_URL não foi definida.');
}

const adapter = new PrismaPg({
	connectionString
});

export const prisma = new PrismaClient({
	adapter
});
