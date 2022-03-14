import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "ลวงตา",
  en1: "Elusion",
  th2: "ภาพหลอกลวง",
  en2: "Illusion",
};

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Normal6"
      navigation={navigation}
      score={score}
    />
  );
}
