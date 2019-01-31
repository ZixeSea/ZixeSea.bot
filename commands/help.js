exports.run = (client, message, args) => {
    let embed = new client.discord.RichEmbed()
        .setAuthor("ZixeSea's Commands")
        .setColor("#1177ff")
        .addField("Normal commands:", client.strings.normal_commands)
        .addField("Staff commands:", client.strings.staff_commands)
        .addField("Owner commands:", client.strings.owner_commands);

    message.reply(embed);
};