import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "มั่นใจ",
  en1: "Confidant",
  th2: "การกำหนดค่า",
  en2: "Config",
};

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Normal10"
      navigation={navigation}
      score={score}
    />
  );
}
