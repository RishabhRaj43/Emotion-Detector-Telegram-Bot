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

bot.onText(/\/checkemotion/, (msg) => {
  prediction = true;
  sendMessage(bot, msg.chat.id, "Enter the text you want to check");
});

bot.onText(/\/command/, (msg) => {
  command(bot, msg);
});

bot.onText(/\/joke/, async (msg) => {
  const res = await axios.get("https://v2.jokeapi.dev/joke/Any");
  await sendMessage(bot, msg.chat.id, `The Category is ${res.data.category}`);
  if (res.data.type === "twopart") {
    sendMessage(
      bot,
      msg.chat.id,
      `The joke is \n ${res.data.setup} \n ${res.data.delivery}`
    );
  } else {
    sendMessage(bot, msg.chat.id, `The joke is \n ${res.data.joke}`);
  }
});

bot.on("message", (msg) => {
  const chat_id = msg.chat.id;

  if (prediction) {
    predict(bot, msg);
    prediction = false;
  } else {
    if (
      msg.text !== "/start" &&
      msg.text !== "/command" &&
      msg.text !== "/help" &&
      msg.text !== "/checkemotion" &&
      msg.text !== "/joke"
    ) {
      prediction = false;
      sendMessage(bot, chat_id, "Sorry I can't reply to other messages");
    }
  }
});
