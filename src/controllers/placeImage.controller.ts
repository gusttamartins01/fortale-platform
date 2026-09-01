import type { Request, Response } from 'express';
import type {
	CreatePlaceImage,
	UpdatePlaceImage
} from '../schemas/PlaceImage.schema.ts';
import * as PlaceImageService from '../services/placeImage.service.ts';

export async function getAllPlaceImages(_request: Request, response: Response) {
	const placeImages = await PlaceImageService.findAllPlaceImages();

	response.status(200).json(placeImages);
}

export async function getPlaceImageById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const placeImage = await PlaceImageService.findPlaceImageById(id);

	response.status(200).json(placeImage);
}

export async function createPlaceImage(request: Request, response: Response) {
	const body = request.body as CreatePlaceImage;

	const placeImage = await PlaceImageService.insertPlaceImage(body);

	response.status(201).json(placeImage);
}

export async function updatePlaceImage(request: Request, response: Response) {
	const id = Number(request.params.id);
	const body = request.body as UpdatePlaceImage;

	const placeImage = await PlaceImageService.modifyPlaceImage(id, body);

	response.status(200).json(placeImage);
}

export async function deletePlaceImage(request: Request, response: Response) {
	const id = Number(request.params.id);

	await PlaceImageService.removePlaceImage(id);

	response.status(204).send();
}
