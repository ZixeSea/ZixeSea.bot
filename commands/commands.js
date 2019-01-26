exports.run = (client, message, args) => {
    if (message.author.id !== client.config.ownerID) return message.reply(client.strings.not_permissions);
    try {
        message.reply(client.strings.commands_message);
    } catch (error) {
        console.log(error);
        message.reply(client.strings.commands_error);
    }
}