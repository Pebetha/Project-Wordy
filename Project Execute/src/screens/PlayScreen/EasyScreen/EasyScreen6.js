import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = { th1: "อ้างอิง", en1: "Cite", th2: "สถานที่", en2: "Site" };

const { quiz, answers } = getQuiz(wordlist);

export default function EasyScreen({ navigation, route }) {
  const { score } = route.params;
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Easy7"
      navigation={navigation}
      score={score}
    />
  );
}
