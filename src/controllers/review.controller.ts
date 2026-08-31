import type { Request, Response } from 'express';
import type { CreateReview, UpdateReview } from '../schemas/review.schema.ts';
import * as ReviewService from '../services/review.service.ts';

export async function getAllReviews(_request: Request, response: Response) {
	const reviews = await ReviewService.findAllReviews();

	response.status(200).json(reviews);
}

export async function getReviewById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const review = await ReviewService.findReviewById(id);

	response.status(200).json(review);
}

export async function createReview(request: Request, response: Response) {
	const body = request.body as CreateReview;

	const review = await ReviewService.insertReview(body);

	response.status(201).json(review);
}

export async function updateReview(request: Request, response: Response) {
	const id = Number(request.params.id);
	const body = request.body as UpdateReview;

	const review = await ReviewService.modifyReview(id, body);

	response.status(200).json(review);
}

export async function deleteReview(request: Request, response: Response) {
	const id = Number(request.params.id);

	await ReviewService.removeReview(id);

	response.status(204).send();
}
