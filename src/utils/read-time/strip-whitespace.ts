function stripWhitespace(content: string) {
  return content.replace(/^\s+/, "").replace(/\s+$/, "");
}

export default stripWhitespace;
