module.exports = {
	title: 'A\'therys Scripting',
	description: 'Documentation for the A\'therys Scripting plugin',
	base: "/docs/",
	themeConfig: {
		nav: [
			{text: 'Quests', link: '/quests/'},
			{text: 'A\'therys', link: 'https://atherys.com'},
		],
		sidebar: {
			'/quests/': [
				{
					title: 'Guides',
					collapsable: false,
					children: [
						'Writing-a-Quest',
						'Writing-a-Dialog',
						'Examples'
					]
				},
				{
					title: 'Function Reference',
					collapsable: false,
					children: [	
						'Dialog-Functions',
						'Event-Functions',
						'Objective-Functions',
						'Quest-Functions',
						'Requirement-Functions',
						'Retrieval-Functions',
						'Reward-Functions'
					]
				}
			],
			'/': [
				 'A-bear-bones-introduction-to-JavaScript',
				 'Functions',
				 'Block-Functions',
				 'Damage-Functions',
				 'Entity-Functions',
				 'Event-Functions',
				 'Item-Functions',
				 'Location-Functions',
				 'Effect-Functions',
				 'Player-Functions',
				 'Potion-Functions',
				 'Sound-Functions',
				 'Task-Functions',
				 'Text-Functions',
				 'Util-Functions',
				 'The-srun-Command'
			]
		},
		repo: 'Atherys-Horizons/AtherysScript'
	}
}
