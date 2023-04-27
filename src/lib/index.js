const collator = new Intl.Collator('en', { sensitivity: 'base' });

export function letter_in_word(letter, word) {
  return [...word].some((char) => letter_matches_char(letter, char));
}

export function letter_matches_char(letter, char) {
  return collator.compare(letter, char) === 0;
}
