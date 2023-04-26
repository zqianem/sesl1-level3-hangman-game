export function letter_in_word(letter, word) {
  return [...word].some((char) => letter_matches_char(letter, char));
}

export function letter_matches_char(letter, char) {
  return letter === char || letter === char.normalize('NFD')[0];
}

export function is_punctuation_or_whitespace(char) {
  return char.match(/\p{P}|\p{White_Space}/gu);
}
