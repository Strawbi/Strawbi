const Commando = require('discord.js-commando');
const bot = new Commando.Client();
commandPrefix: "?" 
const token = ("NDk4MDgwNTkzNjMyOTUyMzMx.DqED2Q.DYT0rUCpFcagJ7zHKTWXfv4mQw0")
 


bot.registry.registerGroup("simple", "simple");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.on("message", function(message){
    if(message.content == "cmds")
    {
        message.reply("Hello.");

    }

});

bot.on("ready", function(){
    console.log("Ready to use!")
    bot.user.setActivity('Hey', { 
        //'type': 'STREAMING', 
        //'url': 'https://www.twitch.tv/oocakey' 
    });
});
                         
                          
                          
                        
                          
bot.login(token);