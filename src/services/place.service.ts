import { NotFoundError } from '../errors/index.ts';
import prisma from '../lib/prisma.ts';
import type { CreatePlace, UpdatePlace } from '../schemas/place.schema.ts';
import type { Place } from '../types.ts';

export async function findAllPlaces(): Promise<Place[]> {
	const places = await prisma.place.findMany();

	return places;
}

export async function findPlaceById(id: number): Promise<Place> {
	const place = await prisma.place.findUnique({
		where: { id }
	});

	if (!place) throw new NotFoundError(`Place with ID ${id} not found.`);

	return place;
}

export async function insertPlace(data: CreatePlace): Promise<Place> {
	return await prisma.place.create({
		data
	});
}

export async function modifyPlace(
	id: number,
	data: UpdatePlace
): Promise<Place> {
	await findPlaceById(id);

	return await prisma.place.update({
		where: { id },
		data
	});
}

export async function removePlace(id: number): Promise<void> {
	await findPlaceById(id);

	await prisma.place.delete({
		where: { id }
	});
}
