<script>
  import BigButton from '$lib/BigButton.svelte';

  export let data;
  $: ({ board, lives_remaining, letters_guessed, win, revealed_word } = data);
</script>

<aside>Lives remaining: <span>{lives_remaining}</span></aside>

<pre>
{board.join(' ')}
</pre>

{#if win === null}
  <form method="POST" id="letters">
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
  </form>
{:else if win}
  You won!
{:else}
  You lost. The word was: <span>{revealed_word}</span>
{/if}

<div>
  {#if win === null}
    <BigButton form="letters">guess letter</BigButton>
  {:else}
    <form action="/" data-sveltekit-reload>
      <BigButton color="green">play again</BigButton>
    </form>
  {/if}
</div>

<style>
  aside {
    align-self: flex-end;
  }

  pre {
    font-size: 3em;
    margin-top: auto;
  }

  form#letters,
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid grey;
  }

  span {
    font-family: monospace;
    font-size: 1.5em;
  }
</style>
