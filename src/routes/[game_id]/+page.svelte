<script>
  import BigButton from '$lib/BigButton.svelte';
  import Keyboard from '$lib/Keyboard.svelte';

  export let data;
  $: ({ board, lives_remaining, letters_guessed, win, revealed_word } = data);
</script>

<aside>Lives remaining: <span>{lives_remaining}</span></aside>

<div class="hangmanImg">
  {#if lives_remaining == 6}
    <img src="/static/images/lives6.jpg" alt = "6 lives left"/>
  {:else if lives_remaining == 5}
    <img src="/static/images/lives5.jpg" alt = "5 lives left"/>
  {:else if lives_remaining == 4}
    <img src="/static/images/lives4.jpg" alt = "4 lives left"/>
  {:else if lives_remaining == 3}
    <img src="/static/images/lives3.jpg" alt = "3 lives left"/>
  {:else if lives_remaining == 2}
    <img src="/static/images/lives2.jpg" alt = "2 lives left"/>
  {:else if lives_remaining == 1}
    <img src="/static/images/lives1.jpg" alt = "1 lives left"/>
  {:else if lives_remaining == 0}
    <img src="/static/images/lives0.jpg" alt = "0 lives left"/>
  {/if}
  
</div>


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
  
  div.hangmanImg {
    margin: auto;
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
