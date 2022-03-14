import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "ช่วยเหลือ",
  en1: "Ameliorate",
  th2: "เสื่อมสภาพ",
  en2: "Eeteriolate",
};

const { quiz, answers } = getQuiz(wordlist);

export default function HardScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Hard5"
      navigation={navigation}
      score={score}
    />
  );
}
