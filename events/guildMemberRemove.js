module.exports = async (client, member) => {
    let avatarUrl;
    try {
        avatarUrl = await client.functions.checkAvatar(client, member.user.avatarURL);
    } catch (error) {
        console.error(client.strings.member_get_avatar);
    }

    try {
        let embed = new client.discord.RichEmbed()
            .setAuthor(member.user.username + " has left the server.", avatarUrl)
            .setDescription("Until the next time (maybe :cry:).")
            .setColor("#28dfef")
            .setTimestamp();

        return member.guild.channels.get(client.config.welcomeChannel).send(embed);
    } catch (error) {
        return console.error(client.strings.member_leave_embed_error);
    }
};