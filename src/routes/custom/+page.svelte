<script>
  import { page } from '$app/stores';

  export let form;
  $: ({ success, word, game_id } = form ?? {});

  let game_url_element;
  let clipboard_text = 'copy to clipboard';

  async function copy_game_url() {
    try {
      await navigator.clipboard.writeText(game_url_element.innerText);
    } catch {
      clipboard_text = 'could not copy to clipboard = (';
    }
    clipboard_text = 'copied!';
  }
</script>

<p>Want to challenge someone?</p>
<p>Create a game with your own word and send them the link!</p>

<form method="POST">
  <label>
    Enter a word:
    <input type="text" name="word" />
  </label>
  <button>Generate game</button>
</form>

<p>(These games do not count towards the leaderboard.)</p>

<div>
  {#if form}
    {#if form.success}
      <p>Success! Your game is at:</p>
      <p bind:this={game_url_element}>{new URL(game_id, $page.url.origin)}</p>
      <button on:click={copy_game_url}>{clipboard_text}</button>
    {:else}
      Sorry, {word} is not on the word list.
    {/if}
  {/if}
</div>

<style>
  div {
    height: 200px;
    margin-top: 5em;
    text-align: center;
  }
</style>
