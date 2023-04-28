<script>
  export let loading;
</script>

<div class:loading />

<style>
  div {
    opacity: 0;
  }

  div.loading {
    outline: solid 1px grey;
    width: 24px;
    height: 24px;
    margin-left: auto;
    border-radius: 4px;
    animation: spin 1s linear infinite;
    opacity: 1;
  }

  @keyframes spin {
    100% {
      transform: rotate(1turn);
    }
  }
</style>
