import type { Request, Response } from 'express';
import type { CreateUser, UpdateUser } from '../schemas/user.schema.ts';
import * as UserService from '../services/user.service.ts';

export async function getAllUsers(_request: Request, response: Response) {
	const users = await UserService.findAllUsers();

	response.status(200).json(users);
}

export async function getUserById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const user = await UserService.findUserById(id);

	response.status(200).json(user);
}

export async function createUser(request: Request, response: Response) {
	const body = request.body as CreateUser;

	const user = await UserService.insertUser(body);

	response.status(201).json(user);
}

export async function updateUser(request: Request, response: Response) {
	const id = Number(request.params.id);
	const body = request.body as UpdateUser;

	const user = await UserService.modifyUser(id, body);

	response.status(200).json(user);
}

export async function deleteUser(request: Request, response: Response) {
	const id = Number(request.params.id);

	await UserService.removeUser(id);

	response.status(204).send();
}
