
let TelegramBot = require('node-telegram-bot-api');

const token = '577520450:AAGWAK4o4Yb01c21FkjuJH2WSVoblWhbCd8';
let bot = new TelegramBot(token, { polling: true });

let answers = require(
    './phrases'
);
let random = Math.floor(Math.random() * answers.phrases.length);

//test phrase for admin
bot.on('message', function (msg) {
    let chatId = msg.chat.id;
    if (msg.from.username == 'nightnomad' && msg.text == 'мы стали просто прохожими') {
        bot.sendMessage(chatId, 'нас полностью скушал мир');
    }
}
);

//answers to Nikitos
bot.on('message', function (msg) {
    let chatId = msg.chat.id;
    if (msg.from.username == 'libodalibonet') {
        bot.sendMessage(chatId, answers.phrases[random]);
    }
}
);

/* ответы Анищу
нужно добавить чек-фразу и собственно сам ответ в места, отмеченные "??"
bot.on('message', function (msg) {
    let chatId = msg.chat.id;
    if (msg.from.username == 'Stan1e' && msg.text == ' ?? ') {
      bot.sendMessage(chatId, ?? )
    }
  }
);
*/
