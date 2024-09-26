import whatsappClient from '@libs/whatsappClient';

export const sendMessage = async (body: Record<string, string>) => {
	let message = '';

	for (const [key, value] of Object.entries(body)) {
		if (value) {
			message += `${key}: ${key === 'phone' ? '+' : ''}${value}\n\n`;
		}
	}

	await whatsappClient.sendMessage('66994091748@c.us', message);
};
