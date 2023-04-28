<script>
  export let data;
  $: ({ wins, percentages, totals } = data);
</script>

<table>
  <caption>Most games won</caption>
  <tr>
    <th>Username</th>
    <th>Wins</th>
  </tr>
  {#each wins as { username, wins }}
    <tr>
      <td>{username}</td>
      <td>{wins}</td>
    </tr>
  {/each}
</table>

<table>
  <caption>Best performance (5+ games)</caption>
  <tr>
    <th>Username</th>
    <th>Win percentage</th>
  </tr>
  {#each percentages as { username, win_percentage }}
    <tr>
      <td>{username}</td>
      <td>{win_percentage.toFixed(2)}%</td>
    </tr>
  {/each}
</table>

<table>
  <caption>Most games played</caption>
  <tr>
    <th>Username</th>
    <th>Total games</th>
  </tr>
  {#each totals as { username, total }}
    <tr>
      <td>{username}</td>
      <td>{total}</td>
    </tr>
  {/each}
</table>

<style>
  table {
    margin-top: 2em;
    border-collapse: collapse;
    width: 100%;
    max-width: 380px;
  }

  caption {
    margin-bottom: 0.5em;
    font-weight: bold;
    font-size: 20px;
  }

  table,
  th,
  td {
    border: 1px solid black;
  }

  th,
  td {
    padding: 0.5em;
  }

  td:nth-child(2) {
    width: 40%;
    text-align: right;
  }
</style>
