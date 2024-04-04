// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('Hello') || message.includes('hello')) {
      actions.handleHello();
    }
    if (message.includes('Christo') || message.includes('Sanath')) {
      actions.handleAdmins();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;