exports.run = (client, message, args) => {
    if (message.author.id !== client.config.ownerID) {
        return message.reply(client.strings.not_permissions);
    }

    message.reply(client.strings.restart_bot);
    client.destroy();
};