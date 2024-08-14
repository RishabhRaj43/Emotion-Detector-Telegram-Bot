import telegram from "node-telegram-bot-api";

const command = (bot,msg) => {
  const chatId = msg.chat.id; // Get the chat ID from the message

  const options = {
    reply_markup: JSON.stringify({
      keyboard: [["/start", "/help"], ["/command","/checkEmotion"]],
      resize_keyboard: true,
      one_time_keyboard: true, // Keyboard disappears after selection
    }),
  };

  bot.sendMessage(chatId, "Select an option:", options);
};

export default command;