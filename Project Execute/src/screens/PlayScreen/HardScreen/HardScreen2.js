import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "ศัตรู",
  en1: "Adversary",
  th2: "ความทุกข์ยาก",
  en2: "Adversity",
};

const { quiz, answers } = getQuiz(wordlist);

export default function HardScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Hard3"
      navigation={navigation}
      score={score}
    />
  );
}
