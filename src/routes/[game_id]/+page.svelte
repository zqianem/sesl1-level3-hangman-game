<script>
  import BigButton from '$lib/BigButton.svelte';
  import Keyboard from '$lib/Keyboard.svelte';
  import StickFigure from '$lib/StickFigure.svelte';

  export let data;
  $: ({ board, lives_remaining, letters_guessed, win, revealed_word } = data);
</script>

<div class="text">
  {#if win === null}
    You have {lives_remaining} mistakes remaining
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
  }

  div.board pre {
    font-size: 3em;
    margin: 0;
    margin-top: 1.5em;
  }

  div.keyboard {
    height: 270px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
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
  }

  span {
    font-family: monospace;
    font-size: 1.5em;
    margin-top: 0.5em;
  }
</style>
