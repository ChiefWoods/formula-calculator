<script lang="ts">
  export let id: string;
  export let className: string;
  export let content: string;
  export let key: Array<string>;

  function handleKeyDown(e: KeyboardEvent) {
    if (key.includes(e.key)) {
      className += " active";
    }
  }

  function handleKeyUp(e: KeyboardEvent) {
    if (key.includes(e.key)) {
      className = className.replace(" active", "");
    }
  }
</script>

<button {id} class={className}>{content}</button>
<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />

<style>
  :root {
    --key-white: #fffdfb;
    --key-white-hover: #f5f5f5;
    --key-white-active: #ebebeb;
    --key-orange: #db844d;
    --key-orange-hover: #d17a44;
    --key-orange-active: #c26e3c;
    --key-blue: #41558a;
    --key-blue-hover: #3a4d7f;
    --key-blue-active: #334575;
    --key-grey: #555859;
    --key-grey-hover: #4d4f52;
    --key-grey-active: #45474a;
  }

  button {
    cursor: pointer;
    font-family: "Courier Prime", monospace;
    font-size: 3rem;
    border-radius: 6px;
    color: var(--key-white);
  }

  #negative {
    background: var(--key-white);
    color: var(--key-blue);
  }

  #negative:hover {
    background: var(--key-white-hover);
  }

  #negative:active,
  #negative.active {
    background: var(--key-white-active);
  }

  .erase {
    background: var(--key-orange);
    color: var(--key-white);
  }

  .erase:hover {
    background: var(--key-orange-hover);
  }

  .erase:active,
  .erase.active {
    background: var(--key-orange-active);
  }

  .operator {
    background: var(--key-blue);
    color: var(--key-white);
  }

  .operator:hover {
    background: var(--key-blue-hover);
  }

  .operator:active,
  .operator.active {
    background: var(--key-blue-active);
  }

  .digit {
    background: var(--key-grey);
    color: var(--key-white);
  }

  .digit:hover {
    background: var(--key-grey-hover);
  }

  .digit:active,
  .digit.active {
    background: var(--key-grey-active);
  }

  #add {
    grid-area: 4 / 4 / 6 / 5;
  }

  @media (max-width: 450px) {
    button {
      font-size: 2.75rem;
    }
  }

  @media (max-width: 400px) {
    button {
      font-size: 2.5rem;
    }
  }
</style>
