function kenify(sentence) {
  const kenifiedSentence = [];
  sentence.split(" ").forEach((element) => {
    Math.random() < 0.5
      ? kenifiedSentence.push(element + " ken")
      : kenifiedSentence.push(element);
  });
  return kenifiedSentence.join(" ");
}

module.exports = kenify;
