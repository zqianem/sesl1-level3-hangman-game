<script>
  import { letter_in_word } from '$lib';

  export let letters_guessed;
  export let board;

  const rows = [[...'qwertyuiop'], [...'asdfghjkl'], [...'zxcvbnm']];
</script>

<div class="wrapper">
  {#each rows as row, i}
    <div class="row">
      {#if i > 0}
        <div class="dummy-half-key" />
      {/if}
      {#if i > 1}
        <div class="dummy-full-key" />
      {/if}
      {#each row as letter}
        {@const id = `key-${letter}`}
        <input
          {id}
          class:correct={letter_in_word(letter, board)}
          type="radio"
          name="guess"
          value={letter}
          disabled={letters_guessed.includes(letter)}
          required
        />
        <label for={id}>{letter}</label>
      {/each}
      {#if i > 0}
        <div class="dummy-half-key" />
      {/if}
      {#if i > 1}
        <div class="dummy-full-key" />
      {/if}
    </div>
  {/each}
</div>

<style>
  div.wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  div.row {
    display: flex;
    gap: 5px;
    width: 100%;
    justify-content: center;
  }

  div.dummy-half-key {
    flex: 0 1 24px;
  }

  div.dummy-full-key {
    flex: 0 1 48px;
  }

  label {
    display: flex;
    font-size: 22px;
    flex: 0 1 56px;
    height: 72px;
    outline: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }

  input:disabled + label {
    background: grey;
    cursor: default;
    text-decoration: line-through;
    color: white;
  }

  input.correct:disabled + label {
    background: black;
    text-decoration: none;
  }

  input:checked:not(:disabled) + label {
    background: #0a74d6;
    color: white;
  }

  input {
    appearance: none;
    height: 0;
    width: 0;
    left: 0;
    position: absolute;
    outline: none;
  }
</style>
