<script>
  import lives0 from '$lib/assets/lives0.jpg';
  import lives1 from '$lib/assets/lives1.jpg';
  import lives2 from '$lib/assets/lives2.jpg';
  import lives3 from '$lib/assets/lives3.jpg';
  import lives4 from '$lib/assets/lives4.jpg';
  import lives5 from '$lib/assets/lives5.jpg';
  import lives6 from '$lib/assets/lives6.jpg';

  export let lives_remaining;

  const paths = [lives0, lives1, lives2, lives3, lives4, lives5, lives6];
  $: src = paths[lives_remaining] ?? '';
</script>

<img alt="an in-progress drawing of a stick figure" {src} />

<style>
  img {
    flex: 1;
    min-height: 0;
    min-width: 0;
  }
</style>
