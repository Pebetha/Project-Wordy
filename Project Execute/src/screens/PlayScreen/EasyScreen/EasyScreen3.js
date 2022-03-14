import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "ส่วนเกิน",
  en1: "Excess",
  th2: "การเข้าถึง",
  en2: "Access",
};

const { quiz, answers } = getQuiz(wordlist);

export default function EasyScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Easy4"
      navigation={navigation}
      score={score}
    />
  );
}
