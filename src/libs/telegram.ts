import TelegramBot, { Message } from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN ?? '';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg: Message) => {
	const chatId = msg.chat.id;

	// Отправляем пользователю сообщение с его chat_id
	bot.sendMessage(chatId, `Ваш chat_id: ${chatId}`);
});

export default bot;
