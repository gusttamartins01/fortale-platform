import { NotFoundError } from '../errors/index.ts';
import prisma from '../lib/prisma.ts';
import type { CreateReview, UpdateReview } from '../schemas/review.schema.ts';
import type { Review } from '../types.ts';

export async function findAllReviews(): Promise<Review[]> {
	const reviews = await prisma.review.findMany();

	return reviews;
}

export async function findReviewById(id: number): Promise<Review> {
	const review = await prisma.review.findUnique({
		where: { id }
	});

	if (!review) throw new NotFoundError(`Review with ID ${id} not found.`);

	return review;
}

export async function insertReview(data: CreateReview): Promise<Review> {
	const userExists = await prisma.user.findUnique({
		where: { id: data.userId }
	});

	if (!userExists) {
		throw new NotFoundError(`User with ID ${data.userId} not found.`);
	}

	const placeExists = await prisma.place.findUnique({
		where: { id: data.placeId }
	});

	if (!placeExists) {
		throw new NotFoundError(`Place with ID ${data.placeId} not found.`);
	}

	return await prisma.review.create({
		data
	});
}

export async function modifyReview(
	id: number,
	data: UpdateReview
): Promise<Review> {
	await findReviewById(id);

	return await prisma.review.update({
		where: { id },
		data
	});
}

export async function removeReview(id: number): Promise<void> {
	await findReviewById(id);

	await prisma.review.delete({
		where: { id }
	});
}
