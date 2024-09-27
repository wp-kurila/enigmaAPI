module.exports = {
	apps: [
		{
			name: 'my-node-app',
			script: 'npm',
			args: 'start',
			watch: false,
			env: {
				NODE_ENV: 'production',
			},
		},
	],
};
