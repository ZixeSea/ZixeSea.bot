exports.run = async (client, message, args) => {
    try {
        const m = await message.channel.send(client.strings.ping_message);
        let embed = new client.discord.RichEmbed()
            .setColor("#ffaa11")
            .addField(":signal_strength: Latency", `${m.createdTimestamp - message.createdTimestamp} ms.`, true)
            .addField(":computer: API", `${Math.round(client.ping)} ms.`, true)
            .setTimestamp();

        message.channel.send(embed);
    } catch (error) {
        console.error(error);
        message.reply(client.strings.ping_error);
    }
}