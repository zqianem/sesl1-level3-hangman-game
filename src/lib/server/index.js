import { americanAll, englishAll } from 'wordlist-js';
import { letter_matches_char, is_punctuation_or_whitespace } from '$lib';

const words = [...englishAll, ...americanAll].map((w) => w.normalize('NFC'));

export function random_word() {
  return words[Math.floor(Math.random() * words.length)];
}

export function create_board(word, letters_guessed) {
  return [...word].map((char) =>
    letters_guessed.some((letter) => letter_matches_char(letter, char)) ||
    is_punctuation_or_whitespace(char)
      ? char
      : '_',
  );
}

export function game_won(word, letters_guessed, lives_remaining) {
  return (
    create_board(word, letters_guessed).join('') === word && lives_remaining > 0
  );
}

export function game_lost(lives_remaining) {
  return lives_remaining <= 0;
}

export { letter_in_word, letter_matches_char } from '$lib';
