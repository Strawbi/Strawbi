const Discord = require('discord.js');
const bot = new Discord.Client();
const token = ("NDk4MDgwNTkzNjMyOTUyMzMx.DpolEQ.vvmJ24KsftjCXYP1YU5NYhOCREQ")


bot.on("message", function(message){
    if(message.content == "cmds")
    {
        message.reply("Hello.");

    }

});

bot.on("ready", function(){
    console.log("Ready to use!")
    bot.user.setActivity("Baking a cake", {type:"Playing"})
})









bot.login(token);