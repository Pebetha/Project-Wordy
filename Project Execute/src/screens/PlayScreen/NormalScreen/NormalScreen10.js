import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "ตอนเช้า",
  en1: "Morning",
  th2: "โศกเศร้า",
  en2: "Mourning",
};

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Result"
      navigation={navigation}
      score={score}
    />
  );
}
