import { Router } from 'express';
import * as ReviewController from '../controllers/review.controller.ts';
import validate from './../middlewares/validate.ts';
import {
	createReviewSchema,
	updateReviewSchema
} from '../schemas/review.schema.ts';

const router = Router();

router.get('/', ReviewController.getAllReviews);
router.get('/:id', ReviewController.getReviewById);
router.post('/', validate(createReviewSchema), ReviewController.createReview);
router.put('/:id', validate(updateReviewSchema), ReviewController.updateReview);
router.delete('/:id', ReviewController.deleteReview);

export default router;
