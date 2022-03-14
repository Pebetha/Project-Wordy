import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "บรรเทา",
  en1: "Alleviate",
  th2: "ยกระดับ",
  en2: "Elevate",
};

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Normal5"
      navigation={navigation}
      score={score}
    />
  );
}
