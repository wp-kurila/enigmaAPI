import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const whatsappClient = new Client({
	authStrategy: new LocalAuth(),
	puppeteer: {
		headless: true,
		args: ['--enable-gpu'],
	},
});

whatsappClient.on('qr', (qr) => qrcode.generate(qr, { small: true }));
whatsappClient.on('ready', () => console.log('whatsappClient is ready'));

whatsappClient.on('message', (message) => {
	console.log('message.from');
	console.log(message.from);
});

export default whatsappClient;
