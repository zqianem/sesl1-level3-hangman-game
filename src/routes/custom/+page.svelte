<script>
  export let form;
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
