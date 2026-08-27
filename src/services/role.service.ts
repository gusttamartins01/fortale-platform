import { NotFoundError } from '../errors/index.ts';
import { prisma } from '../lib/prisma.ts';
import type { CreateRole, UpdateRole } from '../schemas/role.schema.ts';
import type { Role } from '../types.ts';

export async function findAllRole(): Promise<Role[]> {
	const roles = await prisma.role.findMany();

	return roles;
}

export async function findRoleById(id: number): Promise<Role> {
	const role = await prisma.role.findUnique({
		where: { id }
	});

	if (!role) throw new NotFoundError(`Role with ID ${id} not found.`);

	return role;
}

export async function insertRole(data: CreateRole): Promise<Role> {
	return await prisma.role.create({
		data
	});
}

export async function modifyRole(id: number, data: UpdateRole): Promise<Role> {
	await findRoleById(id);

	return await prisma.role.update({
		where: { id },
		data
	});
}

export async function removeRole(id: number): Promise<void> {
	await findRoleById(id);

	await prisma.role.delete({
		where: { id }
	});
}
