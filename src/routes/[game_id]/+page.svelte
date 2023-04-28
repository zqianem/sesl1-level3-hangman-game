<script>
  import { enhance } from '$app/forms';
  import BigButton from '$lib/BigButton.svelte';
  import Keyboard from '$lib/Keyboard.svelte';
  import StickFigure from '$lib/StickFigure.svelte';
  import BigSpinner from '$lib/BigSpinner.svelte';
  import { navigating } from '$app/stores';

  export let data;
  $: ({ board, lives_remaining, letters_guessed, win, revealed_word } = data);
  $: lives_plural = lives_remaining !== 1;
  $: letters_plural = board.length !== 1;

  let loading;
  $: data, (loading = false);

  function handle_submit() {
    loading = true;
  }
</script>

<div class="text">
  {#if win === null}
    You have {lives_remaining} mistake{lives_plural ? 's' : ''} remaining
  {:else if win}
    You won!
  {:else}
    You lost. The word was: <span>{revealed_word}</span>
  {/if}
</div>

<BigSpinner loading={loading || $navigating} />
<StickFigure {lives_remaining} />

<div class="board">
  <pre>{board.join(' ')}</pre>
  <p>({board.length} letter{letters_plural ? 's' : ''})</p>
</div>

<form method="POST" id="letters" use:enhance on:submit={handle_submit}>
  <Keyboard {letters_guessed} {board} />
</form>

<div>
  {#if win === null}
    <BigButton form="letters">guess letter</BigButton>
  {:else}
    <form action="/">
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
