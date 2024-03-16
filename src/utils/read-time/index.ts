import imageReadTime from "./image-read-time";
import wordsReadTime from "./words-read-time";
import stripTags from "./strip-tags";
import stripWhitespace from "./strip-whitespace";
import humanizeTime from "./humanize-time";

export function calculateReadTime(
  content: string,
  customWordTime?: number,
  customImageTime?: number,
  imageTags?: string[]
) {
  const { time: imageTime, count: imageCount } = imageReadTime(
    customImageTime,
    imageTags,
    content
  );
  const strippedString = stripTags(stripWhitespace(content));
  const { characterCount, otherLanguageTime, wordTime, wordCount } =
    wordsReadTime(strippedString, customWordTime);
  return {
    humanizedDuration: humanizeTime(imageTime + wordTime),
    duration: imageTime + wordTime,
    totalWords: wordCount,
    wordTime,
    totalImages: imageCount,
    imageTime,
    otherLanguageTimeCharacters: characterCount,
    otherLanguageTime,
  };
}
