import { NotFoundError } from '../errors/index.ts';
import { categories } from './../mocks/category.mock.ts';
import type {
	CreateCategory,
	UpdateCategory
} from '../schemas/category.schema.ts';
import type { Category } from '../types.ts';

export function findAllCategories(): Category[] {
	return categories;
}

export function findCategoryById(id: number): Category {
	const category = categories.find((c) => c.id === id);

	if (!category) throw new NotFoundError(`Categeory with ID ${id} not found.`);

	return category;
}

export function insertCategory({
	name,
	description
}: CreateCategory): Category {
	const category = {
		id: categories[categories.length - 1].id + 1,
		name,
		description,
		createdAt: '2026-08-19'
	};

	categories.push(category);

	return category;
}

export function modifyCategory(
	id: number,
	{ name, description }: UpdateCategory
): Category {
	const category = categories.find((c) => c.id === id);

	if (!category) throw new NotFoundError(`Categeory with ID ${id} not found.`);

	if (name) category.name = name;
	if (description) category.description = description;

	return category;
}

export function removeCategory(id: number): void {
	const index = categories.findIndex((c) => c.id === id);

	if (index === -1)
		throw new NotFoundError(`Category with ID ${id} not found.`);

	categories.splice(index, 1);
}
