import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "NFT", handler: () => {}, id: 1 },
    { text: "Cryptocurrency", handler: () => {}, id: 2 },
    { text: "Decentralized Markets", handler: () => {}, id: 3 },
    { text: "Crypto Taxation", handler: () => {}, id: 4 },
    { text: "Others", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;