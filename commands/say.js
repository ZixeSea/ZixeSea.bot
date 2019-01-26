exports.run = (client, message, args) => {
    if (message.author.id !== client.config.ownerID) return message.reply(client.strings.not_permissions);
    if(!args || args.size < 1) return message.reply(client.strings.say_not_args);
    try {
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    } catch (error) {
        console.log(error);
        message.reply(client.strings.say_error);
    }
}