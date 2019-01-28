exports.run = async (client, message, args) => {
    let username = message.mentions.members.first();

    if (!message.member.hasPermission(client.config.banHasPermissions)) return message.reply(client.strings.kick_no_permissions);
    if (!username) return message.reply(client.strings.kick_no_mention);
    if (message.author.id === username.id) return message.reply(client.strings.kick_not_yourself);
    if (username.highestRole.position >= message.member.highestRole.position) return message.reply(client.strings.kick_someone_higher);
    if (!username.kickable) return message.reply(client.strings.kick_not_bannable);

    username.kick();
}