import { WORDS_PER_MIN, CHINESE_KOREAN_READ_TIME } from "./constants";

function wordsCount(content: string) {
  const pattern = "\\w+";
  const reg = new RegExp(pattern, "g");
  return (content.match(reg) || []).length;
}

// Chinese / Japanese / Korean
function otherLanguageReadTime(content: string) {
  const pattern =
    "[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]";
  const reg = new RegExp(pattern, "g");
  const count = (content.match(reg) || []).length;
  const time = count / CHINESE_KOREAN_READ_TIME;
  const formattedString = content.replace(reg, "");
  return {
    count,
    time,
    formattedString,
  };
}

function wordsReadTime(content: string, wordsPerMin = WORDS_PER_MIN) {
  const {
    count: characterCount,
    time: otherLanguageTime,
    formattedString,
  } = otherLanguageReadTime(content);
  const wordCount = wordsCount(formattedString);
  const wordTime = wordCount / wordsPerMin;
  return {
    characterCount,
    otherLanguageTime,
    wordTime,
    wordCount,
  };
}

export { wordsCount, otherLanguageReadTime };
export default wordsReadTime;
