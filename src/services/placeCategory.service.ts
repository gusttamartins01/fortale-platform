import { NotFoundError } from '../errors/index.ts';
import prisma from '../lib/prisma.ts';
import type { CreatePlaceCategory } from '../schemas/placeCategory.schema.ts';
import type { PlaceCategory } from '../types.ts';

export async function findAllPlaceCategories(): Promise<PlaceCategory[]> {
	const placeCategories = await prisma.placeCategory.findMany();

	return placeCategories;
}

export async function findPlaceCategoryById(
	placeId: number,
	categoryId: number
): Promise<PlaceCategory> {
	const placeCategory = await prisma.placeCategory.findUnique({
		where: {
			placeId_categoryId: {
				placeId,
				categoryId
			}
		}
	});

	if (!placeCategory)
		throw new NotFoundError(
			`PlaceCategory not found for placeId ${placeId} and categoryId ${categoryId}.`
		);

	return placeCategory;
}

export async function insertPlaceCategory(
	data: CreatePlaceCategory
): Promise<PlaceCategory> {
	return await prisma.placeCategory.create({
		data
	});
}

export async function removePlaceCategory(
	placeId: number,
	categoryId: number
): Promise<void> {
	await findPlaceCategoryById(placeId, categoryId);

	await prisma.placeCategory.delete({
		where: {
			placeId_categoryId: {
				placeId,
				categoryId
			}
		}
	});
}
