import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "งานอาชีพ",
  en1: "Vocation ",
  th2: "วันหยุด",
  en2: "Vacation",
};

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Normal8"
      navigation={navigation}
      score={score}
    />
  );
}
