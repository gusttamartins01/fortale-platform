import { Router } from 'express';
import * as RoleController from '../controllers/role.controller.ts';
import validate from '../middlewares/validate.ts';
import { createRoleSchema, updateRoleSchema } from '../schemas/role.schema.ts';

const router = Router();

router.get('/', RoleController.getAllRole);
router.get('/:id', RoleController.getRoleById);
router.post('/', validate(createRoleSchema), RoleController.createRole);
router.put('/:id', validate(updateRoleSchema), RoleController.updateRole);
router.delete('/:id', RoleController.deleteRole);

export default router;
