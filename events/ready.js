module.exports = (client) => {
    console.log(client.strings.bot_ready);
    client.user.setActivity(client.strings.set_activity, {
        type: "WATCHING"
    });

    setInterval(() => {
        try {
            client.users.get("205454346123476992").send("Klik hier om te voten op mijn bot: https://discordbots.org/bot/458276816071950337/vote");
        } catch (error) {
            console.log("Dylan is een kech en heeft wat kapot gemaakt!!")
        }
    }, 43200000);
};