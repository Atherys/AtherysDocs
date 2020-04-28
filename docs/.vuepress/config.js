const base = 'https://docs.atherys.com/';
const plugins = [
	'Core', 'Economy', 'Items', 'Parties', 'Quests', 'Roleplay', 'RPG', 'Script', 'Skills', 'Towns'
];
const downloadItems = [];
const javadocItems = [];

function baseURL(path) {
	return base + path;
}

function javadocs(path) {
	return baseURL('javadocs/') + path;
}

function downloads(path) {
	return baseURL('downloads/') + path;
}

plugins.forEach(plugin => {
	downloadItems.push({text: plugin, link: downloads('Atherys' + plugin + '-all.jar')});
	javadocItems.push({text: plugin, link: javadocs('Atherys' + plugin)});
});

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
					{ text: 'AtherysQuests', link: '/plugins/AtherysQuests/' },
					{ text: 'AtherysItems', link: '/plugins/AtherysItems/Item-Editor' },
					{ text: 'AtherysRPG', link: '/plugins/AtherysRPG/' },
				]
			},
			{ 
				text: 'Downloads',  
				items: downloadItems
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
					{ text: 'Plugin Architecture', link: '/developers/Plugin-Architecture' },
					{ text: 'Persistence', link: '/developers/Database-Migrations' }
				]
			},
			{
				text: 'Javadocs',
				items: javadocItems
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
			],
			'/plugins/AtherysQuests/': [
				{
					title: 'A\'therys Quests',
					collapsable: false,
					children: [
						['/plugins/AtherysQuests/', 'Home'],
						'Usage',
						'Quest-Editor'
					]
				}
			]
		}
	}
}
