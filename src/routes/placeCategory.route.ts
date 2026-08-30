import { Router } from 'express';
import * as PlaceCategoryController from '../controllers/placeCategory.controller.ts';
import validate from '../middlewares/validate.ts';
import { createPlaceCategorySchema } from '../schemas/placeCategory.schema.ts';

const router = Router();

router.get('/', PlaceCategoryController.getAllPlaceCategories);
router.get(
	'/:placeId/:categoryId',
	PlaceCategoryController.getPlaceCategoryById
);
router.post(
	'/',
	validate(createPlaceCategorySchema),
	PlaceCategoryController.createPlaceCategory
);
router.delete(
	'/:placeId/:categoryId',
	PlaceCategoryController.deletePlaceCategory
);

export default router;
