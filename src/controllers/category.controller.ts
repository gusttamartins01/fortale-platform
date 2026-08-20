import type { Request, Response } from 'express';
import type {
	CreateCategory,
	UpdateCategory
} from '../schemas/category.schema.ts';
import * as CategoryService from '../services/category.service.ts';

export function getAllCategories(_request: Request, response: Response) {
	const category = CategoryService.findAllCategories();

	response.status(200).json(category);
}

export function getCategoryById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const caregory = CategoryService.findCategoryById(id);

	response.status(200).json(caregory);
}

export function createCategory(request: Request, response: Response) {
	const { name, description } = request.body as CreateCategory;

	const category = CategoryService.insertCategory({
		name,
		description
	});

	response.status(201).json(category);
}

export function updateCategory(request: Request, response: Response) {
	const id = Number(request.params.id);
	const { name, description } = request.body as UpdateCategory;

	const category = CategoryService.modifyCategory(id, {
		name,
		description
	});

	response.status(200).json(category);
}

export function deleteCategory(request: Request, response: Response) {
	const id = Number(request.params.id);

	CategoryService.removeCategory(id);

	response.status(204).send();
}
