import type { Request, Response } from 'express';
import type { CreatePlace, UpdatePlace } from '../schemas/place.schema.ts';
import * as PlaceService from '../services/place.service.ts';

export async function getAllPlaces(_request: Request, response: Response) {
	const places = await PlaceService.findAllPlaces();

	response.status(200).json(places);
}

export async function getPlaceById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const place = await PlaceService.findPlaceById(id);

	response.status(200).json(place);
}

export async function createPlace(request: Request, response: Response) {
	const body = request.body as CreatePlace;

	const place = await PlaceService.insertPlace(body);

	response.status(201).json(place);
}

export async function updatePlace(request: Request, response: Response) {
	const id = Number(request.params.id);
	const body = request.body as UpdatePlace;

	const place = await PlaceService.modifyPlace(id, body);

	response.status(200).json(place);
}

export async function deletePlace(request: Request, response: Response) {
	const id = Number(request.params.id);

	await PlaceService.removePlace(id);

	response.status(204).send();
}
