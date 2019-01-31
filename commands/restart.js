exports.run = (client, message, args) => {
    if (message.author.id !== client.config.ownerID) return message.reply(client.strings.not_permissions);
    try {
        message.reply(client.strings.restart_bot);
        client.destroy();
    } catch (error) {
        console.error(error);
        message.reply(client.strings.restart_error);
    }
}