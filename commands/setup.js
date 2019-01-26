exports.run = (client, message, args) => {
    try {
        let embed = new client.discord.RichEmbed()
            .setAuthor("ZixeSea's Setup")
            .setColor("#1177ff")
            .addField("Main Desktop", client.strings.setup_desktop)
            .addField("Accessories", client.strings.setup_accessories)
            .addField("Extra", client.strings.setup_extra)

        message.reply(embed);
    } catch (error) {
        console.log(client.strings.setup_error);
    }
}