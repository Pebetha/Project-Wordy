import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "ยืนยัน",
  en1: "Confirm",
  th2: "สอดคล้อง",
  en2: "Conform",
};

const { quiz, answers } = getQuiz(wordlist);

export default function EasyScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Easy8"
      navigation={navigation}
      score={score}
    />
  );
}
