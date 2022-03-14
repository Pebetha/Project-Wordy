import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = { th1: "สบายดี", en1: "Fine", th2: "ค้นหา", en2: "Find" };

const { quiz, answers } = getQuiz(wordlist);

export default function EasyScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Result"
      navigation={navigation}
      score={score}
    />
  );
}
