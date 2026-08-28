import { Router } from 'express';
import * as PlaceController from '../controllers/place.controller.ts';
import validate from './../middlewares/validate.ts';
import {
	createPlaceSchema,
	updatePlaceSchema
} from '../schemas/place.schema.ts';

const router = Router();

router.get('/', PlaceController.getAllPlaces);
router.get('/:id', PlaceController.getPlaceById);
router.post('/', validate(createPlaceSchema), PlaceController.createPlace);
router.put('/:id', validate(updatePlaceSchema), PlaceController.updatePlace);
router.delete('/:id', PlaceController.deletePlace);

export default router;
