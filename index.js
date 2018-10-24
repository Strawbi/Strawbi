const Commando = require("discord.js-commando");
const bot = new Commando.Client();
const token = ("NTA0Njg0ODc1MDM1NzA1MzQ1.DrIoEA.AiQ2gmym0FxIVJQ6VSiQZTWy2I4");

bot.registry.registerGroup("simple", "simple");
bot.registry.registerGroup("music", "music");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.servers = {};

   
   


bot.on("message", function(message){
    if(message.content == "cmds")
    {
        message.channel.sendMessage("WIP");

    }

});

bot.on("ready",function(){
    console.log("I am running!");
})

bot.on("guildMemberAdd", function(member)
{
    member.sendMessage("Welcome to the server!");

});





bot.login(token);
