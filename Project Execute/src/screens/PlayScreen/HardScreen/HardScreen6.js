import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "พอใจ",
  en1: "Complacentrue",
  th2: "เสร็จสิ้น",
  en2: "Complete",
};

const { quiz, answers } = getQuiz(wordlist);

export default function HardScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Hard7"
      navigation={navigation}
      score={score}
    />
  );
}
