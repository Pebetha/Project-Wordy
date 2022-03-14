import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "คำชม",
  en1: "Compliment",
  th2: "เติมเต็ม",
  en2: "Complement",
};

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Normal9"
      navigation={navigation}
      score={score}
    />
  );
}
