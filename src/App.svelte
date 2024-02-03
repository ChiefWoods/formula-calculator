<script lang="ts">
  import KeypadBtn from "./lib/KeypadBtn.svelte";
  import Footer from "./lib/Footer.svelte";

  let input: string = "";
  let display: string = "0";
  let shouldReset: boolean = false;
  let shouldClear: boolean = false;

  function appendNumber(number: string) {
    if (shouldClear) clearScreen();

    if (display.length > 9) {
      return alert("Maximum digit limit reached!");
    }

    if (display === "0" || shouldReset) {
      display = number;
      shouldReset = false;
    } else {
      display += number;
    }

    if (input === "" || input === "0") {
      input = number;
    } else {
      input += number;
    }
  }

  function appendOperator(operator: string) {
    operator = setMode(operator);

    if (shouldClear) {
      input = display;
      shouldClear = false;
    }

    trimZeroes();

    if (input === "") {
      input = `0 ${operator} `;
    } else if (/\s[+−×÷]\s$/g.test(input) && operator !== "−") {
      // replace operator
      input = input.replace(/[+−×÷]\s$/, `${operator} `);
      display = operator;
      shouldReset = true;
    } else if (/\s[+−×÷]\s-$/.test(input) && operator !== "−") {
      // replace operator and negative sign
      input = input.replace(/[+−×÷]\s-$/, `${operator} `);
      display = operator;
      shouldReset = true;
    } else if (/\s[+−×÷]\s$/g.test(input) && operator === "−") {
      // append negative sign
      input += "-";
      display = "-";
      shouldReset = false;
    } else if (/-?\d+(\.\d+)?$/.test(input)) {
      // append operator after number
      input += ` ${operator} `;
      display = operator;
      shouldReset = true;
    } else if (/\.$/.test(input)) {
      // append operator after decimal
      input = input.slice(0, -1) + ` ${operator} `;
      display = operator;
      shouldReset = true;
    }
  }

  function appendDecimal() {
    if (shouldClear) clearScreen();

    if (!display.includes(".")) {
      if (input === "") {
        // input is empty
        input = "0.";
        display += ".";
      } else if (/[+−×÷]/.test(display)) {
        // display has an operator
        input += "0.";
        display = "0.";
        shouldReset = false;
      } else if (/^\-$/.test(display)) {
        // display only has a negative sign
        input += "0.";
        display += "0.";
      } else {
        input += ".";
        display += ".";
      }
    }
  }

  function clearScreen() {
    input = "";
    display = "0";
    shouldClear = false;
  }

  function backspace() {
    if (input.length === 1 || shouldClear) clearScreen();

    if (/(-?\d+(\.\d*)?|-)$/.test(input)) {
      // input ends with operand
      input = input.slice(0, -1);
      const match = input.match(/[+−×÷]|(-?\d+(\.\d*)?|-)$/g);
      display = match ? match[match.length - 1] : "";
    } else if (/\s[+−×÷]\s$/.test(input)) {
      // input ends with operator
      input = input.slice(0, -3);
      const match = input.match(/-?\d+(\.\d*)?$/);
      display = match ? match[0] : "";
    }
  }

  function setMode(operator: string) {
    return operator === "*"
      ? "×"
      : operator === "/"
        ? "÷"
        : operator === "-"
          ? "−"
          : operator;
  }

  function evaluate() {
    shouldClear = true;

    trimZeroes();

    const expression = input
      .replace(/[^0-9+−×÷.-]/g, "")
      .replace(/−/g, "-")
      .replace(/×/g, "*")
      .replace(/÷/g, "/");

    let result = eval(expression);
    result = Math.round(result * 10000) / 10000;
    if (result.toString().length > 9) result = result.toExponential(4);

    input += ` = ${result}`;
    display = result;
  }

  function trimZeroes() {
    input = input
      .toString()
      .replace(/(?<=\.\d*)0+$/, "")
      .replace(/\.$/, "");
  }

  function appendNegative() {
    if (/\s[+−×÷]\s$/g.test(input)) {
      input += "-";
      display = "-";
      shouldReset = false;
    }
  }
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
        <p id="input">{input}</p>
        <p id="display">{display}</p>
      </div>
    </div>
    <div id="keypad">
      <KeypadBtn
        id="negative"
        className="negative"
        content="&#177;"
        key={["n", "N"]}
        on:active={appendNegative}
      />
      <KeypadBtn
        id="clear"
        className="erase"
        content="C"
        key={["Escape", "c", "C"]}
        on:active={clearScreen}
      />
      <KeypadBtn
        id="backspace"
        className="erase"
        content="&#8592;"
        key={["Backspace", "Delete"]}
        on:active={backspace}
      />
      <KeypadBtn
        id="divide"
        className="operator"
        content="&#247;"
        key={["/"]}
        on:active={(e) => appendOperator(e.detail.data)}
      />
      <KeypadBtn
        id="seven"
        className="digit"
        content="7"
        key={["7"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="eight"
        className="digit"
        content="8"
        key={["8"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="nine"
        className="digit"
        content="9"
        key={["9"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="multiply"
        className="operator"
        content="&#215;"
        key={["*"]}
        on:active={(e) => appendOperator(e.detail.data)}
      />
      <KeypadBtn
        id="four"
        className="digit"
        content="4"
        key={["4"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="five"
        className="digit"
        content="5"
        key={["5"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="six"
        className="digit"
        content="6"
        key={["6"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="subtract"
        className="operator"
        content="&#8722;"
        key={["-"]}
        on:active={(e) => appendOperator(e.detail.data)}
      />
      <KeypadBtn
        id="one"
        className="digit"
        content="1"
        key={["1"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="two"
        className="digit"
        content="2"
        key={["2"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="three"
        className="digit"
        content="3"
        key={["3"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="add"
        className="operator"
        content="&#43;"
        key={["+"]}
        on:active={(e) => appendOperator(e.detail.data)}
      />
      <KeypadBtn
        id="zero"
        className="digit"
        content="0"
        key={["0"]}
        on:active={(e) => appendNumber(e.detail.data)}
      />
      <KeypadBtn
        id="decimal"
        className="digit"
        content="."
        key={["."]}
        on:active={appendDecimal}
      />
      <KeypadBtn
        id="equals"
        className="operator"
        content="&#61;"
        key={["=", "Enter"]}
        on:active={evaluate}
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
