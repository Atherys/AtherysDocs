module.exports = {
	title: 'A\'therys Scripting',
	description: 'Documentation for the A\'therys Scripting plugin',
	base: "/docs/",
	themeConfig: {
		nav: [
			{text: 'Quests', link: '/quests/'},
			{text: 'NPCs', link: '/npcs/'},
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
						'Reward-Functions'
					]
				}
			],
			'/npcs/': [
				{
					title: 'Function Reference',
					collapsable: false,
					children: [
						'NPC-Functions'
					]
				}
			],
			'/': [
				{
					title: 'Guides & Tutorials',
					collapsable: false,
					children: [
						'A-bear-bones-introduction-to-JavaScript'
					]
				},
				{
					title: 'Function Reference',
					collapsable: false,
					children: [
						'Functions',
						'Block-Functions',
						'Damage-Functions',
						'Entity-Functions',
						'Event-Functions',
						'Item-Functions',
						'Location-Functions',
						'Particle-Functions',
						'Player-Functions',
						'Potion-Functions',
						'Sound-Functions',
						'Task-Functions',
						'Text-Functions',
						'Utility-Functions',
					]
				},
				{
					title: 'Other',
					collapsable: false,
					children: [
						'The-srun-Command'
					]
				}
			]
		},
		repo: 'Atherys-Horizons/AtherysScript'
	}
}
