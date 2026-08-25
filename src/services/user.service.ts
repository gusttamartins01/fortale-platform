import { NotFoundError } from '../errors/index.ts';
import { prisma } from '../lib/prisma.ts';
import type { CreateUser, UpdateUser } from '../schemas/user.schema.ts';
import type { User } from '../types.ts';

export async function findAllUsers(): Promise<User[]> {
	const users = await prisma.user.findMany();

	return users;
}

export async function findUserById(id: number): Promise<User> {
	const user = await prisma.user.findUnique({
		where: { id }
	});

	if (!user) throw new NotFoundError(`User with ID ${id} not found.`);

	return user;
}

export async function insertUser(data: CreateUser): Promise<User> {
	return await prisma.user.create({
		data
	});
}

export async function modifyUser(id: number, data: UpdateUser): Promise<User> {
	await findUserById(id);

	return await prisma.user.update({
		where: { id },
		data
	});
}

export async function removeUser(id: number): Promise<void> {
	await findUserById(id);

	await prisma.user.delete({
		where: { id }
	});
}
