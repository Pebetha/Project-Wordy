import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "โหราศาสตร์",
  en1: "Astrology",
  th2: "ดาราศาสตร์",
  en2: "Astronomy",
};

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Normal7"
      navigation={navigation}
      score={score}
    />
  );
}
