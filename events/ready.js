module.exports = (client) => {
    console.log(client.strings.bot_ready);
    client.user.setActivity(client.strings.set_activity, {
        type: "WATCHING"
    });
};
