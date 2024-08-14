const sendMessage = async (bot, chat_id, text) => {
  try {
    const res = await bot.sendMessage(chat_id, text);
  } catch (error) {
    console.log("Error sending message ", error);
  }
};

export default sendMessage;