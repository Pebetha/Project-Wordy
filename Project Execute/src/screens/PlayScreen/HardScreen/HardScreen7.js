import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "หน้าท้อง",
  en1: "Abdomen ",
  th2: "ละทิ้ง",
  en2: "Abandon",
};

const { quiz, answers } = getQuiz(wordlist);

export default function HardScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Hard8"
      navigation={navigation}
      score={score}
    />
  );
}
