import { Game } from "@/src/components";
import { getQuiz } from "@/src/utils";

// Set up question and answers here...
const wordlist = {
  th1: "เครื่องประดับ",
  en1: "Accessary",
  th2: "อุปกรณ์เสริม",
  en2: "Accessory",
};

const { quiz, answers } = getQuiz(wordlist);

export default function HardScreen({ navigation }) {
  return (
    <Game
      quiz={quiz}
      answers={answers}
      nextScreen="Hard2"
      navigation={navigation}
    />
  );
}
