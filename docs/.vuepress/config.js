module.exports = {
	title: 'A\'therys Docs',
	description: 'Documentation for all things A\'therys',
	base: "/docs/",
	themeConfig: {
		nav: [
			{
				text: 'Plugins',
				items: [
					{ text: 'AtherysRoleplay', link: '/plugins/AtherysRoleplay/' },
				]
			},
			{ 
				text: 'Scripting',
				items: [
					{ text: 'Base', link: '/scripting/' },
					{ text: 'Quests', link: '/scripting/quests/' },
					{ text: 'NPCs', link: '/scripting/npcs/' }
				]
			},
			{
				text: 'For Developers',
				items: [
					{ text: 'Plugin Architecture', link: '/developers/Plugin-Architecture' }
				]
			},
			{
				text: 'Javadocs',
				items: [
					{ text: 'Core', link: 'https://atherys.com/docs/AtherysCore' },
					{ text: 'Parties', link: 'https://atherys.com/docs/AtherysParties' },
					{ text: 'Quests', link: 'https://atherys.com/docs/AtherysQuests' },
					{ text: 'Roleplay', link: 'https://atherys.com/docs/AtherysRoleplay' },
					{ text: 'RPG', link: 'https://atherys.com/docs/AtherysRPG' },
					{ text: 'Script', link: 'https://atherys.com/docs/AtherysScript' },
					{ text: 'Towns', link: 'https://atherys.com/docs/AtherysTowns' }
				]
			},
			{ text: 'A\'therys', link: 'https://atherys.com' },
			{ text: 'GitHub', link: 'https://github.com/Atherys-Horizons/' }
		],
		sidebar: {
			'/scripting/quests/': [
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
			'/scripting/npcs/': [
				{
					title: 'Function Reference',
					collapsable: false,
					children: [
						'NPC-Functions'
					]
				}
			],
			'/scripting/': [
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
						'Utility-Functions'
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
		}
	}
}
