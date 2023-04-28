<script>
  export let letters_guessed;

  const rows = [[...'qwertyuiop'], [...'asdfghjkl'], [...'zxcvbnm']];
</script>

<div class="wrapper">
  {#each rows as row, i}
    <div class="row">
      {#each row as letter}
        {@const disabled = letters_guessed.includes(letter)}
        <label class:disabled>
          <input type="radio" name="guess" value={letter} {disabled} required />
          {letter}
        </label>
      {/each}
    </div>
  {/each}
</div>

<style>
  div.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.row {
    display: flex;
    margin-bottom: 20px;
    gap: 10px;
  }

  label {
    display: flex;
    font-size: 22px;
    border-radius: 8px;
    width: 48px;
    height: 64px;
    outline: 1px solid black;
    cursor: pointer;
  }

  label.disabled {
    background: gray;
    color: white;
    cursor: default;
  }
</style>
