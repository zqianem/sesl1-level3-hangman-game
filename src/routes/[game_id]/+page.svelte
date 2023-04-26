<script>
  export let data;
  $: ({ board, lives_remaining, letters_guessed, win, revealed_word } = data);
</script>

<p>Lives remaining: {lives_remaining}</p>
<p>Letters guessed: {letters_guessed.join(', ')}</p>
<pre>
{#each board as letter}{letter}{' '}{/each}
</pre>

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
    <button type="submit">Guess</button>
  </form>
{:else if win}
  You won!
{:else}
  You lost. The word was: <span>{revealed_word}</span>
{/if}

<style>
  pre {
    font-size: 3em;
  }

  span {
    font-family: monospace;
    font-size: 1.5em;
  }
</style>
