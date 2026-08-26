import { NotFoundError } from '../errors/index.ts';
import { prisma } from '../lib/prisma.ts';
import type {
	CreateCategory,
	UpdateCategory
} from '../schemas/category.schema.ts';
import type { Category } from '../types.ts';

export async function findAllCategories(): Promise<Category[]> {
	const categories = await prisma.category.findMany();

	return categories;
}

export async function findCategoryById(id: number): Promise<Category> {
	const category = await prisma.category.findUnique({
		where: { id }
	});

	if (!category) throw new NotFoundError(`Category with ID ${id} not found.`);

	return category;
}

export async function insertCategory(data: CreateCategory): Promise<Category> {
	return await prisma.category.create({
		data
	});
}

export async function modifyCategory(
	id: number,
	data: UpdateCategory
): Promise<Category> {
	await findCategoryById(id);

	return await prisma.category.update({
		where: { id },
		data
	});
}

export async function removeCategory(id: number): Promise<void> {
	await findCategoryById(id);

	await prisma.category.delete({
		where: { id }
	});
}
