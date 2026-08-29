import { Router } from 'express';
import * as FavoriteController from '../controllers/favorite.controller.ts';
import validate from '../middlewares/validate.ts';
import { createFavoriteSchema } from '../schemas/favorite.schema.ts';

const router = Router();

router.get('/', FavoriteController.getAllFavorites);
router.get('/:id', FavoriteController.getFavoriteById);
router.post(
	'/',
	validate(createFavoriteSchema),
	FavoriteController.createFavorite
);
router.delete('/:id', FavoriteController.deleteFavorite);

export default router;
