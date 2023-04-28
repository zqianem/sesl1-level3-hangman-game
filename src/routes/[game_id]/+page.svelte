<script>
  import BigButton from '$lib/BigButton.svelte';
  import Keyboard from '$lib/Keyboard.svelte';
  import StickFigure from '$lib/StickFigure.svelte';

  export let data;
  $: ({ board, lives_remaining, letters_guessed, win, revealed_word } = data);
  $: plural = lives_remaining !== 1;
</script>

<div class="text">
  {#if win === null}
    You have {lives_remaining} mistake{plural ? 's' : ''} remaining
  {:else if win}
    You won!
  {:else}
    You lost. The word was: <span>{revealed_word}</span>
  {/if}
</div>

<StickFigure {lives_remaining} />

<div class="board">
  <pre>{board.join(' ')}</pre>
  <p>({board.length} letters)</p>
</div>

<form method="POST" id="letters">
  <Keyboard {letters_guessed} {board} />
</form>

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
  div.text {
    flex-direction: column;
    height: 64px;
    padding-top: 24px;
  }

  div.board {
    margin-top: auto;
    flex-direction: column;
    overflow-x: auto;
    border: none;
    flex-shrink: 0;
  }

  div.board pre {
    font-size: 3em;
    margin: 0;
    margin-top: 0.5em;
  }

  form {
    display: contents;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-family: monospace;
    font-size: 1.5em;
    margin-top: 0.5em;
  }
</style>
