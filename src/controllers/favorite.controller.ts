import type { Request, Response } from 'express';
import type { CreateFavorite } from '../schemas/favorite.schema.ts';
import * as FavoriteService from '../services/favorite.service.ts';

export async function getAllFavorites(_request: Request, response: Response) {
	const favorites = await FavoriteService.findAllFavorites();

	response.status(200).json(favorites);
}

export async function getFavoriteById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const favorite = await FavoriteService.findFavoriteById(id);

	response.status(200).json(favorite);
}

export async function createFavorite(request: Request, response: Response) {
	const body = request.body as CreateFavorite;

	const favorite = await FavoriteService.insertFavorite(body);

	response.status(201).json(favorite);
}

export async function deleteFavorite(request: Request, response: Response) {
	const id = Number(request.params.id);

	await FavoriteService.removeFavorite(id);

	response.status(204).send();
}
