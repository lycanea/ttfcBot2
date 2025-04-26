const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');

const metaData = JSON.parse(fs.readFileSync('meta.json', 'utf-8'));

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Some information about mwonbot!'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setTitle('The Tristangential Bot :3')
            .setDescription('ttfcbot is an [open source](https://github.com/lycanea/ttfcBot2) discord bot made by [lycanea](https://lycanea.dev) for this discord server :3')
			.setColor(16777048)
			.setFooter({ text: `Made with love by lycanea (Version ${metaData.version})`, icon_url: "https://lycanea.dev/avatar.png"});

		await interaction.reply({ content: '', embeds: [embed] });
	},
};