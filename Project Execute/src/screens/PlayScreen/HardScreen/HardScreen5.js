import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "ร่วมมือ",
  en1: "Collaborate",
  th2: "ยืนยัน",
  en2: "Corroborate",
};

const { quiz, answers } = getQuiz(wordlist);

export default function HardScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Hard6"
      navigation={navigation}
      score={score}
    />
  );
}
