import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "ของหวาน",
  en1: "Dessert",
  th2: "ทะเลทราย",
  en2: "Desert",
};

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Normal3"
      navigation={navigation}
      score={score}
    />
  );
}
