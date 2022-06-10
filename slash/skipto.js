const { SlashCommandBuilder } = require ("@discordjs/builders")


module.exports = {
    data: new SlashCommandBuilder()
        .setName("skipto")
        .setDescription("Skips to a certain track #")
        .addNumberOption((Option) => 
            Option.setName("tracknumber").setDescription("The track to skip to").setMinValue(1).setRequired(true)),
    run: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guildId)

        if(!queue) return await interaction.editReply(" No songs have been queued")

        const trackNum = interaction.options.getNumber("tracknumber")
        if (trackNum > queue.tracks.length)
            return await interaction.editReply("Invalid track number")
        queue.skipto(trackNum - 1)

        await interaction.editReply(`Skipped ahead to track number ${trackNum}`)
    },
}