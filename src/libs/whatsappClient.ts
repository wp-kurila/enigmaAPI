import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import dotenv from 'dotenv';

dotenv.config();

const whatsappClient = new Client({
	authStrategy: new LocalAuth(),
	puppeteer:
		process.env.NODE_ENV === 'development'
			? undefined
			: {
					executablePath: '/usr/bin/chromium-browser',
					headless: true,
					args: ['--no-sandbox', '--disable-setuid-sandbox'],
				},
});

whatsappClient.on('qr', (qr) => qrcode.generate(qr, { small: true }));
whatsappClient.on('ready', () => console.log('whatsappClient is ready'));

export default whatsappClient;
