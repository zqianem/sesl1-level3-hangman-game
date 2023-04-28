<script>
  import BigButton from '$lib/BigButton.svelte';
  import Keyboard from '$lib/Keyboard.svelte';

  export let data;
  $: ({ board, lives_remaining, letters_guessed, win, revealed_word } = data);
</script>

<aside>Lives remaining: <span>{lives_remaining}</span></aside>

{#if win !== null}
  {#if win}
    You won!
  {:else}
    You lost. The word was: <span>{revealed_word}</span>
  {/if}
{/if}

<div class="board">
  <pre>{board.join(' ')}</pre>
  <p>({board.length} letters)</p>
</div>

<div class="keyboard">
  <form method="POST" id="letters">
    <Keyboard {letters_guessed} {board} />
  </form>
</div>

<div>
  {#if win === null}
    <BigButton form="letters" color="blue">guess letter</BigButton>
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

  div.board {
    margin-top: auto;
    flex-direction: column;
    overflow-x: auto;
    border: none;
  }

  div.board pre {
    font-size: 3em;
    margin: 0;
    margin-top: 1.5em;
  }

  div.keyboard {
    height: 270px;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid grey;
  }

  span {
    font-family: monospace;
    font-size: 1.5em;
  }
</style>
