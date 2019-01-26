exports.run = async (client, message, args) => {
    let reason = args[0];
    let username = message.mentions.members.first();

    if (!message.member.hasPermission(client.config.banHasPermissions)) return message.reply(client.strings.ban_no_permissions);
    if (!username) return message.reply(client.strings.ban_no_mention);
    if (message.author.id === username.id) return message.reply(client.strings.ban_not_yourself);
    if (username.highestRole.position >= message.member.highestRole.position) return message.reply(client.strings.ban_someone_higher);
    if (!username.bannable) return message.reply(client.strings.ban_not_bannable);
    if (reason != "1" && reason != "2" && reason != "3" && reason != "4" && reason != "5" && reason != "6" && reason != "7") return message.reply(client.strings.ban_wrong_reason_number);


    if (reason === "1" && message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply(await client.functions.createBanMessage(client, message, username, client.strings.ban_reason_1));
        //return username.ban(7);
    } else {
        message.reply(client.strings.ban_use_numbers);
    }

    switch (reason) {
        case 2:
            message.reply(await client.functions.createBanMessage(client, message, username, client.strings.ban_reason_2));
            return username.ban(7);
        case 3:
            message.reply(await client.functions.createBanMessage(client, message, username, client.strings.ban_reason_3));
            return username.ban(7);
        case 4:
            message.reply(await client.functions.createBanMessage(client, message, username, client.strings.ban_reason_4));
            return username.ban(7);
        case 5:
            message.reply(await client.functions.createBanMessage(client, message, username, client.strings.ban_reason_5));
            return username.ban(7);
        case 6:
            message.reply(await client.functions.createBanMessage(client, message, username, client.strings.ban_reason_6));
            return username.ban(7);
        case 7:
            message.reply(await client.functions.createBanMessage(client, message, username, client.strings.ban_reason_7));
            return username.ban(7);
        case 8:
            message.reply(await client.functions.createBanMessage(client, message, username, client.strings.ban_reason_8));
            return username.ban(7);
    }
}