import { NotFoundError } from '../errors/index.ts';
import prisma from '../lib/prisma.ts';
import type {
	CreatePlaceImage,
	UpdatePlaceImage
} from '../schemas/PlaceImage.schema.ts';
import type { PlaceImage } from '../types.ts';

export async function findAllPlaceImages(): Promise<PlaceImage[]> {
	const placeImages = await prisma.placeImage.findMany();

	return placeImages;
}

export async function findPlaceImageById(id: number): Promise<PlaceImage> {
	const placeImage = await prisma.placeImage.findUnique({
		where: { id }
	});

	if (!placeImage)
		throw new NotFoundError(`PlaceImage with ID ${id} not found.`);

	return placeImage;
}

export async function insertPlaceImage(
	data: CreatePlaceImage
): Promise<PlaceImage> {
	const placeExists = await prisma.place.findUnique({
		where: { id: data.placeId }
	});

	if (!placeExists)
		throw new NotFoundError(`Place with ID ${data.placeId} not found.`);

	return await prisma.placeImage.create({
		data
	});
}

export async function modifyPlaceImage(
	id: number,
	data: UpdatePlaceImage
): Promise<PlaceImage> {
	await findPlaceImageById(id);

	return await prisma.placeImage.update({
		where: { id },
		data
	});
}

export async function removePlaceImage(id: number): Promise<void> {
	await findPlaceImageById(id);

	await prisma.placeImage.delete({
		where: { id }
	});
}
