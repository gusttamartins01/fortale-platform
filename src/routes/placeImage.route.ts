import { Router } from 'express';
import * as PlaceImageController from '../controllers/placeImage.controller.ts';
import validate from '../middlewares/validate.ts';
import {
	createPlaceImageSchema,
	updatePlaceImageSchema
} from '../schemas/PlaceImage.schema.ts';

const router = Router();

router.get('/', PlaceImageController.getAllPlaceImages);
router.get('/:id', PlaceImageController.getPlaceImageById);
router.post(
	'/',
	validate(createPlaceImageSchema),
	PlaceImageController.createPlaceImage
);
router.put(
	'/:id',
	validate(updatePlaceImageSchema),
	PlaceImageController.updatePlaceImage
);
router.delete('/:id', PlaceImageController.deletePlaceImage);

export default router;
