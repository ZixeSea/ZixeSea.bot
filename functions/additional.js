module.exports = {
    checkAvatar: function (client, avatarUrl) {
        if (!avatarUrl) {
            return client.config.defaultAvatar;
        } else {
            return avatarUrl;
        }
    },

    createBanMessage: async function (client, message, user, reason) {
        try {
            let embed = new client.discord.RichEmbed()
                .setAuthor("Banned User Stats")
                .setColor("#FF0000")
                .addField("Username: ", user.user.username)
                .addField("UserID: ", user.id)
                .addField("Broken rule: ", reason)
                .addField("Banned by: ", message.author.username)
                .setTimestamp();

            message.guild.channels.get(client.config.logChannel).send(embed);
        } catch (error) {
            console.log(client.strings.createBanMessage_error);
        }

        try {
            let embed = new client.discord.RichEmbed()
                .setAuthor("YOU'RE BANNED FROM THE SERVER")
                .setColor("#FF0000")
                .addField("Your Username: ", user.user.username)
                .addField("Your UserID: ", user.id)
                .addField("Rule that you broke: ", reason)
                .addField("Server name: ", message.guild.name)
                .addField("Banned by: ", message.author.username)
                .setTimestamp();

            await client.users.get(user.id).send(embed);
            client.users.get(user.id).send(client.strings.unban_request_to_user);
        } catch (error) {
            console.log(client.strings.createBanMessage_error);
        }

        return user.user.username + client.strings.ban_user_message;
    }
}