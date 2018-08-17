module.exports = {
	title: 'A\'therys Scripting',
	description: 'Documentation for the A\'therys Scripting plugin',
	base: "/docs",
	themeConfig: {
		nav: [
			{text: 'A\'therys', link: 'https://atherys.com'},
			{
		],
		sidebar: {
			'/': [
				 '/A-bear-bones-introduction-to-JavaScript',
				 '/Functions',
				 '/Block-Functions',
				 '/Damage-Functions',
				 '/Entity-Functions',
				 '/Event-Functions',
				 '/Item-Functions',
				 '/Location-Functions',
				 '/Particle-Functions',
				 '/Player-Functions',
				 '/Potion-Functions',
				 '/Sound-Functions',
				 '/Task-Functions',
				 '/Text-Functions',
				 '/Utility-Functions',
				 '/The-srun-Command'
			],
			'/quests/' : [
				 'Dialog',
				 'Events',
				 'Objectives',
				 'Quest-Creation',
				 'Requirements',
				 'Retrieval',
				 'Rewards',
			]
		},
		repo: 'Atherys-Horizons/AtherysScript'
	}
}
