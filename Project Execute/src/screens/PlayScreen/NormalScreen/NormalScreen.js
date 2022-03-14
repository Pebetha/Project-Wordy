import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = { th1: "เพิ่ม", en1: "Addition", th2: "ฉบับ", en2: "Edition" };

const { quiz, answers } = getQuiz(wordlist);

export default function NormalScreen({ navigation }) {
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Normal2"
      navigation={navigation}
    />
  );
}
