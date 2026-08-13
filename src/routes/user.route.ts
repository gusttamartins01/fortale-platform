import { Router } from 'express';
import * as UserController from '../controllers/user.controller.ts';
import validate from '../middlewares/validate.ts';
import { createUserSchema, updateUserSchema } from '../schemas/user.schema.ts';

const router = Router();

router.get('/', UserController.getAllUser);
router.get('/:id', UserController.getUserById);
router.post('/', validate(createUserSchema), UserController.createUser);
router.put('/:id', validate(updateUserSchema), UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
