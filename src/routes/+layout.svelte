<script>
  import NewIcon from 'carbon-icons-svelte/lib/Add.svelte';
  import NewAltIcon from 'carbon-icons-svelte/lib/Star.svelte';
  import LeaderboardIcon from 'carbon-icons-svelte/lib/SkillLevelAdvanced.svelte';
  import UserIcon from 'carbon-icons-svelte/lib/UserAvatar.svelte';

  export let data;
</script>

<div class="wrapper">
  <nav>
    <header>
      <h1>Hangman</h1>
      <p>a word guessing game</p>
    </header>
    <ul>
      <li>
        <a href="/" data-sveltekit-reload>
          <NewIcon size={32} />
          new game
        </a>
      </li>
      <li>
        <a href="/custom" data-sveltekit-reload>
          <NewAltIcon size={32} />
          custom game
        </a>
      </li>
      <li>
        <a href="/leaderboard" data-sveltekit-reload>
          <LeaderboardIcon size={32} />
          leaderboard
        </a>
      </li>
    </ul>
    <footer>
      <UserIcon size={32} />
      {data.username}
    </footer>
  </nav>

  <main>
    <slot />
  </main>
</div>

<style>
  div.wrapper {
    height: 100dvh;
    display: flex;
  }

  div.wrapper > * {
    min-width: 0;
  }

  nav {
    border-right: 1px solid grey;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 0 8px;
  }

  nav > * {
    border-bottom: 1px solid grey;
  }

  nav > header {
    padding: 8px;
  }

  nav > header > h1 {
    font-size: 32px;
    margin: 0;
  }

  nav > ul {
    margin: 0;
    padding: 8px 0;
    gap: 8px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  nav > ul a {
    font-size: 20px;
    text-decoration: none;
    color: black;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
  }

  nav > ul a:hover,
  nav > ul a:focus {
    background: #e9eef7;
  }

  nav > footer {
    margin-top: auto;
    border: none;
    border-top: 1px solid grey;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    font-weight: bold;
  }

  main {
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: auto;
  }
</style>
