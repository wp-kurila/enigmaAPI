// import { Message } from 'node-telegram-bot-api';
import bot from '../libs/telegram';
import dotenv from 'dotenv';

dotenv.config();

export const sendMessage = async (body: Record<string, string>): Promise<void> => {
	let message = '';

	for (const [key, value] of Object.entries(body)) {
		if (value) {
			message += `${key}: ${key === 'phone' ? '+' : ''}${value}\n\n`;
		}
	}

	// bot.on('message', async (msg: Message) => {
	// 	const chatId = msg.chat.id;

	// 	// Логируем chat_id в консоль
	// 	console.log(`Chat ID: ${chatId}`);

	// 	// Отправляем пользователю сообщение с его chat_id
	// 	await bot.sendMessage(chatId, `Ваш chat_id: ${chatId}`);
	// 	await bot.sendMessage(chatId, message);
	// });

	await bot.sendMessage(process.env.ALLOWED_CHAT_ID || '', message);
};
