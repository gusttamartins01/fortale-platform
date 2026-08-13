import { NotFoundError } from '../errors/index.ts';
import { users } from '../mocks/user.mock.ts';
import type { CreateUser, UpdateUser } from '../schemas/user.schema.ts';
import type { User } from '../types.ts';

export function findAllUsers(): User[] {
	return users;
}

export function findUserById(id: number): User {
	const user = users.find((u) => u.id === id);

	if (!user) throw new NotFoundError(`Client with ID ${id} not found.`);

	return user;
}

export function insertUser({ name, email, phone, password }: CreateUser): User {
	const user: User = {
		id: users[users.length - 1].id + 1,
		name,
		email,
		phone,
		password,
		created_at: '2026-08-12',
		updated_at: '2026-08-12'
	};

	users.push(user);

	return user;
}

export function modifyUser(
	id: number,
	{ name, email, phone, password }: UpdateUser
): User {
	const user = users.find((u) => u.id === id);

	if (!user) throw new NotFoundError(`Client with ID ${id} not found.`);

	if (name) user.name = name;
	if (email) user.email = email;
	if (phone) user.phone = phone;
	if (password) user.password = password;

	return user;
}

export function removeUser(id: number): void {
	const index = users.findIndex((u) => u.id === id);

	if (index === -1) throw new NotFoundError(`Client with ID ${id} not found.`);

	users.splice(index, 1);
}
