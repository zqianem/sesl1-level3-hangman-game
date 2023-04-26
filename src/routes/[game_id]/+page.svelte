<script>
  export let data;
  $: ({ board, guesses_remaining, letters_guessed } = data);
</script>

<p>Guesses remaining: {guesses_remaining}</p>
<p>Letters guessed: {letters_guessed.join(', ')}</p>
<pre>
{#each board as letter}{letter}{' '}{/each}
</pre>

<style>
  pre {
    font-size: 3em;
  }
</style>
