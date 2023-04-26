<script>
  export let data;
  $: ({ board, lives_remaining, letters_guessed } = data);
</script>

<p>Lives remaining: {lives_remaining}</p>
<p>Letters guessed: {letters_guessed.join(', ')}</p>
<pre>
{#each board as letter}{letter}{' '}{/each}
</pre>

<form method="POST">
  <label
    >Pick a letter:
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

<style>
  pre {
    font-size: 3em;
  }
</style>
