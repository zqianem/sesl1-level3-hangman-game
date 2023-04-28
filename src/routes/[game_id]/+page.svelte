<script>
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
    <button form="letters">guess letter</button>
  {:else}
    <form action="/" data-sveltekit-reload>
      <button class="again">play again</button>
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

  button {
    appearance: none;
    border: none;
    background: #0a74d6;
    color: white;
    border-radius: 8px;
    box-shadow: 0 12px #074c8d;
    font-size: 28px;
    margin: 16px 0 28px;
    padding: 0.25em 2em;
    width: 300px;
  }

  button.again {
    background: #178724;
    box-shadow: 0 12px #0c5517;
  }

  button:focus,
  button:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }

  button:active {
    box-shadow: 0 4px #074c8d;
    transform: translateY(8px);
  }

  button.again:active {
    box-shadow: 0 4px #0c5517;
  }
</style>
