const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "embed",
    description: "Shows and embed.",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        const embed = new Discord.MessageEmbed();

        embed.setTitle("This is a teste embed")
            .setAuthor(
                new EmbedAuthorData(message.author.username,"",message.author.avatarURL({ dynamic: true}))
            )
            .setDescription(
                "this is some plain text, \nhere is a like: [this is a test link](https://www.google.com)"
            )

        message.reply({ embeds: [embed] });

    }
});