const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('message', function(message){
    if (message.content == 'cmds')
    {
        message.reply('I currently do not have any commands.');
    } 
});






bot.login('NDkzMDcyNjI4Nzk4NzE3OTUz.DofpdA.uiuSuP-WIp1ssv3M2ZPpZbS1EFU');
