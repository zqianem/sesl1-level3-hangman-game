<script>
  import NewIcon from 'carbon-icons-svelte/lib/Add.svelte';
  import NewAltIcon from 'carbon-icons-svelte/lib/Star.svelte';
  import LeaderboardIcon from 'carbon-icons-svelte/lib/SkillLevelAdvanced.svelte';
  import UserIcon from 'carbon-icons-svelte/lib/UserAvatar.svelte';
  import LeftIcon from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
  import RightIcon from 'carbon-icons-svelte/lib/ChevronRight.svelte';
  import Spinner from '$lib/Spinner.svelte';
  import { navigating } from '$app/stores';

  export let data;

  let toggled = false;
  $: to = $navigating?.to.route.id;
  $: loading_new_game = to === '/' || to === '/[game_id]';
  $: loading_custom_game = to === '/custom';
  $: loading_leaderboard = to === '/leaderboard';
</script>

<div class="wrapper">
  <nav class:toggled>
    <button on:click={() => (toggled = !toggled)}>
      {#if toggled}
        <RightIcon size={32} />
        <LeftIcon size={32} />
      {:else}
        <LeftIcon size={32} />
        <RightIcon size={32} />
      {/if}
    </button>
    <header>
      <h1>Hangman</h1>
      <p>a word guessing game</p>
    </header>
    <ul>
      <li>
        <a href="/">
          <NewIcon size={32} />
          new game
          <Spinner loading={loading_new_game} />
        </a>
      </li>
      <li>
        <a href="/custom">
          <NewAltIcon size={32} />
          custom game
          <Spinner loading={loading_custom_game} />
        </a>
      </li>
      <li>
        <a href="/leaderboard">
          <LeaderboardIcon size={32} />
          leaderboard
          <Spinner loading={loading_leaderboard} />
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

  nav {
    border-right: 1px solid grey;
    box-sizing: border-box;
    min-width: 280px;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    z-index: 1;
  }

  nav button {
    border: none;
    background: white;
    outline: 1px solid grey;
    height: 48px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    transform: translate(280px, 30px);
    margin-left: -8px;
    cursor: pointer;
  }

  nav button > :global(:nth-child(2)) {
    display: none;
  }

  nav.toggled {
    margin-left: -280px;
  }

  @media (max-width: 900px) {
    nav {
      position: absolute;
      margin-left: -280px;
    }

    nav.toggled {
      margin-left: 0;
    }

    nav button > :global(:nth-child(1)) {
      display: none;
    }

    nav button > :global(:nth-child(2)) {
      display: block;
    }
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
    justify-content: center;
    align-items: center;
    flex: auto;
    min-width: 0;
  }
</style>
