exports.run = (client, message, args) => {
    message.author.send(client.strings.invite_message);
};