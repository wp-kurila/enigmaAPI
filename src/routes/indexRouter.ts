import { Router } from 'express';
import { body } from 'express-validator';
import { postMessage } from '../controllers/messageController';

const router: Router = Router();

/**
 * @swagger
 * /api:
 *   post:
 *     description: Welcome to the TypeScript Express app
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *             required:
 *               - name
 *               - age
 *     responses:
 *       200:
 *         description: Returns a welcome message
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 stack:
 *                   type: string
 *                   description: Stack trace of the error (for debugging)
 */

router.post(
	'/',
	[
		body('name').notEmpty().withMessage('Name is required'),
		body('phone')
			.notEmpty()
			.withMessage('Phone is required')
			.isNumeric()
			.withMessage('Phone must be a valid number')
			.isLength({ min: 10, max: 15 })
			.withMessage('Phone must be between 10 and 15 digits'),
		body('email').optional().isEmail().withMessage('Please enter a valid email address'),
	],
	postMessage,
);

export default router;
