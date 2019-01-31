module.exports = async (client, member) => {
    let avatar_url;

    try {
        member.addRoles([client.config.memberRole, client.config.serverMembersRole]);
    } catch (error) {
        console.error(client.strings.member_add_role);
    }

    try {
        avatar_url = await client.functions.checkAvatar(client, member.user.avatarURL);
    } catch (error) {
        console.error(client.strings.member_get_avatar);
    }

    try {
        let embed = new client.discord.RichEmbed()
            .setAuthor(member.user.username + " is new on the server.", avatar_url)
            .setThumbnail(avatar_url)
            .setDescription(`Welcome ${member} to the ` + member.guild.name + " discord server, I hope you'll enjoy your stay.\n\n**Also make sure you read <#531428990536122369>**")
            .setColor("#28dfef")
            .setTimestamp();

        member.guild.channels.get(client.config.welcomeChannel).send(embed);
    } catch (error) {
        return console.error(client.strings.member_new_embed_error);
    }

    try {
        member.send(client.strings.dm_welcome_message + client.strings.dm_question_message + client.strings.dm_important_message + client.strings.dm_more_help_message);
    } catch (error) {
        return console.error(client.strings.member_new_message_error);
    }
}