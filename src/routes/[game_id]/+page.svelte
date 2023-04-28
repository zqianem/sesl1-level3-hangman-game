<script>
  import { letter_in_word } from '$lib';

  export let data;
  $: ({ board, lives_remaining, letters_guessed, win, revealed_word } = data);
  $: letters_not_in_word = letters_guessed.filter((letter) => {
    return !letter_in_word(letter, board);
  });
</script>

<p>Lives remaining: {lives_remaining}</p>

<pre>
{#each board as letter}{letter}{' '}{/each}
</pre>

<p>Letters not in word: {letters_not_in_word.join(', ')}</p>

{#if win === null}
  <form method="POST">
    <label>
      Pick a letter:
      <select name="guess">
        {#each [...'abcdefghijklmnopqrstuvwxyz'] as letter}
          <option value={letter} disabled={letters_guessed.includes(letter)}>
            {letter}
          </option>
        {/each}
      </select>
    </label>
    <button>Guess</button>
  </form>
{:else}
  {#if win}
    You won!
  {:else}
    You lost. The word was: <span>{revealed_word}</span>
  {/if}
  <p><a href="/">Play again</a></p>
{/if}

<style>
  pre {
    font-size: 3em;
  }

  span {
    font-family: monospace;
    font-size: 1.5em;
  }

  button {
    margin-top: 1em;
  }
</style>
