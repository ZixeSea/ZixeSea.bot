exports.run = (client, message, args) => {
    if(!args || args.size < 1) return message.reply(client.strings.google_not_args);
    try {
        let text = args.join("+");
        message.channel.send("https://www.google.com/search?q=" + text);
    } catch (error) {
        console.log(error);
        message.reply(client.strings.google_error);
    }
}