import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from './LearningOptions.jsx';
import LinkList from "./LinkList.jsx";

const botName = 'Cryptonite Bot';

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}, Your personal advisor for anything Web3 related, what do you want to learn about today?`, {
      widget: 'learningOptions'
    })
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1677ff'
    },
    chatButton: {
      backgroundColor: '#1677ff'
    }
  },
  widgets: [
    {
      widgetName: 'learningOptions',
      widgetFunc: (props) => <LearningOptions {...props} />
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;