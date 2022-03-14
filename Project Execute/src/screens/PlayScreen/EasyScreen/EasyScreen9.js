import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = { th1: "คู่", en1: "Dual", th2: "การดวล", en2: "Duel" };

const { quiz, answers } = getQuiz(wordlist);

export default function EasyScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Easy10"
      navigation={navigation}
      score={score}
    />
  );
}
