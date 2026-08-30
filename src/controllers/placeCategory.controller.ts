import type { Request, Response } from 'express';
import type { CreatePlaceCategory } from '../schemas/placeCategory.schema.ts';
import * as PlaceCategoryService from '../services/placeCategory.service.ts';

export async function getAllPlaceCategories(
	_request: Request,
	response: Response
) {
	const placeCategories = await PlaceCategoryService.findAllPlaceCategories();

	response.status(200).json(placeCategories);
}

export async function getPlaceCategoryById(
	request: Request,
	response: Response
) {
	const placeId = Number(request.params.placeId);
	const categoryId = Number(request.params.categoryId);

	const placeCategory = await PlaceCategoryService.findPlaceCategoryById(
		placeId,
		categoryId
	);

	response.status(200).json(placeCategory);
}

export async function createPlaceCategory(
	request: Request,
	response: Response
) {
	const body = request.body as CreatePlaceCategory;

	const placeCategory = await PlaceCategoryService.insertPlaceCategory(body);

	response.status(201).json(placeCategory);
}

export async function deletePlaceCategory(
	request: Request,
	response: Response
) {
	const placeId = Number(request.params.placeId);
	const categoryId = Number(request.params.categoryId);

	await PlaceCategoryService.removePlaceCategory(placeId, categoryId);

	response.status(204).send();
}
