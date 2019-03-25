var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var announcement = "553367584490389545"
var commandchan = "553368725810708502"
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '*') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // *220Stream
            case '220Stream':
				if (channelID == commandchan){
					bot.sendMessage({
						to: announcement,
						message: '@everyone 220111Gaming is Live! Watch here: https://twitch.tv/220111Gaming'
					});
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Hey! You cant do that here!'
					});
				}
            break;
            // *GenderStream
            case 'GenderStream':
				if (channelID == commandchan){
					bot.sendMessage({
						to: announcement,
						message: '@everyone GaZe Gender is Live! Watch here: https://twitch.tv/GaZe_Gender'
					});
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Hey! You cant do that here!'
					});
				}
            break;
			// *TruuMooStream
            case 'TruuMooStream':
                if (channelID == commandchan){
					bot.sendMessage({
						to: announcement,
						message: '@everyone TruuMoo is Live! Watch here: https://twitch.tv/TruuMoo_'
					});
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Hey! You cant do that here!'
					});
				}
            break;
			// *AnbuStream
            case 'AnbuStream':
				if (channelID == commandchan){
					bot.sendMessage({
						to: announcement,
						message: '@everyone Anbu Theliel is Live! Watch here: https://twitch.tv/anbutheliel'
					});
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Hey! You cant do that here!'
					});
				}
            break;
			//Here
         }
     }
});