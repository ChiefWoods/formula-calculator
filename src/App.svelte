<script lang="ts">
  import Button from "./lib/KeypadBtn.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <section>
    <div id="top">
      <div id="head">
        <p id="brand">WOODS</p>
        <p id="model">SE-104</p>
        <div id="solar">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="screen">
        <p id="input"></p>
        <p id="display">0</p>
      </div>
    </div>
    <div id="keypad">
      <Button
        id="negative"
        className="negative"
        content="&#177;"
        key={["n", "N"]}
      />
      <Button
        id="clear"
        className="erase"
        content="C"
        key={["Escape", "c", "C"]}
      />
      <Button
        id="backspace"
        className="erase"
        content="&#8592;"
        key={["Backspace", "Delete"]}
      />
      <Button id="divide" className="operator" content="&#247;" key={["/"]} />
      <Button id="seven" className="digit" content="7" key={["7"]} />
      <Button id="eight" className="digit" content="8" key={["8"]} />
      <Button id="nine" className="digit" content="9" key={["9"]} />
      <Button id="multiply" className="operator" content="&#215;" key={["*"]} />
      <Button id="four" className="digit" content="4" key={["4"]} />
      <Button id="five" className="digit" content="5" key={["5"]} />
      <Button id="six" className="digit" content="6" key={["6"]} />
      <Button
        id="subtract"
        className="operator"
        content="&#8722;"
        key={["-"]}
      />
      <Button id="one" className="digit" content="1" key={["1"]} />
      <Button id="two" className="digit" content="2" key={["2"]} />
      <Button id="three" className="digit" content="3" key={["3"]} />
      <Button id="add" className="operator" content="&#43;" key={["+"]} />
      <Button id="zero" className="digit" content="0" key={["0"]} />
      <Button id="decimal" className="digit" content="." key={["."]} />
      <Button
        id="equals"
        className="operator"
        content="&#61;"
        key={["=", "Enter"]}
      />
    </div>
  </section>
</main>
<Footer />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap");

  @font-face {
    font-family: Eurostile;
    src: url("./assets/fonts/Eurostile/EurostileBold.ttf") format("truetype");
    font-weight: bold;
  }

  @font-face {
    font-family: DS-Digital;
    src: url("./assets/fonts/ds_digital/DS-DIGI.TTF") format("truetype");
  }

  :root {
    --top-gray: #c6c6ce;
    --solar-gray: #362f33;
    --screen-white: #d7e4e8;
    --keypad-white: #eaeaea;
    --font-gray: #44494e;
    --calculator-border-gray: #8d929c;
    --calculator-border-radius: 30px;
  }

  main {
    flex: 1;
    display: grid;
    place-items: center;
  }

  #top {
    display: flex;
    flex-direction: column;
    background: var(--top-gray);
    border: 4px solid var(--calculator-border-gray);
    border-radius: var(--calculator-border-radius)
      var(--calculator-border-radius) 0 0;
    border-bottom: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  #head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    padding-inline: 4px;
    color: var(--font-gray);
    width: 100%;
  }

  #brand {
    font-family: Eurostile, monospace;
    font-size: 2.5rem;
    letter-spacing: 1.2px;
  }

  #model {
    font-family: Eurostile, monospace;
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
    white-space: nowrap;
  }

  #solar {
    width: 120px;
    height: 35px;
    background-color: rgb(157, 157, 157);
    border: 4px solid var(--solar-gray);
    border-radius: 4px;
    display: flex;
    gap: 1px;
    margin-left: auto;

    & div {
      background-color: var(--solar-gray);
      width: 100%;
      height: 100%;
    }
  }

  #screen {
    background-color: var(--screen-white);
    height: 100px;
    min-width: 300px;
    width: 100%;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding: 8px 8px 0;
  }

  #input {
    font-family: DS-Digital;
    font-size: 2.7rem;
    white-space: nowrap;
  }

  #display {
    font-family: DS-Digital;
    font-size: 5.5rem;
    white-space: nowrap;
  }

  #keypad {
    background: var(--keypad-white);
    border: 4px solid var(--calculator-border-gray);
    border-radius: 0 0 var(--calculator-border-radius)
      var(--calculator-border-radius);
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 50px);
    gap: 12px;
  }

  @media (max-width: 450px) {
    #top {
      padding: 15px;
    }

    #solar {
      width: 90px;
    }

    #solar > div:nth-child(4) {
      display: none;
    }

    #screen {
      min-width: 0;
    }
  }

  @media (max-width: 400px) {
    #model {
      display: none;
    }

    #screen {
      height: 90px;
    }

    #input {
      font-size: 2.25rem;
    }

    #display {
      font-size: 4.5rem;
    }

    #keypad {
      padding: 15px;
      gap: 6px;
      grid-template-rows: repeat(5, 40px);
    }
  }
</style>
