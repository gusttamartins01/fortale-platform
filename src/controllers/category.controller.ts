import type { Request, Response } from 'express';
import type {
	CreateCategory,
	UpdateCategory
} from '../schemas/category.schema.ts';
import * as CategoryService from '../services/category.service.ts';

export async function getAllCategories(_request: Request, response: Response) {
	const category = await CategoryService.findAllCategories();

	response.status(200).json(category);
}

export async function getCategoryById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const caregory = await CategoryService.findCategoryById(id);

	response.status(200).json(caregory);
}

export async function createCategory(request: Request, response: Response) {
	const body = request.body as CreateCategory;

	const category = await CategoryService.insertCategory(body);

	response.status(201).json(category);
}

export async function updateCategory(request: Request, response: Response) {
	const id = Number(request.params.id);
	const body = request.body as UpdateCategory;

	const category = await CategoryService.modifyCategory(id, body);

	response.status(200).json(category);
}

export async function deleteCategory(request: Request, response: Response) {
	const id = Number(request.params.id);

	await CategoryService.removeCategory(id);

	response.status(204).send();
}
