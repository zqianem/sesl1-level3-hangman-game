<script>
  export let form;
  export let color;
</script>

<button {form} class={color}>
  <slot />
</button>

<style>
  button {
    appearance: none;
    border: none;
    background: #0a74d6;
    color: white;
    border-radius: 8px;
    box-shadow: 0 12px #074c8d;
    font-size: 28px;
    margin: 16px 0 28px;
    padding: 0.25em 0;
    flex: 0 1 300px;
  }

  button.green {
    background: #178724;
    box-shadow: 0 12px #0c5517;
  }

  button:focus,
  button:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }

  button:active {
    box-shadow: 0 4px #074c8d;
    transform: translateY(8px);
  }

  button.green:active {
    box-shadow: 0 4px #0c5517;
  }
</style>
