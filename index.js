import telegram from "node-telegram-bot-api";
import dotenv from "dotenv";
import axios from "axios";
import command from "./routes/commands.js";
import sendMessage from "./routes/sendMsg.js";
import predict from "./routes/predict.js";

dotenv.config();

const token = process.env.TOKEN;

const bot = new telegram(token, { polling: true });

let prediction = false;

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hello there! How can I help you?");
  command(bot, msg);
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "I can help you with the following commands:");
  command(bot, msg);
});

bot.onText(/\/checkEmotion/, (msg) => {
  prediction = true;
  sendMessage(bot, msg.chat.id, "Enter the text you want to check");
  // predict(bot, msg);
});


bot.onText(/\/command/, (msg) => {
  command(bot, msg);
});

bot.on("message", (msg) => {
  const chat_id = msg.chat.id;

  if (prediction) {
    predict(bot, msg);
  } else {
    if (
      msg.text !== "/start" &&
      msg.text !== "/command" &&
      msg.text !== "/help" &&
      msg.text !== "/checkEmotion"
    ) {
      prediction = false;
      sendMessage(bot, chat_id, "Sorry I can't reply to other messages");
    }
  }
});
