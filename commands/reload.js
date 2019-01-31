exports.run = (client, message, args) => {
  if (message.author.id !== client.config.ownerID) {
    return message.reply(client.strings.not_permissions);
  }

  if (!args || args.size < 1) {
    return message.reply(client.strings.reload_no_arg);
  }

  try {
    const commandName = args[0];
    if (!client.commands.has(commandName)) {
      return message.reply(client.strings.reload_not_exist);
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(client.strings.reload_command + commandName);
  } catch (error) {
    console.error(error);
    message.reply(client.strings.reload_error);
  }
};