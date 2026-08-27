import type { Request, Response } from 'express';
import type { CreateRole, UpdateRole } from '../schemas/role.schema.ts';
import * as RoleService from '../services/role.service.ts';

export async function getAllRole(_request: Request, response: Response) {
	const roles = await RoleService.findAllRole();

	response.status(200).json(roles);
}

export async function getRoleById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const role = await RoleService.findRoleById(id);

	response.status(200).json(role);
}

export async function createRole(request: Request, response: Response) {
	const body = request.body as CreateRole;

	const role = await RoleService.insertRole(body);

	response.status(201).json(role);
}

export async function updateRole(request: Request, response: Response) {
	const id = Number(request.params.id);
	const body = request.body as UpdateRole;

	const role = await RoleService.modifyRole(id, body);

	response.status(200).json(role);
}

export async function deleteRole(request: Request, response: Response) {
	const id = Number(request.params.id);

	await RoleService.removeRole(id);

	response.status(204).send();
}
