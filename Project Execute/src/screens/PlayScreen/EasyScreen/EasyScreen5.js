import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "เขย่า",
  en1: "Shake",
  th2: "ตรวจสอบ",
  en2: "Check",
};

const { quiz, answers } = getQuiz(wordlist);

export default function EasyScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Easy6"
      navigation={navigation}
      score={score}
    />
  );
}
