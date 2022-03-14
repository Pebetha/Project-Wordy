import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "เกี่ยวกับอาหาร",
  en1: "Alimentary",
  th2: "พื้นฐาน",
  en2: "Elementary",
};

const { quiz, answers } = getQuiz(wordlist);

export default function HardScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Hard4"
      navigation={navigation}
      score={score}
    />
  );
}
