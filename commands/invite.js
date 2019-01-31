exports.run = (client, message, args) => {
    try {
        message.author.send(client.strings.invite_message);
    } catch (error) {
        console.error(error);
        message.reply(client.strings.invite_error);
    }
}