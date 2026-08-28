import { Router } from 'express';
import * as EventController from '../controllers/event.controller.ts';
import validate from '../middlewares/validate.ts';
import {
	createEventSchema,
	updateEventSchema
} from '../schemas/event.schema.ts';

const router = Router();

router.get('/', EventController.getAllEvents);
router.get('/:id', EventController.getEventById);
router.post('/', validate(createEventSchema), EventController.createEvent);
router.put('/:id', validate(updateEventSchema), EventController.updateEvent);
router.delete('/:id', EventController.deleteEvent);

export default router;
