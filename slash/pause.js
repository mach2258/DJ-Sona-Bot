const { SlashCommandBuilder } = require ("@discordjs/builders")


module.exports = {
    data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription("Pauses the music"),
    run: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guildId)

        if(!queue) return await interaction.editReply(" No songs have been queued")

        queue.setPaused(true)
        await interaction.editReply("Music has been paused! Use `/resume` to resume the music")
    },
}