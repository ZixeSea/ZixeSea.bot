exports.run = (client, message, args) => {
    try {
        message.author.send(client.strings.invite_message);
    } catch (error) {
        console.log(error);
        message.reply(client.strings.invite_error);
    }
}