module.exports = {
	title: 'A\'therys Docs',
	description: 'Documentation for all things A\'therys',
	base: "/",
	themeConfig: {
		nav: [
			{
				text: 'Plugins',
				items: [
					{ text: 'AtherysRoleplay', link: '/plugins/AtherysRoleplay/' },
					{ text: 'AtherysItems', link: '/plugins/AtherysItems/Item-Editor' },
					{ text: 'AtherysRPG', link: '/plugins/AtherysRPG/' },
					{ text: 'AtherysQuests', link: '/plugins/AtherysQuests/' }
				]
			},
			{ 
				text: 'Scripting',
				items: [
					{ text: 'Base', link: '/scripting/' },
					{ text: 'Quests', link: '/scripting/quests/' },
					{ text: 'NPCs', link: '/scripting/npcs/NPC-Functions' }
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
					{ text: 'Core', link: 'https://docs.atherys.com/javadocs/AtherysCore' },
					{ text: 'Items', link: 'https://docs.atherys.com/javadocs/AtherysItems' },
					{ text: 'Parties', link: 'https://docs.atherys.com/javadocs/AtherysParties' },
					{ text: 'Quests', link: 'https://docs.atherys.com/javadocs/AtherysQuests' },
					{ text: 'Roleplay', link: 'https://docs.atherys.com/javadocs/AtherysRoleplay' },
					{ text: 'RPG', link: 'https://docs.atherys.com/javadocs/AtherysRPG' },
					{ text: 'Script', link: 'https://docs.atherys.com/javadocs/AtherysScript' },
					{ text: 'Skills', link: 'https://docs.atherys.com/javadocs/AtherysSkills' },
					{ text: 'Towns', link: 'https://docs.atherys.com/javadocs/AtherysTowns' }
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
