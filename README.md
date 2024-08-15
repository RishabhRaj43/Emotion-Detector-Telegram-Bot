# Telegram Emotion Bot

This is a Telegram bot built using JavaScript that interacts with users and predicts emotions from the text they input. The bot can also cheer up the user by telling jokes if a negative emotion is detected.

## Features

- **Start and Help Commands**: Basic commands to start and get help on using the bot.
- **Emotion Prediction**: Users can input text to check for emotions.
- **Jokes**: If a negative emotion is detected, the bot offers to cheer up the user with a joke.
- **Custom Keyboard**: Provides a custom keyboard for easy command selection.

## Technologies Used

- **Node.js**: Backend logic and bot interaction.
- **Telegram Bot API**: To interface with Telegram.
- **Express and Flask**: Flask is used for the emotion prediction API, and Express is used as a basic server (if needed).
- **Axios**: To handle HTTP requests.
- **Python**: For the emotion prediction model using scikit-learn.

## Setup and Installation

1. **Clone the Repository**:
   
    ```
    git clone https://github.com/Zenith-Rish4bh/Emotion-Detector-Telegram-Bot.git
    cd telegram-emotion-bot
    ```

3. **Install Node.js Dependencies**:
   
    ``` bash
    npm install
    ```

5. **Set Up Environment Variables**:
    - Create a `.env` file in the root directory.
    - Add your Telegram bot token:
      
      ``` env
      TOKEN = your-telegram-bot-token
      ```

6. **Install Python Dependencies**:
   
    ```bash
    pip install flask flask-cors scikit-learn joblib
    ```

7. **Prepare the Emotion Model**:
   
    - Train an emotion detection model and save it as `emotion.pkl` in the root directory.

8. **Run the Python Server**:
   
    - Navigate to the directory containing your Python script and run:
      
    ```bash
    python app.py
    ```

10. **Run the Telegram Bot**:
    - Start the bot by running:
      
    ```bash
    npm start
    ```

## Usage

- **Commands**:
    - `/start`: Start the bot.
    - `/help`: Get a list of available commands.
    - `/checkemotion`: Enter text to analyze emotion.
    - `/joke`: Get a random joke.
    - `/command`: Display the custom keyboard.

- **Interaction Flow**:
    1. Start the bot with `/start`.
    2. Use `/checkemotion` to input text and receive an emotion analysis.
    3. If a negative emotion is detected, the bot offers to tell a joke to cheer you up.

## API Endpoints

- **POST /predict**:
    - Accepts: JSON containing the text to be analyzed.
    - Returns: JSON containing the predicted emotion.

## Example Interaction

1. **User**: `/start`
    - **Bot**: "Hello there! How can I help you?"

2. **User**: `/checkemotion`
    - **Bot**: "Enter the text you want to check."

3. **User**: `"I'm feeling down today."`
    - **Bot**: "The emotion is sadness. Do you want to cheer your mood by reading some jokes? Press /joke"
  
------------------------------------------------------------------

<h1 style="color:blue;">Happy Coding 🎉</h1>

