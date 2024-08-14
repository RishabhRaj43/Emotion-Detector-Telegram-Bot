import axios from "axios";
import sendMessage from "./sendMsg.js";

const predict = async (bot, msg) => {
  const text = msg.text;
  console.log(typeof text);

  try {
    const res = await axios.post(
      "http://localhost:5000/predict",
      msg.text + "",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    await sendMessage(bot, msg.chat.id, `The emotion is ${res.data.emotion}`);
    if (res.data.emotion !== "joy" || res.data.emotion !== "happy") {
      await sendMessage(
        bot,
        msg.chat.id,
        `Do you want to cheer you mood by reading some jokes? \n Press /joke`
      );
    }
    sendMessage(bot, msg.chat.id, "Want to try more? Press /checkEmotion");
  } catch (error) {
    console.log(error);
  }
};

export default predict;
