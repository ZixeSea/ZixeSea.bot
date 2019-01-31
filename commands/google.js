exports.run = (client, message, args) => {
    if (!args || args.size < 1) {
        return message.reply(client.strings.google_not_args);
    }

    let text = args.join("+");
    message.channel.send("https://www.google.com/search?q=" + text);
};