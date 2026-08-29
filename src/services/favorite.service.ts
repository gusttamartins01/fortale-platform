import { NotFoundError } from '../errors/index.ts';
import prisma from '../lib/prisma.ts';
import type { CreateFavorite } from '../schemas/favorite.schema.ts';
import type { Favorite } from '../types.ts';

export async function findAllFavorites(): Promise<Favorite[]> {
	const favorites = await prisma.favorite.findMany();

	return favorites;
}

export async function findFavoriteById(id: number): Promise<Favorite> {
	const favorite = await prisma.favorite.findUnique({
		where: { id }
	});

	if (!favorite) throw new NotFoundError(`Favorite with ID ${id} not found.`);

	return favorite;
}

export async function insertFavorite(data: CreateFavorite): Promise<Favorite> {
	return await prisma.favorite.create({
		data
	});
}

export async function removeFavorite(id: number): Promise<void> {
	await findFavoriteById(id);

	await prisma.favorite.delete({
		where: { id }
	});
}
