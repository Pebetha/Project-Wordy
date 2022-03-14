import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "การนวด",
  en1: "Massage",
  th2: "ข้อความ",
  en2: "Message",
};

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Normal4"
      navigation={navigation}
      score={score}
    />
  );
}
