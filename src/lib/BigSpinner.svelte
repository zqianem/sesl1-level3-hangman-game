<script>
  export let loading;
</script>

<div class:loading />

<style>
  div {
    opacity: 0;
  }

  div.loading {
    outline: solid 2px grey;
    width: 48px;
    height: 48px;
    border-radius: 4px;
    animation: spin 1s linear infinite;
    opacity: 1;
    position: absolute;
  }

  @keyframes spin {
    100% {
      transform: rotate(1turn);
    }
  }
</style>
