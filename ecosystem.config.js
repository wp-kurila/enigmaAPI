module.exports = {
	apps: [
		{
			name: 'enigmaApi',
			script: 'npm',
			args: 'start',
			watch: false,
			env: {
				NODE_ENV: 'production',
			},
		},
	],
};
