const prompt = require('prompt-sync')({ sigint: true });

const askForNumber = (question) => {
  const result = prompt(question);
  return Number(result);
};

module.exports = {
  askForNumber,
};
