const commando = require("discord.js-commando");
const discord = require("discord.js");

class AnnounceCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "announce",
            group: "simple",
            memberName: "announce",
            description: "Announces important information."
        });

    }

    async run(message, args) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            if (args.length < 0) return message.channel.send("Can not announce anything.");

            const embed = new discord.RichEmbed()
                .setColor("#FF0000")
                .setFooter("Strawbi Bot | Made by Lewis1063")
                .setTitle("Anouncement")
                .setThumbnail("https://cdn1.imggmi.com/uploads/2018/10/13/2926e8ea3860f4f823338b519ac9aadd-full.png")
                .setDescription(args);


                   
                
             
   
            message.channel.send("@everyone")
            
            
            message.channel.send({ embed });
            
        }



    }

}

module.exports = AnnounceCommand;