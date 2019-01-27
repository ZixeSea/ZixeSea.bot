exports.run = (client, message, args) => {
    try {
        let embed = new client.discord.RichEmbed()
            .setAuthor("ZixeSea's Commands")
            .setColor("#1177ff")
            .addField("Normal commands:", client.strings.normal_commands)
            .addField("Staff commands:", client.strings.staff_commands)
            .addField("Owner commands:", client.strings.owner_commands);

        message.reply(embed);
    } catch (error) {
        console.log(client.strings.commands_error);
    }
}