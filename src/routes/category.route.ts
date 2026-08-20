import { Router } from 'express';
import * as CategoryController from '../controllers/category.controller.ts';
import validate from '../middlewares/validate.ts';
import {
	createCategorySchema,
	updateCategorySchema
} from '../schemas/category.schema.ts';

const router = Router();

router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);
router.post(
	'/',
	validate(createCategorySchema),
	CategoryController.createCategory
);
router.put(
	'/:id',
	validate(updateCategorySchema),
	CategoryController.updateCategory
);
router.delete('/:id', CategoryController.deleteCategory);

export default router;
