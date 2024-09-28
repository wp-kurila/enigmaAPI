import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { sendMessage } from '../services/messageService';

export const postMessage = async (req: Request, res: Response) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array().map((err) => err.msg) });
	}

	const { body } = req;

	try {
		await sendMessage(body);
		res.send({ ok: true });
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ message: error.message });
		} else {
			res.status(500).json({ message: 'Unknown error occurred' });
		}
	}
};
