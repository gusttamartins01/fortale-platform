import type { Request, Response } from 'express';
import type { CreateUser, UpdateUser } from '../schemas/user.schema.ts';
import * as UserService from '../services/user.service.ts';

export function getAllUsers(_request: Request, response: Response) {
	const user = UserService.findAllUsers();

	response.status(200).json(user);
}

export function getUserById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const user = UserService.findUserById(id);

	response.status(200).json(user);
}

export function createUser(request: Request, response: Response) {
	const { name, email, phone, password } = request.body as CreateUser;

	const user = UserService.insertUser({
		name,
		email,
		phone,
		password
	});

	response.status(201).json(user);
}

export function updateUser(request: Request, response: Response) {
	const id = Number(request.params.id);
	const { name, email, phone, password } = request.body as UpdateUser;

	const user = UserService.modifyUser(id, {
		name,
		email,
		phone,
		password
	});

	response.status(200).json(user);
}

export function deleteUser(request: Request, response: Response) {
	const id = Number(request.params.id);

	UserService.removeUser(id);

	response.status(204).send();
}
