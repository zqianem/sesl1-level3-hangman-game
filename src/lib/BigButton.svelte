<script>
  export let form;
  export let color;
</script>

<button {form} class={color}>
  <div>
    <slot />
  </div>
</button>

<style>
  button {
    appearance: none;
    border: none;
    margin: 16px 0;
    flex: 0 1 300px;
    padding: 0;
    padding-bottom: 12px;
    border-radius: 8px;
    background: transparent;
  }

  button div {
    border-radius: 8px;
    background: #0a74d6;
    color: white;
    box-shadow: 0 12px #074c8d;
    font-size: 28px;
    padding: 0.25em 0;
  }

  button.green div {
    background: #178724;
    box-shadow: 0 12px #0c5517;
  }

  button:focus,
  button:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }

  button:active div {
    box-shadow: 0 4px #074c8d;
    transform: translateY(8px);
  }

  button.green:active div {
    box-shadow: 0 4px #0c5517;
  }
</style>
