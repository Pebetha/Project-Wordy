export const getQuiz = (wordlist) => {
  // Shuffle the wordlist
  const _wordlist = [
    [wordlist.th1, wordlist.en1],
    [wordlist.th2, wordlist.en2],
  ].sort(() => 0.5 - Math.random());
  const quiz = {
    th: _wordlist[0][0],
    enTrue: _wordlist[0][1],
    enFalse: _wordlist[1][1],
  };
  // Shuffle the answers
  const answers = [quiz.enTrue, quiz.enFalse].sort(() => 0.5 - Math.random());

  return { quiz, answers };
};
