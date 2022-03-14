import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = { th1: "เพิ่ม", en1: "Add", th2: "แปลก", en2: "Odd" };

const { quiz, answers } = getQuiz(wordlist);

export default function EasyScreen({ navigation }) {
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Easy2"
      navigation={navigation}
    />
  );
}
