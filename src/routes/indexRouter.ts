import { Request, Response, Router } from 'express';

const router: Router = Router();

/**
 * @swagger
 * /:
 *   post:
 *     description: Welcome to the TypeScript Express app
 *     responses:
 *       200:
 *         description: Returns a welcome message
 */

router.post('/', (req: Request, res: Response) => {
	res.send('Hello from NodeJS');
});

export default router;
