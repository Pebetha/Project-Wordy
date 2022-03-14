import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "ดูดซับ",
  en1: "Absorb ",
  th2: "แน่นอน",
  en2: "Absolute",
};

const { quiz, answers } = getQuiz(wordlist);

export default function HardScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Hard9"
      navigation={navigation}
      score={score}
    />
  );
}
