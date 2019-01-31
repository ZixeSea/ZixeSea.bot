exports.run = (client, message, args) => {
    if (message.author.id !== client.config.ownerID) {
        return message.reply(client.strings.not_permissions);
    }

    if (!args || args.size < 1) {
        return message.reply(client.strings.say_not_args);
    }

    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
};