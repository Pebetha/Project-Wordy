import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "สำเนียง",
  en1: "Accent",
  th2: "เข้าถึง",
  en2: "Access",
};

const { quiz, answers } = getQuiz(wordlist);

export default function HardScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Hard10"
      navigation={navigation}
      score={score}
    />
  );
}
