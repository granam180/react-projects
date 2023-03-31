# Basic ChatGPT app

This is a basic ChatGPT app created using Vite.

## Requirements

* Node.js installed on your machine

## Requirements

1. Clone the repository to your local machine
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory and add the following variables:
* `OPENAI_API_KEY` - your OpenAI API key
* `PORT` - the port number you want the app to run on (default is 3000)
4. Run `npm run dev` to start the app in development mode

## Requirements

The app consists of a single page with a text input and a chat window. Enter your message in the text input and press enter to send it. The response from the ChatGPT model will be displayed in the chat window.

## Deployment

To deploy the app, `run npm run` build to create a production build of the app. The output files will be in the `dist` directory. You can then host these files on a static file server such as GitHub Pages or Netlify. Make sure to set the `OPENAI_API_KEY` environment variable in your hosting environment.