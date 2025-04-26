const { SlashCommandBuilder, EmbedBuilder, MessageFlags } = require('discord.js');
const fs = require('fs');

const metaData = JSON.parse(fs.readFileSync('meta.json', 'utf-8'));

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chat')
		.setDescription('ping chat revive :3')
        .addSubcommand(subcommand =>
			subcommand
				.setName('revive')
				.setDescription('ping chat revive :3')),
	async execute(interaction) {

        if ((Math.floor((Date.now() - interaction.client.lastChatRevive)/1000/360)/10) > 6) {
            // chat revive
            await interaction.reply({ content: '<@&1365696407675207701>\n (triggered by <@' + interaction.user.id + `>)` });
            interaction.client.lastChatRevive = Date.now()
        } else {
            // do not the chat revive
            const embed = new EmbedBuilder()
                .setTitle("Nuhuh, no chat revive, it hasn't been 6 hours")
                .setDescription('Hours since last chat revive: ' + (Math.floor((Date.now() - interaction.client.lastChatRevive)/1000/360)/10).toString())
                .setColor(16777048);

            await interaction.reply({ content: '', embeds: [embed], flags: MessageFlags.Ephemeral });
        }
	},
};